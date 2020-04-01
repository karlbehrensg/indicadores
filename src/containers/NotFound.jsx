import React from 'react';
import useStyles from '../assets/styles/Content.jss';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>No encontrado</h1>
    </div>
  );
};

export default NotFound;
