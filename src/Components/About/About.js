

import React from 'react'
import { Card, CardActions,CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import Grid  from '@material-ui/core/Grid';

import useStyles from '../dashboard/dashboardcss';
const About = () => {
    const classes=useStyles();
    return (
        <div>

<Grid  container justify='center' >
<Grid

item lg={10} md={12} xl={12} >
        <Card  className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/logo.png"
            title="Contemplative Reptile"
            component='img'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Library Management System
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           LMS is a project that manages and stores books information electronically according to students needs. The system helps both students and library manager to keep a constant track of all the books available in the library. It allows both the admin and the student to search for the desired book. It becomes necessary for colleges to keep a continuous check on the books issued and returned and even calculate fine.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions  >
        <Typography className={classes.typ1} color='primary' gutterBottom variant="body2" component="h4">
        Copyright @ 2019-2020 MAK Developers
      </Typography>

      <Typography className={classes.typ2} gutterBottom variant="body2" color="primary" component="h4">
      contact:03002965676
      </Typography>
      </CardActions>

      </Card>
      </Grid>
      </Grid>
</div>

    )
}

export default About
