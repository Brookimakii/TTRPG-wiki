import {Link, useLocation} from "react-router-dom";
import React, {forwardRef, useState} from "react";
import withClickOutside from "./withClickOutside";


const localisation = {
  "Rules": [],
  "Player": ["races"],
  "Dungeon Master": []
}
function isCategoryActive(category, location): string {
  if (location.pathname.endsWith(category)) {
    return " active"
  }

  for (const [key, value] of Object.entries(localisation)) {
    if (key === category && value.some(s => location.pathname.endsWith(s))) {
      return " active"
    }
  }
  return ""
}

const NavMenu = forwardRef(({open, setOpen, props}, ref) => {
  const {name, href, addCaret, showMenu} = props

  const location = useLocation()

  return (
    <li ref={ref}
        className={"dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root" + isCategoryActive(name, location) + (open ? " open" : "") + (showMenu ? " block" : "")}>
      <Link to={href} className="nav__link" onClick={() => setOpen(!open)}>
        {name}{addCaret ? (<span className="caret "></span>) : ""}
      </Link>

      {props.children?<>{open && (
        <ul className="ve-dropdown-menu ve-dropdown-menu--top">
          {props.children}
        </ul>
      )}</>:""}
    </li>
  );
});

export default withClickOutside(NavMenu)

export const MenuLink = ({name, link}) => {
  const location = useLocation()

  return (
    <li className={isCategoryActive(link, location)}>
      <Link to={link}>{name}</Link>
    </li>
  )
}

export const MenuDivider = () => {
  return <li role="presentation" className="ve-dropdown-divider"></li>
}

export const SubMenu = ({children, name, showMenu}) => {
  const [subOpen, setSubOpen] = useState(false)
  const location = useLocation()

  // TODO: FIX: The children menu shouldn't disappear when hovering it
  return (
    <li onMouseEnter={() => setSubOpen(true)
    } onMouseLeave={() => setSubOpen(false)}
        className={"dropdown dropdown--navbar page__nav-hidden-mobile open" + isCategoryActive(name, location) + (subOpen ? " open" : "") + (showMenu?" block":"")}>
      <Link to="#">
        {name} <span className="caret caret--right"></span>
      </Link>
      {subOpen && (
        <ul className="ve-dropdown-menu ve-dropdown-menu--side">
          {children}
        </ul>
      )}
    </li>
  )
}
