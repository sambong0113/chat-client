import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const UserProfile = ({ user }) => {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    },
    imagePane: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
      
    },
    infoPane: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 7,
      height: '100%',
      justifyContent: 'space-evenly'
    },
  }));
  const classes = useStyles();

  const { picture, name, email } = user;

  return (
    <div className={classes.root}>
      <div className={classes.imagePane}>
        <Avatar sx={{ height: '170px', width: '170px' }} alt="user profile picure" src={picture} />

      </div>
      <div className={classes.infoPane}>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
