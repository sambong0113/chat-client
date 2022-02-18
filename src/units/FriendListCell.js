/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '70px',
  },
  inline: {
    display: 'inline',
  },
}));

const FriendListCell = ({ friend }) => {
  const classes = useStyles();

  const { name, picture, email } = friend;


  return (
    <ListItem className={classes.root} alignItems="flex-start" dense>
      <ListItemAvatar>
        <Avatar alt="Remy sharp" imgProps={picture} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography
              component="span"
              variant="body1"
              className={classes.inline}
              color="textPrimary"
            >
              {name}
            </Typography>
          </>
        }
        secondary={email}
      />
    </ListItem>
  );
};

export default FriendListCell;
