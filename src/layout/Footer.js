// function Footer(){
//   const breadcrumbs = useBreadcrumbs();
//   const small = breadcrumbs.map((e) => e.breadcrumb)
//   const key = breadcrumbs.map((e) => e.key)
//   return (
//     <footer id="footer" className="footer">
//       <div className="inner">
//         <div className="left">
//           <div id="Breadcrumbs">
//             <ol>
//               {breadcrumbs.map(({breadcrumb}) => {
//                 const idx = small.indexOf(breadcrumb)
//                 // console.log(idx)
//                 if (idx === 0) return <></>
//                 if (idx === 1) breadcrumb = "Home"
//                 if (idx + 1 === breadcrumbs.length) return <li> {breadcrumb} </li>
//
//                 return <li><Link to={key[idx]}> {breadcrumb} </Link></li>
//               })}
//             </ol>
//           </div>
//         </div>
//         <div className="right">
//           Brooki&#39;s TTRPG database
//         </div>
//       </div>
//     </footer>
//   )
// }

