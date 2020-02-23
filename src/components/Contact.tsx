import React from 'react'
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  InputAdornment
} from '@material-ui/core'
import SubjectIcon from '@material-ui/icons/Subject'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: grid;
  grid-row-gap: 24px;
  margin: 0 36px;
  grid-template-columns: auto;
  grid-template-rows: auto;
`

export const Contact: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h5">Kontakta mig</Typography>
      <FormWrapper id="contact-anchor">
        <Grid container spacing={4} alignItems="flex-end">
          <Grid sm={6} xs={12} item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
              label="Namn"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid sm={6} xs={12} item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                )
              }}
              label="E-post"
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SubjectIcon />
              </InputAdornment>
            )
          }}
          label="Ämne"
          variant="standard"
          fullWidth
        />
        <TextField
          label="Skriv ditt meddelande här..."
          variant="outlined"
          multiline
          rows={5}
        />
        <Button variant="contained" size="medium" color="primary">
          Skicka
        </Button>
      </FormWrapper>
    </Box>
  )
}
