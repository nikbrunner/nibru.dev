import React, { useContext } from "react";

import { Headline } from "@components/ui/Headline/Headline";

import { ThemeContext } from "@context/ThemeContext";

import { cn } from "@lib/cn";

import { profile } from "@data/profile";

export const Nav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={cn("Nav", [], { [theme]: theme })}>
      <div className="Nav__name">
        <Headline tag={"h1"} size={"h3"} noBorder>
          {profile.firstname} {profile.lastname}
        </Headline>
      </div>
    </nav>
  );
};
