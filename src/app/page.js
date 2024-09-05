"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './page.module.css';

export default function App() {
  const router = useRouter();
  const link = 'http://15.206.151.243:3000/';

  // Client-side redirection
  if (typeof window !== "undefined") {
    router.replace(link);
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Redirecting to the File Sharing App...</h1>
    </div>
  );
}
