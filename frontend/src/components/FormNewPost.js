import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import React, { useState } from 'react';
import axios from 'axios'
import '../styles/createPost.css'


export default function SignUp() {

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

const sendData = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dataPost)
    console.log(response)
    if(response.status === 201){
        alert('User successfully created')
        setDataPost({
            username: '',
            title: '', 
            body: ''
        })
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
            id= "button__publish"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sendData}
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
    backgroundColor:'#F5B427'
  },
  input:{
    color:'red'
}
}));