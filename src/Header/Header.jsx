import styles from '../Header/Header.module.scss';
import pic from '../images/JitsApp.png';

export function Header() {
  return (
    <div className={styles.welcomeBar}>
      <img className={styles.logo} alt="logo" src={pic} />
      <h1 className={styles.fontDiv}> - Your rolling space</h1>
    </div>
  );
}
