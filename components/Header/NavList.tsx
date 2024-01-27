import React from 'react'
import { NavItem as NavItemType, navList } from '@/constants'
import Link from 'next/link'
import { Box } from '@mui/joy'

const NavList = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {navList.map((item) => (
        <NavItem item={item} key={item.label} />
      ))}
    </Box>
  )
}

interface NavItemProps {
  item: NavItemType
}

const NavItem = ({ item: { label, href, children, icon } }: NavItemProps) => {
  return (
    <Box sx={{ p: 1 }}>
      <Link href={{ pathname: href }}>{label}</Link>
    </Box>
  )
}

export default NavList
