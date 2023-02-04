import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(
    option => (
      <button
        className={css.button}
        key={option}
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    )
    // FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
