import {secondaryToggle} from "../javascript/script"

export const Main = ({children, name, size=4, lastUnit=false}) => {
  lastUnit = lastUnit? " lastUnit" : "";
  return (
    <div className={"content-container unit size"+size+"of5"+lastUnit}>
      <article>
        <h1>{name}</h1>
        <div className="content">
          {children}
        </div>
      </article>
    </div>
  )
}

export const Aside = ({children, name}) => {
  name = " " + name
  return (
    <aside className="sidebar unit size1of5">
      <nav className="secondary">
        <h3 onClick={secondaryToggle}>
          <span className="fas fa-angle-down"></span>
          <span className="fas fa-angle-up"></span>
          {name}
        </h3>
        <ul>
          {children}
        </ul>
      </nav>
    </aside>
  )
}
