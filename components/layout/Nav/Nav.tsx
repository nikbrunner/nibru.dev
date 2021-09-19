import React from "react";

import { NavLink } from "@components/ui/NavLink/NavLink";

import { cn } from "@lib/cn";

import { profile } from "@data/profile";

const componentName: string = "Nav";

export const Nav = (): JSX.Element => (
  <nav
    className={cn({
      block: componentName,
      utils: ["bg-white"]
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
        element: "links"
      })}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/books">Books</NavLink>
    </div>
  </nav>
);
