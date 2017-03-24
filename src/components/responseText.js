import React from 'react';


ResponseText.defaultProps = {
    responseText: "Make your guess!"
};

export default function ResponseText(props) {
    return (
      <div className="responseTextDiv">
      <p>{props.responseText}</p>
      </div>
    );
};
