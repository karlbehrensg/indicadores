import React from 'react';
import useStyles from '../assets/styles/Content.jss';

const Cuerpo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Este es el Cuerpo</h1>
    </div>
  );
};

export default Cuerpo;
