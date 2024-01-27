import { Box, Card, Typography } from '@mui/joy'
import React from 'react'
import MyLink from '../MyLink'
import Link from 'next/link'
import NavList from './NavList'

const Header = () => {
  return (
    <Card
      sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Box>
        <Typography level="title-md">Logo</Typography>
      </Box>
      <NavList />
    </Card>
  )
}

export default Header
