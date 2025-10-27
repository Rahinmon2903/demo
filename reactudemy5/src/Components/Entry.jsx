import React from "react";
import emojipedia from "./Cards"

const Entry = () => {
  return (
    <dl className="dictionary">
      {emojipedia.map((ele) => (
        <div className="term" key={ele.id}>
          <dt>
            <span className="emoji" role="img" aria-label={ele.name}>
              {ele.emoji}
            </span>
            <span>{ele.name}</span>
          </dt>
          <dd>{ele.meaning}</dd>
        </div>
      ))}
    </dl>
  );
};

export default Entry;