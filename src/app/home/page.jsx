import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeuDinheiro from "@/components/home/SeuDinheiro";

export default function Home() { //ESSA AQUI É A HOME vtfd

  return (
    <>
    <Header />
      <div className="">
        <div className="flex justify-center items-center mt-20 mb-32">
          <div className="w-96 mr-32">
            <h1 className="text-5xl font-semibold mb-10">MANEJE SUAS FINANÇAS DE FORMA RÁPIDA E SEGURA.</h1>
            <p className="block mb-10">O Gerenciador de finanças Organiza é privado, seguro e oferece uma organização financeira por áreas com porcentagens.</p>
            <button className="bg-cor-button hover:bg-cor-fundo text-white py-2 px-6 rounded">Inicie agora</button>
          </div>
          <svg width="560" height="419" viewBox="0 0 560 419" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="560" height="419" rx="20" fill="url(#paint0_linear_96_381)" />
            <defs>
              <linearGradient id="paint0_linear_96_381" x1="237" y1="65" x2="306.5" y2="389" gradientUnits="userSpaceOnUse">
                <stop stop-color="#212121" />
                <stop offset="0.845669" stop-color="#595959" />
              </linearGradient>
            </defs>
          </svg>

        </div>

        <div className="h-60 bg-cor-fundo flex justify-center items-center">
        <p className="text-2xl font-semibold text-center text-white mr-6 w-56">faça o seu cadastro</p>

        <svg className="mr-10" width="33" height="52" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_21)">
            <path d="M6 2L26 22L6 42" stroke="url(#paint0_linear_1_21)" stroke-width="4" />
          </g>
          <defs>
            <filter id="filter0_d_1_21" x="0.585785" y="0.585785" width="32.2426" height="50.8284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_21" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_21" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1_21" x1="16" y1="2" x2="16" y2="42" gradientUnits="userSpaceOnUse">
              <stop stop-color="#218460" />
              <stop offset="1" stop-color="#1BC149" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-2xl font-semibold text-white mr-10 w-56 text-center">crie um planejamento</p>
        <svg className="mr-10" width="33" height="52" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_21)">
            <path d="M6 2L26 22L6 42" stroke="url(#paint0_linear_1_21)" stroke-width="4" />
          </g>
          <defs>
            <filter id="filter0_d_1_21" x="0.585785" y="0.585785" width="32.2426" height="50.8284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_21" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_21" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1_21" x1="16" y1="2" x2="16" y2="42" gradientUnits="userSpaceOnUse">
              <stop stop-color="#218460" />
              <stop offset="1" stop-color="#1BC149" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-2xl font-semibold text-white w-56 text-center">controle suas finanças</p>
      </div>

      </div>
      <SeuDinheiro />
      <div className="flex items-center justify-center text-center h-688 bg-gradient-to-b from-custom1-green to-custom2-green">
        <div className="relative">
          <svg className="mb-96" width="88" height="95" viewBox="0 0 88 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="47.5" cy="40" r="37" stroke="#5FB998" stroke-width="6" />
            <path d="M40.5 54L3 91.5" stroke="white" stroke-width="6" stroke-linecap="round" />
          </svg>
        </div>

        <h3 className="font-semibold text-64 w-1040 text-gray-50">desenvolva, evolua e alcance seus objetivos conosco. Sua parceira financeira para um futuro seguro e próspero.</h3>

        <svg className="" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="4" r="4" fill="#00482E" />
          <circle cx="36" cy="20" r="4" fill="#00482E" />
          <circle cx="36" cy="36" r="4" fill="#00482E" />
          <circle cx="36" cy="52" r="4" fill="#00482E" />
          <circle cx="20" cy="4" r="4" fill="#00482E" />
          <circle cx="20" cy="20" r="4" fill="#00482E" />
          <circle cx="20" cy="36" r="4" fill="#00482E" />
          <circle cx="20" cy="52" r="4" fill="#00482E" />
          <circle cx="20" cy="68" r="4" fill="#00482E" />
          <circle cx="4" cy="4" r="4" fill="#00482E" />
          <circle cx="4" cy="20" r="4" fill="#00482E" />
          <circle cx="4" cy="36" r="4" fill="#00482E" />
          <circle cx="4" cy="52" r="4" fill="#00482E" />
          <circle cx="4" cy="68" r="4" fill="#00482E" />
          <circle cx="52" cy="4" r="4" fill="#00482E" />
          <circle cx="52" cy="20" r="4" fill="#00482E" />
          <circle cx="52" cy="36" r="4" fill="#00482E" />
          <circle cx="52" cy="52" r="4" fill="#00482E" />
          <circle cx="68" cy="4" r="4" fill="#00482E" />
          <circle cx="68" cy="20" r="4" fill="#00482E" />
        </svg>


      </div>

    <Footer/>



    </>
  )
}