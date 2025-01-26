import {Link, useLocation} from "react-router-dom";
import React, {cloneElement, forwardRef, useState} from "react";
import withClickOutside from "./withClickOutside";


const localisation = {
  "TTRPG-wiki/dnd5e": {
    "Home": ["/dnd5e", "/pathfinder2e"],
    "Rules": ["rules"],
    "Player": ["races", "classes", "feats", "backgrounds", "optionsFeatures"],
    "Dungeon Master": [],
    "Reference": ["bestiary", "spells", "conditions", "items"],
    "Utilities": ["cheatsheet"]
  }
}

function isCategoryActive(system, category, location): string {
  if (location.pathname.endsWith(category)) {
    return " active"
  }
  for (const [key, value] of Object.entries(localisation[system])) {
    // console.log(category, key, value, value.some(s => location.pathname.endsWith(s)))
    if (key === category && value.some(s => location.pathname.endsWith(s))) {
      return " active"
    }
  }
  return ""
}

const NavMenu = forwardRef(({open, setOpen, props}, ref) => {
  const {system, name, href, addCaret, showMenu} = props

  const location = useLocation()

  const handleClick = () => {
    setOpen(false)
  }

  return (<li ref={ref}
              className={"dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root" + isCategoryActive(system, name, location) + (open ? " open" : "") + (showMenu ? " block" : "")}>
      {href === "" ? <div className="nav__link link" onClick={() => setOpen(!open)}>
        {name}{addCaret ? (<span className="caret "></span>) : ""}
      </div> : <Link to={href} className="nav__link" onClick={() => setOpen(!open)}>
        {name}{addCaret ? (<span className="caret "></span>) : ""}
      </Link>}

      {props.children ? <>{open && (<ul className="ve-dropdown-menu ve-dropdown-menu--top">
          {props.children.map((child) => cloneElement(child, props = {callback: handleClick}))}
        </ul>)}</> : ""}
    </li>);
});

export default withClickOutside(NavMenu)

export const MenuLink = ({system, name, link = "", callback}) => {
  const location = useLocation()
  return (<li className={isCategoryActive(system, link, location)}>
      {link === "" ? <div>{name}</div> : <Link to={link} onClick={callback}>{name}</Link>}
    </li>)
}

export const MenuDivider = () => {
  return <li role="presentation" className="ve-dropdown-divider"></li>
}

export const SubMenu = ({system, children, name, showMenu}) => {
  const [subOpen, setSubOpen] = useState(false)
  const location = useLocation()

  // TODO: FIX: The children menu shouldn't disappear when hovering it
  return (<li onMouseEnter={() => setSubOpen(true)} onMouseLeave={() => setSubOpen(false)}
              className={"dropdown dropdown--navbar page__nav-hidden-mobile open" + isCategoryActive(system, name, location) + (subOpen ? " open" : "") + (showMenu ? " block" : "")}>
      <Link to="#">
        {name} <span className="caret caret--right"></span>
      </Link>
      {subOpen && (<ul className="ve-dropdown-menu ve-dropdown-menu--side">
          {children}
        </ul>)}
    </li>)
}
