import { RiFacebookCircleFill, RiGlobalLine } from 'react-icons/ri';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <div className="bg-[#dfdfd2] w-full h-30 mt-4 flex items-center justify-between gap-2 md:gap-20 px-2 md:px-50">
            <div className="flex flex-col">
                <span className='font-bold text-sm md:text-base'>
                    @2026 Yaourt Nhà Dung. 
                </span>
                <span className="hidden md:block bg-[#52606] text-sm mt-1">
                    Địa chỉ: 14/1 An Bình, phường Xuân Hương, Thành phố Đà Lạt
                </span>
                <span className="bg-[#52606] text-sm">
                    Sđt: 0359500729
                </span>
            </div>

            <div className="flex gap-2 md:gap-8 " >
                <Link to="/privacy">
                    <Button className='text-sm md:text-base'>Privacy policy</Button>
                </Link>
                
                <Link to="/terms">
                    <Button className='text-sm md:text-base'>
                        Terms of service
                    </Button>
                </Link>

                <Link to="/contact">
                    <Button className='text-sm md:text-base'>
                        Contact us
                    </Button>
                </Link>
            </div>

            <div className="flex gap-4" >
                <RiGlobalLine size={24} 
                    className="hidden md:block border-2 rounded-2xl border-blue-600 hover:opacity-80 cursor-pointer"
                />

                <RiFacebookCircleFill size={24} 
                    className="hover:opacity-80 cursor-pointer" 
                    onClick={() => window.open('https://www.facebook.com/dung.nguyen.691944', '_blank') }  
                />
            </div>
            
        </div>
    )
}