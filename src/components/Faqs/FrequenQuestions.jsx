import { useState } from "react";
import styles from "./FrequenQuestions.module.css";
import questions from "../../data/questions.json";

const FrequenQuestions = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));

  const handleClick = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Preguntas Frequentes</h2>
      <div className={styles.content}>
        <div className={styles.questions}>
          {questions.map((question, i) => {
            return (
              <div className={styles.question} key={i}>
                <button onClick={() => handleClick(i)}>
                  <span>
                    <b>{question.question}</b>
                  </span>
                  {isOpen[i] ? <span>-</span> : <span>+</span>}
                </button>
                <div
                  className={`${styles.answer} ${isOpen[i] ? styles.open : ""}`}
                >
                  <p className={styles.textAnswer}>{question.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequenQuestions;
