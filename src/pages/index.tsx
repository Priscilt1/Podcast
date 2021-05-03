import { GetStaticProps } from 'next'; //importando tipagem da função 
import { format, parseISO } from 'date-fns'; //parseISO converte uma string para um date do js 
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode = {
    id: string;
    title: string;
    members: string;
    published_at: string;
}

type HomeProps = {
  episodes: Episode[]; //informando que é o array com as infos do episode
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSG - Fica estatico melhorando a performace. 
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', { //url
    params: { //paginação
      _limit: 12, //limite por pagina
      _sort: 'published_at', //ordenando por publicação
      _order: 'desc' //decrescente 
    }
  }) 

  //formatação dos dados antes do return para evitar uma renderização desnecessaria
  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }), //O MMM significa os tres primeiros digitos do mes 
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)), //convertendo a informacao para numero (usando a funcao que esta nos ultis)
      description: episode.description,
      url: episode.file.url,
  }
  })

  return { 
    props: {
      episodes, 
    },
    // revalidate recebe um numero em segundo, avisando em quanto tempo quer uma nova versao da pagina
    revalidate: 60 * 60 * 8 //a cada 8 horas uma nova atualização acontece
  }
}