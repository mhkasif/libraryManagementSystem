import React from 'react';

import Typography from '@material-ui/core/Typography';

export default function Title({content}) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
     {content}
    </Typography>
  );
}

