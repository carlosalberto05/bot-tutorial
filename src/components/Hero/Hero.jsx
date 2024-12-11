import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ¡Bienvenido a TuMarca!<span>&#160;</span>
        </h1>
        <p className={styles.description}>
          Especialistas en la creación de chatbots y asistentes virtuales para
          potenciar tu negocio.
        </p>
        <a href="#" className={styles.contactBtn}>
          Contáctame
        </a>
      </div>
      <img
        src={getImageUrl("hero/main.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
