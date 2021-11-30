import redking2019 from "../../img/home/news/rkr.jpg";
import cuveePaul2019 from "../../img/home/news/cupr.jpg";
import calx2021 from "../../img/home/news/CALX2021.jpg";
import cupit2019 from "../../img/home/news/CPIT2019.jpg";
import rc2021 from "../../img/home/news/RC2021.jpg";
import lbkl2019 from "../../img/home/news/LBKL2019.jpg";

import { Link } from "react-router-dom";
const handleDragStart = (e) => e.preventDefault();
export const newsCards = [
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={rc2021} alt="RC2021" className="news-img" />
            <div className="news-category category-pink">Vinuri</div>
            <div className="news-header">
                Rosé Cosmina <br /> Ediţie Limitată <br /> 2021
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
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={calx2021} alt="RK2019" className="news-img" />
            <div className="news-category category-white">Vinuri</div>
            <div className="news-header">
                Cuvée Alexandra <br /> Ediţie Limitată <br /> 2021
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
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={lbkl2019} alt="RK2019" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Lady Black <br /> Legend <br /> 2019
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">30 Nov 2021</div>
                <Link
                    to="/vinuri/lady-black-legend-2019"
                    className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={cupit2019} alt="RK2019" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Cuvée Piţigaia <br />
                2019 <br /> <br />
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">30 Nov 2021</div>
                <Link to="/vinuri/cuvee-pitigaia-2019" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper" onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={redking2019} alt="RK2019" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Red King <br /> Ediţie Limitată <br /> 2019
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">15 Oct 2021</div>
                <Link to="/vinuri/red-king-2019" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
    <div className="card-wrapper " onDragStart={handleDragStart}>
        <div className="news-card">
            <img src={cuveePaul2019} alt="RK2019" className="news-img" />
            <div className="news-category category-red">Vinuri</div>
            <div className="news-header">
                Cuvée Paul <br /> Rezerva <br /> 2019
            </div>
            <div className="news-separator separator-red"></div>
            <div className="news-footer">
                <div className="news-date">15 Oct 2021</div>
                <Link to="/vinuri/red-king-2019" className="news-details">
                    Vezi mai mult...
                </Link>
            </div>
        </div>
    </div>,
];
