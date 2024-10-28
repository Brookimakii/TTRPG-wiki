import {primaryResize, primaryToggle} from "../javascript/script";

export default function Header() {
  // let location = useLocation()
  // let primaryMenu
  // if (location.pathname.startsWith("/dnd")) {
  //   primaryMenu = DND_SELECTOR
  // }

  return (
    <>
      <div className="inner">
        <div className="unit lastUnit">
          <div className="brand">
            <a href="/">AideDD</a>
            <p>Un site sur le jeu de rôle Dungeons &amp; Dragons 5</p>
          </div>
          <span className="search-dropdown-icon" style={{display: "none"}}>
          <i className="fa fa-search"></i>
        </span>
          <div className="search-bar" style={{display: "none"}}>
            <div id="___gcse_0">
              <div className="gsc-control-searchbox-only gsc-control-searchbox-only-fr" dir="ltr">
                <form className="gsc-search-box gsc-search-box-tools" acceptCharset="utf-8">
                  <table cellSpacing="0" cellPadding="0" role="presentation" className="gsc-search-box">
                    <tbody>
                    <tr>
                      <td className="gsc-input">
                        <div className="gsc-input-box" id="gsc-iw-id1">
                          <table cellSpacing="0" cellPadding="0" role="presentation" id="gs_id50"
                                 className="gstl_50 gsc-input" style={{width: "100%", padding: "0px"}}>
                            <tbody>
                            <tr>
                              <td id="gs_tti50" className="gsib_a">
                                <input autoComplete="off" type="text" size="10" className="gsc-input" name="search"
                                       title="rechercher" aria-label="rechercher" id="gsc-i-id1" dir="ltr"
                                       spellCheck="false" style={{
                                  width: "100%",
                                  padding: "0px",
                                  border: "none",
                                  margin: "0px",
                                  height: "auto",
                                  outline: "none"
                                }}/>
                              </td>
                              <td className="gsib_b">
                                <div className="gsst_b" id="gs_st50" dir="ltr">
                                  <a className="gsst_a" href="javascript:void(0)"
                                     title="Effacer le contenu du champ de recherche" role="button">
                                    <span className="gscb_a" id="gs_cb50" aria-hidden="true">×</span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                      <td className="gsc-search-button">
                        <button className="gsc-search-button gsc-search-button-v2">
                          <svg width="13" height="13" viewBox="0 0 13 13"><title>rechercher</title>
                            <path
                              d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path>
                          </svg>
                        </button>
                      </td>
                      <td className="gsc-clear-button">
                        <div className="gsc-clear-button" title="effacer les résultats">&nbsp;</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <nav className="primary">
          <span className="nav-open-button" onClick={primaryToggle}>
            <span className="fa fa-bars fa-inverse"></span>
          </span>
            <ul id="primary-menu" onResize={primaryResize}>
              {/*<PrimaryMenu links={primaryMenu}/>*/}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}