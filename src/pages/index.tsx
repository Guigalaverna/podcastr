import Head from 'next/head'

import { GetStaticProps } from 'next'

import c from '../services/api'
import api from '../services/api'
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
  const response = await api.get('/episodes', { params: { _limit: 12, _order: 'desc', _sort: 'published_at' }})
  const data = await response.data

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}