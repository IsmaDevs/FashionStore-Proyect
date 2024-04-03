import { Link } from "react-router-dom";
import logoMF from "../assets/logoMF.png";
import { HiMiniHome } from "react-icons/hi2";
import { PiPantsFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 text-white" id="bg-footer">
        <div className="col-xs-12 col-md-6 col-lg-3">
          <img src={logoMF} width={200} alt="" />
          <div className="mt-5 dev">
            <i className="me-1 fa-solid fa-code text-info"></i>
            <a
              className="h6 text-white text-right text-decoration-none"
              target="_blank"
              rel="noopener"
              href="hhttps://github.com/Ismaeldevs"
            >
              {" "}
              Desarrollado Por @Ismadev
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className="mb-3 h5">Atajos</p>
          <div className="mb-3">
            <HiMiniHome />
            <a className="text-secondary text-decoration-none" href="/">
              {" "}
              Inicio
            </a>
          </div>
          <div className="mb-3">
            <FaTshirt />
            <a
              className="text-secondary text-decoration-none"
              href="/camisetas"
            >
              {" "}
              Camisetas
            </a>
          </div>
          <div className="mb-3">
            <PiPantsFill />
            <a
              className="text-secondary text-decoration-none"
              href="/pantalones"
            >
              {" "}
              Pantalones
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <div className="desc-contacto">
            <h5 className="mb-3">Contactanos</h5>
            <p>Numero de Celular</p>
            <p>Correo Electronico</p>
            <p>Direccion Especifica</p>
            <br />
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p id="redes" className="h5">
            Siguenos en
          </p>
          <div className="redes-social">
            <div className="mb-2">
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                className="BtnTwitter"
              >
                <svg fill="white" viewBox="0 0 512 512" height="1.2em">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
                <span className="tooltip">@Usuario</span>
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                className="BtnInstagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                  className="svgIcon"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
                <span className="tooltip">@Usuario</span>
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                className="BtnTikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  viewBox="0 0 120 120"
                  height="33"
                  fill="none"
                >
                  <linearGradient
                    y2=".304922"
                    y1="120.316"
                    x2="119.695"
                    x1="-.315704"
                    gradientUnits="userSpaceOnUse"
                    id="a"
                  >
                    <stop stopColor="#111" offset="0"></stop>
                    <stop stopColor="#111111" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    y2="8.24531"
                    y1="106.225"
                    x2="96.1079"
                    x1="9.51229"
                    gradientUnits="userSpaceOnUse"
                    id="b"
                  >
                    <stop stopColor="#b5053c" offset="0"></stop>
                    <stop stopColor="#c90441" offset=".233"></stop>
                    <stop stopColor="#f0014b" offset=".737"></stop>
                    <stop stopColor="#ff004f" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    y2="4.31615"
                    y1="107.524"
                    x2="99.259"
                    x1="8.04132"
                    gradientUnits="userSpaceOnUse"
                    id="c"
                  >
                    <stop stopColor="#00b2c9" offset="0"></stop>
                    <stop stopColor="#00c8d4" offset=".283"></stop>
                    <stop stopColor="#00e6e4" offset=".741"></stop>
                    <stop stopColor="#00f1ea" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    y2="-74.0346"
                    y1="166.882"
                    x2="152.254"
                    x1="-59.6216"
                    gradientUnits="userSpaceOnUse"
                    id="d"
                  >
                    <stop stopColor="#dde3e4" offset="0"></stop>
                    <stop stopColor="#fcf7f7" offset="1"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="m60 0c-33.1371 0-60 26.8629-60 60s26.8629 60 60 60 60-26.8629 60-60-26.8629-60-60-60z"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="m92.2802 43.9526c-2.2273 0-4.4327-.4387-6.4905-1.291-2.0577-.8523-3.9274-2.1016-5.5024-3.6765-1.5749-1.5749-2.8242-3.4446-3.6766-5.5023-.8523-2.0578-1.291-4.2633-1.291-6.4905h-12.1172v47.4487c-.0023 2.1633-.6854 4.271-1.9525 6.0244-1.2671 1.7533-3.0539 3.0634-5.1072 3.7446-2.0532.6811-4.2688.6988-6.3326.0504-2.0639-.6484-3.8713-1.9298-5.1661-3.6628-1.2949-1.733-2.0115-3.8295-2.0482-5.9925-.0368-2.163.6081-4.2827 1.8434-6.0586 1.2352-1.776 2.998-3.1181 5.0387-3.8362 2.0406-.7182 4.2555-.7758 6.3307-.1648v-11.7788c-4.4102-.5947-8.8969.1703-12.861 2.1927-3.964 2.0223-7.2167 5.2059-9.3238 9.1256s-2.9682 8.3889-2.4683 12.8109c.4998 4.422 2.3368 8.5862 5.2656 11.9367s6.8101 5.7277 11.1255 6.8143c4.3155 1.0865 8.8597.8306 13.0259-.7335s7.7561-4.362 10.2903-8.02c2.5342-3.6581 3.8921-8.0022 3.8924-12.4524l.3516-23.984c4.9786 3.6549 10.9958 5.6215 17.1719 5.6123z"
                  ></path>
                  <path
                    fill="url(#c)"
                    d="m89.077 40.6519c-4.4981-.0002-8.8119-1.7871-11.9925-4.9678s-4.9674-7.4947-4.9673-11.9928h-12.1172v47.4488c-.0023 2.1633-.6853 4.271-1.9524 6.0244-1.267 1.7534-3.0538 3.0635-5.1071 3.7447-2.0532.6812-4.2688.6989-6.3327.0505-2.0638-.6483-3.8713-1.9298-5.1662-3.6627-1.2948-1.733-2.0114-3.8295-2.0482-5.9925s.6081-4.2827 1.8433-6.0587c1.2353-1.776 2.9981-3.1181 5.0387-3.8363 2.0407-.7181 4.2556-.7757 6.3308-.1647v-11.779c-4.4102-.5947-8.8969.1702-12.861 2.1926-3.964 2.0224-7.2167 5.206-9.3238 9.1257s-2.9682 8.3889-2.4683 12.8109c.4998 4.4219 2.3368 8.5862 5.2656 11.9367 2.9288 3.3504 6.8101 5.7277 11.1255 6.8142 4.3155 1.0865 8.8597.8307 13.0259-.7334s7.7561-4.362 10.2903-8.0201c2.5342-3.658 3.8921-8.0022 3.8924-12.4523l.3535-23.9839c4.9786 3.6549 10.9958 5.6214 17.1719 5.6122z"
                  ></path>
                  <path
                    fill="url(#d)"
                    d="m89.077 43.6493c-4.1924-.8067-7.9265-3.1649-10.4566-6.6038-3.1979-2.5027-5.3914-6.07-6.1816-10.0532h-9.2363v47.4487c-.0002 2.2519-.7366 4.4419-2.098 6.2357s-3.2724 3.0929-5.4412 3.6989-4.4764.4857-6.5705-.3426c-2.094-.8283-3.8595-2.3191-5.027-4.2447-2.0761-1.3513-3.5967-3.4046-4.2839-5.7845-.6871-2.3799-.495-4.9277.5412-7.1777 1.0363-2.25 2.8475-4.052 5.1027-5.0768 2.2553-1.0247 4.804-1.2038 7.1804-.5045v-8.6679c-4.0761.0525-8.0564 1.2433-11.4916 3.438s-6.1885 5.306-7.9492 8.9826-2.4586 7.7721-2.015 11.8244c.4436 4.0522 2.0111 7.8997 4.5255 11.1083 3.1921 2.6636 7.0774 4.362 11.2003 4.8961 4.123.5341 8.3128-.1181 12.0783-1.8803 3.7655-1.7623 6.9506-4.5614 9.1819-8.0693 2.2314-3.5079 3.4165-7.5792 3.4164-11.7366l.3535-23.9839c4.9786 3.6549 10.9958 5.6214 17.1719 5.6122z"
                  ></path>
                </svg>
                <span className="tooltip">@Usuario</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-xs-12">
          <p className="h5 text-white text-center">
            © Derechos Reservados 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
