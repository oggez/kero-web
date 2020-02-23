import React from 'react'
import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core'

const FooterBox = styled(Box)`
  text-align: center;
`
export const Footer: React.FC = () => {
  return (
    <FooterBox p={3}>
      <Typography variant="caption">©2020 by Z-Brothers</Typography>
    </FooterBox>
  )
}
