import React from 'react';

const Button = ({
  title,
  background,
  mudaBotao
}) => {
  return (
    <button style={{ backgroundColor: background }} onClick={
      () => mudaBotao()
    }>
      {title}
    </button>
  );
}


export default Button;