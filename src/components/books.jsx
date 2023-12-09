import React, { useState } from 'react';
import { books as bookData } from '../constants/mockData';
import CardBook from './cardBook';
import SideCard from './sideCard';
import styles from './books.module.css';
import Search from './search';
function Books(props) {
    const [liked,setLiked]=useState([]);
    const [books,setBooks]=useState(bookData)

    const favorites=(favorite,status)=>{
        if(!status){
            setLiked((liked)=>[...liked,favorite])    
        }
        else{
            const newLiked=liked.filter((item)=>item.id !== favorite.id) ;
            setLiked(newLiked)   
        }
    }


    return (
        <>
        <Search  setBooks={setBooks} bookData={bookData}/>
        <div className={styles.container}>
        <div className={styles.cards}>
        {books.map(data=>(
        <CardBook key={data.id} data={data} favorites={favorites}/>
        
        ))}
        
        </div >
        <div className={styles.favorite}>
            <h4>favorites</h4>
            {!!liked.length && <div>{liked.map(i=> <SideCard key={i.id} i={i}/>)}</div>}
        </div>
        </div>
        </>
    ); 
}

export default Books;