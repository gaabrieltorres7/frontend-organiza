export default function Login() {

  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/3 bg-gradient-to-b from-green-800 to-green-300 hidden sm:block">    
          <h1 className="mt-4 m-9 text-white  text-4xl">Organiza</h1>      
        </div>
        <div className="block sm:flex w-2/3 justify-center items-center bg-white">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '43rem', height: '32rem' }}>
            <div className="w-80">
                <h1 className="text-3xl font-semibold">Bem-vindo de volta!</h1>
                <small className="text-gray-400">Por favor insira seus dados</small>
                
                <form className="mt-5">
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-semibold">Email</label>
                    <input type="email" placeholder="Digite seu e-mail" className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
                  </div>

                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-semibold">Senha</label>
                    <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500" />
                  </div>

                  <div className="mb-3 flex justify-center">            
                    <a href="#" className=" text-sm font-semibold text-green-700">Esqueceu sua senha?</a>
                  </div>

                  <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white bg-green-700 hover:bg-green-900 px-2 py-1.5 rounded-md">Iniciar sessão</button>
                  </div>
                </form>

                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">Não tem uma conta?</span>
                  <a href="#" className="text-xs border-b border-green-700  font-semibold text-green-700"> Criar conta</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}