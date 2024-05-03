
export default function Options({ updateFeedback, resetFeedback }) {
  const handleClick = feedbackType => {
    updateFeedback(feedbackType);
  };
 
  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
}