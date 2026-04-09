'use client';
import MainButton from '../../ui-components/MainButton';

export default function Pot() {
    return (
        <div>
            <div className={`flex justify-between mt-10 h-fit w-fit`}>
                <h1 className={`text-main text-[32px] font-bold`}>Pots</h1>
                <div className={`absolute right-6 md:right-16`}>
                    <MainButton>
                        Add New Pot
                    </MainButton>
                </div>
            </div>
            <div className={`flex-col md:grid md:col-span-2`}>

            </div>
        </div>
    );
}