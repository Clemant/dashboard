"use client";
import { NavbarProps } from "@/helper/propsTypes";
import { Box, Divider, NavLink, ScrollArea, Text, Title } from "@mantine/core";
import Link from "next/link";
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from "@tabler/icons-react";

import React, { useState } from "react";

const Navbar = ({ style }: NavbarProps) => {
  const [active, setActive] = useState("home");
  const navigation = [
    {
      label: "home",
    },
  ];

  const handleActive = (e: string) => {
    //console.log(e);
    setActive(e);
  };

  return (
    <nav className={style}>
      <Box className="px-3">
        <Title order={2} size="h2">
          Dashboard
        </Title>
        <Text size="sm">Cut Made Folded</Text>
        <Divider size="sm" />
      </Box>
      <ScrollArea scrollbars="y">
        <div className="h-screen flex flex-col">
          <NavLink href="/" label="Home" />
          <NavLink href="/cartes" label="Cartes" />
        </div>
      </ScrollArea>
    </nav>
  );
};

export default Navbar;
