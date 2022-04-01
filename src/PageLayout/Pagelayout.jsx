import styles from '../PageLayout/Pagelayout.module.scss';
import { Header } from '../Header/Header';
import { HomePage } from '../Home/Home';
import { Footer } from '../Footer/Footer';

export function PageLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
