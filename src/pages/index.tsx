import { GetStaticProps } from 'next'; //importando tipagem da função 
import { api } from '../services/api';

type Episode = {
    id: string;
    title: string;
    members: string;
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
  
  return { 
    props: {
      episodes: data, 
    },
    // revalidate recebe um numero em segundo, avisando em quanto tempo quer uma nova versao da pagina
    revalidate: 60 * 60 * 8 //a cada 8 horas uma nova atualização acontece
  }
}