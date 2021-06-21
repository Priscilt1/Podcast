import { createContext } from 'react'

type Episode = {
  title: string,
  members: string,
  thumbnail: string,
  duration: string,
  url: string,
}

type PlayerContextData = {
  episodeList: Episode[];
}

export const PlayerContext = createContext('') //o valor padrão define o formato dos dados que ira usar no contexto