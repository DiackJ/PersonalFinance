'use client'
import { useState, useEffect } from 'react';
import ConfirmButton from '@/ui-components/ConfirmButton';
import type { Pot } from '@/types/Pot';

export default function AddWithdrawMoney({moneyAction, pot}: {moneyAction:string; pot:Pot | null;}) {
    const [potTitle, setPotTitle] = useState<string>(pot!.title);
    const [buttonText, setButtonText] = useState<string>("");
    const handleButtonText = (v:string) => {
        if (v === "add") {
            setButtonText("Add Money");
        } else if (v === "withdraw") {
            setButtonText("Withdraw");
        }
    };
    useEffect(() => {
        handleButtonText(moneyAction);
    }, []);

    return (
        <div className={`flex justify-center`}>
            <div className={`inline-flex h-fit space-x-1`}>
                <div className={`border-transparent rounded-full h-6 w-6 bg-orange-200`}></div>
                <h1 className={`text-[32px] -mt-3`}>{pot!.title}</h1>
            </div>
            <div className={`flex justify-between h-fit`}>
                <p>Total Saved</p>
                <p className={`text-[20px] font-semibold`}>${pot!.totalSaved}</p>
            </div>
            <div className={`border-transparent bg-(--nav-text-color) h-2 rounded-full`} style={{width: `100%`}}>
                <div className={`border-transparent bg-(--nav-bar-color) h-2 rounded-full`}
                     style={{width: `${pot!.percentSaved}%`}}></div>
            </div>
            <div className={`flex justify-between h-fit text-[12px] text-grey-one`}>
                <p>{pot!.percentSaved}%</p>
                <p>${pot!.targetAmount}</p>
            </div>
            <form method="post" className={`flex-col`}>
                <label htmlFor="amount">Amount</label>
                <input className={`border-grey-300 h-6 w-20 rounded-md`} name="amount" type="text" value={potTitle}
                       onChange={(e) => setPotTitle(e.target.value)}/>
                <ConfirmButton>
                    {buttonText}
                </ConfirmButton>
            </form>
        </div>
    );
}