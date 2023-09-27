export default function Home() { //ESSA AQUI É A HOME

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex">
        <div className="w-96 mr-96">
          <h1 className="text-5xl font-semibold mb-10">MANEJE SUAS FINANÇAS DE FORMA RÁPIDA E SEGURA.</h1>
          <p className="block mb-10">O Gerenciador de finanças Organiza é privado, seguro e oferece uma organização financeira por áreas com porcentagens.</p>
          <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Inicie agora</button>
        </div>
        <svg width="560" height="419" viewBox="0 0 560 419" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="560" height="419" rx="20" fill="url(#paint0_linear_96_381)"/>
            <defs>
            <linearGradient id="paint0_linear_96_381" x1="237" y1="65" x2="306.5" y2="389" gradientUnits="userSpaceOnUse">
            <stop stop-color="#212121"/>
            <stop offset="0.845669" stop-color="#595959"/>
            </linearGradient>
            </defs>
        </svg>

      </div>

      </div>

      <div className="w-screen h-60 bg-cor-fundo flex justify-center items-center">
          <p className="text-2xl font-semibold text-center text-white mr-6 w-56">faça o seu cadastro</p>

          <svg className="mr-10" width="33" height="52" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_21)">
<path d="M6 2L26 22L6 42" stroke="url(#paint0_linear_1_21)" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_1_21" x="0.585785" y="0.585785" width="32.2426" height="50.8284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_21"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_21" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_21" x1="16" y1="2" x2="16" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#218460"/>
<stop offset="1" stop-color="#1BC149"/>
</linearGradient>
</defs>
          </svg>

          <p className="text-2xl font-semibold text-white mr-10 w-56 text-center">crie um planejamento</p>
          <svg className="mr-10" width="33" height="52" viewBox="0 0 33 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_21)">
<path d="M6 2L26 22L6 42" stroke="url(#paint0_linear_1_21)" stroke-width="4"/>
</g>
<defs>
<filter id="filter0_d_1_21" x="0.585785" y="0.585785" width="32.2426" height="50.8284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_21"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_21" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1_21" x1="16" y1="2" x2="16" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#218460"/>
<stop offset="1" stop-color="#1BC149"/>
</linearGradient>
</defs>
          </svg>

          <p className="text-2xl font-semibold text-white w-56 text-center">controle suas finanças</p>
      </div>

    <div className="h-688 w-screen">
      <div className="justify-center items-center p-40">
        <h1 className="font-semibold text-4xl text-center">Faça seu dinheiro trabalhar para você.</h1>
        <p className="text-base text-gray-600 text-center ml-10 pr-10 mt-3 font-semibold">Por que usar o Organiza?</p>
      </div>

      <div className="flex justify-center items-center">
        <svg className="mr-96 mb-16" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.6316 31.6667V31.9573L35.8371 32.1629L47.6742 44L44 47.6742L30.3684 34.0427V17.0351H35.6316V31.6667ZM33 65.6316C28.4803 65.6316 24.242 64.7744 20.278 63.064C16.3005 61.3476 12.8476 59.0219 9.91284 56.0871C6.97816 53.1524 4.65233 49.6995 2.936 45.722C1.22555 41.758 0.368423 37.5197 0.368423 33C0.368423 28.4803 1.22555 24.242 2.936 20.278C4.65233 16.3005 6.97816 12.8476 9.91284 9.91283C12.8476 6.97815 16.3005 4.65231 20.278 2.93599C24.242 1.22553 28.4803 0.368408 33 0.368408C37.5197 0.368408 41.758 1.22553 45.722 2.93599C49.6995 4.65231 53.1524 6.97815 56.0872 9.91283C59.0219 12.8476 61.3477 16.3005 63.064 20.278C64.7745 24.242 65.6316 28.4803 65.6316 33C65.6316 37.5197 64.7745 41.758 63.064 45.722C61.3477 49.6995 59.0219 53.1524 56.0872 56.0871C53.1524 59.0219 49.6995 61.3476 45.722 63.064C41.758 64.7744 37.5197 65.6316 33 65.6316ZM33 60.3684C40.5738 60.3684 47.0443 57.6981 52.3712 52.3712C57.6981 47.0443 60.3684 40.5737 60.3684 33C60.3684 25.4262 57.6981 18.9556 52.3712 13.6288C47.0443 8.30188 40.5738 5.63157 33 5.63157C25.4262 5.63157 18.9557 8.30188 13.6288 13.6288C8.3019 18.9556 5.63158 25.4262 5.63158 33C5.63158 40.5737 8.3019 47.0443 13.6288 52.3712C18.9557 57.6981 25.4262 60.3684 33 60.3684Z" fill="#3B9373"/>
        </svg>


        <svg className="mr-96 mb-16" width="52" height="69" viewBox="0 0 52 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33334 23.3684H10.0351V22.6667V16C10.0351 11.5743 11.5867 7.82248 14.7046 4.70456C17.8225 1.58665 21.5743 0.0350952 26 0.0350952C30.4257 0.0350952 34.1776 1.58665 37.2954 4.70456C40.4133 7.82248 41.9649 11.5743 41.9649 16V22.6667V23.3684H42.6667H46C47.6458 23.3684 49.0371 23.9463 50.2121 25.1213C51.3871 26.2963 51.9649 27.6876 51.9649 29.3333V62.6667C51.9649 64.3124 51.3871 65.7037 50.2121 66.8787C49.0371 68.0538 47.6458 68.6316 46 68.6316H6.00001C4.35425 68.6316 2.96296 68.0538 1.78794 66.8787C0.61292 65.7037 0.0350952 64.3124 0.0350952 62.6667V29.3333C0.0350952 27.6876 0.61292 26.2963 1.78794 25.1213C2.96296 23.9463 4.35425 23.3684 6.00001 23.3684H9.33334ZM5.29825 62.6667V63.3684H6.00001H46H46.7018V62.6667V29.3333V28.6316H46H6.00001H5.29825V29.3333V62.6667ZM15.2983 22.6667V23.3684H16H36H36.7018V22.6667V16C36.7018 13.0382 35.6571 10.498 33.5795 8.42046C31.502 6.34291 28.9618 5.29825 26 5.29825C23.0382 5.29825 20.498 6.34291 18.4205 8.42046C16.3429 10.498 15.2983 13.0382 15.2983 16V22.6667ZM30.2121 50.2121C29.0371 51.3871 27.6458 51.9649 26 51.9649C24.3543 51.9649 22.963 51.3871 21.7879 50.2121C20.6129 49.0371 20.0351 47.6458 20.0351 46C20.0351 44.3543 20.6129 42.963 21.7879 41.7879C22.963 40.6129 24.3543 40.0351 26 40.0351C27.6458 40.0351 29.0371 40.6129 30.2121 41.7879C31.3871 42.963 31.9649 44.3543 31.9649 46C31.9649 47.6458 31.3871 49.0371 30.2121 50.2121Z" fill="#3B9373"/>
        </svg>


        <svg className="mb-16" width="60" height="66" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.315 58.3572L27.3684 58.9674V57.75V34.9166V34.5121L27.0184 34.3095L7.01841 22.726L5.96494 22.1159V23.3333V46.1666V46.5712L6.31498 46.7739L26.315 58.3572ZM32.6316 57.75V58.9674L33.6851 58.3572L53.6851 46.7739L54.0351 46.5712V46.1666V23.3333V22.1159L52.9816 22.726L32.9816 34.3095L32.6316 34.5121V34.9166V57.75ZM27.0183 64.8094L27.0165 64.8083L3.68497 51.3927C3.68467 51.3926 3.68526 51.3928 3.68497 51.3927C2.72942 50.8393 1.99965 50.1186 1.48119 49.2297C0.963986 48.3431 0.701782 47.3552 0.701782 46.25V19.75C0.701782 18.6448 0.963986 17.6568 1.48119 16.7702C1.99959 15.8815 2.72838 15.1614 3.68378 14.608C3.68338 14.6083 3.68417 14.6077 3.68378 14.608L27.0165 1.19168L27.0183 1.19064C27.9721 0.638458 28.9626 0.368408 30 0.368408C31.0375 0.368408 32.028 0.638458 32.9818 1.19064L32.9836 1.19168L56.3151 14.6073C56.3155 14.6076 56.316 14.6078 56.3165 14.6081C57.2717 15.1614 58.0004 15.8817 58.5189 16.7702C59.0361 17.6568 59.2983 18.6448 59.2983 19.75V46.25C59.2983 47.3552 59.0361 48.3431 58.5189 49.2297C58.0004 50.1184 57.2716 50.8387 56.3161 51.3921C56.3158 51.3923 56.3164 51.3918 56.3161 51.3921L32.9836 64.8083L32.9818 64.8094C32.028 65.3615 31.0375 65.6316 30 65.6316C28.9626 65.6316 27.9721 65.3615 27.0183 64.8094ZM42.9851 22.026L43.3334 22.225L43.6816 22.026L50.0981 18.3593L51.1583 17.7535L50.1012 17.1424L30.3512 5.72577L30.0003 5.52295L29.6493 5.72547L23.1494 9.4755L22.0907 10.0862L23.1519 10.6926L42.9851 22.026ZM29.6489 29.7742L29.9997 29.977L30.3508 29.7744L36.8507 26.0245L37.9033 25.4172L36.8513 24.8091L17.1012 13.3924L16.7503 13.1896L16.3993 13.3921L9.8994 17.1422L8.84676 17.7493L9.89884 18.3576L29.6489 29.7742Z" fill="#3B9373"/>
        </svg>

      </div>
        
      <div className="flex justify-center items-center">
        <h3 className="font-semibold text-3xl mr-64">Serviço ágil</h3>
        <h3 className="font-semibold text-3xl mr-64">Serviço seguro</h3>
        <h3 className="font-semibold text-3xl">Unificado</h3>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="w-72 text-center ml-96">Organize suas despesas de forma rápida e sem estresse.</p>
        <p className="w-64 text-center ml-5">Mantenha seus registros financeiros com total segurança.</p>
        <p className="w-72 text-center mr-96">Tenha todo registro salvos e organizados em um só lugar.</p>
      </div>


    </div>
      
      <div className="flex items-center justify-center text-center h-688 bg-gradient-to-b from-custom1-green to-custom2-green">
        <div className="relative">
          <svg className="absolute top-0 left-" width="88" height="95" viewBox="0 0 88 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="47.5" cy="40" r="37" stroke="#5FB998" stroke-width="6"/>
            <path d="M40.5 54L3 91.5" stroke="white" stroke-width="6" stroke-linecap="round"/>
          </svg>
        </div>
        
        <h3 className="font-semibold text-64 w-1040 text-gray-50">desenvolva, evolua e alcance seus objetivos conosco. Sua parceira financeira para um futuro seguro e próspero.</h3>

        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="4" r="4" fill="#00482E"/>
          <circle cx="36" cy="20" r="4" fill="#00482E"/>
          <circle cx="36" cy="36" r="4" fill="#00482E"/>
          <circle cx="36" cy="52" r="4" fill="#00482E"/>
          <circle cx="20" cy="4" r="4" fill="#00482E"/>
          <circle cx="20" cy="20" r="4" fill="#00482E"/>
          <circle cx="20" cy="36" r="4" fill="#00482E"/>
          <circle cx="20" cy="52" r="4" fill="#00482E"/>
          <circle cx="20" cy="68" r="4" fill="#00482E"/>
          <circle cx="4" cy="4" r="4" fill="#00482E"/>
          <circle cx="4" cy="20" r="4" fill="#00482E"/>
          <circle cx="4" cy="36" r="4" fill="#00482E"/>
          <circle cx="4" cy="52" r="4" fill="#00482E"/>
          <circle cx="4" cy="68" r="4" fill="#00482E"/>
          <circle cx="52" cy="4" r="4" fill="#00482E"/>
          <circle cx="52" cy="20" r="4" fill="#00482E"/>
          <circle cx="52" cy="36" r="4" fill="#00482E"/>
          <circle cx="52" cy="52" r="4" fill="#00482E"/>
          <circle cx="68" cy="4" r="4" fill="#00482E"/>
          <circle cx="68" cy="20" r="4" fill="#00482E"/>
        </svg>


      </div>

    </>
  )
}