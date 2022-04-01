import styles from '../Home/Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        Witaj na stronie! lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur
        adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur
      </div>
      <div className={styles.homeDivBtn}>
        <a href="#" className={styles.homeBtn} data-back="Ossssss!" data-front="Przejdź do aplikacji"></a>
      </div>
    </div>
  );
}
