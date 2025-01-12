import os
from datetime import datetime

import firebase_admin
from firebase_admin import credentials, storage

import cv2
from deepface import DeepFace
import pyautogui
from PIL import Image, ImageFile

# Initialize Firebase Admin SDK
cred = credentials.Certificate("deltahacks11-firebase-adminsdk-55w74-5accfe4e4c.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': "deltahacks11.firebasestorage.app"  # Ensure this matches your Firebase storage bucket
})

def upload_to_firebase(local_path, filename):
    bucket = storage.bucket()
    blob = bucket.blob(filename)
    blob.upload_from_filename(local_path)
    print(f"Uploaded {local_path} to Firebase Storage as {filename}")

def get_datetime():
    now = datetime.now()
    formatted_string = now.strftime("%m_%d_%Y_%H-%M-%S")
    return formatted_string

def rename_file(old_name, new_name):
    # Path to the file you want to rename
    # old_name = "path/to/your/old_file_name.png"
    # new_name = "path/to/your/new_file_name.png"

    # Rename the file
    if os.path.exists(old_name):
        os.rename(old_name, new_name)
        # print(f"File renamed to {new_name}")
    else:
        print(f"{old_name} does not exist.")

def delete_file(image_path):
    # Path to the image file
    # image_path = "images/photo.png"

    # Delete the image file
    if os.path.exists(image_path):
        os.remove(image_path)
        # print(f"{image_path} has been deleted.")
    else:
        print(f"{image_path} does not exist.")

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

video = cv2.VideoCapture(0)

last_seen = []

count = {
    'neutral': 0,
}

most_frequent = 'neutral'

MAX_FRAMES = 8

folder_path = "images"
face_folder = 'face'
gifs_folder_path = "gifs"  # Path to the folder where the GIF will be saved


while video.isOpened():
    _, frame = video.read()
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
    
    for x, y, w, h in faces:
        # img = cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 1)
        try:
            # analyze = DeepFace.analyze(img, actions=['emotion'])
            analyze = DeepFace.analyze(frame, actions=['emotion'])
            emotion = analyze[0]['dominant_emotion']
            
            last_seen.append(emotion)
            if len(last_seen) > MAX_FRAMES:
                last_seen.pop(0)
            
            if emotion not in count:
                count[emotion] = 1
            else:
                if MAX_FRAMES > count[emotion]:
                    count[emotion] += 1
            
 
            # Check largest count of emotions
            for key in count:
                if key not in last_seen:
                    count[key] = 0

                
                if count[most_frequent] < count[key] and count[key] > MAX_FRAMES / 2:
                    most_frequent = key
                    
                    following = True                    
                    
                    # Check for emotions that aren't 'neutral' or 'no face'
                    if most_frequent != 'neutral' and most_frequent != 'no face':
                        print(f"Saving emotion: {most_frequent} ______________________")
                        
                        screen_image = 'images/screen.png'
                        pyautogui.screenshot(screen_image)

                        cv2_image_path = "images/face.png"
                        cv2.imwrite(cv2_image_path, frame)
                        
                        date = get_datetime()
                        screen_name = f"images/screen_{most_frequent}_{date}.png"
                        face_name = f"images/face_{most_frequent}_{date}.png"

                        
                        upload_to_firebase(screen_image, screen_name)
                        upload_to_firebase(cv2_image_path, face_name)
                        

            print(most_frequent, emotion)
        except Exception as e:
            print('No face detected or error in analyzing emotion', e)
        
    cv2.imshow('video', frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break
    
video.release()
