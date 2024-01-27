// ./app/page.tsx

import { SanityDocument } from 'next-sanity'
import { draftMode } from 'next/headers'

import Posts from '@/components/Posts'
import PostsPreview from '@/components/PostsPreview'
import { loadQuery } from '@/sanity/lib/store'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { Stack, Typography } from '@mui/joy'

export default async function Page() {
  return (
    <Stack>
      <Typography variant="plain">EYO</Typography>
    </Stack>
  )
}
