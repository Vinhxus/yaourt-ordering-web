// Privacy.tsx
export default function Privacy() {
  return (
    <main className="px-25 py-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-[#526069]"> Chính sách bảo mật thông tin </h1>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed">
          Chào bạn, cảm ơn bạn đã ghé thăm và tin tưởng Yaourt Nhà Dung! Chúng mình hiểu rằng việc bảo vệ 
          thông tin cá nhân của khách hàng là điều vô cùng quan trọng. Vì vậy, Yaourt Nhà Dung cam kết giữ 
          an toàn tuyệt đối cho những thông tin mà bạn đã chia sẻ với tiệm. Dưới đây là cách chúng mình trân 
          trọng và bảo vệ thông tin của bạn:
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 1. Chúng mình thu thập những thông tin gì? </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Khi bạn đặt hàng hoặc cần hỗ trợ tư vấn, tiệm sẽ chỉ ghi nhận một vài thông tin cơ bản nhất để 
            tiện phục vụ, bao gồm:
          </p>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Họ và tên </li>
            <li className="text-[#43474A] text-lg"> Số điện thoại liên lạc </li>
            <li className="text-[#43474A] text-lg"> Địa chỉ giao hàng </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 2. Thông tin của bạn được dùng để làm gì? </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Yaourt Nhà Dung chỉ sử dụng thông tin của bạn vào những mục đích nhằm mang lại trải nghiệm tốt nhất:
          </p>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Xác nhận đơn đặt hàng, chuẩn bị sản phẩm và giao những hũ sữa chua mát lạnh đến tận tay bạn. </li>
            <li className="text-[#43474A] text-lg"> Liên hệ để hỗ trợ giải đáp thắc mắc hoặc xử lý các vấn đề phát sinh liên quan đến đơn hàng. </li>
            <li className="text-[#43474A] text-lg"> Ghi nhận những đóng góp, phản hồi để tiệm ngày càng hoàn thiện hơn về chất lượng và dịch vụ. </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 3. Lời cam kết từ Yaourt Nhà Dung </h3>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Bảo mật tuyệt đối:</span> Thông tin của bạn chỉ được lưu hành nội bộ tại tiệm để phục vụ cho việc bán hàng.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Không chia sẻ cho bên thứ ba:</span> Chúng mình cam kết KHÔNG bán, trao đổi hay tiết lộ thông tin cá nhân của bạn cho bất kỳ tổ chức, cá nhân nào khác vì mục đích thương mại.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Ngoại lệ duy nhất:</span> Tiệm chỉ cung cấp tên, số điện thoại và địa chỉ của bạn cho đối tác vận chuyển (shipper) để họ có thể giao hàng đến đúng nơi cho bạn.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 4. Quyền lợi của bạn </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Bất cứ lúc nào bạn muốn kiểm tra, thay đổi, cập nhật hoặc yêu cầu chúng mình xóa thông tin cá nhân 
            của bạn khỏi sổ ghi chép của tiệm, bạn hoàn toàn có thể chủ động liên hệ trực tiếp với chúng mình.
          </p>
        </div>

      </div>
    </main>
  )
}