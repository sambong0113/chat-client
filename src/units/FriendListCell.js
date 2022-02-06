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
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    height: '70px',
  },
  inline: {
    display: 'inline',
  },
}));

const FriendListCell = props => {
  const { value } = props;
  const classes = useStyles();

  return (
    <ListItem className={classes.root} alignItems="flex-start" dense>
      <ListItemAvatar>
        <Avatar alt="Remy sharp" />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {value}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </>
        }
      />
    </ListItem>
  );
};

export default FriendListCell;
