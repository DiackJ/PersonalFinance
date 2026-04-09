'use client'
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function SideNavBar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const handleExpandNav = () => {
        setIsExpanded(prev => !prev);
    };

const path = usePathname();

    return (
        <div>
            <div className={`min-h-screen flex border-(--nav-bar-color) bg-(--nav-bar-color) text-(--nav-text-color) pr-2.5 rounded-r-lg
                ${isExpanded ? 'w-48' : 'w-12'}
            `}>
                <div className={`absolute top-4 left-3 ${isExpanded && "left-8"}`}>
                    {isExpanded
                        ? <img src="/icons/logo-large.svg" alt="app logo"
                               className={`mb-20`}
                          />
                        : <img src="/icons/logo-small.svg" alt="app logo"
                               className={`mb-20`}
                          />
                    }
                </div>
                <div className={`flex flex-col font-semibold mt-26 ${!isExpanded ? "ml-2 w-10" : "ml-2 w-44"}`}>
                    <Link href="/overview" className={`inline-flex ${path === "/overview" && `bg-[#F6F4F4] py-4 pr-2 w-full -ml-2 rounded-r-lg border-l-[#72090F] border-l-6`}`}>
                        <img src="/icons/icon-overview.svg" alt="home icon" className={`${isExpanded ? "pl-2" : "pl-1"}`}/>
                        {isExpanded && <p className={`pl-2`}>Overview</p>}
                    </Link>
                    <Link href="/transaction" className={`mt-10 inline-flex ${path === "/transaction" && "bg-[#F6F4F4] py-4 w-full -ml-2 rounded-r-lg border-l-[#72090F] border-l-6"}`}>
                        <img src="/icons/icon-transaction.svg" alt="transaction icon" className={`${isExpanded ? "pl-2" : "pl-1"}`}/>
                        {isExpanded && <p className={`pl-2`}>Transactions</p>}
                    </Link>
                    <Link href="/budget" className={`mt-10 inline-flex ${path === "/budget" && "bg-[#F6F4F4] py-4 w-full -ml-2 rounded-r-lg border-l-[#72090F] border-l-6"}`}>
                        <img src="/icons/icon-budget.svg" alt="budget icon" className={`${isExpanded ? "pl-2" : "pl-1"}`}/>
                        {isExpanded && <p className={`pl-2`}>Budgets</p>}
                    </Link>
                    <Link href="/pot" className={`mt-10 inline-flex ${path === "/pot" && "bg-[#F6F4F4] py-4 w-full -ml-2 rounded-r-lg border-l-[#72090F] border-l-6"}`}>
                        <img src="/icons/icon-pot.svg" alt="pot icon" className={`${isExpanded ? "pl-2" : "pl-1"}`}/>
                        {isExpanded && <p className={`pl-2`}>Pots</p>}
                    </Link>
                    <Link href="/bill" className={`mt-10 inline-flex ${path === "/bill" && "bg-[#F6F4F4] py-4 w-full -ml-2 rounded-r-lg border-l-[#72090F] border-l-6"}`}>
                        <img src="/icons/icon-bill.svg" alt="bill icon" className={`${isExpanded ? "pl-2" : "pl-1"}`}/>
                        {isExpanded && <p className={`pl-2`}>Recurring Bills</p>}
                    </Link>
                </div>
                <div className={`absolute bottom-20 left-3`}>
                    {isExpanded
                        ? <div className={`inline-flex hover:cursor-pointer`}
                               onClick={handleExpandNav}
                          >
                            <img
                                src="/icons/icon-minimize-nav.svg" alt="minimize menu"
                            />
                            <p className={`pl-2`}>Minimize Menu</p>
                          </div>
                        : <img
                            src="/icons/icon-expand-nav.svg" alt="expand menu"
                            className={`w-6 h-6 hover:cursor-pointer`}
                            onClick={handleExpandNav}
                          />
                    }
                </div>
            </div>
        </div>
    )
}