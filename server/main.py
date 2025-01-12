import cv2
from deepface import DeepFace


face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

video = cv2.VideoCapture(0)

last_seen = []

count = {
    # sad: 0,
    # happy: 0,
    # fear: 0,
    # surprise: 0,
    # angry: 0,
    'neutral': 0,
}

most_frequent = 'neutral'

MAX_FRAMES = 4

while video.isOpened():
    _, frame = video.read()
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    face=face_cascade.detectMultiScale(gray,scaleFactor=1.1,minNeighbors=5)
    
    for x,y,w,h in face:
        img = cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),1)
        try:
            analyze = DeepFace.analyze(img, actions=['emotion'])
            # print(analyze)
            emotion = analyze[0]['dominant_emotion']
            
            last_seen.append(emotion)
            if len(last_seen) > MAX_FRAMES:
                last_seen.pop(0)
            
            
            if not emotion in count:
                count[emotion] = 1
            else:    
                if MAX_FRAMES > count[emotion]:
                    count[emotion] += 1
                
                
            # check largest count of
            
            for key in count:
                if not key in last_seen:
                    count[key] = 0 
                if count[most_frequent] < count[key]:
                    most_frequent = key
                
            
            # print(last_seen)
            # print(emotion)
            print(most_frequent, emotion)
            
        except Exception as e:
            print('no face')
        
    cv2.imshow('video', frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break
    
video.release()