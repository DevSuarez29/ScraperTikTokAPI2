import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Webhook } from 'lucide-react';

const menuItems = [
  { label: "Profile", url: "#" },
  { label: "Dashboard", url: "#" },
  { label: "Activity", url: "#" },
];

const NavbarItemLink = ({ label, url, color }) => (
  <NavbarItem>
    <Link color={color} href={url}>{label}</Link>
  </NavbarItem>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Webhook className="m-2" />
          <p className="font-bold text-inherit">ScraperTikTokAPI</p>
        </NavbarBrand>
        <NavbarContent>
          {menuItems.map((item, index) => (
            <NavbarItemLink key={index} label={item.label} url={item.url} color="foreground" />
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.label}>
              <Link
                color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
