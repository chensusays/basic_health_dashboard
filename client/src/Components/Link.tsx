import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Link({ to, children, ...rest }) {
  const handleClick = () => {
    console.log(`Clicked route: ${to}`);
  };

  return (
    <RouterLink to={to} onClick={handleClick} {...rest}>
      {children}
    </RouterLink>
  );
}

export default Link;
