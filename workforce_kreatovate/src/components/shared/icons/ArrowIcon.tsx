import * as React from 'react';

type ArrowIconProps = React.SVGProps<SVGSVGElement>;

const ArrowIcon = (props: ArrowIconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 13H18.5715M14.0001 18L19 13L14 8"
      stroke="white"
      strokeWidth={1.5}
    />
  </svg>
);

export default ArrowIcon;
