/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  const {issue}=props
  return (
    <React.Fragment>
      <Title content='Recent Issued' />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Enrollment No</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Issue Date</TableCell>
            <TableCell align="right">Issued By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issue.map(row => (
            <TableRow key={row.enrollmentnumber}>
              <TableCell>{row.enrollmentnumber}</TableCell>
              <TableCell>{row.studentname}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.ISBN}</TableCell>
              <TableCell>{row.issuedate}</TableCell>
              <TableCell align="right">{row.issuedby}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/*<div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
          */}
    </React.Fragment>
  );
}
