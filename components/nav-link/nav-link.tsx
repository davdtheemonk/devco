import {
  forwardRef,
  Button,
  ButtonProps,
  Fade,
  Box,
  Stack,
} from "@chakra-ui/react";

import Link from "next/link";
import { NavBox } from "./nav-box";
import React from "react";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  content?: any;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, content, ...rest } = props;
  const [isBoxActive, setActive] = React.useState<boolean>(false);

  return (
    <Stack spacing="1" ms="4">
      <Button
        as={Link}
        href={href}
        ref={ref}
        variant="nav-link"
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        lineHeight="2rem"
        isActive={isActive}
        fontWeight="medium"
        {...rest}
      />
      <NavBox isActive={isBoxActive} content={content} />
    </Stack>
  );
});

NavLink.displayName = "NavLink";
