
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <Link href="/">Home</Link>
        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          return (
            <React.Fragment key={href}>
              {" / "}
              <Link href={href}>{part}</Link>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
