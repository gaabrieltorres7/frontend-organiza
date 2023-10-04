"use client"
import Footer from "@/components/Footer";
import Desenvolva from "@/components/home/Desenvolva";
import HeaderC from "@/components/home/HeaderC";
import SeuDinheiro from "@/components/home/SeuDinheiro";
import LayoutAdmin from "@/components/login-cadastro/LayoutAdmin"

export default function Home() {
  return (
    <>
      <HeaderC />
      <section>
        <div>
          <div className="flex justify-center items-center mt-20 mb-32">
            <div className="text-center lg:w-96 lg:mr-32">
              <h1 className="text-5xl font-semibold mb-10 text-cor-fundo">MANEJE SUAS FINANÇAS DE FORMA RÁPIDA E SEGURA.</h1>
              <p className="block mb-10">O Gerenciador de finanças Organiza é privado, seguro e oferece uma organização financeira por áreas com porcentagens.</p>
              <button className="bg-cor-button hover:bg-cor-fundo text-white py-2 px-6 rounded">
                <a href="/cadastro">Inicie agora</a>
              </button>
            </div>
            <svg className="hidden lg:flex" width="560" height="419" viewBox="0 0 560 419" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="560" height="419" rx="20" fill="url(#paint0_linear_96_381)" />
              <defs>
                <linearGradient id="paint0_linear_96_381" x1="237" y1="65" x2="306.5" y2="389" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#212121" />
                  <stop offset="0.845669" stop-color="#595959" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hidden h-60 bg-cor-fundo md:flex justify-center items-center">
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
      </section>      
      <SeuDinheiro />
      <Desenvolva />
      <Footer />
    <LayoutAdmin>
      <p className="text-purple-700 text-opacity-100">HOME</p>
    </LayoutAdmin>
   </>
  )
}