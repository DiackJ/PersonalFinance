'use client'

export default function ModalSkeleton({children}: {children: React.ReactNode}) {
    return (
        <div className={`min-w-screen min-h-screen z-10 fixed bg-black/40 inset-0`}>
            <div className={`absolute right-1/2 top-1/2 border-grey-two bg-white p-4 rounded-lg flex justify-center w-fit h-fit`}>
                {children}
            </div>
        </div>
    );
}