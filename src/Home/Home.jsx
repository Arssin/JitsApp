import styles from '../Home/Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <div className={styles.welcomeText}>Witaj na JitsApp! </div>
        TEXT TESTOWY! Jest to aplikacja, która ma na celu ułatwić ludziom trenującym Brazylijskie Jiu-Jitsu i osiąganie
        wymarzonego progressu. Zapominasz technik? Nie odnotowałeś kolejnych zawodów? Czy może jesteś po prostu
        ciekawski? - tutaj znajdziesz wszystko czego potrzebujesz! TEXT TESTOWY!
      </div>
      <div className={styles.homeDivBtn}>
        <a href="#" className={styles.homeBtn} data-back="Ossssss!" data-front="Przejdź do aplikacji"></a>
      </div>
    </div>
  );
}
