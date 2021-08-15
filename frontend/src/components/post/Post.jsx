/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import edit from '../../assets/icons/pencil.svg';
import remove from '../../assets/icons/delete.svg';
import { RESOK } from '../../constants/constants';
import Modal from '../modal/Modal';
import './post.css';
import postsActions from '../../redux/actions/postsActions';

function TransitionsModal(props) {
  const deletePost = async () => {
    const response = await props.deletePost(props.post.id);
    if (response.status === RESOK) {
      props.allPosts();
    }
  };

  const removePost = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost();
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <TableRow key={props.post.id}>
        <TableCell component="th" scope="row">
          {props.post.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {props.post.title}
        </TableCell>
        <TableCell className="links__crud">
          <Modal idPost={props.post.id} />
          <Link to={`/editPost/${props.post.id}`}>
            <img src={edit} alt="" />
          </Link>
          <Link>
            <img
              src={remove}
              onClick={removePost}
              onKeyDown={removePost}
              alt=""
            />
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
}

const mapDispatchToProps = {
  deletePost: postsActions.deletePost,
  allPosts: postsActions.allPosts,
};

export default connect(null, mapDispatchToProps)(TransitionsModal);
