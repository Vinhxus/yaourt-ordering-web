import { Link } from 'react-router-dom';
import useMobile from '../service/useMobile';
import Button from './Button'
import './navBar.css'
import { useState } from 'react';


export function NavBar() {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ----- Desktop -----
  if (!isMobile) {
    return (
      <nav className="navBar w-full h-12 flex gap-1 px-3 border-b border-gray-300">
        <div>
          <Link to="/">
            <h2 className="text-orange-500 font-bold p-1 text-2xl w-max">Yaourt nhà Dung</h2>
          </Link>
        </div>
        <div className="gap-3 w-full flex justify-center items-center p-2">
          <Link to="/about">
            <Button>About us</Button>
          </Link>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
      </nav>
    );
  }

  // ----- Mobile -----
  return (
    <nav className="relative w-full bg-white border-b border-gray-300 py-2 flex justify-between items-center">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <h2 className="text-orange-500 font-bold text-xl px-2">Yaourt nhà Dung</h2>
      </Link>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl p-1 focus:outline-none" // có flex nên tự nằm sát phải
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-300 flex flex-col p-4 gap-3 shadow-lg z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">
            About us
          </Link>
        </div>
      )}
    </nav>
  );
}