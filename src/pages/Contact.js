import React, { useEffect } from "react";
import "../css/contact.css";
import AOS from "aos";
import { Helmet } from "react-helmet";

// Components
import ConfirmAgeModal from "./pagesComponents/ConfirmAgeModal";

// Images
import phone from "../img/contact_phone.svg";
import mail from "../img/contact_email.svg";

const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0);
        AOS.init({
            once: true,
            duration: 700,
        });
    });
    return (
        <div className="contact-page-body">
            <Helmet>
                <title>Crama Ferdi | Contact</title>
            </Helmet>
            <ConfirmAgeModal />
            <div className="contact-1">
                <h3> PAUL MIHĂILESCU</h3>
                <div className="profile-info">
                    <a role="button" href="tel:+40-0729-884-940">
                        <img src={phone} alt=" " />
                        0729-884-940
                    </a>
                    <div className="profile-img paul-img"></div>
                </div>
            </div>
            <div className="contact-2">
                <div className="profile-info">
                    <div className="profile-img fernando-img"></div>
                    <a role="button" href="mailto:office@cramaferdi.ro">
                        <span>office@cramaferdi.ro</span>
                        <img src={mail} alt=" " />
                    </a>
                </div>
                <h3>FERNANDO MIHĂILESCU</h3>
            </div>
            <div className="contact-1">
                <h3>OFELIA MARIAN</h3>
                <div className="profile-info">
                    <a role="button" href="tel:+40-0723-768-322">
                        <img src={phone} alt=" " />
                        0723-768-322
                    </a>
                    <div className="profile-img ofelia-img"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
