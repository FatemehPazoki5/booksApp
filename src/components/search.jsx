import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import styles from './search.module.css'
function search({bookData,setBooks}) {

    const [textSearch,setTextSearch]=useState("");
    const clickHandler=()=>{
        if(textSearch){
            const filterBooks = bookData.filter((book)=>book.title.toLowerCase().includes(textSearch));
            setBooks(filterBooks);
        }

        else{
            setBooks(bookData)
        }
    }

    return (
        <div className={styles.search}>
            <input type="text" placeholder='search title' value={textSearch} onChange={(e)=>setTextSearch(e.target.value.toLowerCase())} />
            <button onClick={clickHandler}><FaSearch /></button>
        </div>
    );
}

export default search;