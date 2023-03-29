import calx2021 from "../../img/home/news/CALX2021.jpg";
import rc2022 from "../../img/home/news/RC2021.jpg";
import mrsl2020 from "../../img/home/news/MRSR2019.jpg";
import cunp2021 from "../../img/home/news/CUNP2020.jpg";
import lbkandfrancisc2021 from "../../img/home/news/CPIT2019.jpg";
import cfse2019 from "../../img/home/news/CFSE2019.jpg";

import { Link } from "react-router-dom";
const handleDragStart = (e) => e.preventDefault();

export const newsCards = [
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={cfse2019} alt="wineImage" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Cuveé Fario <br />
                Ediţie Specială <br />
                2019 <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">29 Mar 2023</div>
                <Link to="/vinuri/cuvee-fario-2019" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={mrsl2020} alt="wineImage" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Mister S <br />
                Legend <br />
                2020 <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">27 Mar 2023</div>
                <Link
                    to="/vinuri/mister-s-legend-2020"
                    className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img
                src={lbkandfrancisc2021}
                alt="wineImage"
                className="news-img"
            />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Cuveé Francisc <br />
                Ediţie Limitată <br />
                2021 <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">19 Mar 2023</div>
                <Link to="/vinuri/cuvee-francisc-2021" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img
                src={lbkandfrancisc2021}
                alt="wineImage"
                className="news-img"
            />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Lady Black <br />
                Ediţie Limitată <br />
                2021 <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">19 Mar 2023</div>
                <Link to="/vinuri/lady-black-2021" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={cunp2021} alt="wineImage" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Cuveé Unchiu Puiu <br />
                Ediţie Limitată
                <br />
                2021 <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">21 Feb 2023</div>
                <Link
                    to="/vinuri/cuvee-unchiu-puiu-2021"
                    className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={rc2022} alt="wineImage" className="news-img" />
            <div className="news-category category-pink">Vinuri</div>
            <div className="news-header">
                Rosé Cosmina <br /> Ediţie Limitată <br /> 2022
            </div>
            <div className="news-separator separator-pink"></div>
            <div className="news-footer">
                <div className="news-date">02 Dec 2022</div>
                <Link to="/vinuri/rose-cosmina-2022" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={calx2021} alt="wineImage" className="news-img" />
            <div className="news-category category-white">Vinuri</div>
            <div className="news-header">
                Cuveé Alexandra <br /> Ediţie Limitată
                <br /> 2022 <br />
            </div>
            <div className="news-separator separator-white"></div>
            <div className="news-footer">
                <div className="news-date">02 Dec 2022</div>
                <Link
                    to="/vinuri/cuvee-alexandra-2022"
                    className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={mads2021} alt="wineImage" className="news-img" />
    //         <div className="news-category category-white">Vinuri</div>
    //         <div className="news-header">
    //             White Queen <br />
    //             Ediţie Limitată <br />
    //             2021 <br />
    //         </div>
    //         <div className="news-separator separator-white"></div>
    //         <div className="news-footer">
    //             <div className="news-date">06 Sep 2022</div>
    //             <Link to="/vinuri/white-queen-2021" className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={lbk2020} alt="wineImage" className="news-img" />
    //         <div className="news-category category-red">Vinuri</div>
    //         <div className="news-header">
    //             Red King <br />
    //             Ediţie Limitată <br />
    //             2020 <br />
    //         </div>
    //         <div className="news-separator separator-red"></div>
    //         <div className="news-footer">
    //             <div className="news-date">06 Sep 2022</div>
    //             <Link to="/vinuri/red-king-2020" className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,

    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //   <div className="news-card">
    //     <img src={event} alt="wineImage" className="news-img" />
    //     <div className="news-category category-event">Eveniment</div>
    //     <div className="news-header">
    //       Ferdi Wines &amp;
    //       <br />
    //       Ileana Branişte's
    //       <br />
    //       Cooking <br />
    //     </div>
    //     <div className="news-separator separator-event"></div>
    //     <div className="news-footer">
    //       <div className="news-date">05 Iun 2022</div>
    //       <a
    //         href="https://www.facebook.com/events/s/ferdi-wines-ileana-branistes-c/1667124006985232/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="news-details"
    //       >
    //         Vezi mai mult...
    //       </a>
    //     </div>
    //   </div>
    // </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={lbk2020} alt="wineImage" className="news-img" />
    //         <div className="news-category category-red">Vinuri</div>
    //         <div className="news-header">
    //             Lady Black <br />
    //             Ediţie Limitată <br />
    //             2020 <br />
    //         </div>
    //         <div className="news-separator separator-red"></div>
    //         <div className="news-footer">
    //             <div className="news-date">30 Mar 2022</div>
    //             <Link to="/vinuri/lady-black-2020" className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={mads2021} alt="wineImage" className="news-img" />
    //         <div className="news-category category-white">Vinuri</div>
    //         <div className="news-header">
    //             Madame S<br /> Ediţie Limitată
    //             <br /> 2022 <br />
    //         </div>
    //         <div className="news-separator separator-white"></div>
    //         <div className="news-footer">
    //             <div className="news-date">07 Mar 2022</div>
    //             <Link
    //                 to="/vinuri/madame-s-2021-editie-limitata"
    //                 className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={mrsr2019} alt="wineImage" className="news-img" />
    //         <div className="news-category category-red">Vinuri</div>
    //         <div className="news-header">
    //             Mister S <br /> Rezerva
    //             <br /> 2019 <br />
    //         </div>
    //         <div className="news-separator separator-red"></div>
    //         <div className="news-footer">
    //             <div className="news-date">07 Mar 2022</div>
    //             <Link
    //                 to="/vinuri/mister-s-rezerva-2019"
    //                 className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={calx2021} alt="wineImage" className="news-img" />
    //         <div className="news-category category-white">Vinuri</div>
    //         <div className="news-header">
    //             Cuvee Alexandra <br /> Ediţie Limitată <br /> 2021
    //         </div>
    //         <div className="news-separator separator-white"></div>
    //         <div className="news-footer">
    //             <div className="news-date">30 Nov 2021</div>
    //             <Link
    //                 to="/vinuri/cuvee-alexandra-2021"
    //                 className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
];
