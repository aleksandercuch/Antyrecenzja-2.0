import { Component } from "react";
import React from "react";
import './home.scss';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';
import moment from 'moment';

class Posts extends Component {

  render() {
    let posts = this.props.posts;
    return (
      <Paper className="padding">
        <>
          {posts.map(post => {
            return (
              <Box mb={7}
              key={post.id}>
                <Link to={{
                  pathname: `/tekst/${post.id}`,
                  state: {
                    collection: "posts",
                    id: `${post.id}`
                  }
                }}
                  style={{ 'textDecoration': 'none' }}
                >
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item md={5} xs={12}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        spacing={2}
                        className="padding"
                      >
                        <Grid item>
                          <Typography style={{ 'color': 'black' }} variant="h3">{post.title} </Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={{ 'color': 'black' }} variant="caption">{moment(post.date.toMillis()).format('LL')}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" style={{ color: 'rgb(105,105,105)' }}>{post.intro}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={{ 'color': 'black' }} variant="body1">by {post.author}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                      <img className="postImg" src={post.photo} alt="error" />
                    </Grid>
                  </Grid>
                  <hr />
                </Link>
              </Box>
            )
          })}
        </>
      </Paper>

    );
  }
}

export default Posts;

