import React from "react";
import Skills from "@/app/skills";
import Resume from "@/app/resume";
import Testimonial from "@/app/testimonial";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const handleClick = (e: any, href: any) => {
  e.preventDefault(); // Prevent the default behavior of the anchor tag
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
  }
};

const NAV_MENU = [
  {
    name: "My Vision",
    icon: RectangleStackIcon,
    href: "#px-8"
  },
  {
    name: "My Experience",
    icon: UserCircleIcon,
    href: "#px-8-py-24"
  },
  {
    name: "WHY ME?",
    icon: CommandLineIcon,
    href: "#asd",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        onClick={(e) => handleClick(e, href)} 
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="fixed top-0 z-50 w-full bg-white"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color="blue-gray"
          className="text-lg font-bold"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Srivathsa K
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href} onClick={(e) => handleClick(e, href)}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="max-h-screen overflow-y-auto">
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href} onClick={(e) => handleClick(e, href)}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
