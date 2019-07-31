import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 800,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const SearchField=({searchValue,handleChangeSearch})=>{
  const classes = useStyles();
// console.log(searchValue)
  return (
    <Paper elevation={20} gutterBottom className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="Enter ISBN"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
        value={searchValue}
        onChange={handleChangeSearch}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchField