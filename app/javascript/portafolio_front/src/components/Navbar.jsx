import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-end p-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="navbar">Nav</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink><Link to="/">Home</Link></NavigationMenuLink>
              <NavigationMenuLink><Link to="/projects">Projects</Link></NavigationMenuLink>
              <NavigationMenuLink><Link to="/blog">Blog</Link></NavigationMenuLink>
              <NavigationMenuLink><Link to="/contact">Contact</Link></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
