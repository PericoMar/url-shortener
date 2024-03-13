import styles from './page.module.css';

export default function Home() {
  const inputRef = typeof window !== 'undefined' ? useRef() : null;
  const [shortURL, setShortURL] = typeof window !== 'undefined' ? useState("") : [null, null];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>URL Shortener</h1>
      <p className={styles.description}>
        Acorta tus URLs aquí
      </p>
      <div className={styles.grid}>
        <form className={styles.card}>
          <input ref={inputRef} className={styles.input} placeholder="URL"/>
          <button className={styles.button}>Shorten</button>
        </form>
      </div>
    </main>
  );
}

