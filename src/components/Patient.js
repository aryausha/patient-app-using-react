import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function Patient() {
    return (
        <Grid container>
          <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>

          </Grid>
          <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>
         
            <h1>Patient App</h1>
            <TextField
            type="text"
            variant="outlined"
            label="Name"
            fullWidth
            required
            margin="normal"
            />
              <TextField
            type="text"
            variant="outlined"
            label="Address"
            fullWidth
            required
            margin="normal"
            />
              <TextField
            type="number"
            variant="outlined"
            label="Mobile"
            fullWidth
            required
            margin="normal"
            /> 
              <TextField
            type="number"
            variant="outlined"
            label="Pincode"
            fullWidth
            required
            margin="normal"
            /> 
              <TextField
            type="mail"
            variant="outlined"
            label="Email"
            fullWidth
            required
            margin="normal"
            /> 
              <TextField
            type="text"
            variant="outlined"
            label="Bistander Name"
            fullWidth
            required
            margin="normal"
            /> 
              <TextField
            type="text"
            variant="outlined"
            label="Doctor"
            fullWidth
            required
            margin="normal"
            /> 
              <TextField
            type="text"
            variant="outlined"
            label="Disease"
            fullWidth
            required
            margin="normal"
            />
              <TextField
            type="text"
            variant="outlined"
            label="Medicine"
            fullWidth
            required
            margin="normal"
            /> 
               <Button variant="contained" color="primary"
               fullWidth
               required
               margin="normal"
               type="submit">Submit</Button>
            
          </Grid>
          <Grid items xs={4} sm={4} md={4} lg={4} xl={4}>

          </Grid>

        </Grid>
      
    )
}
