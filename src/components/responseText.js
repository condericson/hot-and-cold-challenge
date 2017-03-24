import React from 'react';

export default function ResponseText(props) {
    return (
      <div className="responseTextDiv">
      <p>{props.responseText}</p>
      </div>
    );
};

ResponseText.defaultProps = {
  responseText: "Make a guess!"
}
