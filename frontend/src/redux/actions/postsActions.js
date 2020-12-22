/* eslint-disable no-unused-vars */
import axios from 'axios';
import { URLAPI } from '../../constants/constants';

const postsActions = {

  createPost: (dataPost) => async (dispatch) => {
    const response = await axios.post(`${URLAPI}`, dataPost);
    dispatch({
      type: 'NEW_POST',
      payload: response.data,
    });
    return response;
  },
  allPosts: () => async (dispatch) => {
    const response = await axios.get(URLAPI);
    const dataPosts = response.data;
    dispatch({
      type: 'ALL_POSTS',
      payload: dataPosts,
    });
  },
  deletePost: (index) => async (dispatch) => {
    const response = await axios.delete(`${URLAPI}${index}`);
    dispatch({
      type: 'DELETE_POST',
      payload: index,
    });
    return response;
  },

  randomUser: () => async (dispatch) => {
    const response = await axios.get('https://randomuser.me/api/');
    const randomUser = response.data.results[0].name.first;
    return randomUser;
  },

};

export default postsActions;
