import React from 'react';
import styles from './layout.module.css';

function layout({children}) {
    return (
        <div>
            <header className={styles.header}>
                <h2>book App</h2>
                <p>
                    <a href=" ">more project</a> |welecome
                </p>
            </header>  
            {children} 
            <footer>
                <p>developed by fatemeh pazoki</p>
            </footer> 
        </div>
    );
}

export default layout;