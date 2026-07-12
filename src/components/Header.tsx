import './Header.css'

export function Header() {
  return (
    <div className="py-10 Header flex flex-col justify-center items-center gap-1">
      <span className="top-head rounded px-2 py-1 text-green-800"> Healthy & Fresh </span>
      <span className="tilte-1 font-bold text-4xl text-[#526069]"> Thưởng thức </span>
      <span className="tilte-2 font-bold text-4xl text-[#9E4039]"> Vị yaourt Đà Lạt </span>
      <span className="w-150 text-center font-bold text-[#43474A]"> Từng thìa yaourt mịn màng kết hợp cùng trái cây tươi sạch, mang đến trải
nghiệm thanh mát và tràn đầy năng lượng cho ngày mới. </span>
    </div>
  )
}