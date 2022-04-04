import styles from '../Footer/Footer.module.scss';
import pic from '../images/JitsApp.png';
import ig from '../images/instagram.svg';
import fb from '../images/facebook.svg';
import github from '../images/github.svg';

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={pic} alt="logo" className={styles.logo} />
      <h3 className={styles.footerText}>Made by Mateusz Binięda</h3>
      <a href="https://www.instagram.com/songo_bjj/" className={styles.logosAnchors}>
        <img src={ig} alt="instagram logo" />
      </a>
      <a href="https://www.facebook.com/mateusz.binieda.14/" className={styles.logosAnchors}>
        <img src={fb} alt="facebook logo" />
      </a>
      <a href="https://github.com/Arssin" className={styles.logosAnchors}>
        <img src={github} alt="github logo" />
      </a>
    </div>
  );
}
