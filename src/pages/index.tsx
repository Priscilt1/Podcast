export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSG - Fica estatico melhorando a performace. 
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return { 
    props: {
      episodes: data, 
    },
    // revalidate recebe um numero em segundo, avisando em quanto tempo quer uma nova versao da pagina
    revalidate: 60 * 60 * 8 //a cada 8 horas uma nova atualização acontece
  }
}
