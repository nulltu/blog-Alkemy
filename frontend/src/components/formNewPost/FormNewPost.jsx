import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import home from '../../assets/icons/home.svg';
import { RESOK, CREATED } from '../../constants/constants';
import './formNewPost.css';
import postsActions from '../../redux/actions/postsActions';

const FormNewPost = (props) => {
  const [dataPost, setDataPost] = useState({
    title: '',
    body: '',
    userId: '',
    image: '',
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
    const response = await props.createPost(dataPost);
    if (response.status === RESOK || response.status === CREATED) {
      Swal.fire('Post created successfully!');
      setDataPost({
        title: '',
        body: '',
        userId: '',
        image: '',
      });
    }
  };

  const getRandomUser = async () => {
    const randomUser = await props.randomUser();
    setDataPost({
      userId: randomUser,
    });
  };

  useEffect(async () => {
    getRandomUser();
  }, []);

  const createNewPost = (e) => {
    e.preventDefault();
    if (
      dataPost.title === '' ||
      dataPost.body === '' ||
      dataPost.image === ''
    ) {
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
                value={dataPost.image}
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
        <div />
        <Link to="/">
          <img className="home__icon" src={home} alt="" />
        </Link>
      </div>
    </Container>
  );
};

const mapDispatchToProps = {
  createPost: postsActions.createPost,
  randomUser: postsActions.randomUser,
};

export default connect(null, mapDispatchToProps)(FormNewPost);

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
