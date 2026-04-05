'use client'
import clsx from "clsx";
import { useState } from "react";

export default function SideNavBar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const handleExpandNav = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div>
            <div className={`min-h-screen border-(--nav-bar-color) bg-(--nav-bar-color) text-(--nav-text-color) p-2.5 rounded-r-lg
                ${isExpanded ? 'w-48' : 'w-12'}
            `}>
                <div>
                    {isExpanded
                        ? <img src="/icons/logo-large.svg" alt="app logo"
                               className={`mb-20 mt-2`}
                          />
                        : <img src="/icons/logo-small.svg" alt="app logo"
                               className={`mb-20 mt-2`}
                          />
                    }
                </div>
                <div className={`flex-block justify-items-center`}>
                    <div className={`inline-flex mb-10`}>
                        <img src="/icons/icon-overview.svg" alt="overview page icon" />
                        {isExpanded && <p className={`pl-2 pt-1`}>Overview</p> }
                    </div>
                    <div className={`inline-flex mb-10`}>
                        <img src="/icons/icon-transaction.svg" alt="transaction page icon" />
                        {isExpanded && <p className={`pl-2 pt-1`}>Transactions</p> }
                    </div>
                    <div className={`inline-flex mb-10`}>
                        <img src="/icons/icon-budget.svg" alt="budget page icon" />
                        {isExpanded && <p className={`pl-2 pt-1`}>Budgets</p> }
                    </div>
                    <div className={`${isExpanded && '-ml-37.5'} -ml-2 mb-10`}>
                        <img src="/icons/icon-pot.svg" alt="pot page icon" />
                        {isExpanded && <p className={`absolute -mt-5.5 ml-6.5`}>Pots</p>}
                    </div>
                    <div className={`inline-flex`}>
                        <img src="/icons/icon-bill.svg" alt="recurring bills page icon" />
                        {isExpanded && <p className={`pl-2 pt-1`}>Recurring Bills</p> }
                    </div>
                </div>
                <div>
                    {isExpanded
                        ? <div className={`absolute bottom-20 inline-flex hover:cursor-pointer`}
                               onClick={handleExpandNav}
                          >
                            <img
                                src="/icons/icon-minimize-nav.svg" alt="minimize menu"
                            />
                            <p className={`pl-2`}>Minimize Menu</p>
                          </div>
                        : <img
                            src="/icons/icon-expand-nav.svg" alt="expand menu"
                            className={`w-6 h-6 absolute bottom-20 hover:cursor-pointer`}
                            onClick={handleExpandNav}
                          />
                    }
                </div>
            </div>
        </div>
    )
}