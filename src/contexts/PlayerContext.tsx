import { createContext, useState } from "react";

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: string;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;

  play: (episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

function PlayerProvider({ children }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList(episode);
    setCurrentEpisodeIndex(0);
    console.log(episode);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerProvider;
