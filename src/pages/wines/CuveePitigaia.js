import React, {useEffect} from 'react'
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';

function CuveePitigaia() {

    useEffect(()=> {
        window.scrollTo(0,0);
        const age = window.sessionStorage.getItem('clientAge');
        if(!age || age === 'invalid'){
            window.location.href = "/";
        }
    },[]);

    const override = `
            position: absolute;
            top: 30%;
            left: 40%;
            height: 200px;
            width: 200px;
            `;

    return (
        <div className="single-product-container bg-cuvpit">
            <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/cupit.png')}
                        loader={ 
                        <DotLoader
                            css={override}
                            className="product-spinner"
                            size={200}
                            color={"#0f2027"}
                            />}
                />
                
            </div>
            <div className="single-product-desc">
                <h1>Cuvee Piţigaia 2017 </h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>

                </div>
                    <span id="grp">{'(Merlot si Cabernet Sauvignon)'}</span>
                
                <div className="text-desc">
                Un cupaj deja bine cunoscut al Cramei Ferdi, este
                un tip de Bordeaux Blend, unde soiul Merlot, cu un corp catifelat,
                elegant și cu arome de cireșe negre îl întâlnește pe regele vinurilor,
                Cabernet Sauvignon, care îi ridică aciditatea, îi îmbogățește taninii și
                corpul, la care se adaugă nuanța de grena închis, precum și aromele de
                piper verde și ciocolată. Acest vin cucerește cu o distincție anume și
                cu un postgust lung, după ce s-a odihnit la baric 24 de luni, având
                astfel un potențial de învechire de 10 – 12 ani.
                <br/>
                <ul className="swp-list">
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Sec
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Maturare – 24 luni, baric din stejar românesc
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75L
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 14,5%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Roşu
                    </li>
                </ul>
                </div>
                <div className="desc-buttons">
                    <Link to="/vinuri" className="desc-btn desc-btn-left">Vinuri</Link>
                    <Link to="/" className="desc-btn btn-desc-right" >Acasă</Link>
                </div>       
            </div>
        </div>
    )
}

export default CuveePitigaia
