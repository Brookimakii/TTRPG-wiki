import {Link, useLocation} from "react-router-dom";
import {BASED_URL, DND_SELECTOR, SYSTEM_SELECTION} from "./Menus";

export default function PrimaryMenu() {
  const location = useLocation()
  let links
  // console.log(BASED_URL + '/dnd')
  // console.log(location.pathname)
  if (location.pathname.startsWith(BASED_URL + '/dnd')) {
    links = DND_SELECTOR
  } else {
    links = SYSTEM_SELECTION
  }
  // console.log(location.pathname)
  return links.map((elem) =>
    <li className={location.pathname.startsWith(elem.href) ? "current" : "link"} key={elem.href}>
      <span className="fa fa-caret-up fa-inverse"></span>
      {/*{console.log(elem.href)}*/}
      <Link to={elem.href} title={elem.title}>{elem.name}</Link>
      {/*<a href={elem.href} title={elem.title}>{elem.name}</a>*/}
    </li>
  )
  // TODO: Not Good
  // ReactDOM.createRoot(document.getElementById('primary-menu')).render(menu)
}
