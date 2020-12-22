import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URLAPI } from '../../constants/constants';
import './modal.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  paper: {
    backgroundColor: '#F5B427',
    border: '5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    fontSize: 'calc(.6em + .6vw)',
  },
  button: {
    color: 'white',
    backgroundColor: '#3f51b5',
    margin: '0rem 1rem',
    textTransform: 'lowercase',
  },

}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [postId, setPostId] = useState();
  // eslint-disable-next-line react/prop-types
  const { idPost } = props;

  const getPostId = async () => {
    const response = await axios.get(`${URLAPI}${idPost}`);
    const dataPost = await response.data;
    setPostId(dataPost);
  };

  useEffect(() => {
    getPostId();
  }, []);

  return (
    <>
      {postId === undefined
        ? <CircularProgress />
        : (
          <div>
            <Button type="button" onClick={handleOpen} className={classes.button}>
              Detail
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <p id="transition-modal-description">
                    #User:
                    {postId.userId}
                  </p>
                  <h2 id="transition-modal-title">{postId.title}</h2>
                  <p id="transition-modal-description">{postId.body}</p>
                </div>
              </Fade>
            </Modal>
          </div>
        )}
    </>
  );
}
