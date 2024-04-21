import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <a href="mailto:jorgesoares2997@gmail.com" className="link-card">
          <AiOutlineMail id="email-icon" />
        </a>
        <div>
          <abbr title="jorgesoares2997@gmail.com">
            <h3>E-mail</h3>
          </abbr>
          <p>Jorgesoares2997@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <a href="https://wa.link/2calgo" className="link-card">
          <AiFillPhone id="phone-icon" />
        </a>
        <div>
          <abbr title="(81) 98759-4291">
            <h3>Telefone</h3>
            
          </abbr>
          <p>(81) 98759-4291</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Recife-PE</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
