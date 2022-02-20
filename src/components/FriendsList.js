import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { List, Divider, Button, Typography } from '@mui/material';
import { Add } from '@material-ui/icons';
import { FriendListCell } from '../units';
import FriendsAppendModal from './FriendsAppendModal';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'paper',
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

const FriendsList = ({ friends }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subtitle1">친구 목록</Typography>
        <Button
          size="small"
          variant="contained"
          aria-label="add"
          startIcon={<Add />}
          onClick={handleOpen}
        >
          친구 추가
        </Button>
      </div>
      <Divider />
      <div className={classes.list}>
        <List>
          {friends.map((friend, index) => (
            <div key={friend.userId} >
              <FriendListCell friend={friend} />
              { index === friends.size - 1 || <Divider variant="fullWidth" component="li" />}
            </div>
          ))}
        </List>
        <FriendsAppendModal open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default FriendsList;
