// interface HomeProps{
//   count: number;
// }

// export default function Home(props: HomeProps) {
//   return (
//     <div>
//       <h1 className="text-center">Contagem: {props.count}</h1>
//     </div>
//   )
// }

// export const getServerSideProps = async () => {
//   const response = await fetch('http://0.0.0.0:3333/pools/count') // Conecta com nossa API
//   const data = await response.json() // Atribui a resposta JSON da API a uma variável

//   console.log(data) // Mostra no log server

//   return {
//     props : {
//       count: data.count
//     }
//   }
// }

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg  from '../assets/icon-check.svg'

export default function Home(){
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImg} alt="" quality={100}/>

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 flex items-center gap-2'>
          <Image src={usersAvatarExampleImg} alt="" quality={100}/>
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form action="" className='mt-10 flex gap-2'>
          <input
            className='flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm' 
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?' />
          <button 
            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
            type='submit'>
              Criar meu bolão
            </button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          
          <div className='w-px h-14 bg-gray-600' />

          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="" quality={100}/>
    </div>
  )
}