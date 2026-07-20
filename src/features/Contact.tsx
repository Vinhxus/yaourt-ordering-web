// Contact.tsx
export default function Contact() {
  return (
    <main className="px-25 py-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-[#526069]"> Liên hệ với Yaourt Nhà Dung </h1>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed">
          Chào bạn, bạn đang thèm một hũ sữa chua mát lạnh? Bạn muốn đặt số lượng lớn cho bữa tiệc nhỏ sắp tới? 
          Hay đơn giản là có vài lời nhắn nhủ muốn gửi đến tiệm? Đừng ngần ngại kết nối với Yaourt Nhà Dung qua 
          các kênh dưới đây nhé! Chúng mình luôn sẵn sàng lắng nghe và phục vụ bạn.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 🏡 Ghé thăm tiệm trực tiếp </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Nếu có dịp dạo quanh Đà Lạt, mời bạn ghé ngang góc nhỏ của chúng mình để tự tay chọn những hũ sữa 
            chua tươi mới nhất:
          </p>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Địa chỉ: 14/1 An Bình, phường Xuân Hương, Thành phố Đà Lạt </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 🕒 Giờ hoạt động </h3>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Mở cửa mỗi ngày từ 7:00 sáng đến 9:00 tối </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 📞 Gọi điện hoặc nhắn tin </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Để đặt hàng nhanh chóng hoặc cần giao hàng hỏa tốc, bạn cứ gọi trực tiếp hoặc nhắn Zalo cho tiệm nha:
          </p>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Hotline / Zalo: 0359 500 729 </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 🌐 Kết nối qua mạng xã hội </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Bạn cũng có thể theo dõi Fanpage của Yaourt Nhà Dung để cập nhật những hương vị mới, các chương trình 
            ưu đãi hoặc đơn giản là nhắn tin đặt hàng qua Messenger (bấm vào biểu tượng Facebook ở góc dưới màn 
            hình nhé).
          </p>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed font-bold">
          Yaourt Nhà Dung luôn trân trọng từng tin nhắn và cuộc gọi từ bạn. Chúc bạn một ngày thật vui vẻ và ngọt ngào!
        </p>

      </div>
    </main>
  )
}