"use client";

import Link from "next/link";
import { useState } from "react";

const NavItems = () => {
  const [active, setActive] = useState("home");

  const items = [
    { id: "#home", label: "home" },
    { id: "#about_us", label: "about us" },
    { id: "#our_solutions", label: "our solutions" },
    { id: "#testimonial", label: "testimonial" },
    { id: "#contact_us", label: "contact us" },
  ];
  return (
    <div>
      <ul className="flex items-center gap-7 capitalize bg-white/10 p-1 rounded-full">
        {items?.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              active === item.id
                ? "bg-[#ED1C2433] font-semibold"
                : "hover:bg-[#ED1C2433]/40"
            }`}
          >
            <Link href={`${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
