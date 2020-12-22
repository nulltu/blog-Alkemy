/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URLAPI, RESOK, CREATED } from '../../constants/constants';
import './formNewPost.css';

export default function FormNewPost() {
  const [dataPost, setDataPost] = useState({
    title: '', body: '',
  });

  const readInput = (e) => {
    const textBox = e.target.name;
    const { value } = e.target;
    setDataPost({
      ...dataPost,
      [textBox]: value,
    });
  };

  const postNewPost = async () => {
    const response = await axios.post(URLAPI, dataPost);
    if (response.status === RESOK || response.status === CREATED) {
      Swal.fire(
        'Post created successfully!',
      );
      setDataPost({
        title: '',
        body: '',
      });
    }
  };

  const getRandomUser = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    const randomUser = response.data;
    console.log(randomUser.results[0].name.first);
  };

  useEffect(async () => {
    getRandomUser();
  }, []);

  const createNewPost = (e) => {
    e.preventDefault();
    if (dataPost.title === '' || dataPost.body === '') {
      Swal.fire('The input field cannot be empty.');
    } else {
      postNewPost();
    }
  };

  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create New Post
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                multiline
                name="title"
                onChange={readInput}
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Title"
                autoFocus
                className={classes.input}
                value={dataPost.title}
              />
            </Grid>

            <Grid item xs={12}>
              <textarea
                name="body"
                placeholder="Post"
                onChange={readInput}
                value={dataPost.body}
              />
            </Grid>
          </Grid>
          <Button
            id="button__publish"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={createNewPost}
          >
            Publish
          </Button>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#f5b630',
  },
  input: {
    color: 'red',
  },
}));
