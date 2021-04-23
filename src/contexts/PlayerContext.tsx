import { createContext, useState } from 'react'
interface Episode {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number

  play: (episode) => void
}

export const PlayerContext = createContext({} as PlayerContextData)

export default function PlayerProvider({ children }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider value={{ currentEpisodeIndex, episodeList, play }}>
      { children }
    </PlayerContext.Provider>
  )
}