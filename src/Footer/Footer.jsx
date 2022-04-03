import styles from '../Footer/Footer.module.scss';
import pic from '../images/JitsApp.png';
import ig from '../images/instagram.svg';
import fb from '../images/facebook.svg';

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={pic} alt="logo" className={styles.logo} />
      <h3 className={styles.footerText}>Made by Mateusz Binięda</h3>
      <a href="www.instagram.com" className={styles.logosAnchors}>
        <img src={ig} alt="instagram logo" />
      </a>
      <a href="www.facebook.com" className={styles.logosAnchors}>
        <img src={fb} alt="facebook logo" />
      </a>
    </div>
  );
}
