import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, Divider, Typography } from '@mui/material';
import { ChatListCell } from '../units';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
    
  },
  header: {
    position: 'sticky',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    height: '50px'
  },
  list: {
    height: '100%',
  },
}));

const ChatList = ({ chatRooms }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subtitle1">채팅 목록</Typography>
      </div>
      <Divider />
      <div className={classes.list}>
        { chatRooms.map((chatRoom, index) => (
            <div key={chatRoom.id} >
              <ChatListCell chatRoom={chatRoom} />
              { index === chatRooms.size - 1 || <Divider variant="fullWidth" />}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ChatList;
