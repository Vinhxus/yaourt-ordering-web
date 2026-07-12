import './Button.css'

export default function Button({children}: {children: React.ReactNode}) {
    return (
        <button className="nav-but px-1 py-1 hover:underline disabled:cursor-not-allowed cursor-pointer">
            {children}
        </button>
    )
}