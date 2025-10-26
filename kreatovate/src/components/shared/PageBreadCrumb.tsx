"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const PageBreadCrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const buildHref = (index: number) =>
    "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="font-roboto font-normal text-base text-gray-300">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.length > 0 && (
          <BreadcrumbSeparator className="text-gray-400" />
        )}

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = buildHref(index);
          const label =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");

          return (
            <BreadcrumbItem key={href}>
              {!isLast ? (
                <>
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="text-gray-400" />
                </>
              ) : (
                <BreadcrumbPage className="text-white">{label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadCrumb;
