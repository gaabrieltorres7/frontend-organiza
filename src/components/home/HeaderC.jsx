'use client'
import React from 'react';
import Link from 'next/link';

function HeaderC() {
  return (
    <nav className="bg-custom-green">
      <div className="flex flex-wrap items-center justify-between ml-11  p-0 md:p-5 ">
        <a href="" class="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">Organiza</span>
        </a>

        <div className="" >
          <ul className="font-medium flex mr-2 p-4 md:p-0  ">
            <li>
              <Link href="/login" className="block py-2 pl-3 pr-4  text-white" aria-current="page">Login</Link>
            </li>
            <li>
              <Link href="/cadastro" className="block py-2 pl-3 pr-4 p rounded border-2 border-white text-white hover:bg-slate-300">Cadastre-se</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default HeaderC;
