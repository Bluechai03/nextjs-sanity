import { ReactNode } from 'react'

export interface NavItem {
  href?: string
  label: string
  icon?: ReactNode
  children?: NavItem[]
}

export const navList: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  {
    label: 'Custom Jewelry',
    children: [{ label: 'Custom Earrings', href: '/custom/earrings' }],
  },
  {
    label: 'Jewelry Services',
    href: '/services',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]
