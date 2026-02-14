import ArrowIcon from '@/components/icons/ArrowIcon';
import Link from 'next/link';

interface BtnProps {
  btnText: string;
  className?: string;
  isIcon?: boolean;
  link?: string;
  onClick?: () => void;
  target?: string;
}

const ButtonIn = ({
  btnText,
  link,
  onClick,
  isIcon = true,
  className = '',
  target, 
}: BtnProps) => {
  return (
    <div
      className={`p-px rounded-[32px] gradient-btn flex hover:bg-transparent font-[roboto] border-t border-l border-r border-gray-400 ${className}`}
    >
      <button
        onClick={onClick}
        className="px-6 py-4 rounded-[32px] flex items-center text-[16px] cursor-pointer font-normal leading-[180%] text-center text-white hover:text-white hover:bg-transparent w-full"
      >
        {link ? (
          <Link
            href={link}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined} 
            className="block w-full text-center capitalize"
          >
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

export default ButtonIn;
