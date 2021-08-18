/* eslint-disable jsx-a11y/label-has-associated-control */
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
import { RESOK, URLAPI } from '../../constants/constants';
import './formEditPost.css';

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
    backgroundColor: '#F5B427',
  },
  input: {
    color: 'red',
  },
  title: {
    fontSize: '1.2rem',
  },
}));

export default function FormEditPost(props) {
  const [postGetById, setPostGetById] = useState({
    title: '',
    body: '',
    image: '',
  });

  // eslint-disable-next-line react/destructuring-assignment
  const dataProps = props.props;

  const paramsId = dataProps.match.params.id;

  const readInput = (e) => {
    const textBox = e.target.name;
    const { value } = e.target;
    setPostGetById({
      ...setPostGetById,
      [textBox]: value,
    });
  };

  const getPostById = async () => {
    const response = await axios.get(`${URLAPI}${paramsId}`);
    const dataPostById = response.data;
    setPostGetById({
      title: dataPostById.title,
      body: dataPostById.body,
      image: dataPostById.image,
      id: dataPostById.id,
    });
  };

  useEffect(() => {
    getPostById();
  }, []);

  const updatePost = async () => {
    const response = await axios.put(URLAPI + paramsId, postGetById);
    if (response.status === RESOK) {
      Swal.fire('Post edited successfully!');
      setTimeout(() => {
        props.props.history.push('/newOperation');
      }, 1000);
    }
  };

  const editPost = (e) => {
    e.preventDefault();
    if (postGetById.title === '' || postGetById.body === '') {
      Swal.fire('The input field cannot be empty.');
    } else {
      updatePost();
    }
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit Post #
          {postGetById.id}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <label className={classes.title}>Title</label>
              <TextField
                multiline
                name="title"
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                autoFocus
                className={classes.input}
                value={postGetById.title}
                onChange={readInput}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                multiline
                name="image"
                onChange={readInput}
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="image"
                label="url image"
                autoFocus
                className={classes.input}
                value={postGetById.image}
              />
            </Grid>

            <Grid item xs={12}>
              <textarea
                name="body"
                placeholder="Post"
                onChange={readInput}
                value={postGetById.body}
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
            onClick={editPost}
          >
            Confirm
          </Button>
        </form>
      </div>
    </Container>
  );
}
