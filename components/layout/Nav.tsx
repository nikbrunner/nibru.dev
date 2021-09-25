import React from "react";

import { NavLink } from "@components/ui/NavLink";

import { cn } from "@lib/cn";

import { profile } from "@data/profile";

const componentName: string = "Nav";

export const Nav = (): JSX.Element => (
  <nav
    className={cn({
      block: componentName,
      utils: [
        "bg-white",
        "py-3",
        "mb-5",
        "border-b-2",
        "border-gray-300",
        "flex",
        "justify-between"
      ]
    })}
  >
    <h1
      className={cn({
        block: componentName,
        element: "title"
      })}
    >
      {profile.firstname} {profile.lastname}
    </h1>

    <div
      className={cn({
        block: componentName,
        element: "links",
        utils: ["flex", "gap-3"]
      })}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/books">Books</NavLink>
    </div>
  </nav>
);
