import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewsFeed.module.css";
export const NewsFeed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleAdd = () => {
    const payload = {
      value: value,
      id: uuidv4(),
    };
    let updatedTasks = [...tasks, payload];
    if (value !== "") {
      setTasks(updatedTasks);
      setValue("");
    } else {
      alert("enter task");
    }
  };
  const getItemsInLocalStorage = () => {
    const list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [tasks, setTasks] = useState(getItemsInLocalStorage);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (idx) => {
    const removeItem = tasks.filter((el) => {
      return el.id !== idx;
    });
    setTasks(removeItem);
    setIsOpen(false)
  };
  return (
    <div>
      <div className={styles.maindiv}>
        {/* <div className={styles.grid}> */}
        <div className={styles.feed}>News Feed</div>
        <div className={styles.txtareaandbtn}>
          <textarea
            className={styles.txt}
            placeholder="What's on your mind"
            onChange={handleChange}
            value={value}
          />
          <button className={styles.btn} onClick={handleAdd}>
            Share
          </button>
        </div>
      </div>
      {tasks.map((elem) => (
        <div key={elem.id}>
          <div className={styles.flexdiv}>
            <div>
              <img
                src="https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fd34yn14tavczy0.cloudfront.net%2Fimages%2Fno_photo_thumbnail.png&w=64&q=75"
                alt=""
              />
            </div>
            <div>
              <div className={styles.nameAndModal}>
                <div><a href="#">debnathrenaissance</a>{" "}</div>
               <div> <button onClick={openModal}>x</button></div>
                {isOpen && (
                  <div>
                    <h1>Are you sure?</h1>
                    <button onClick={() => handleDelete(elem.id)}>yes</button>
                    <button onClick={closeModal}>No</button>
                  </div>
                )}
              </div>
              <div>{elem.value}</div>
              <div>
                <div>like</div>
                <div>comment</div>
              </div>

              <div className={styles.imgandinputbox}>
                <img
                  className={styles.commentImg}
                  src="https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fd34yn14tavczy0.cloudfront.net%2Fimages%2Fno_photo_thumbnail.png&w=64&q=75"
                  alt=""
                />
                <input type="text" />
              </div>
            </div>
            {/* <button onClick={() => handleDelete(elem.id)}>x</button> */}
          </div>
        </div>
      ))}
      <div style={{ border: "2px solid black" }}></div>
    </div>
  );
};
