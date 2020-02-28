import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import MyWorks from "./myWorks"
import './stories.scss';

class Stories extends Component {

  render() {
    return (
      <>
        <Box>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
          <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <img className="logoImage" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/87851774_197975394895259_2913424394464264192_n.png?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=jemzy1ynKVAAX9cARCE&_nc_ht=scontent-waw1-1.xx&oh=78d0470e3256f684b7d0c21392a7dcf0&oe=5EBD84CA" alt="logo error" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <MyWorks />
            </Grid>
            <Grid item xs={3}>
              <Description />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default Stories;
