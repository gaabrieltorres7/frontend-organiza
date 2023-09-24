import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Cadastro() {

  return (
    <>
      <div className="h-screen flex">
        <div className="hidden lg:flex items-center justify-center w-1/3 bg-gradient-to-b from-custom1-green to-custom3-green ">
          <div className="w-screen">    
            <h1 className="fixed top-4 left-9 text-white text-4xl">Organiza</h1>
            <div className="p-5" >
            <Carousel />
            </div>            
          </div>                
        </div>

        <div className="lg:flex lg:w-2/3 w-screen justify-center items-center bg-white">
          <div className="block lg:hidden bg-gradient-to-r from-custom1-green to-custom3-green p-4">
            <h1 className="text-4xl text-white">Organiza</h1>
          </div>
          <div className="p-7 h-auto bg-white">
            <h1 className="text-3xl font-semibold">Crie sua conta agora!</h1>
            <small className="text-gray-400">Por favor insira seus dados</small>
                
            <form className="mt-5">

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold">Nome</label>
                <input type="text" placeholder="Digite seu nome" className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold">Email</label>
                <input type="email" placeholder="Digite seu e-mail" className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold">Senha</label>
                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className=" lg:max-w-xs mb-6">
                <span className="text-xs text-gray-400 font-semibold">Ao se inscrever-se em uma conta Organize significa que você concorda com os</span>
                <Link href="/termos" className="text-xs border-b border-green-700  font-semibold text-green-700"> Termos e condições.</Link>
              </div>


              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-cor-button hover:bg-green-900 px-2 py-1.5 rounded-md">Cadastre-se</button>
              </div>
            </form>

            <div className="text-center mb-6">
              <span className="text-xs text-gray-400 font-semibold">Já tem uma conta?</span>
              <Link href="/login" className="text-xs border-b border-green-700  font-semibold text-green-700"> Iniciar sessão</Link>
            </div>


            <div className="block lg:hidden">          
            <Carousel />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}