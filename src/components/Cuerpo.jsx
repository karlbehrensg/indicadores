import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '100px',
    alignContent: 'center',
    justifyContent: 'center',
  },
}));

const Cuerpo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Este es el Cuerpo</h1>
    </div>
  );
};

export default Cuerpo;
