import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerOptions}>
        <li className={styles.footerOption}><a href="">Home</a></li>
        <li className={styles.footerOption}><a href="">Features</a></li>
        <li className={styles.footerOption}><a href="#pricing">Pricing</a></li>
        <li className={styles.footerOption}><a href="">FAQs</a></li>
        <li className={styles.footerOption}><a href="">About</a></li>
      </ul>
    </footer>
  );
}
