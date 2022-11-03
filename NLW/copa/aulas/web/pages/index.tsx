interface HomeProps{
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Contagem: {props.count}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://0.0.0.0:3333/pools/count') // Conecta com nossa API
  const data = await response.json() // Atribui a resposta JSON da API a uma variável

  console.log(data) // Mostra no log server

  return {
    props : {
      count: data.count
    }
  }
}