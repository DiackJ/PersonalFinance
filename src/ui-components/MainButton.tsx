'use client';

export default function MainButton({children}: {children: React.ReactNode}) {
    return (
        <div>
            <button className={`text-grey-two mt-1 inline-flex hover:cursor-pointer hover:bg-(--secondary-text-color) border-(--main-text-color) bg-(--main-text-color) w-fit h-fit p-3 font-semibold text-[14px] rounded-lg`}>
                <img src="/icons/icon-plus.svg" alt="add icon" className={`w-5 h-5 pr-1`}/>
                {children}
            </button>
        </div>
    );
}