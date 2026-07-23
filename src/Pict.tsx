import type { Product } from "./ProductGrid";

interface PictProps {
  pic: string;
  selectedProduct: Product | null;
}

export default function Pict({ selectedProduct }: PictProps) {
  if (!selectedProduct) return null;

  return (
    <div className="flex items-center gap-6 bg-[#F5F5F5] rounded-2xl p-4 max-w flex-1 mt-2 border-amber-700 border">
      <div className="w-120 h-120 shrink-0 rounded-xl overflow-hidden">
        <img src={selectedProduct.pict} alt={selectedProduct.name} className="w-full h-full object-cover"/>
      </div>

      <div className="flex flex-col gap-1 flex-1 p-4 items-start justify-start">
        <span className="text-red-400 font-bold"> { selectedProduct.bestseller && 'BEST SELLER ⭐'} </span>
        <span className="text-3xl font-bold text-slate-500">{selectedProduct.name} </span>
        <span className="text-2xl text-slate-400">{selectedProduct.description} </span>
        <span className="text-2xl font-bold text-slate-800">{selectedProduct.price} </span>
      </div>
    </div>
  );
}