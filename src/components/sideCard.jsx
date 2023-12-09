import React from 'react';
import styles from'./sideCard.module.css'
function sideCard({i:{image,title}}) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default sideCard;