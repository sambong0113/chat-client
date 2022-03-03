import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography,
    Modal,
    Box,
    Divider,
    TextField,
    ListItem,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    ListItemText
} from '@mui/material';
import { searchUsers, addFriend } from '../api';

const useStyles = makeStyles(theme => ({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    header: {
        margin: '9px'
    },
    searchBar: {
        width: '100%'
    },
    body: {
        height: '500px',
        overFlow: 'scroll',
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'space-around'
    },
    resultBox: {
        border: '0.5px solid #ededed',
        flexBasis: '45%',
        height: '80px',
        marginBottom: '10px',
        "&:hover, &:focus": {
            backgroundColor: '#d1d1d1'
        }
    },
}));

const FriendsAppendModal = ({ handleClose, open}) => {
  const classes = useStyles();
  const [emailQuery, setEmailQuery] = useState('');
  const [resultUsers, setResultUsers] = useState([]);

  const handleTextFiendChange = e => {
      const emailQuery = e.target.value;
      setEmailQuery(emailQuery);
      (async () => { setResultUsers(await searchUsers(emailQuery)) })();
  }

  const handleFriendsClick = userSeq => {
    addFriend(userSeq);
  }

  return (
    <div className={classes.root}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.box}>
            <Typography className={classes.header} id="modal-modal-title" variant="h5" component="h2">
                친구 추가
            </Typography>
            <Divider variant="fullWidth" />
            <div id="modal-modal-description" >
                <TextField
                    className={classes.searchBar}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={emailQuery}
                    onChange={handleTextFiendChange}
                    autoFocus/>
                <div className={classes.body}>
                    {
                        resultUsers.map(({ name, picture, email, userSeq }) => (
                            <ListItem className={classes.resultBox} key={userSeq}>
                                <ListItemButton onClick={() => handleFriendsClick(userSeq)}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy sharp" src={picture} />
                                    </ListItemAvatar>
                                    <ListItemText primary={name} secondary={email}>
                                        {name}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </div>

            </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FriendsAppendModal;
