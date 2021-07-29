import { Component } from 'react';
import FeedbackOptions from 'Components/FeedbackOptions';
import Statistics from 'Components/Statistics';
import Section from 'Components/Section';
import NotificationMessage from 'Components/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerClick = e => {
    const name = e.target.id;
    this.setState(oldState => {
      return { [name]: oldState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const rez = Math.ceil((100 * this.state.good) / total);
    return rez;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isVoted = this.countTotalFeedback();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.hendlerClick}
        />

        {isVoted ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
