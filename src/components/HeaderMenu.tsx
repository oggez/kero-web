import React, { useState, useCallback } from 'react'
import { AppBar, Tabs, Tab, IconButton, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import styled from 'styled-components'

const linkedInUrl = 'https://www.linkedin.com/in/kajsa-kero-853462174'

const InfoWrapper = styled.div`
  align-self: flex-end;
  padding-left: 8px;
`

export const HeaderMenu: React.FC = () => {
  const [value, setValue] = useState('home')

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLDivElement>, newValue: string) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        `#${newValue}-anchor`
      )
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      setValue(newValue)
    },
    [setValue]
  )

  const onLinkedInClick = useCallback(() => window.open(linkedInUrl), [])
  const onInstaClick = useCallback(() => {
    /** Todo */
  }, [])

  return (
    <>
      <AppBar position="sticky">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Hem" icon={<HomeIcon />} value="home" />
          <Tab label="Om mig" icon={<EmojiPeopleIcon />} value="about" />
          <Tab label="Kontakt" icon={<ContactMailIcon />} value="contact" />
        </Tabs>
      </AppBar>
      <InfoWrapper>
        <Typography variant="caption">kajsakero@gmail.com</Typography>
        <IconButton onClick={onInstaClick}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={onLinkedInClick}>
          <LinkedInIcon />
        </IconButton>
      </InfoWrapper>
    </>
  )
}
