/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from '@mui/material';

const useStyles = makeStyles(theme => ({
  item: {
    width: '100%',
    maxWidth: '120ch',
    backgroundColor: theme.palette.background.paper,
    height: '90px',
  },
  itemAvatar: {
    minWidth: '80px',
  },
  inline: {
    display: 'inline',
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const ChatListCell = () => {
  const classes = useStyles();

  return (
    <ListItem alignItems="center" className={classes.item}>
      <ListItemAvatar className={classes.itemAvatar}>
        <Avatar alt="Remy sharp" className={classes.large} />
      </ListItemAvatar>
      <ListItemText
        primary="유저명"
        secondary={
          <>
            <Typography
              component="span"
              variant="body"
              className={classes.inline}
              color="textPrimary"
            />
            가장 최근 대화
          </>
        }
      />
    </ListItem>
  );
};

export default ChatListCell;
