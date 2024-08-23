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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex justify-end p-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-primary text-white mr-10"><FontAwesomeIcon className="text-2xl" icon={faBars} /></NavigationMenuTrigger>
            <NavigationMenuContent className="nav-content bg-primary">
              <NavigationMenuLink className="nav-item font-sedgwick m-5"><Link to="/">Home</Link></NavigationMenuLink>
              <NavigationMenuLink className="nav-item font-sedgwick m-5"><Link to="/projects">Projects</Link></NavigationMenuLink>
              <NavigationMenuLink className="nav-item font-sedgwick m-5"><Link to="/blog">Blog</Link></NavigationMenuLink>
              <NavigationMenuLink className="nav-item font-sedgwick m-5"><Link to="/contact">Contact</Link></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
