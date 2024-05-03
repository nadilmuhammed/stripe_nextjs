import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menus } from "../public/data/menu";
import AnimateHeight from "react-animate-height";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass =
    depthLevel > 1
      ? "static lg:absolute left-full z-10 bg-white min-w-[200px] top-0"
      : "top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white";
  return (
    <AnimateHeight duration={400} height={dropdown ? "auto" : 0}>
      <ul
        className={`my-dropdown static duration-300 shadow ${dropdownClass} ${dropdown ? "mt-5 lg:mt-0" : ""
          }`}>
        {submenus.map((submenu, index) => (
          <MenuItems depthLevel={depthLevel} items={submenu} key={index} />
        ))}
      </ul>
    </AnimateHeight>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  const onMouseEnter = () => {
    window.innerWidth > 992 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 992 && setDropdown(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative menu-items cursor-pointer`}
      ref={ref}>
      {items.submenu ? (
        <>
          <span
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className={`flex items-center justify-between gap-1`}>
            {items.title}{" "}
            {depthLevel > 0 && (
              <i
                className={`las la-angle-right ${dropdown && "rotate-90"
                  } duration-300`}></i>
            )}
            {depthLevel == 0 && typeof items.title === "string" && (
              <i
                className={`las la-angle-right ${dropdown && "rotate-90"
                  } duration-300`}></i>
            )}
          </span>
          <Dropdown
            dropdown={dropdown}
            submenus={items.submenu}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="lg:hidden top-25 left-0 w-full h-full overflow-y-auto text-black bg-white">
    <ul className="flex flex-col lg:flex-row px-2 lg:px-0">
      {menus.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  </div>
  );
};

export default Navbar;
