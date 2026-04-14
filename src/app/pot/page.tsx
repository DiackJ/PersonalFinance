'use client';
import MainButton from '@/ui-components/MainButton';
import data from '@/test-data/pot-test.json';
//import type { Pot } from '@/types/Pot';

export default function Pot() {
    const pots = data.pots;

    return (
        <div className={`overflow-y-auto scroll-my-1 pb-14`}>
            <div className={`flex justify-between mt-3 md:mt-7 h-fit`}>
                <h1 className={`text-main text-[32px] font-bold`}>Pots</h1>
                <div className={``}>
                    <MainButton>
                        Add New Pot
                    </MainButton>
                </div>
            </div>
            <div className={`grid md:grid-cols-2 gap-y-6 md:gap-8 mt-6`}>
                {pots.map((pot) => (
                    <div key={pot.id} className={`h-fit w-75 md:w-100 p-2 bg-white border-white rounded-lg`}>
                        <div className={`h-fit flex justify-between mb-2`}>
                            <div className={`inline-flex space-x-1`}>
                                <div className={`h-5 w-5 rounded-full bg-orange-200 mt-1`}></div>
                                <p className={`text-[20px]`}>{pot.title}</p>
                            </div>
                            <img src="/icons/icon-ellipsis.svg" alt="ellipsis menu"/>
                        </div>
                        <div className={`h-fit flex justify-between mb-1`}>
                            <p>Total Saved</p>
                            <p className={`text-[20px] font-semibold`}>${pot.totalSaved}</p>
                        </div>
                        <div className={`h-fit`}>
                            <div className={`bg-(--nav-text-color) rounded-full h-2`} style={{width: `100%`}}>
                                <div className={`bg-(--nav-bar-color) rounded-full h-2`} style={{width: `${pot.percentSaved}%`}}></div>
                            </div>
                        </div>
                        <div className={`h-fit flex justify-between mb-2 text-[12px] text-grey-one`}>
                            <p>20%</p>
                            <p>${pot.targetAmount}</p>
                        </div>
                        <div className={`h-fit w-fit space-x-8 md:space-x-10`}>
                            <button className={`ml-8 md:ml-20 border-grey-two rounded-lg bg-grey-two hover:cursor-pointer hover:bg-(--nav-text-color) transition-all text-main text-[14px] h-fit w-fit p-3`}>+ Add Money</button>
                            <button className={`border-grey-two rounded-lg bg-grey-two text-main hover:cursor-pointer hover:bg-(--nav-text-color) transition-all text-[14px] h-fit w-fit p-3`}>- Withdraw</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}