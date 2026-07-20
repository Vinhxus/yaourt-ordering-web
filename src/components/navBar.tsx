import { Link } from 'react-router-dom';
import useMobile from '../service/useMobile';
import Button from './Button'
import './navBar.css'


export function NavBar() {
    const isMobile = useMobile();

    if (isMobile) return null;
    
    return (
        <nav className = "navBar w-full h-12 flex gap-1 px-3 border-b border-gray-300">
            <div>
                <Link to="/">
                    <h2 className = "text-orange-500 font-bold p-1 text-2xl w-max"> Yaourt nhà Dung </h2>
                </Link>
            </div>
            <div className="gap-3 w-full flex justify-center items-center p-2">
                <Link to="/about">
                    <Button > About us </Button>
                </Link>
                
                <Link to="/">
                    <Button> Home </Button>
                </Link>
            </div>
        </nav>
    )
}