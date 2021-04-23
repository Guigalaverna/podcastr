import { createContext, useState } from "react";
interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;

  play: (episode) => void;
  tooglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

export default function PlayerProvider({ children }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setIsPlaying(true);
    setCurrentEpisodeIndex(0);
  }

  function tooglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider
      value={{ currentEpisodeIndex, episodeList, play, isPlaying, tooglePlay, setPlayingState }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
