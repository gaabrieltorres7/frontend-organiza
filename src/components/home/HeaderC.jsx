'use client'
import React from 'react';

function HeaderC() {
  return (
    <nav className=" border-gray-200 bg-custom-green">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-14 p-5">
        <a href="" class="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Organiza</span>
        </a>

        <div className="absolute top-auto right-24 w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-14 md:mt-0">
            <li>
              <a href="/login" className="block py-2 pl-3 pr-4 text-white md:p-0 dark:text-white " aria-current="page">Login</a>
            </li>
            <li>
              <a href="/cadastro" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">Cadastre-se</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default HeaderC;
