import './Button.css'

type ButtonProps = {
  children: React.ReactNode;
  className?: string; // thêm dòng này, dấu ? để không bắt buộc phải truyền
};

export default function Button({ children, className }: ButtonProps) {
    return (
        <button className={ `nav-but px-1 py-1 hover:underline disabled:cursor-not-allowed cursor-pointer ${className ?? ''}` }>
            {children}
        </button>
    )
}