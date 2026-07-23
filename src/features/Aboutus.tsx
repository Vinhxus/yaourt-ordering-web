
export default function Aboutus() {
  return (
    <main className="px-25 py-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-[#526069]"> Về Yaourt Nhà Dung </h1>
          <h2 className="font-bold text-2xl text-[#9E4039]"> Yaourt Nhà Dung – Tiệm sữa chua nhỏ, tâm huyết lớn </h2>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed">
          Chào mừng bạn đến với Yaourt Nhà Dung! Chúng mình luôn tin tưởng sâu sắc vào một điều: 
          "Những gì đi từ trái tim sẽ chạm đến trái tim". Giữa nhịp sống hối hả, Yaourt Nhà Dung ra đời 
          với mong muốn mang đến cho bạn một góc nhỏ bình yên, nơi bạn có thể chậm lại một chút để thưởng 
          thức Yaourt Đà Lạt đúng điệu theo cách Mộc mạc – Chân phương – Trọn vị.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> Tinh túy từ thiên nhiên </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Mỗi hũ sữa chua tại tiệm đều được chăm chút tỉ mỉ từ nguồn sữa tươi sạch tự nhiên kết hợp 
            cùng quy trình lên men truyền thống. Chúng mình nói không với các chất bảo quản, để mỗi 
            muỗng yaourt bạn thưởng thức đều là một trải nghiệm vị giác đầy lôi cuốn, giữ trọn vẹn hương 
            vị nguyên bản và an lành nhất.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-2xl text-[#526069]"> Thực đơn chạm đến mọi giác quan </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Sự kết hợp tinh tế giữa sữa chua truyền thống và các nguyên liệu chọn lọc đã tạo nên 3 dòng 
            hương vị đặc trưng, sẵn sàng chiều lòng bất kỳ thực khách nào:
          </p>

          <ul className="flex flex-col gap-2 pl-2">
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">🧀 Đậm đà:</span> Dành cho những ai yêu thích sự phá cách. 
              Thử ngay vị phô mai béo mịn màng hay món sữa chua muối lạ miệng, đậm vị khó quên.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">🍓 Tươi mới:</span> Sự bùng nổ của trái cây tươi nhiệt đới. 
              Giải nhiệt tức thì với Dâu tây Đà Lạt chua chua ngọt ngọt, Chanh dây mọng nước và Xoài ngọt dịu.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">🌾 Lành mạnh:</span> Lựa chọn hoàn hảo cho lối sống xanh. 
              Nuông chiều vóc dáng với Yến mạch nhẹ bụng, Hạt chia thanh sảng và Cốm thơm nồng nàn.
            </li>
          </ul>
        </div>

      </div>
    </main>
  )
}