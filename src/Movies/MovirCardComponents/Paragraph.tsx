import React from 'react';

interface IParagraph {
  title: string,
  content: string,
}

const Paragraph = (props: IParagraph) => {
  return (
    <p>
      <span className="font-weight-bold">{props.title} </span>
      {props.content}
    </p>
  );
}

export default Paragraph;