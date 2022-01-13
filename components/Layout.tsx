import { ReactChild } from 'react'
import { useIntl } from 'react-intl'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Nav from './Nav'
import Sidebar from './Sidebar'

interface LayoutProps {
  title?: string
  description?: string
  children: ReactChild | ReactChild[]
}

export default function Layout({ title, description, children }: LayoutProps) {
  const intl = useIntl()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {title ||
            intl.formatMessage({
              defaultMessage: 'React Intl Next.js Example',
              description: 'Default document title',
            })}
          {description ||
            intl.formatMessage({
              defaultMessage: 'This page is powered by Next.js',
              description: 'Default document description',
            })}
        </title>
      </Head>

      <Sidebar />
      <Container maxWidth="sm">
        <header>
          <Nav />
        </header>
        {children}
      </Container>
    </>
  )
}
