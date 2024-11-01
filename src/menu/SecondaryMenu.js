import {useLocation} from "react-router-dom";

export default function SecondaryMenu({links}) {
  const location = useLocation()

  return build_list(links, location)
}

function isChildrenSelected(location, links: []) {
  // console.log(links)
  if (links.length === 0) {
    return false
  }
  let r = links.filter(obj => obj.href===location.pathname).map(e=>console.log(e))


  return r.length>0
}

function build_list(links: [], location, addUl = false) {
  // links.sort(function (a, b) {
  //   let textA = a.id.toUpperCase();
  //   let textB = b.id.toUpperCase();
  //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  // })

  // console.log(location.pathname)
  const menu = links.map((link) =>
    <li className={location.pathname === link.href ? "current" : isChildrenSelected(location, link.sublist) ? "section" : "link"} key={link.id}>
      <a href={link.href} className={location.pathname === link.href ? "current" : location.pathname.startsWith(link.href) ? "section" : "link"}>{link.name}</a>
      {/*{console.log("-----------------------")}*/}
      {/*{console.log(link.href)}*/}
      {location.pathname.startsWith(link.href) && link.sublist.length > 0 ? (build_list(link.sublist, location, true)) : ''}
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
