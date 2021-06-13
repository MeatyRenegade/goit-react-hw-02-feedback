import PropTypes, { number } from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <span className={styles.text}>Good: {good}</span>
      <span className={styles.text}>Neutral: {neutral}</span>
      <span className={styles.text}>Bad: {bad}</span>
      <span className={styles.text}>Total: {total}</span>
      <span className={styles.text}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: number,
};

export default Statistics;
