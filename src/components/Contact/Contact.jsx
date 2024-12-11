import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contáctame</h2>
        <p>¡Pulsa el botón para agendar una cita!</p>
        <a
          className={styles.contact}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero cotizar
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="#">tuemail@algo.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="#">https://www.linkedin.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
