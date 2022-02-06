import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '600px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}>Home Page</div>;
};

export default Home;
