import {Link} from "react-router-dom";
import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

export const Layout5e = () => {
  return (
    <>

      <script type="text/javascript" src="./5e/js/navigation.js"></script>
      <div className="viewport-wrapper">
        <div className="cancer__wrp-leaderboard cancer__anchor">
          <div className="cancer__disp-cancer"></div>
          <div className="cancer__wrp-leaderboard-inner" style={{height: "0px"}}>
            <div id="div-gpt-ad-5etools35927"></div>
            <div id="div-gpt-ad-5etools35930"></div>
          </div>
        </div>
        <header className="hidden-xs hidden-sm page__header">
          <div className="container ve-flex-v-baseline">
            <h1 className="page__title no-wrap my-0" id="page__title">Test</h1>
            <p className="page__subtitle no-wrap my-0" id="page__subtitle">
              This is a test to see the site appearance.
            </p>
          </div>
        </header>
        <nav className="container page__nav" id="navigation">
          <button className="ve-btn ve-btn-default page__btn-toggle-nav">Menu</button>
          <ul className="nav nav-pills page__nav-inner" id="navbar">
            <li role="presentation" data-page="index.html" className="page__nav-hidden-mobile page__btn-nav-root"><a
              href="index.html" className="nav__link">Home</a></li>
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root"><a
              className="ve-dropdown-toggle" href="#" role="button">Rules <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation" data-page="variantrules.html"><a href="variantrules.html" className="nav__link">Rules
                  Glossary</a></li>
                <li role="presentation" data-page="tables.html"><a href="tables.html" className="nav__link">Tables</a>
                </li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile" data-timer-id="2">
                  <a className="ve-dropdown-toggle" href="#" role="button">Books <span
                    className="caret caret--right"></span></a>
                  <ul className="ve-dropdown-menu ve-dropdown-menu--side">
                    <li role="presentation" data-page="books.html"><a href="books.html" className="nav__link">View
                      All/Homebrew</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Core
                    </li>
                    <li role="presentation" data-page="book.html#phb"><a href="book.html#phb" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2014</div>
                      <div className="nav2-list__disp-source source__PHB"></div>
                      Player's Handbook (2014)<span
                      className="help-subtle ve-source-marker  ve-source-marker--legacy ml-1 nav2-list__disp-legacy-marker"
                      title="Legacy Source">[ʟ]</span></a></li>
                    <li role="presentation" data-page="book.html#mm"><a href="book.html#mm" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__MM"></div>
                      Monster Manual (2014)</a></li>
                    <li role="presentation" data-page="book.html#dmg"><a href="book.html#dmg" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__DMG"></div>
                      Dungeon Master's Guide (2014)</a></li>
                    <li role="presentation" data-page="book.html#xphb"><a href="book.html#xphb" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2024</div>
                      <div className="nav2-list__disp-source source__XPHB"></div>
                      Player's Handbook (2024)</a></li>
                    <li role="presentation" data-page="book.html#xdmg"><a href="book.html#xdmg" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__XDMG"></div>
                      Dungeon Master's Guide (2024)</a></li>
                    <li role="presentation" data-page="book.html#xmm"><a href="book.html#xmm" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2025</div>
                      <div className="nav2-list__disp-source source__XMM"></div>
                      Monster Manual (2024)</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Supplements
                    </li>
                    <li role="presentation" data-page="book.html#vgm"><a href="book.html#vgm" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2016</div>
                      <div className="nav2-list__disp-source source__VGM"></div>
                      Volo's Guide to Monsters<span
                      className="help-subtle ve-source-marker  ve-source-marker--legacy ml-1 nav2-list__disp-legacy-marker"
                      title="Legacy Source">[ʟ]</span></a></li>
                    <li role="presentation" data-page="book.html#xge"><a href="book.html#xge" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2017</div>
                      <div className="nav2-list__disp-source source__XGE"></div>
                      Xanathar's Guide to Everything</a></li>
                    <li role="presentation" data-page="book.html#mtf"><a href="book.html#mtf" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2018</div>
                      <div className="nav2-list__disp-source source__MTF"></div>
                      Mordenkainen's Tome of Foes<span
                      className="help-subtle ve-source-marker  ve-source-marker--legacy ml-1 nav2-list__disp-legacy-marker"
                      title="Legacy Source">[ʟ]</span></a></li>
                    <li role="presentation" data-page="book.html#ai"><a href="book.html#ai" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__AI"></div>
                      Acquisitions Incorporated</a></li>
                    <li role="presentation" data-page="book.html#tce"><a href="book.html#tce" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020</div>
                      <div className="nav2-list__disp-source source__TCE"></div>
                      Tasha's Cauldron of Everything</a></li>
                    <li role="presentation" data-page="book.html#ftd"><a href="book.html#ftd" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2021</div>
                      <div className="nav2-list__disp-source source__FTD"></div>
                      Fizban's Treasury of Dragons</a></li>
                    <li role="presentation" data-page="book.html#mpmm"><a href="book.html#mpmm" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__MPMM"></div>
                      Mordenkainen Presents: Monsters of the Multiverse</a></li>
                    <li role="presentation" data-page="book.html#aag"><a href="book.html#aag" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__AAG"></div>
                      Astral Adventurer's Guide</a></li>
                    <li role="presentation" data-page="book.html#bam"><a href="book.html#bam" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__BAM"></div>
                      Boo's Astral Menagerie</a></li>
                    <li role="presentation" data-page="book.html#bgg"><a href="book.html#bgg" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2023</div>
                      <div className="nav2-list__disp-source source__BGG"></div>
                      Bigby Presents: Glory of the Giants</a></li>
                    <li role="presentation" data-page="book.html#mpp"><a href="book.html#mpp" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__MPP"></div>
                      Morte's Planar Parade</a></li>
                    <li role="presentation" data-page="book.html#sato"><a href="book.html#sato" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__SatO"></div>
                      Sigil and the Outlands</a></li>
                    <li role="presentation" data-page="book.html#bmt"><a href="book.html#bmt" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__BMT"></div>
                      The Book of Many Things</a></li>
                    <li role="presentation" data-page="book.html#dmtcrg"><a href="book.html#dmtcrg"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__DMTCRG"></div>
                      The Deck of Many Things: Card Reference Guide</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Settings
                    </li>
                    <li role="presentation" data-page="book.html#scag"><a href="book.html#scag" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2015</div>
                      <div className="nav2-list__disp-source source__SCAG"></div>
                      Sword Coast Adventurer's Guide</a></li>
                    <li role="presentation" data-page="book.html#ggr"><a href="book.html#ggr" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2018</div>
                      <div className="nav2-list__disp-source source__GGR"></div>
                      Guildmasters' Guide to Ravnica</a></li>
                    <li role="presentation" data-page="book.html#erlw"><a href="book.html#erlw" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__ERLW"></div>
                      Eberron: Rising from the Last War</a></li>
                    <li role="presentation" data-page="book.html#egw"><a href="book.html#egw" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020</div>
                      <div className="nav2-list__disp-source source__EGW"></div>
                      Explorer's Guide to Wildemount</a></li>
                    <li role="presentation" data-page="book.html#mot"><a href="book.html#mot" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__MOT"></div>
                      Mythic Odysseys of Theros</a></li>
                    <li role="presentation" data-page="book.html#vrgr"><a href="book.html#vrgr" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2021</div>
                      <div className="nav2-list__disp-source source__VRGR"></div>
                      Van Richten's Guide to Ravenloft</a></li>
                    <li role="presentation" data-page="book.html#scc"><a href="book.html#scc" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__SCC"></div>
                      Strixhaven: A Curriculum of Chaos</a></li>
                    <li role="presentation" data-page="book.html#tdcsr"><a href="book.html#tdcsr" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__TDCSR"></div>
                      Tal'Dorei Campaign Setting Reborn</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Extras
                    </li>
                    <li role="presentation" data-page="book.html#ps-z"><a href="book.html#ps-z" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2016</div>
                      <div className="nav2-list__disp-source source__PSZ"></div>
                      Plane Shift: Zendikar</a></li>
                    <li role="presentation" data-page="book.html#ps-i"><a href="book.html#ps-i" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__PSI"></div>
                      Plane Shift: Innistrad</a></li>
                    <li role="presentation" data-page="book.html#ps-k"><a href="book.html#ps-k" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2017</div>
                      <div className="nav2-list__disp-source source__PSK"></div>
                      Plane Shift: Kaladesh</a></li>
                    <li role="presentation" data-page="book.html#ps-a"><a href="book.html#ps-a" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__PSA"></div>
                      Plane Shift: Amonkhet</a></li>
                    <li role="presentation" data-page="book.html#oga"><a href="book.html#oga" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__OGA"></div>
                      One Grung Above</a></li>
                    <li role="presentation" data-page="book.html#ps-x"><a href="book.html#ps-x" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2018</div>
                      <div className="nav2-list__disp-source source__PSX"></div>
                      Plane Shift: Ixalan</a></li>
                    <li role="presentation" data-page="book.html#ps-d"><a href="book.html#ps-d" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__PSD"></div>
                      Plane Shift: Dominaria</a></li>
                    <li role="presentation" data-page="book.html#hwcs"><a href="book.html#hwcs" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__HWCS"></div>
                      Humblewood Campaign Setting</a></li>
                    <li role="presentation" data-page="book.html#rmr"><a href="book.html#rmr" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__RMR"></div>
                      Dungeons &amp; Dragons vs. Rick and Morty: Basic Rules</a></li>
                    <li role="presentation" data-page="book.html#dod"><a href="book.html#dod" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2021</div>
                      <div className="nav2-list__disp-source source__DoD"></div>
                      Domains of Delight</a></li>
                    <li role="presentation" data-page="book.html#mabjov"><a href="book.html#mabjov"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__MaBJoV"></div>
                      Minsc and Boo's Journal of Villainy</a></li>
                    <li role="presentation" data-page="book.html#td"><a href="book.html#td" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__TD"></div>
                      Tarot Deck</a></li>
                    <li role="presentation" data-page="book.html#hat-tg"><a href="book.html#hat-tg"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2023</div>
                      <div className="nav2-list__disp-source source__HAT-TG"></div>
                      Thieves' Gallery</a></li>
                    <li role="presentation" data-page="book.html#tob1-2023"><a href="book.html#tob1-2023"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__ToB1-2023"></div>
                      Tome of Beasts 1 (2023 Edition)</a></li>
                    <li role="presentation" data-page="book.html#mcv4ec"><a href="book.html#mcv4ec"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__MCV4EC"></div>
                      Monstrous Compendium Volume 4: Eldraine Creatures</a></li>
                    <li role="presentation" data-page="book.html#aatm"><a href="book.html#aatm" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__AATM"></div>
                      Adventure Atlas: The Mortuary</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Screens
                    </li>
                    <li role="presentation" data-page="book.html#screen"><a href="book.html#screen"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2015</div>
                      <div className="nav2-list__disp-source source__Screen"></div>
                      Dungeon Master's Screen<span
                      className="help-subtle ve-source-marker  ve-source-marker--legacy ml-1 nav2-list__disp-legacy-marker"
                      title="Legacy Source">[ʟ]</span></a></li>
                    <li role="presentation" data-page="book.html#screendungeonkit"><a href="book.html#screendungeonkit"
                                                                                      className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020</div>
                      <div className="nav2-list__disp-source source__ScreenDungeonKit"></div>
                      Dungeon Master's Screen: Dungeon Kit</a></li>
                    <li role="presentation" data-page="book.html#screenwildernesskit"><a
                      href="book.html#screenwildernesskit" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__ScreenWildernessKit"></div>
                      Dungeon Master's Screen: Wilderness Kit</a></li>
                    <li role="presentation" data-page="book.html#screenspelljammer"><a
                      href="book.html#screenspelljammer" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__ScreenSpelljammer"></div>
                      Dungeon Master's Screen: Spelljammer</a></li>
                    <li role="presentation" data-page="book.html#xscreen"><a href="book.html#xscreen"
                                                                             className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2024</div>
                      <div className="nav2-list__disp-source source__XScreen"></div>
                      Dungeon Master's Screen (2024)</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Recipes
                    </li>
                    <li role="presentation" data-page="book.html#hf"><a href="book.html#hf" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020</div>
                      <div className="nav2-list__disp-source source__HF"></div>
                      Heroes' Feast</a></li>
                    <li role="presentation" data-page="book.html#hffotm"><a href="book.html#hffotm"
                                                                            className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2023</div>
                      <div className="nav2-list__disp-source source__HFFotM"></div>
                      Heroes' Feast Flavors of the Multiverse</a></li>
                    <li role="presentation" data-page="book.html#paf"><a href="book.html#paf" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2024</div>
                      <div className="nav2-list__disp-source source__PaF"></div>
                      Puncheons and Flagons</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Miscellaneous
                    </li>
                    <li role="presentation" data-page="book.html#al"><a href="book.html#al" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2016</div>
                      <div className="nav2-list__disp-source source__AL"></div>
                      Adventurers League</a></li>
                    <li role="presentation" data-page="book.html#sac"><a href="book.html#sac" className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__SAC"></div>
                      Sage Advice Compendium</a></li>
                  </ul>
                </li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="quickreference.html"><a href="quickreference.html"
                                                                           className="nav__link">Quick Reference
                  (2014)</a></li>
              </ul>
            </li>
            <li role="presentation"
                className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root active"><a
              className="ve-dropdown-toggle" href="#" role="button">Player <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation" data-page="classes.html"><a href="classes.html"
                                                                    className="nav__link">Classes</a></li>
                <li role="presentation" data-page="backgrounds.html"><a href="backgrounds.html"
                                                                        className="nav__link">Backgrounds</a></li>
                <li role="presentation" data-page="feats.html"><a href="feats.html" className="nav__link">Feats</a></li>
                <li role="presentation" data-page="races.html" className="active"><a href="races.html"
                                                                                     className="nav__link">Species</a>
                </li>
                <li role="presentation" data-page="charcreationoptions.html"><a href="charcreationoptions.html"
                                                                                className="nav__link">Other Character
                  Creation Options</a></li>
                <li role="presentation" data-page="optionalfeatures.html"><a href="optionalfeatures.html"
                                                                             className="nav__link">Other
                  Options &amp; Features</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="statgen.html"><a href="statgen.html" className="nav__link">Stat
                  Generator</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="lifegen.html"><a href="lifegen.html" className="nav__link">This Is
                  Your Life</a></li>
                <li role="presentation" data-page="names.html"><a href="names.html" className="nav__link">Names</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root"><a
              className="ve-dropdown-toggle" href="#" role="button">Dungeon Master <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation" data-page="dmscreen.html"><a href="dmscreen.html" className="nav__link">DM
                  Screen</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile"><a
                  className="ve-dropdown-toggle" href="#" role="button">Adventures <span
                  className="caret caret--right"></span></a>
                  <ul className="ve-dropdown-menu ve-dropdown-menu--side">
                    <li role="presentation" data-page="adventures.html"><a href="adventures.html" className="nav__link">View
                      All/Homebrew</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Supplements
                    </li>
                    <li role="presentation" data-page="adventure.html#lmop"><a href="adventure.html#lmop"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2014</div>
                      <div className="nav2-list__disp-source source__LMoP"></div>
                      Lost Mine of Phandelver</a></li>
                    <li role="presentation" data-page="adventure.html#hotdq"><a href="adventure.html#hotdq"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__HotDQ"></div>
                      Hoard of the Dragon Queen</a></li>
                    <li role="presentation" data-page="adventure.html#rot"><a href="adventure.html#rot"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__RoT"></div>
                      Rise of Tiamat</a></li>
                    <li role="presentation" data-page="adventure.html#pota"><a href="adventure.html#pota"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2015</div>
                      <div className="nav2-list__disp-source source__PotA"></div>
                      Princes of the Apocalypse</a></li>
                    <li role="presentation" data-page="adventure.html#oota"><a href="adventure.html#oota"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__OotA"></div>
                      Out of the Abyss</a></li>
                    <li role="presentation" data-page="adventure.html#cos"><a href="adventure.html#cos"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2016</div>
                      <div className="nav2-list__disp-source source__CoS"></div>
                      Curse of Strahd</a></li>
                    <li role="presentation" data-page="adventure.html#skt"><a href="adventure.html#skt"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__SKT"></div>
                      Storm King's Thunder</a></li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2017
                          </div>
                          <div className="nav2-list__disp-source source__TftYP"></div>
                          Tales from the Yawning Portal
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#tftyp-tsc"><a href="adventure.html#tftyp-tsc"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Sunless Citadel</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-tfof"><a
                          href="adventure.html#tftyp-tfof"
                          className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Forge of Fury</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-thsot"><a
                          href="adventure.html#tftyp-thsot"
                          className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Hidden Shrine of Tamoachan</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-wpm"><a href="adventure.html#tftyp-wpm"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          White Plume Mountain</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-dit"><a href="adventure.html#tftyp-dit"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Dead in Thay</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-atg"><a href="adventure.html#tftyp-atg"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Against the Giants</a></li>
                        <li role="presentation" data-page="adventure.html#tftyp-toh"><a href="adventure.html#tftyp-toh"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Tomb of Horrors</a></li>
                      </div>
                    </li>
                    <li role="presentation" data-page="adventure.html#toa"><a href="adventure.html#toa"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__ToA"></div>
                      Tomb of Annihilation</a></li>
                    <li role="presentation" data-page="adventure.html#wdh"><a href="adventure.html#wdh"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2018</div>
                      <div className="nav2-list__disp-source source__WDH"></div>
                      Waterdeep: Dragon Heist</a></li>
                    <li role="presentation" data-page="adventure.html#wdmm"><a href="adventure.html#wdmm"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__WDMM"></div>
                      Waterdeep: Dungeon of the Mad Mage</a></li>
                    <li role="presentation" data-page="adventure.html#gos"><a href="adventure.html#gos"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__GoS"></div>
                      Ghosts of Saltmarsh</a></li>
                    <li role="presentation" data-page="adventure.html#oow"><a href="adventure.html#oow"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__OoW"></div>
                      The Orrery of the Wanderer</a></li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          <div className="nav2-list__disp-source source__ESK"></div>
                          Essentials Kit
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#dip"><a href="adventure.html#dip"
                                                                                  className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Dragon of Icespire Peak</a></li>
                        <li role="presentation" data-page="adventure.html#slw"><a href="adventure.html#slw"
                                                                                  className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Storm Lord's Wrath</a></li>
                        <li role="presentation" data-page="adventure.html#sdw"><a href="adventure.html#sdw"
                                                                                  className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Sleeping Dragon's Wake</a></li>
                        <li role="presentation" data-page="adventure.html#dc"><a href="adventure.html#dc"
                                                                                 className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Divine Contention</a></li>
                      </div>
                    </li>
                    <li role="presentation" data-page="adventure.html#bgdia"><a href="adventure.html#bgdia"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__BGDIA"></div>
                      Baldur's Gate: Descent Into Avernus</a></li>
                    <li role="presentation" data-page="adventure.html#efr"><a href="adventure.html#efr"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__EFR"></div>
                      Eberron: Forgotten Relics</a></li>
                    <li role="presentation" data-page="adventure.html#mot-nss"><a href="adventure.html#mot-nss"
                                                                                  className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020</div>
                      <div className="nav2-list__disp-source source__MOT"></div>
                      Theros: No Silent Secret</a></li>
                    <li role="presentation" data-page="adventure.html#idrotf"><a href="adventure.html#idrotf"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__IDRotF"></div>
                      Icewind Dale: Rime of the Frostmaiden</a></li>
                    <li role="presentation" data-page="adventure.html#cm"><a href="adventure.html#cm"
                                                                             className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2021</div>
                      <div className="nav2-list__disp-source source__CM"></div>
                      Candlekeep Mysteries</a></li>
                    <li role="presentation" data-page="adventure.html#hol"><a href="adventure.html#hol"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__HoL"></div>
                      Ravenloft: The House of Lament</a></li>
                    <li role="presentation" data-page="adventure.html#wbtw"><a href="adventure.html#wbtw"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__WBtW"></div>
                      The Wild Beyond the Witchlight</a></li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          <div className="nav2-list__disp-source source__SCC"></div>
                          Strixhaven: A Curriculum of Chaos
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#scc-ck"><a href="adventure.html#scc-ck"
                                                                                     className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Strixhaven: Campus Kerfuffle</a></li>
                        <li role="presentation" data-page="adventure.html#scc-hfmt"><a href="adventure.html#scc-hfmt"
                                                                                       className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Strixhaven: Hunt for Mage Tower</a></li>
                        <li role="presentation" data-page="adventure.html#scc-tmm"><a href="adventure.html#scc-tmm"
                                                                                      className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Strixhaven: The Magister's Masquerade</a></li>
                        <li role="presentation" data-page="adventure.html#scc-arir"><a href="adventure.html#scc-arir"
                                                                                       className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Strixhaven: A Reckoning in Ruins</a></li>
                      </div>
                    </li>
                    <li role="presentation" data-page="adventure.html#jttrc"><a href="adventure.html#jttrc"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__JttRC"></div>
                      Journeys through the Radiant Citadel</a></li>
                    <li role="presentation" data-page="adventure.html#dosi"><a href="adventure.html#dosi"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__DoSI"></div>
                      Dragons of Stormwreck Isle</a></li>
                    <li role="presentation" data-page="adventure.html#lox"><a href="adventure.html#lox"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__LoX"></div>
                      Light of Xaryxis</a></li>
                    <li role="presentation" data-page="adventure.html#dsotdq"><a href="adventure.html#dsotdq"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__DSotDQ"></div>
                      Dragonlance: Shadow of the Dragon Queen</a></li>
                    <li role="presentation" data-page="adventure.html#kftgv"><a href="adventure.html#kftgv"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2023</div>
                      <div className="nav2-list__disp-source source__KftGV"></div>
                      Keys from the Golden Vault</a></li>
                    <li role="presentation" data-page="adventure.html#pabtso"><a href="adventure.html#pabtso"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__PaBTSO"></div>
                      Phandelver and Below: The Shattered Obelisk</a></li>
                    <li role="presentation" data-page="adventure.html#tofw"><a href="adventure.html#tofw"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__ToFW"></div>
                      Turn of Fortune's Wheel</a></li>
                    <li role="presentation" data-page="adventure.html#ditlcot"><a href="adventure.html#ditlcot"
                                                                                  className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2024</div>
                      <div className="nav2-list__disp-source source__DitLCoT"></div>
                      Descent into the Lost Caverns of Tsojcanth</a></li>
                    <li role="presentation" data-page="adventure.html#vnotee"><a href="adventure.html#vnotee"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__VNotEE"></div>
                      Vecna: Nest of the Eldritch Eye</a></li>
                    <li role="presentation" data-page="adventure.html#veor"><a href="adventure.html#veor"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__VEoR"></div>
                      Vecna: Eve of Ruin</a></li>
                    <li role="presentation" data-page="adventure.html#qftis"><a href="adventure.html#qftis"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__QftIS"></div>
                      Quests from the Infinite Staircase</a></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      Extras
                    </li>
                    <li role="presentation" data-page="adventure.html#ttp"><a href="adventure.html#ttp"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2017</div>
                      <div className="nav2-list__disp-source source__TTP"></div>
                      The Tortle Package</a></li>
                    <li role="presentation" data-page="adventure.html#tlk"><a href="adventure.html#tlk"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__TLK"></div>
                      The Lost Kenku</a></li>
                    <li role="presentation" data-page="adventure.html#xmts"><a href="adventure.html#xmts"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__XMtS"></div>
                      X Marks the Spot</a></li>
                    <li role="presentation" data-page="adventure.html#llk"><a href="adventure.html#llk"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2018</div>
                      <div className="nav2-list__disp-source source__LLK"></div>
                      Lost Laboratory of Kwalish</a></li>
                    <li role="presentation" data-page="adventure.html#kkw"><a href="adventure.html#kkw"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__KKW"></div>
                      Krenko's Way</a></li>
                    <li role="presentation" data-page="adventure.html#azfyt"><a href="adventure.html#azfyt"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2019</div>
                      <div className="nav2-list__disp-source source__AZfyT"></div>
                      A Zib for Your Thoughts</a></li>
                    <li role="presentation" data-page="adventure.html#hftt"><a href="adventure.html#hftt"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__HftT"></div>
                      Hunt for the Thessalhydra</a></li>
                    <li role="presentation" data-page="adventure.html#hwaitw"><a href="adventure.html#hwaitw"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__HWAitW"></div>
                      Humblewood: Adventure in the Wood</a></li>
                    <li role="presentation" data-page="adventure.html#lr"><a href="adventure.html#lr"
                                                                             className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__LR"></div>
                      Locathah Rising</a></li>
                    <li role="presentation" data-page="adventure.html#imr"><a href="adventure.html#imr"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__IMR"></div>
                      Infernal Machine Rebuild</a></li>
                    <li role="presentation" data-page="adventure.html#rmbre"><a href="adventure.html#rmbre"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__RMBRE"></div>
                      The Lost Dungeon of Rickedness: Big Rick Energy</a></li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2020
                          </div>
                          <div className="nav2-list__disp-source source__EGW"></div>
                          Explorer’s Guide to Wildemount
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#tor"><a href="adventure.html#tor"
                                                                                  className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Wildemount: Tide of Retribution</a></li>
                        <li role="presentation" data-page="adventure.html#dd"><a href="adventure.html#dd"
                                                                                 className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Wildemount: Dangerous Designs</a></li>
                        <li role="presentation" data-page="adventure.html#fs"><a href="adventure.html#fs"
                                                                                 className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Wildemount: Frozen Sick</a></li>
                        <li role="presentation" data-page="adventure.html#us"><a href="adventure.html#us"
                                                                                 className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Wildemount: Unwelcome Spirits</a></li>
                      </div>
                    </li>
                    <li role="presentation" data-page="adventure.html#rtg"><a href="adventure.html#rtg"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2021</div>
                      <div className="nav2-list__disp-source source__RtG"></div>
                      Return to the Glory</a></li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          <div className="nav2-list__disp-source source__AitFR"></div>
                          Adventures in the Forgotten Realms
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#aitfr-isf"><a href="adventure.html#aitfr-isf"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          In Scarlet Flames</a></li>
                        <li role="presentation" data-page="adventure.html#aitfr-thp"><a href="adventure.html#aitfr-thp"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Hidden Page</a></li>
                        <li role="presentation" data-page="adventure.html#aitfr-avt"><a href="adventure.html#aitfr-avt"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          A Verdant Tomb</a></li>
                        <li role="presentation" data-page="adventure.html#aitfr-dn"><a href="adventure.html#aitfr-dn"
                                                                                       className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Deepest Night</a></li>
                        <li role="presentation" data-page="adventure.html#aitfr-fcd"><a href="adventure.html#aitfr-fcd"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          From Cyan Depths</a></li>
                      </div>
                    </li>
                    <li className="nav2-accord__wrp">
                      <div className="nav2-accord__head split-v-center clickable">
                        <div>
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          <div className="nav2-list__disp-source source__NRH"></div>
                          NERDS Restoring Harmony
                        </div>
                        <div>[+]</div>
                      </div>
                      <div className="nav2-accord__body ve-hidden">
                        <li role="presentation" data-page="adventure.html#nrh-tcmc"><a href="adventure.html#nrh-tcmc"
                                                                                       className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Candy Mountain Caper</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-avitw"><a href="adventure.html#nrh-avitw"
                                                                                        className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          A Voice in the Wilderness</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-ass"><a href="adventure.html#nrh-ass"
                                                                                      className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          A Sticky Situation</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-coi"><a href="adventure.html#nrh-coi"
                                                                                      className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Circus of Illusion</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-tlt"><a href="adventure.html#nrh-tlt"
                                                                                      className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          The Lost Tomb</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-awol"><a href="adventure.html#nrh-awol"
                                                                                       className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          A Web of Lies</a></li>
                        <li role="presentation" data-page="adventure.html#nrh-at"><a href="adventure.html#nrh-at"
                                                                                     className="nav__link nav2-accord__lnk-item inline-block w-100">
                          <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                          Adventure Together</a></li>
                      </div>
                    </li>
                    <li role="presentation" data-page="adventure.html#crcotn"><a href="adventure.html#crcotn"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2022</div>
                      <div className="nav2-list__disp-source source__CRCotN"></div>
                      Critical Role: Call of the Netherdeep</a></li>
                    <li role="presentation" data-page="adventure.html#sja"><a href="adventure.html#sja"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__SjA"></div>
                      Spelljammer Academy</a></li>
                    <li role="presentation" data-page="adventure.html#gotsf"><a href="adventure.html#gotsf"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2023</div>
                      <div className="nav2-list__disp-source source__GotSF"></div>
                      Giants of the Star Forge</a></li>
                    <li role="presentation" data-page="adventure.html#lk"><a href="adventure.html#lk"
                                                                             className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__LK"></div>
                      Lightning Keep</a></li>
                    <li role="presentation" data-page="adventure.html#coa"><a href="adventure.html#coa"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__CoA"></div>
                      Chains of Asmodeus</a></li>
                    <li role="presentation" data-page="adventure.html#pip"><a href="adventure.html#pip"
                                                                              className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__PiP"></div>
                      Peril in Pinebrook</a></li>
                    <li role="presentation" data-page="adventure.html#hfstcm"><a href="adventure.html#hfstcm"
                                                                                 className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__HFStCM"></div>
                      Heroes' Feast: Saving the Childrens Menu</a></li>
                    <li role="presentation" data-page="adventure.html#ghloe"><a href="adventure.html#ghloe"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__GHLoE"></div>
                      Grim Hollow: Lairs of Etharis</a></li>
                    <li role="presentation" data-page="adventure.html#dodk"><a href="adventure.html#dodk"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__DoDk"></div>
                      Dungeons of Drakkenheim</a></li>
                    <li role="presentation" data-page="adventure.html#lrdt"><a href="adventure.html#lrdt"
                                                                               className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block">2024</div>
                      <div className="nav2-list__disp-source source__LRDT"></div>
                      Red Dragon's Tale: A LEGO Adventure</a></li>
                    <li role="presentation" data-page="adventure.html#uthftlh"><a href="adventure.html#uthftlh"
                                                                                  className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__UtHftLH"></div>
                      Uni and the Hunt for the Lost Horn</a></li>
                    <li role="presentation" data-page="adventure.html#scoee"><a href="adventure.html#scoee"
                                                                                className="nav__link">
                      <div className="ve-small mr-2 page__nav-date inline-block ve-text-right inline-block"></div>
                      <div className="nav2-list__disp-source source__ScoEE"></div>
                      Scions of Elemental Evil</a></li>
                  </ul>
                </li>
                <li role="presentation" data-page="cultsboons.html"><a href="cultsboons.html"
                                                                       className="nav__link">Cults &amp; Supernatural
                  Boons</a></li>
                <li role="presentation" data-page="objects.html"><a href="objects.html"
                                                                    className="nav__link">Objects</a></li>
                <li role="presentation" data-page="trapshazards.html"><a href="trapshazards.html"
                                                                         className="nav__link">Traps &amp; Hazards</a>
                </li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="crcalculator.html"><a href="crcalculator.html" className="nav__link">CR
                  Calculator</a></li>
                <li role="presentation" data-page="encountergen.html"><a href="encountergen.html" className="nav__link">Encounter
                  Generator</a></li>
                <li role="presentation" data-page="lootgen.html"><a href="lootgen.html" className="nav__link">Loot
                  Generator</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="maps.html"><a href="maps.html" className="nav__link">Maps</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root"><a
              className="ve-dropdown-toggle" href="#" role="button">References <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation" data-page="actions.html"><a href="actions.html"
                                                                    className="nav__link">Actions</a></li>
                <li role="presentation" data-page="bestiary.html"><a href="bestiary.html"
                                                                     className="nav__link">Bestiary</a></li>
                <li role="presentation" data-page="conditionsdiseases.html"><a href="conditionsdiseases.html"
                                                                               className="nav__link">Conditions &amp; Diseases</a>
                </li>
                <li role="presentation" data-page="decks.html"><a href="decks.html" className="nav__link">Decks</a></li>
                <li role="presentation" data-page="deities.html"><a href="deities.html"
                                                                    className="nav__link">Deities</a></li>
                <li role="presentation" data-page="items.html"><a href="items.html" className="nav__link">Items</a></li>
                <li role="presentation" data-page="languages.html"><a href="languages.html"
                                                                      className="nav__link">Languages</a></li>
                <li role="presentation" data-page="rewards.html"><a href="rewards.html" className="nav__link">Supernatural
                  Gifts &amp; Rewards</a></li>
                <li role="presentation" data-page="psionics.html"><a href="psionics.html"
                                                                     className="nav__link">Psionics</a></li>
                <li role="presentation" data-page="spells.html"><a href="spells.html" className="nav__link">Spells</a>
                </li>
                <li role="presentation" data-page="vehicles.html"><a href="vehicles.html"
                                                                     className="nav__link">Vehicles</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="recipes.html"><a href="recipes.html"
                                                                    className="nav__link">Recipes</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root"><a
              className="ve-dropdown-toggle" href="#" role="button">Utilities <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation" data-page="search.html"><a href="search.html" className="nav__link">Search</a>
                </li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="blocklist.html"><a href="blocklist.html" className="nav__link">Content
                  Blocklist</a></li>
                <li role="presentation" data-page="manageprerelease.html"><a href="manageprerelease.html"
                                                                             className="nav__link">Prerelease Content
                  Manager</a></li>
                <li role="presentation" data-page="managebrew.html"><a href="managebrew.html" className="nav__link">Homebrew
                  Manager</a></li>
                <li role="presentation" className="ve-flex-v-center"><span className="inline-block w-100 min-w-0">Load All Partnered Content</span><span
                  className="inline-block" title="Export Prerelease Content/Homebrew List as URL"><span
                  className="glyphicon glyphicon-link"></span></span></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="inittrackerplayerview.html"><a href="inittrackerplayerview.html"
                                                                                  className="nav__link">Initiative
                  Tracker Player View</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="renderdemo.html"><a href="renderdemo.html" className="nav__link">Renderer
                  Demo</a></li>
                <li role="presentation" data-page="makebrew.html"><a href="makebrew.html" className="nav__link">Homebrew
                  Builder</a></li>
                <li role="presentation" data-page="makecards.html"><a href="makecards.html" className="nav__link">RPG
                  Cards JSON Builder</a></li>
                <li role="presentation" data-page="converter.html"><a href="converter.html" className="nav__link">Text
                  Converter</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="plutonium.html"><a href="plutonium.html" className="nav__link">Plutonium
                  (Foundry Module) Features</a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="https://wiki.tercept.net/en/betteR20"><a
                  href="https://wiki.tercept.net/en/betteR20" className="nav__link inline-split-v-center w-100"
                  target="_blank"><span>Roll20 Script Help</span><span
                  className="glyphicon glyphicon-new-window"></span></a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="changelog.html"><a href="changelog.html"
                                                                      className="nav__link">Changelog</a></li>
                <li role="presentation" data-page="https://wiki.tercept.net/en/5eTools/HelpPages/races"><a
                  href="https://wiki.tercept.net/en/5eTools/HelpPages/races"
                  className="nav__link inline-split-v-center w-100" target="_blank"><span>Help</span><span
                  className="glyphicon glyphicon-new-window"></span></a></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation" data-page="privacy-policy.html"><a href="privacy-policy.html"
                                                                           className="nav__link">Privacy Policy</a></li>
              </ul>
            </li>
            <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile page__btn-nav-root"><a
              className="ve-dropdown-toggle" href="#" role="button">Settings <span className="caret "></span></a>
              <ul className="ve-dropdown-menu ve-dropdown-menu--top">
                <li role="presentation"><span>Preferences</span></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation"
                    title="Save any locally-stored data (loaded homebrew, active blocklists, DM Screen configuration,...) to a file.">
                  <span>Save State to File</span></li>
                <li role="presentation"
                    title="Load previously-saved data (loaded homebrew, active blocklists, DM Screen configuration,...) from a file.">
                  <span>Load State from File</span></li>
                <li role="presentation" className="ve-dropdown-divider"></li>
                <li role="presentation"
                    title="Add the site to your home screen. When used in conjunction with the Preload Offline Data option, this can create a functional offline copy of the site.">
                  <span>Add as App</span></li>
                <li role="presentation" className="dropdown dropdown--navbar page__nav-hidden-mobile" data-timer-id="1">
                  <a className="ve-dropdown-toggle" href="#" role="button">Preload Data <span
                    className="caret caret--right"></span></a>
                  <ul className="ve-dropdown-menu ve-dropdown-menu--side">
                    <li role="presentation" className="italic ve-muted ve-small nav2-list__label"><p>Preload data for
                      offline use.</p><p>Note that visiting a page will automatically preload data for that page.</p>
                      <p>Note that data which is already preloaded will not be overwritten, unless it is out of
                        date.</p></li>
                    <li role="presentation" title="Preload adventure text for offline use.">
                      <span>Preload Adventure Text <small>(50MB+)</small></span></li>
                    <li role="presentation"
                        title="Preload book images offline use. Note that book text is preloaded automatically."><span>Preload Book Images <small>(1GB+)</small></span>
                    </li>
                    <li role="presentation" title="Preload adventure text and images for offline use."><span>Preload Adventure Text and Images <small>(2GB+)</small></span>
                    </li>
                    <li role="presentation" title="Preload all images for offline use.">
                      <span>Preload All Images <small>(4GB+)</small></span></li>
                    <li role="presentation" title="Preload everything for offline use.">
                      <span>Preload All <small>(5GB+)</small></span></li>
                    <li role="presentation" className="ve-dropdown-divider"></li>
                    <li role="presentation" title="Remove all preloaded data, and clear away any caches."><span>Reset Preloaded Data</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <div className="input-group omni__wrp-input"><input className="form-control search omni__input"
                                                                title="Hotkey: F. Disclaimer: unlikely to search everywhere. Use with caution."
                                                                type="search" placeholder="Search everywhere..."
                                                                autoComplete="new-password" autoCapitalize="off"
                                                                spellCheck="false"/><span
              className="absolute glyphicon glyphicon-remove omni__btn-clear"></span>
              <div className="input-group-btn">
                <button className="ve-btn ve-btn-default omni__submit" tabIndex="-1"><span
                  className="glyphicon glyphicon-search"></span></button>
              </div>
            </div>
          </ul>
          <div className="omni__wrp-output ve-flex ve-hidden">
            <div className="omni__output"></div>
          </div>
        </nav>
        <div className="view-col-group--cancer h-100 mh-0">
          <div className="container view-col-wrapper view-col-wrapper--cancer">
            <div className="view-col" id="listcontainer">
              <div id="filtertools" className="input-group input-group--bottom ve-flex no-shrink">
                <button type="button" className="ve-col-4 sort ve-btn ve-btn-default ve-btn-xs" data-sort="name">
                  Name<span className="lst__caret lst__caret--active lst__caret--reverse"></span>
                </button>
                <button type="button" className="ve-col-4 sort ve-btn ve-btn-default ve-btn-xs" data-sort="ability">
                  Ability<span className="lst__caret"></span></button>
                <button type="button" className="ve-col-2 sort ve-btn ve-btn-default ve-btn-xs" data-sort="size">
                  Size<span className="lst__caret"></span></button>
                <button type="button" className="sort ve-btn ve-btn-default ve-btn-xs ve-grow" data-sort="source">
                  Source<span className="lst__caret"></span></button>
              </div>
              {/*TODO: When selecting a div update the class with 'list-multi-selected'*/}
              <div id="list" className="list list--stats">
                <div className="lst__row ve-flex-col list-multi-selected">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
                <div className="lst__row ve-flex-col">
                  <a href="#aarakocra_mpmm" className="lst__row-border lst__row-inner">
                    <span className="bold ve-col-4 pl-0 pr-1">Aarakocra</span>
                    <span className="ve-col-4 px-1 italic">Lineage</span>
                    <span className="ve-col-2 px-1 ve-text-center">Medium</span>
                    <span className="ve-col-2 ve-text-center source__MPMM pl-1 pr-0"
                          title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
            {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
            <Tabs className="view-col" id="contentwrapper">
              <TabList className="w-100 ve-flex" id="stat-tabs" defaultIndex={0} style={{paddingLeft: "0px",marginBottom: "0px"}}>
                <Tab
                  className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0 ui-tab__btn-tab-head--active">Traits</Tab>
                <Tab className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Info</Tab>
                <Tab className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Images</Tab>
                <li className="ml-auto ve-flex" id="tabs-right">
                  <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                          title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
                  </button>
                  <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                          title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                    className="glyphicon glyphicon-new-window"></span></button>
                  <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                          title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                    className="glyphicon glyphicon-magnet"></span></button>
                  <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                          title="Other Options"><span className="glyphicon glyphicon-option-vertical"></span></button>
                </li>
              </TabList>
                <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
                  <table className="w-100 stats">
                    <tr>
                      <th className="ve-tbl-border" colSpan="6"></th>
                    </tr>
                    <tr>
                      <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-name="Goblin"
                          data-page="races.html" data-source="MPMM" data-hash="goblin_mpmm">
                        <div className="split-v-end">
                          <div className="ve-flex-v-center">
                            <h1 className="stats__h-name copyable m-0" onMouseDown="event.preventDefault()"
                                onClick="Renderer.utils._pHandleNameClick(this)">Traits</h1>
                          </div>
                          <div className="stats__wrp-h-source  ve-flex-v-baseline">
                            <a href="book.html#MPMM,page:20"
                               className="help-subtle stats__h-source-abbreviation source__MPMM"
                               title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</a>
                            <a href="book.html#MPMM,page:20" className="rd__stats-name-page ml-1"
                               title="Page 20">p20</a>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="ve-tbl-border" colSpan="6"></th>
                    </tr>
                  </table>
                </TabPanel>
              <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
                <table className="w-100 stats">
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                  <tr>
                    <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-name="Goblin"
                        data-page="races.html" data-source="MPMM" data-hash="goblin_mpmm">
                      <div className="split-v-end">
                        <div className="ve-flex-v-center">
                          <h1 className="stats__h-name copyable m-0" onMouseDown="event.preventDefault()"
                              onClick="Renderer.utils._pHandleNameClick(this)">Info</h1>
                        </div>
                        <div className="stats__wrp-h-source  ve-flex-v-baseline">
                          <a href="book.html#MPMM,page:20"
                             className="help-subtle stats__h-source-abbreviation source__MPMM"
                             title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</a>
                          <a href="book.html#MPMM,page:20" className="rd__stats-name-page ml-1"
                             title="Page 20">p20</a>
                        </div>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                </table>
              </TabPanel>
              <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
                <table className="w-100 stats">
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                  <tr>
                    <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-name="Goblin"
                        data-page="races.html" data-source="MPMM" data-hash="goblin_mpmm">
                      <div className="split-v-end">
                        <div className="ve-flex-v-center">
                          <h1 className="stats__h-name copyable m-0" onMouseDown="event.preventDefault()"
                              onClick="Renderer.utils._pHandleNameClick(this)">Images</h1>
                        </div>
                        <div className="stats__wrp-h-source  ve-flex-v-baseline">
                          <a href="book.html#MPMM,page:20"
                             className="help-subtle stats__h-source-abbreviation source__MPMM"
                             title="Mordenkainen Presents: Monsters of the Multiverse">MPMM</a>
                          <a href="book.html#MPMM,page:20" className="rd__stats-name-page ml-1"
                             title="Page 20">p20</a>
                        </div>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>

    </>
  )
}