import Button from './Button'
import './navBar.css'


export function NavBar() {
    return (
        <nav className = "navBar w-full h-12 flex gap-1 ">
            <div>
                <h2 className = "text-orange-500 font-bold p-1 text-2xl w-max"> Yaourt nhà Dung </h2>
            </div>
            <div className="gap-3 w-full flex justify-center items-center p-2">
                <Button> About us </Button>
                <Button> Menu </Button>
                <Button> Location </Button>
            </div>
        </nav>
    )
}