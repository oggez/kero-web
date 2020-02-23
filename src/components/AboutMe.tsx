import React from 'react'
import { Typography, Box } from '@material-ui/core'

export const AboutMe: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" id="about-anchor">
        Kajsa Kero
      </Typography>
      <Typography variant="body1">Under utveckling...</Typography>
    </Box>
  )
}
