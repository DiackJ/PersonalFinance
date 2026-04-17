'use client'

export default function ConfirmButton({children}: {children: React.ReactNode}) {
    return (
        <button type="submit" className={`border-transparent bg-grey-two font-semibold hover:cursor-pointer hover:text-white hover:bg-(--nav-text-color) transition-all rounded-lg h-fit w-fit p-2 text-[14px]`}>
            {children}
        </button>
    )
}