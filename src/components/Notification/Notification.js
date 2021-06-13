import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.header}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
