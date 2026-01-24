import React from 'react';
const StatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14"
      stroke="#E93D3D"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.3333V6"
      stroke="#E93D3D"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.66406 11.3333V3.33331"
      stroke="#E93D3D"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33594 11.3333V9.33331"
      stroke="#E93D3D"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default StatIcon;
