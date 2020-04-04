import React from 'react';
import Grid from "@material-ui/core/Grid";

const classes = {
    container: {
      background: "#000",
      color: 'white',
      marginBottom: '12px'
    },
    tile:{
        fontSize: 50
    }
};

const Header = (props) => {
     return (
        <Grid container justify="center" spacing={1} style={classes.container} alignItems="flex-start">
            <Grid key={1} item md={10}>
                <h1 style={classes.tile}>HN Feed</h1>
            </Grid>    
            <Grid key={2} item md={10}>
                <h3>We {'<3'} hacker news!</h3>
            </Grid>   
        </Grid>
     );
}

export default Header;