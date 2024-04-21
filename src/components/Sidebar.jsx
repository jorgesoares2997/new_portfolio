import avatar from '../img/jorgin.jpg'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <div>
      <aside id='sidebar'>
       <img src={avatar} alt="Jorge Soares" />
        <p className="title">Desenvolvedor Junior</p>
        <SocialNetworks />
        <InformationContainer/>
        <a href="#" className="btn">Download Curriculo</a>
      </aside>
    </div>
  )
}

export default Sidebar
