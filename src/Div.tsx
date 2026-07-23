import './Div.css'

interface ProductProps {
  name: string;
  price: number | string; 
  onClick: () => void;
  isSelected?: boolean;
}

export default function Div({ name, price, onClick, isSelected}: ProductProps){

    return (
        <button 
            className={`flex flex-col Div px-2 py-1 ${isSelected ? 'text-amber-400 bg-[#d63425]' : ''}`}
            onClick = {onClick}
        >
            <span className="font-bold"> {name} </span>
            <span className="font-bold"> {price} </span>
        </button>
    )
}

