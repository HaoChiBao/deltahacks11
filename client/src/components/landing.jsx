import Timeline from "./timeline";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Background from "./background";
import Gallery from "./gallery";

import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';


import "./landing.css";

export default function Landing({ onWrappedSuccess }) {
  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFe9bg0FumAwC9dIYqKge_RdL9SSzX3qE",
    authDomain: "deltahacks11.firebaseapp.com",
    projectId: "deltahacks11",
    storageBucket: "deltahacks11.firebasestorage.app",
    messagingSenderId: "630605834368",
    appId: "1:630605834368:web:333c59af5b66cfbfccde65"
  };

  const app = initializeApp(firebaseConfig);

  const [photos, setPhotos] = useState([])
  const [emotions, setEmotions] = useState([
    ["happy", 14],
    ["sad", 12],
    ["angry", 9],
    // ["fear", 12],
    // ["happy", 20],
    // ["sad", 23],
    // ["angry", 22],
    // ["fear", 6],
    // ["happy", 10],
  ])
  // let emotions = [
  //   ["happy", 14],
  //   ["sad", 12],
  //   ["angry", 9],
  //   ["fear", 12],
  //   ["happy", 20],
  //   ["sad", 23],
  //   ["angry", 22],
  //   ["fear", 6],
  //   ["happy", 10],
  // ];


  useEffect(()=>{
    const storage = getStorage(app);  // Get Firebase storage instance
    const storageRef = ref(storage, 'images/');  // Reference to storage root

    function countEmotions(data) {
      let emotionCounts = [ [data[0][0], 1] ];
    
      // Iterate over the data to count occurrences of each emotion
      for (let i = 1; i < data.length; i++) {
        let emotion = data[i][0];
    
        if (emotion == emotionCounts[emotionCounts.length - 1][0]) emotionCounts[emotionCounts.length - 1][1] += 1
        else emotionCounts.push([emotion, 1])
      }
    
      return emotionCounts;
    }

    const fetchImages = async () => {
      try {
        const result = await listAll(storageRef);  // List all items in the 'images/' folder
        let arr = [];
  
        // Iterate through all items and get their names and download URLs
        for (let item of result.items) {
          const url = await getDownloadURL(item);  // Get the image URL
          
          let fileName = item.name;  // Get the file name
          fileName = fileName.replace('.png', '');
          if(fileName.includes('face_')) fileName = fileName.split('face_')[1]
          if(fileName.includes('screen_')) fileName = fileName.split('screen_')[1]
          
          console.log(fileName)
          
          const [emotion, month, day, year, time] = fileName.split('_')

            // Create a timestamp from the date and time for comparison
           const timestamp = new Date(`${year}-${month}-${day}T${time.replace(/-/g, ':')}`);

          // Prepare the new element array with emotion, date, time, and timestamp
          const newElementArray = [emotion, month, day, year, time, url, timestamp];

          // Insert the new element into the array
          arr.push(newElementArray);

        }

        // Sort the array based on the timestamp (oldest to newest)
        arr.sort((a, b) => a[6] - b[6]); // Compare the timestamp (index 7) for sorting

        // group pairs
        const new_arr = []

        for(let i = 0; i < arr.length; i += 2){
          const elem = arr[i]
          elem[6] = arr[i + 1][5]
          new_arr.push(elem)
        }

        console.log(new_arr)
        setPhotos(new_arr)

        const res = countEmotions(new_arr);
        // console.log(res);
        setEmotions(res)
  
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };
  
    fetchImages();  
  },[])

  return (
    <div className="min-h-screen p-6 relative bg-gradient-to-br from-[#FFE4E1] via-[#E6F3EC] to-[#E0FFFF]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="gallery-container">
          <Gallery photos_array={photos}/>
        </div>
        <div className="landing">your feelings today,</div>
        <Timeline emotions={emotions} />
        <div className="second">
          <button className="additional-photos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M11 16.5H22M16.5 22V11M12.375 30.25H20.625C27.5 30.25 30.25 27.5 30.25 20.625V12.375C30.25 5.5 27.5 2.75 20.625 2.75H12.375C5.5 2.75 2.75 5.5 2.75 12.375V20.625C2.75 27.5 5.5 30.25 12.375 30.25Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="romp">add additional photos!</div>
          </button>
        </div>
      </div>
      <div className="bottom">
        <button className="unwrapped" onClick={onWrappedSuccess}>
          <div>day unwrapped</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
          >
            <path
              d="M14.43 5.18872L20.5 10.5L14.43 15.8112M3.5 10.5H20.33"
              stroke="#2C85CE"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <Background emotions={emotions} />
    </div>
  );
}
