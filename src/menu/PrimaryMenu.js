import {Link, useLocation} from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function PrimaryMenu({links}) {
  const location = useLocation()
  // console.log(location.pathname)
  const menu = links.map((elem) =>
    <li className={location.pathname === elem.href ? "current" : "link"}>
      <span className="fa fa-caret-up fa-inverse"></span>
      <Link to={elem.href} title={elem.title}>{elem.name}</Link>
      {/*<a href={elem.href} title={elem.title}>{elem.name}</a>*/}
    </li>
  )
  // TODO: Not Good
  ReactDOM.createRoot(document.getElementById('primary-menu')).render(menu)
}
