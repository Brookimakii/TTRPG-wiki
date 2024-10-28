import {useLocation} from "react-router-dom";

export default function SecondaryMenu({links}) {
  const location = useLocation()

  return build_list(links, location)
}

function isChildrenSelected(location, links: []) {
  if (links.length === 0) {
    return false
  }
  for (let i in links) {
    console.log(links[i])
    return links[i].href === location.pathname
  }
  return false
}

function build_list(links, location, addUl = false) {
  const menu = links.map((link) =>
    <li
      className={location.pathname === link.href ? "current" : isChildrenSelected(location, link.sublist) ? "section" : "link"}
      key={link.id}>
      <a href={link.href}
         className={location.pathname === link.href ? "current" : location.pathname.startsWith(link.href) ? "selection" : "link"}>{link.name}</a>
      {location.pathname.startsWith(link.href) && link.sublist.length > 0 ? (
        build_list(link.sublist, location, true)
      ) : ''}
    </li>
  )
  if (addUl) {
    return (
      <ul>
        {menu}
      </ul>
    )
  }
  return (
    <>
      {menu}
    </>
  )
}
