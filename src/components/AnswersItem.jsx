/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  handleEdit, answerItem: {bestFeature, worstBit, consistency, colour, logo, timeSpent, review, username}
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>What would you say is the best features of your rubber duck?</em>
            <span 
              className="answer__line">
                {bestFeature.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              
          </span>
        </p>

        <p>
          <em>What would you say is the worst nags of your rubber duck?</em>
            <span 
              className="answer__line">
                {worstBit.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              
          </span>
        </p>


        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>


        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>

        <button onClick={() => handleEdit(username)}>Edit</button>
      </article>
    </li>
  );
}
