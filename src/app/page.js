"use client"
import React, { useState } from 'react';
import styles from './page.module.css'; 

const App = () => {
  const link = 'http://65.0.72.48:3000/';


  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to My File Sharing App!</h1>
    
      <button onClick={handleClick}  className={styles.shareButton}>Use the App!</button>
    </div>
  );
};

export default App;
