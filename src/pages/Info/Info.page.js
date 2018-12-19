import React, { Component } from "react";
import "./Info.page.scss";
import { Link } from "react-router-dom";
import { Seo, ScrollToTop, Hero, Header } from "components/common";
import {
  ChevronRightIcon,
  OpenInNewIcon,
  WebIcon,
  MailOutlineIcon
} from "mdi-react";
import Logo from "logo.png";
import Facebook from "facebook-brands.svg";
import Instagram from "instagram-brands.svg";

export class Info extends Component {
  render() {
    return (
      <>
        <Seo
          title="Informazioni - Alture"
          description="Informazioni sull'iniziativa Alture"
          url="https://alture.org/informazioni"
          image={Logo}
        />

        <Header />
        <Hero title="Informazioni" />
        <div className="info">
          <div className="info__menu">
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <span>Esplorando i confini</span>
            </div>
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <span>Gestisci le notifiche</span>
            </div>
            <div className="info__menu__item">
              <ChevronRightIcon className="info__icon" size={20} />
              <span>Dai un feedback</span>
            </div>
          </div>
          <div className="info__old">
            <div className="info__menu__item">
              <OpenInNewIcon className="info__icon" size={20} />
              <span>Alture Festival 2017</span>
            </div>
            <div className="info__menu__item">
              <OpenInNewIcon className="info__icon" size={20} />
              <span>Alture Festival 2016</span>
            </div>
          </div>
          <div className="info__contact">
            <span>A cura di:</span>
            <br />
            <span className="info__contact__heading">
              Associazione Il Capannone
            </span>
            <div className="info__contact__items">
              <div className="info__contact__item">
                <WebIcon className="info__icon" size={20} />
                <span>Website</span>
              </div>
              <div className="info__contact__item">
                <MailOutlineIcon className="info__icon" size={20} />
                <span>Mail</span>
              </div>
              <div className="info__contact__item">
                <img
                  src={Facebook}
                  className="info__icon"
                  alt="Facebook"
                  height="20px"
                  width="20px"
                />
                <span>Facebook</span>
              </div>
              <div className="info__contact__item">
                <img
                  src={Instagram}
                  className="info__icon"
                  alt="Instagram"
                  height="20px"
                  width="20px"
                />
                <span>Instagram</span>
              </div>
            </div>
          </div>
          <div className="info__privacy">
            <span>Privacy Policy</span>
          </div>
        </div>
      </>
    );
  }
}

{
  /*  <p className="info__text">
            Lo spirito dell"esploratore è dentro ciascuno di noi. L"uomo nasce
            esploratore, il desiderio di scoprire cosa si cela oltre il cancello
            o dall"altro lato della montagna è una sua tensione naturale. E,
            nell"immaginario collettivo, l"idea stessa di ricercare luoghi
            selvaggi e sconosciuti, di spingersi al di fuori della zona di
            comfort porta subito la mente su una cresta sottile, che sale verso
            il cielo. La montagna offre ancora molto spazio all"immaginario
            dell"esplorazione proprio perchè non tutta la sua superficie sembra
            occupata, e andare verso l"alto diviene quasi metafora
            dell"anticonformismo, della volontà di non omologarsi: quello di
            salire è infatti un gesto che sfida la più basica e potente delle
            leggi naturali, la gravità, e la presenza stessa delle montagne, in
            fondo, pare una ribellione alla linearità della pianura. Ma la
            montagna ci parla anche di cose semplici, della terra, dell"acqua,
            del sole, dell"aria, del nostro essere quegli stessi elementi di cui
            è composta la natura. Ed ecco che l"esplorazione verso l"altro
            prosegue, in parallelo, dentro ognuno di noi, alla ricerca di quello
            che siamo e di quello che sentiamo che ci manca. Perchè esplorare,
            in fondo, significa sognare di scoprire ciò che possiamo solo
            immaginare.
          </p> */
}
