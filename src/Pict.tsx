import type { Product } from "./ProductGrid";

interface PictProps {
  pic: string;
  selectedProduct: Product | null;
}

export default function Pict({ pic, selectedProduct }: PictProps) {
  if (!selectedProduct) return null;

  return (
    <div className="flex items-center gap-6 bg-slate-50 rounded-2xl p-4 max-w-md flex-1">
      <div className="w-96 h-96 shrink-0 rounded-xl overflow-hidden">
        <img src={pic} alt={selectedProduct.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-slate-500">{selectedProduct.name}</span>
        <span className="text-2xl font-bold text-slate-800">{selectedProduct.price}</span>
      </div>
    </div>
  );
}