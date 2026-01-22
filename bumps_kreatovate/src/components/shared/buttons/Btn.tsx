import Link from 'next/link';
import ArrowIcon from '../icons/ArrowIcon';

interface BtnProps {
  btnText: string;
  className?: string;
  isIcon?: boolean;
  link?: string;
  onClick?: () => void;
}

const Btn = ({
  btnText,
  link,
  onClick,
  isIcon = true,
  className = '',
}: BtnProps) => {
  return (
    <div
      className={`p-px rounded-[12px] gradient-btn flex  hover:bg-transparent font-[roboto] border-t border-l border-r border-gray-400 ${className}`}
    >
      <button
        onClick={onClick}
        className="px-6 py-4 rounded-[12px] flex items-center text-[16px] cursor-pointer font-normal leading-[180%] text-center text-white hover:text-white hover:bg-transparent w-full"
      >
        {link ? (
          <Link href={link} className="block w-full text-center capitalize">
            <span className="flex items-center text-center justify-center">
              {btnText}
              {isIcon && <ArrowIcon />}
            </span>
          </Link>
        ) : (
          <span className="flex items-center text-center justify-center">
            {btnText}
            {isIcon && <ArrowIcon />}
          </span>
        )}
      </button>
    </div>
  );
};

export default Btn;
