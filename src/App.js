import { useState } from 'react';
import FeedbackOptions from 'Components/FeedbackOptions';
import Statistics from 'Components/Statistics';
import Section from 'Components/Section';
import NotificationMessage from 'Components/NotificationMessage';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e.target.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const rez = Math.ceil((100 * good) / total);
    return rez;
  };

  const options = [{ name: 'good' }, { name: 'neutral' }, { name: 'bad' }];
  const isVoted = countTotalFeedback();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleClick} />

      {isVoted ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <NotificationMessage message="No feedback given" />
      )}
    </Section>
  );
}

export default App;
