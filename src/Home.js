import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { UserProfile, FriendsList, ChatList } from './components';
import { getUser, getFriends, listChatRooms } from './api';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'paper',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '600px',
  },
  board: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    minWidth: '800px',
    height: '80%',
    border: '1px solid black',
    borderRadius: '5%',
    overflow: 'hidden'
  },
  friendsList: {
    height: '100%',
    width: '100%',
    flexGrow: 4,
    borderRight: '1px solid black'
  },
  chatsList: {
    width: '100%',
    height: '100%',
    flexGrow: 6
  },
  userProfile: {
    width: '100%',
    height: '120px',
    borderBottom: '1px solid black'
  }
}));

const Home = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    (async () => { setUser(await getUser()) })();
    (async () => { setFriends(await getFriends()) })();
    (async () => { setChatRooms(await listChatRooms()) })();
  }, []);

  return <div className={classes.root}>
    <div className={classes.board}>
      <div className={classes.friendsList}>
        <div className={classes.userProfile}>
          <UserProfile user={user} />
        </div>
          <FriendsList friends={friends} />
      </div>
      <div className={classes.chatsList}>
        <ChatList chatRooms={chatRooms} />
      </div>
    </div>
  </div>;
};

export default Home;
