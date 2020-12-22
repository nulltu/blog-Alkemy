/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../post/Post';
import postsActions from '../../redux/actions/postsActions';

function PostsTable(props) {
  useEffect(() => {
    props.allPosts();
  }, []);

  return (
    <div className="container__table__posts">
      {props.listPosts === undefined
        ? <LinearProgress style={{ color: 'secondary' }} />
        : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    #
                  </TableCell>
                  <TableCell>
                    Title
                  </TableCell>
                  <TableCell>
                    Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.listPosts.map((post) => (
                  <Post post={post} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      listPosts: state.posts.listPosts,
  };
};

const mapDispatchToProps = {
  allPosts: postsActions.allPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable);
