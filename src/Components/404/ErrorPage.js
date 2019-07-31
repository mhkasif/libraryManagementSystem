import React from 'react'
import useStyles from '../dashboard/dashboardcss';

const ErrorPage = () => {
    const classes=useStyles()
    return (
        <div className={ classes.root } >
        <div className={classes.erPage} >
        <img src="/assets/error.jpeg" alt="error" width='900'/>
        </div>

        </div>
    )
}

export default ErrorPage
