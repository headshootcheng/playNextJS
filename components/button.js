import styles from "./button.module.css";

const Button = () => {
  return (
    <button onClick={() => console.log("hi")} className={styles.buttonBg}>
      Hi
    </button>
  );
};

export default Button;
