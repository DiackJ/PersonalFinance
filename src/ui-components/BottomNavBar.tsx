'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

export default function BottomNavBar({isActive}: {isActive:boolean}) {
    const path = usePathname();
    //const [currentPage, setCurrentPage] = useState<string>("/overview");

    return (
      <div>
          <nav className={`fixed bottom-0 w-full bg-(--nav-bar-color) border-(--nav-bar-color) rounded-t-lg h-12`}>
              <div className={`absolute mt-1 inline-flex ml-52`}>
                  <Link href="/overview"
                      className={`mr-8 hover:cursor-pointer ${path === "/overview" && "bg-[#F6F4F4] px-4 h-11 rounded-t-lg border-b-[#72090F] border-b-4"}`}>
                      <img src="/icons/icon-overview.svg" alt="overview page icon" className={`mt-2`}/>
                  </Link>
                  <Link href="/transaction"
                      className={`mr-8 hover:cursor-pointer ${path === "/transaction" && "bg-[#F6F4F4] px-4 h-11 rounded-t-lg border-b-[#72090F] border-b-4"}`}>
                      <img src="/icons/icon-transaction.svg" alt="transaction page icon" className={`mt-2`}/>
                  </Link>
                  <Link href="/budget"
                      className={`mr-8 hover:cursor-pointer ${path === "/budget" && "bg-[#F6F4F4] px-4 h-11 rounded-t-lg border-b-[#72090F] border-b-4"}`}>
                      <img src="/icons/icon-budget.svg" alt="budget page icon" className={`mt-2`}/>
                  </Link>
                  <Link href="/pot"
                      className={`mr-8 hover:cursor-pointer ${path === "/pot" && "bg-[#F6F4F4] px-4 h-11 rounded-t-lg border-b-[#72090F] border-b-4"}`}>
                      <img src="/icons/icon-pot.svg" alt="pot page icon" className={`mt-2`}/>
                  </Link>
                  <Link href="/bill"
                      className={`hover:cursor-pointer ${path === "/bill" && "bg-[#F6F4F4] px-4 h-11 rounded-t-lg border-b-[#72090F] border-b-4"}`}>
                      <img src="/icons/icon-bill.svg" alt="recurring bill page icon" className={`mt-2`}/>
                  </Link>
              </div>
          </nav>
      </div>
    );
}