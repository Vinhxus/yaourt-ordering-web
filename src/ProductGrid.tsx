import Div from "./Div";
import phomai from './assets/phomai.jpg'
import tt from './assets/tt.jpg'
import dau from './assets/dau.jpg'
import macmac from './assets/macmac.jpg'
import yenmach from './assets/yenmach.jpg'

export interface Product {
  name: string;
  price: string;
  bestseller?: boolean;
  description: string;
  pict?: string;
}

interface GridProps {
  select: Product | null;
  onSelect: (p: Product) => void;
}

export function ProductGrid({select, onSelect} : GridProps) {
  const products : Product[] = [
    { 
      name: "Yaourt Phô mai", 
      price: "15k", 
      bestseller: true, 
      description: "Vị béo ngậy đặc trưng của phô mai hòa quyện cùng sữa chua lên men tự nhiên mịn màng.",
      pict: phomai,
    },
    { 
      name: "Yaourt truyền thống", 
      price: "12k", 
      bestseller: true, 
      description: "Hương vị sữa chua truyền thống thanh mát, chua ngọt hài hòa, mộc mạc mà gây nghiện.", 
      pict: tt,
    },
    { 
      name: "Yaourt matcha", 
      price: "15k", 
      description: "Sự kết hợp hoàn hảo giữa vị chát nhẹ của bột matcha Nhật Bản và vị chua dịu của yaourt.", 
    },
    { 
      name: "Yaourt nếp cẩm", 
      price: "14k", 
      description: "Nếp cẩm dẻo thơm bùi bùi kết hợp cùng yaourt mát lạnh, ăn cực kỳ vui miệng và bổ dưỡng.", 
    },
    { 
      name: "Yaourt yến mạch", 
      price: "14k", 
      description: "Sự lựa chọn healthy tuyệt vời với hạt yến mạch giàu xơ, giòn nhẹ và cực kỳ thanh đạm.", 
      pict: yenmach,
    },
    { 
      name: "Yaourt khoai môn", 
      price: "15k", 
      description: "Hương thơm ngọt dịu, bùi béo đặc trưng của khoai môn nguyên chất quyện trong từng thìa yaourt.", 
    },
    { 
      name: "Yaourt bí đỏ", 
      price: "14k", 
      description: "Vị ngọt thanh tự nhiên và màu sắc bắt mắt từ bí đỏ chín vàng, giàu vitamin cho làn da.", 
    },
    { 
      name: "Yaourt mác mác", 
      price: "20k", 
      description: "Sự hòa quyện tuyệt vời giữa vị chua thanh, thơm lừng đặc trưng của trái mác mác và lớp yaourt mềm mịn, mang lại cảm giác sảng khoái bừng tỉnh.",
      pict: macmac, 
    },
    { 
      name: "Yaourt dâu tây", 
      price: "20k", 
      description: "Từng lát dâu tây tươi chín mọng, chua ngọt tự nhiên kết hợp cùng vị thanh mát của yaourt, tạo nên một hương vị ngọt ngào khó cưỡng.", 
      pict: dau,
    },
    { 
      name: "Yaourt dẻo mix trái cây", 
      price: "20k", 
      description: "Yaourt dẻo xắt miếng vừa ăn, kết hợp cùng các loại trái cây tươi mát lạnh, giải nhiệt cực đã.", 
    },
  ];

  return (
    <div className="px-20 grid grid-cols-4 gap-3 p-4">
      {products.map((p) => (
        <Div 
          key={p.name} 
          name={p.name} 
          price={p.price} 
          onClick={() => onSelect(p)}
          isSelected = { select?.name === p.name} 
        />
      ))}
    </div>
  );
}

