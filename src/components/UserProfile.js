import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    imagePicture: {
      width: '70px',
      height: '70px',
      borderRadius: '50%'
    },
  }));
  const classes = useStyles();

  const { picture, name, email } = user;

  return (
    <div className={classes.root}>
      <div className={classes.imagePane}>
        <img className={classes.imagePicture} src={picture} alt={"user profile picure"} />
      </div>
      <div className={classes.infoPane}>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
