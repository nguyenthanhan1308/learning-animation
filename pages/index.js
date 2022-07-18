import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
export default function Home() {
  const [nowPlaying, setNowPlaying] = useState("https://www.soundjay.com/nature/rain-03.mp3");
  return (
      <div className={styles.container}>
          <Head>
              <title>Learning Animations</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
              <div className={styles.marqueeContainer}>
                <h1>Now Playing</h1>
                <p className={styles.marquee}>{"Raining Sound"}</p>
              </div>
              <video autoPlay loop className={styles.video}>
                  <source src="https://thumbs.gfycat.com/BriefLimpingAfricanhornbill-mobile.mp4" type="video/mp4" />
              </video>
              <audio autoPlay loop>
                  <source src={nowPlaying} type="audio/mpeg" />
              </audio>
              <div className={styles.oceanbg}></div>
          </main>

          <footer className={styles.footer}>
              <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              ></a>
          </footer>
      </div>
  );
}
