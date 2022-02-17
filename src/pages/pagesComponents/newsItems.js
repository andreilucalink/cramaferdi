import calx2021 from "../../img/home/news/CALX2021.jpg";
import rc2021 from "../../img/home/news/RC2021.jpg";

import { Link } from "react-router-dom";
const handleDragStart = (e) => e.preventDefault();
export const newsCards = [
    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={rkr2019} alt="RK2019" className="news-img" />
    //         <div className="news-category category-red">Vinuri</div>
    //         <div className="news-header">
    //             Red King <br /> Rezerva <br /> 2019 <br />
    //         </div>
    //         <div className="news-separator separator-red"></div>
    //         <div className="news-footer">
    //             <div className="news-date">26 Jan 2021</div>
    //             <Link
    //                 to="/vinuri/red-king-rezerva-2019"
    //                 className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
    <div className="card-wrapper wrapper-left" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={rc2021} alt="RC2021" className="news-img" />
            <div className="news-category category-pink">Vinuri</div>
            <div className="news-header">
                Rose Cosmina <br /> Ediţie Limitată <br /> 2021
            </div>
            <div className="news-separator separator-pink"></div>
            <div className="news-footer">
                <div className="news-date">30 Nov 2021</div>
                <Link to="/vinuri/rose-cosmina-2021" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper wrapper-right" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={calx2021} alt="RK2019" className="news-img" />
            <div className="news-category category-white">Vinuri</div>
            <div className="news-header">
                Cuvee Alexandra <br /> Ediţie Limitată <br /> 2021
            </div>
            <div className="news-separator separator-white"></div>
            <div className="news-footer">
                <div className="news-date">30 Nov 2021</div>
                <Link
                    to="/vinuri/cuvee-alexandra-2021"
                    className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,

    // <div className="card-wrapper" onDragStart={handleDragStart}>
    //     <div className="news-card">
    //         <img src={cupit2019} alt="RK2019" className="news-img" />
    //         <div className="news-category category-red">Vinuri</div>
    //         <div className="news-header">
    //             Cuvee Piţigaia <br />
    //             2019 <br /> <br />
    //         </div>
    //         <div className="news-separator separator-red"></div>
    //         <div className="news-footer">
    //             <div className="news-date">30 Nov 2021</div>
    //             <Link to="/vinuri/cuvee-pitigaia-2019" className="news-details">
    //                 Vezi mai mult...
    //             </Link>
    //         </div>
    //     </div>
    // </div>,
];
