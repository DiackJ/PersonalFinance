'use client'

export default function ModalSkeleton({closeAction, isOpen, children}: {closeAction:() => void; isOpen:boolean; children: React.ReactNode}) {
    return (
        isOpen &&
            <div className={`min-w-screen min-h-screen z-10 fixed bg-black/40 inset-0`}>
                <div className={`absolute right-1/2 top-1/2 border-grey-two bg-white p-4 rounded-lg flex justify-center w-fit h-fit`}>
                    <img src="/icons/icon-close.svg" alt="close" className={`absolute right-1 top-1 hover:cursor-pointer hover:fill-(--nav-text-color) transition-all`} onClick={closeAction}/>
                    {children}
                </div>
            </div>
    );
}