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
  },
  itemAvatar: {
  },
  inline: {
    display: 'inline'
  },
  date: {
    width: '100%',
    textAlign: 'right'
  }
}));

const ChatListCell = ({ chatRoom }) => {
  const classes = useStyles();
  const { title, modifiedDate, userList } = chatRoom;

  const date = new Date(modifiedDate);

  

  return (
    <ListItem alignItems="center" className={classes.item}>
      <ListItemAvatar className={classes.itemAvatar}>
        <Avatar alt="Remy sharp" className={classes.large} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography
              component="span"
              variant="body"
              className={classes.inline}
              color="textPrimary"
            />
            {userList.map(user => user.name).join(", ")}
          </>
        }
      />
      <ListItemText
        secondary={<div className={classes.date}>
          {date.toLocaleDateString()}
        </div>}
      />
    </ListItem>
  );
};

export default ChatListCell;
