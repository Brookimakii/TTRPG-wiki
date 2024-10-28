export const Dialogue = ({children}) => {
  return (
    <div className="dialogue">
      {children}
    </div>
  )
}

export const Encadre = ({children}) => {
  return (
    <p className="encadre">
      {children}
    </p>
  )
}

export const Citation = ({children, author, location}) => {
  return (
    <>
    <p className="citation">{children}</p>
    <p className="citAuteur">- {author}<br/><em>{location}</em></p>
    </>
  )
}

export const Author = ({children}) => {
  return (
      <p className="auteur">{children}</p>
  )
}

export const Officiel = ({children}) => {
  return (
    <p className="officiel">{children}</p>
  )
}