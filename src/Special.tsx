
export default function Special(){
    return(
        <div className="px-20 gap-3 mt-5">
            <div className= "grid grid-cols-3">
                <div className="h-[1px] border-b border-[#43474A] translate-y-3 gap-2"> </div>
                <h1 className=" text-[#526069] text-center font-bold text-2xl"> Đặc biệt </h1>
                <div className="h-[1px] border-b border-[#43474A] translate-y-3 gap-2"> </div>

            </div>
            
            <div className="flex gap-6 mt-2">

                <div className="flex flex-1 border-2 rounded px-2 py-1">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#526069]"> Sữa chua uống mix thạch hoa quả tươi</h1>
                        <span className="text-[#43474A]"> Lắc đều và thưởng thức trọn vẹn vị tươi ngon từ thạch trái cây. </span>
                        <span className="text-[#9E4039]"> 30k/chai </span>
                    </div>
                    <div className="border-1 w-max">
                        Pict
                    </div>
                    
                </div>

                <div className="flex flex-2 border-2 rounded px-2 py-1"> 
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#526069]"> Sữa chua kem muối</h1>
                        <span className="text-[#43474A]"> Vị chua nhẹ của yogurt hòa quyệncùng lớp kem muối mịn màng, mằn mặn đầy mê hoặc. </span>
                        <div className="bg-gray-500 flex justify-between border-1 rounded px-2 py-1">  
                            <div className="text-[#FFFFFF]"> Size M (300ml) </div>
                            <div className="text-[#FFFFFF]"> 30k</div>
                        </div>
                        <div className="bg-gray-500 flex justify-between border-1 rounded px-2 py-1"> 
                            <div className="text-[#FFFFFF]"> Size M (300ml) </div>
                            <div className="text-[#FFFFFF]"> 30k</div>
                        </div>
                    </div>
                    <div className="border-1 w-max h-70">
                        Pict
                    </div>
                </div>
            </div>
        </div>
    )
}
