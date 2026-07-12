import Div from "./Div";

export interface Product {
  name: string;
  price: string;
}

interface GridProps {
  select: Product | null;
  onSelect: (p: Product) => void;
}

export function ProductGrid({select, onSelect} : GridProps) {
  const products : Product[] = [
    { name: "Yaourt Phô mai", price: "15k"} ,
    { name: "Yaourt truyển thống", price: "12k"} ,
    { name: "Yaourt matcha", price: "15k" },
    { name: "Yaourt nếp cẩm", price: "14k" },
    { name: "Yaourt yến mạch", price: "14k" },
    { name: "Yaourt khoai môn", price: "15k" },
    { name: "Yaourt bí đỏ", price: "14k" },
    { name: "Yaourt dẻo mix trái cây", price: "20k"},
  ];

  return (
    <div className="px-20 grid grid-cols-4 gap-3 p-4">
      {products.map((p) => (
        <Div 
          key={p.name} 
          name={p.name} 
          price={p.price} 
          onClick={() => onSelect(p)}
          isSelected = { select?.name === p.name } />
      ))}
    </div>
  );
}

export function BestSellerGrid({select, onSelect} : GridProps) {
  const bestSellers = [
    
    { name: "Sữa chua kem muối", price: "15k"} ,
    { name: "Sữa chua hy lạp", price: "15k"} ,
  ];
  
  
  return (
    <div className="grid grid-cols-2 gap-3 px-20 py-4">
      {bestSellers.map((p) => (
        <Div 
          key={p.name} 
          name={p.name} 
          price={p.price} 
          onClick={() => onSelect(p)}
          isSelected = { select?.name === p.name } 
        />
      ))}
    </div>
  )
}