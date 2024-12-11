import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>¿Quién soy?</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/tu-imagen.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutDescription}>
          <p>
            Soy un profesional apasionado por la tecnología y la automatización.
            Con una sólida formación como Ingeniero y una amplia experiencia en
            el desarrollo de software, me especializo en la creación de chatbots
            y asistentes virtuales para diversas industrias. Mi trayectoria
            incluye cursos y certificaciones en desarrollo de software,
            inteligencia artificial y diseño de interacciones conversacionales,
            lo que me permite ofrecer soluciones innovadoras y eficientes a mis
            clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
