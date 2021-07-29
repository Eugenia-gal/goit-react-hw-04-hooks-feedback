import { useState } from 'react';
import FeedbackOptions from 'Components/FeedbackOptions';
import Statistics from 'Components/Statistics';
import Section from 'Components/Section';
import NotificationMessage from 'Components/NotificationMessage';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendlerGoodClick = () => {
    setGood(good + 1);
  };

  const hendlerNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const hendlerBadClick = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const rez = Math.ceil((100 * good) / total);
    return rez;
  };

  const options = [
    { name: 'good', onLeaveFeedback: hendlerGoodClick },
    { name: 'neutral', onLeaveFeedback: hendlerNeutralClick },
    { name: 'bad', onLeaveFeedback: hendlerBadClick },
  ];
  const isVoted = countTotalFeedback();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} />

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

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   hendlerClick = e => {
//     const name = e.target.id;
//     this.setState(oldState => {
//       return { [name]: oldState[name] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const rez = Math.ceil((100 * this.state.good) / total);
//     return rez;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const isVoted = this.countTotalFeedback();

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.hendlerClick}
//         />

//         {isVoted ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         ) : (
//           <NotificationMessage message="No feedback given" />
//         )}
//       </Section>
//     );
//   }
// }
