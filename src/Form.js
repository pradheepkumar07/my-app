import React from 'react';
/* import { FormControl } from '@mui/material'; */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicForm(){
    return(
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >   <h1>Form Validation</h1>
        <>
        <TextField id="basic-text" label="Text" variant="standard" required/>
        <TextField id="basic-Desc" label="Description" variant="standard" />
        </>
        <div>
        <TextField id="Content" label="Content" multiline maxRows={6} variant="standard"/>
        </div>
    </Box>
    );

}

export default BasicForm;