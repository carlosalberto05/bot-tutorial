import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Servicios</h2>
      <div className={styles.content}>
        <div className={styles.services}>
          <p>
            Soy un experto en la creación de chatbots, especializado en ayudar a
            marcas y negocios a mejorar la interacción con sus clientes. Ofrezco
            servicios completos de desarrollo de chatbots, desde el análisis
            inicial hasta la implementación y el soporte continuo. Con
            experiencia en herramientas como ManyChat y VoiceFlow, garantizo
            soluciones efectivas y adaptadas a tus necesidades.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Quiero cotizar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
