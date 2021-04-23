import { createContext, ReactNode, useContext, useState } from "react";
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
  setPlayingState: (state: boolean) => void;
  playList: (episodes: Episode[], index: number) => void;
  tooglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  hasNext: boolean
  hasPrevious: boolean
}

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData);

export default function PlayerProvider({ children }: PlayerProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasNext = currentEpisodeIndex + 1 < episodeList.length;
  const hasPrevious = currentEpisodeIndex > 1;

  function play(episode) {
    setEpisodeList([episode]);
    setIsPlaying(true);
    setCurrentEpisodeIndex(0);
  }

  function playList(episodes: Episode[], index: number) {
    setEpisodeList(episodes);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function tooglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex + 1;

    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentEpisodeIndex,
        episodeList,
        play,
        isPlaying,
        tooglePlay,
        setPlayingState,
        playList,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}


export function usePlayer() {
  return useContext(PlayerContext)
}