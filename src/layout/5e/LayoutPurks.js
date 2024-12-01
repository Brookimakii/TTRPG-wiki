import React, {createRef, useEffect, useRef, useState} from "react";


export const Toggle = ({children}) => {
  const [show, setShow] = useState(true)

  function handleClick() {
    setShow(!show)
  }

  // console.log(children[0])
  return (<>
    {React.cloneElement(children[0], {onClick: handleClick}, [
      children[0],
      <div className="ve-flex-v-center">
        <div className="cls-side__btn-toggle no-select">[{show?"−":"+"}]</div>
      </div>
    ])}
    {show && children.slice(1)}
  </>)
}