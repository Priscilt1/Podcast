import { createContext } from 'react'

type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number //apontando qual posição esta tocando o espisodio atualmente
  play: (episode: Episode) => void //funcao retornando vazia
}

//o valor padrão define o formato dos dados que ira usar no contexto
export const PlayerContext = createContext({} as PlayerContextData) //falando que é um array e pegando as mesmas estruturas