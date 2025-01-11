import styles from "./Options.module.css";

const Options = ({
  options,
  onLeaveFeedback,
  onResetFeedback,
  totalFeedback,
}) => (
  <div className={styles.container}>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={styles.button}
      >
        {option}
      </button>
    ))}
    {totalFeedback > 0 && (
      <button onClick={onResetFeedback} className={styles.resetButton}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
