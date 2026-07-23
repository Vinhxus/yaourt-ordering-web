import drink from './assets/drink.png'
import './Special.css'
import muoi from './assets/muoi.jpg'

export default function Special(){
    return(
        <div className="px-2 md:px-20 gap-3 mt-5">
            <div className= "grid grid-cols-3">
                <div className="h-[1px] border-b border-[#43474A] translate-y-4 gap-2"> </div>
                <h1 className=" text-[#526069] text-center font-bold text-2xl md:text-4xl"> Đặc biệt </h1>
                <div className="h-[1px] border-b border-[#43474A] translate-y-4 gap-2"> </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-5">

                <div className="bg-[#526069] flex flex-2 border-2 rounded-2xl gap-2 px-2 py-1 relative overflow-hidden spe">
                    <div className="flex flex-col gap-1">
                        <span className="text-[#FFFFFF] text-3xl"> Sữa chua uống</span>
                        <span className="text-[#FFFFFF] text-3xl"> mix thạch hoa quả tươi </span>
                        <span className="text-[#D6E5EF]"> Lắc đều và thưởng thức trọn vẹn vị tươi ngon từ thạch trái cây. </span>
                        
                        <p className="text-red-100 text-2xl">
                            30k
                            <span className="align-sub ml-1 text-pink-100">/chai</span>
                        </p>  
                    </div>
                    <div className="border-15 border-amber-100 w-max h-max rounded-2xl">
                        <img src={drink} alt="drink" className="w-75 h-60 md:h-75"/>
                    </div>
                </div>

                <div className="bg-[#526069] flex flex-2 border-2 rounded-2xl gap-2 px-2 py-1 relative overflow-hidden spe"> 
                    <div className="flex flex-col gap-1">
                        <span className="text-[#FFFFFF] text-3xl"> Sữa chua </span>
                        <span className="text-[#FFFFFF] text-3xl"> kem muối</span>

                        <span className="text-[#D6E5EF]"> Vị chua nhẹ của yogurt hòa quyện cùng lớp kem muối mịn màng, mằn mặn đầy mê hoặc. </span>
                        <div className="bg-gray-500 flex justify-between border rounded px-2 py-1 mr-2">  
                            <div className="text-[#FFFFFF]"> Size M (300ml) </div>
                            <div className="text-[#FFFFFF]"> 30k</div>
                        </div>
                        <div className="bg-gray-500 flex justify-between border rounded px-2 py-1 mr-2"> 
                            <div className="text-[#FFFFFF]"> Size M (300ml) </div>
                            <div className="text-[#FFFFFF]"> 30k </div>
                        </div>
                    </div>
                    <div className="border-15 border-amber-100 w-max h-max rounded-2xl">
                        <img src={muoi} alt="suachuamuoi" className="w-100 h-55 md:h-75 "/>
                    </div>
                </div>
            </div>
        </div>
    )
}
