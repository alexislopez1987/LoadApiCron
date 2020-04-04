import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";

const Articles = (props) => {
    return (
       <Fragment>
            <Grid container justify="center" spacing={3}>
                {[0, 1, 2].map(value => (
                    <Grid key={value} item md={10}>
                        probando grid 
                    </Grid>
                ))}
            </Grid>
       </Fragment>
    );
}

export default Articles;