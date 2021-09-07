import React from 'react';

const NormalList = (props) => {
  return (
    <div>
      <ul>
        {props.technologies.map((val) => (
          <li key={`tech-${val}`}>
            <i className="bi bi-arrow-return-right"></i>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NormalList;
