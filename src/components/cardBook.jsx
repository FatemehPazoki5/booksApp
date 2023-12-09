import React, { useState } from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import styles from "./cardBook.module.css";

function cardBook({data ,favorites}) {
    const {title, image , author,language,pages}= data
    const [like,setLike]=useState(false)
    const likeHandler=(event)=>{
        setLike(like=>!like )
        favorites(data,like)
        
    }
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>
            <button onClick={likeHandler}><BsFillHeartFill  color={like ? "red":"#e0e0e0"} fontSize="1.8rem"/></button>
        </div>
    );
}

export default cardBook;