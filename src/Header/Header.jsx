import styles from '../Header/Header.module.scss';

export function Header() {
  return (
    <div className={styles.welcomeBar}>
      <h1 className={styles.fontDiv}>JitsApp - your rolling space</h1>
    </div>
  );
}
