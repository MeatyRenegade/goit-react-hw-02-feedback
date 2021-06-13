import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button type="button" className={styles.button} onClick={options.good}>
        Good
      </button>
      <button type="button" className={styles.button} onClick={options.neutral}>
        Neutral
      </button>
      <button type="button" className={styles.button} onClick={options.bad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.func,
    neutral: PropTypes.func,
    bad: PropTypes.func,
  }),
};

export default FeedbackOptions;
