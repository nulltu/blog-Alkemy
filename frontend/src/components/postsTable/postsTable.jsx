import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import { URLAPI } from '../../constants/constants';

function PostsTable() {
  const [posts, setPosts] = useState();

  useEffect(async () => {
    const response = await axios.get(URLAPI);
    const dataPost = response.data;
    setPosts(dataPost);
  }, []);

  return (
    <div className="container__table__posts">
      {posts === undefined
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
                {posts.map((post) => (
                  <Post post={post} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </div>
  );
}

export default PostsTable;
