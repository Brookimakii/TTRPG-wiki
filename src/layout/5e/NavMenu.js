import {Link, useLocation} from "react-router-dom";
import React, {forwardRef, useState} from "react";
import withClickOutside from "./withClickOutside";


const NavMenu = forwardRef(({open, setOpen, props}, ref) => {
  const {name, href, addCaret} = props

  const location = useLocation()
  const localisation = {
    "Rules": [],
    "Player": ["races"],
    "Dungeon Master": []
  }

  function isCategoryActive(category): string {
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

  return (
    <li ref={ref}
        className={"dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root" + isCategoryActive(name) + (open ? " open" : "")}>
      <a href={href} className="nav__link" onClick={() => setOpen(!open)}>
        {name}{addCaret ? (<span className="caret "></span>) : ""}
      </a>

      {open && (
        <ul className="ve-dropdown-menu ve-dropdown-menu--top">
          {props.children}
        </ul>
      )}
    </li>
  );
});

export const MenuLink = ({name, link, href}) => {
  const location = useLocation()
  const localisation = {
    "Rules": [],
    "Player": ["races"],
    "Dungeon Master": []
  }

  function isCategoryActive(category): string {
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

  return (
    <li className={isCategoryActive(link)}>
      <Link to={href}>{name}</Link>
    </li>
  )
}

export const MenuDivider = () => {
  return <li role="presentation" className="ve-dropdown-divider"></li>
}

export const SubMenu = ({children, name}) => {
  const [subOpen, setSubOpen] = useState(false)
  const location = useLocation()
  const localisation = {
    "Rules": [],
    "Player": ["races"],
    "Dungeon Master": []
  }

  function isCategoryActive(category): string {
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

  return (
    <li onMouseEnter={() => {
      console.log('Enter')
      setSubOpen(true)
      console.log(subOpen)
    }} onMouseLeave={() => {
      console.log('Leave')
      setSubOpen(false)
      console.log(subOpen)
    }}
        className={"dropdown dropdown--navbar page__nav-hidden-mobile open" + isCategoryActive(name) + (subOpen ? " open" : "")}>
      <a href="#">
        {name} <span className="caret caret--right"></span>
      </a>
      {subOpen && (
        <ul className="ve-dropdown-menu ve-dropdown-menu--side">
          {children}
        </ul>
      )}
    </li>
  )
}

export default withClickOutside(NavMenu)