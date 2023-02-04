import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = ({ target }) => {
    const { feedback } = target.dataset;
    setState(prevState => {
      return { ...prevState, [feedback]: prevState[feedback] + 1 };
    });
  };

  const total = state.good + state.neutral + state.bad;

  const positiveFeedback = () => {
    const { good } = state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  const positivePersent = positiveFeedback();
  const { good, neutral, bad } = state;

  return (
    <div>
      <Section title="Please leave fedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positivePersent}
          />
        </Section>
      )}
    </div>
  );
};
