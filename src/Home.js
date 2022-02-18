import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserProfile, FriendsList } from './components';
import { getUser, getFriends } from './api';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
    flexGrow: 7,
    borderRight: '1px solid black'
  },
  chatsList: {
    height: '100%',
    flexGrow: 13
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

  useEffect(() => {
    (async () => { setUser(await getUser()) })();
    (async () => { setFriends(await getFriends()) })();
  }, []);

  return <div className={classes.root}>
    <div className={classes.board}>
      <div className={classes.friendsList}>
        <div className={classes.userProfile}>
          <UserProfile user={user} />
        </div>
        <div>
          <FriendsList friends={friends} />
        </div>
      </div>
      <div className={classes.chatsList}>ChatsList</div>
    </div>
  </div>;
};

export default Home;
