import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { FriendListCell } from '../units';

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

const FriendsList = ({ friends }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subtitle1">친구 목록</Typography>
        <Button
          size="small"
          variant="contained"
          aria-label="add"
          startIcon={<Add />}
        >
          친구 추가
        </Button>
      </div>
      <Divider />
      <div className={classes.list}>
        <List>
          {friends.map((friend, index) => (
            <>
              <FriendListCell key={index} friend={friend} />
              { index === friends.size - 1 || <Divider variant="fullWidth" component="li" />}
            </>
          ))}
        </List>
      </div>
    </div>
  );
};

export default FriendsList;
