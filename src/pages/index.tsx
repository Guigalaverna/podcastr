import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

interface EpisodesProps {
  episodes: Array<{
    id: string,
    title: string,
    members: string,
    published_at: string,
    thumbnail: string,
    description: string,
    file: {
      url: string,
      type: 'audio/x-m4a',
      duration: number
    }
  }>
}


export default function Home(props: EpisodesProps) {
  console.log(props.episodes)

  return (
    <>
      <Head>
        <title>Início | Podcastr</title>
      </Head>

      <main>
      </main>
    </> 
  ) 
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}