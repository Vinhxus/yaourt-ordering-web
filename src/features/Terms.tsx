// Terms.tsx
export default function Terms() {
  return (
    <main className="px-25 py-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-4xl text-[#526069]"> Điều khoản dịch vụ </h1>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed">
          Chào mừng bạn đến với Yaourt Nhà Dung! Khi truy cập vào website và đặt mua sữa chua của tiệm, bạn 
          đồng ý với các điều khoản dịch vụ dưới đây. Chúng mình thiết lập những điều khoản này nhằm đảm bảo 
          quyền lợi tốt nhất cho bạn và giúp quá trình phục vụ của tiệm diễn ra suôn sẻ nhất.
        </p>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 1. Chính sách đặt hàng và thanh toán </h3>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Cách thức đặt hàng:</span> Bạn có thể đặt hàng trực tiếp qua website, gọi điện/nhắn tin Zalo qua số hotline 0359 500 729, hoặc liên hệ qua Fanpage chính thức của tiệm.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Xác nhận đơn hàng:</span> Sau khi bạn đặt hàng, tiệm sẽ liên hệ lại để xác nhận số lượng, hương vị, địa chỉ và thời gian giao hàng.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Thanh toán:</span> Yaourt Nhà Dung hỗ trợ hai hình thức thanh toán:
              <ul className="flex flex-col gap-1 pl-6 list-[circle] list-inside mt-1">
                <li> Thanh toán bằng tiền mặt khi nhận hàng (COD). </li>
                <li> Chuyển khoản qua ngân hàng/ví điện tử (thông tin chuyển khoản sẽ được cung cấp khi xác nhận đơn). </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 2. Chính sách giao hàng </h3>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Tiệm nhận giao hàng tận nơi trong khu vực nội thành Thành phố Đà Lạt. </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Phí giao hàng:</span> Tùy thuộc vào khoảng cách từ tiệm (14/1 An Bình) đến địa chỉ của bạn, phí ship sẽ được tính theo giá của các đối tác vận chuyển hiện hành. Tiệm sẽ thông báo rõ phí ship trước khi giao.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Thời gian giao hàng:</span> Khung giờ giao hàng sẽ được tiệm và bạn thống nhất trước. Chúng mình luôn cố gắng giao sớm nhất để đảm bảo yaourt giữ được độ lạnh hoàn hảo.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 3. Chính sách kiểm tra và đổi trả </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Vì sữa chua là sản phẩm ăn uống tươi mát, lên men tự nhiên, nên chúng mình có một số lưu ý nhỏ:
          </p>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Kiểm tra khi nhận:</span> Bạn vui lòng kiểm tra kỹ số lượng và tình trạng hũ sữa chua ngay khi shipper giao đến.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Trường hợp được đổi/hoàn tiền:</span> Tiệm sẵn sàng đổi sản phẩm mới hoặc hoàn tiền 100% nếu sản phẩm bị đổ, vỡ trong quá trình vận chuyển, hoặc hũ sữa chua có dấu hiệu hư hỏng, mùi vị bất thường do lỗi sản xuất.
            </li>
            <li className="text-[#43474A] text-lg">
              <span className="font-bold">Thời gian khiếu nại:</span> Để được hỗ trợ tốt nhất, bạn vui lòng phản hồi về chất lượng sản phẩm trong vòng 24 giờ kể từ khi nhận hàng. Quá thời gian này, tiệm xin phép từ chối giải quyết khiếu nại do không thể kiểm soát được điều kiện bảo quản của khách hàng.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 4. Trách nhiệm của khách hàng </h3>
          <ul className="flex flex-col gap-1 pl-2 list-disc list-inside">
            <li className="text-[#43474A] text-lg"> Vui lòng cung cấp chính xác thông tin liên hệ (tên, số điện thoại, địa chỉ) để shipper có thể giao hàng nhanh chóng. </li>
            <li className="text-[#43474A] text-lg"> Vì đây là sản phẩm lên men, vui lòng bảo quản sữa chua trong ngăn mát tủ lạnh (2-8°C) ngay sau khi nhận hàng để giữ được hương vị thơm ngon nhất. </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl text-[#526069]"> 5. Thay đổi điều khoản </h3>
          <p className="text-[#43474A] text-lg leading-relaxed">
            Yaourt Nhà Dung có quyền thay đổi, chỉnh sửa các điều khoản dịch vụ này bất cứ lúc nào để phù hợp 
            với tình hình hoạt động của tiệm. Những thay đổi sẽ được cập nhật trực tiếp trên trang web này.
          </p>
        </div>

        <p className="text-[#43474A] text-lg leading-relaxed font-bold">
          Cảm ơn bạn đã đọc và luôn ủng hộ Yaourt Nhà Dung!
        </p>

      </div>
    </main>
  )
}