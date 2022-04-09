import React,{useState,useEffect} from "react";
import styles from "./UploadPhotos.module.css";
// import { v4 as uuidv4 } from "uuid";
export const UploadPhoto = () => {
  const [url, setUrl] =useState('');
  const uploader = (file) =>{
  const reader = new FileReader();
  reader.addEventListener('load', ()=>{
      localStorage.setItem('recent-image',reader.result)
  })
  reader.readAsDataURL(file);
}
const handleChange = (e) =>{
  uploader(e.target.files[0])
}

useEffect(() => {
  setUrl(localStorage.getItem('recent-image'));
}, [])
  return (
    <div>
      <div className={styles.maindiv01}>
        <div className={styles.yourphotos}>Your Photos</div>
        <div className={styles.box}>
          <div className={styles.notuploaded}>
            <h4>You have not uploaded any photo</h4>
          </div>

          <div className={styles.uploadDiv}>
            <h5>Add A New Photo</h5>
            <p>
              To add a photo to your profile, first choose a photo from your
              computer, then click "Upload Photo"
            </p>
            <form >
              <input
                type="file"
                name="choose file"
                id=""
              /> <input type="submit" accept ="image/*" onChange ={handleChange} />
              {/* <button className={styles.uplbtn}>UPLOAD</button> */}
              </form>
  
          </div>
        </div>
      </div>
    </div>
  );
};
