import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, Divider, Typography } from '@mui/material';
import { ChatListCell } from '../units';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },
  list: {
    overflow: 'auto',
    height: 'calc(100% - 51px)',
  },
  header: {
    margin: '0 10px',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subtitle1">채팅 목록</Typography>
      </div>
      <Divider />
      <div className={classes.list}>
        <List>
          {[...Array(10)].map((x, i) => (
            <>
              <ChatListCell key={x} value={i} />
              <Divider variant="fullWidth" component="li" />
            </>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ChatList;
