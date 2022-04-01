import styles from '../Home/Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>Witaj na stronie głównej Przybyszu!</div>
      <div>
        <button className={styles.homeBtn}>ClickMe</button>
      </div>
    </div>
  );
}
