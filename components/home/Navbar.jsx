import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Webhook } from 'lucide-react';

const menuItems = [
  { label: "Profile", url: "#" },
  { label: "Dashboard", url: "#" },
  { label: "Activity", url: "#" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand color="foreground" as={Link} href="/">
          <Webhook className="m-2" />
          <p className="font-bold text-inherit">ScraperTikTokAPI</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarBrand color="foreground" as={Link} href="/">
          <Webhook className="m-2" />
          <p className="font-bold text-inherit">ScraperTikTokAPI</p>
        </NavbarBrand>
        <NavbarItem>
          {menuItems.map((item, index) => (
            <Button key={index} as={Link} href={item.url} variant="light">
              {item.label}
            </Button>
          ))}
          <Button as={Link} href="/" variant="light">
            Home
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link color="foreground" href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="default" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}