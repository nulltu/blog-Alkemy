import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2'

import React, { useState } from 'react';
import { CREATED, URLAPI } from '../../constants'
import axios from 'axios'
import './formNewPost.css'

export default function FormNewPost(props) {

  const [dataPost, setDataPost] = useState({
    username: '', title: '', body: ''
  })

  const readInput = e => {
    const textBox = e.target.name
    const value = e.target.value
    setDataPost({
      ...dataPost,
      [textBox]: value
    })
  }

  const postNewPost = async () => {
    const response = await axios.post(URLAPI, dataPost)
    if (response.status === CREATED) {
      Swal.fire(
        'Post created successfully!'
      )
      setDataPost({
        username: '',
        title: '',
        body: ''
      })
    }
  }

  const createNewPost = (e) => {
    e.preventDefault();
    if (dataPost.title === "" || dataPost.body === "") {
      Swal.fire('The input field cannot be empty.')
    } else {
      postNewPost()
    }

  }

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
              ></textarea>
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
    backgroundColor: '#f5b630'
  },
  input: {
    color: 'red'
  }
}));