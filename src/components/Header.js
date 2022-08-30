
import logo1 from './images/react-logo.png'

export default function Header(){
    return (
    <header>
       <nav className = 'nav'>
            <img className= 'nav-img' src = {logo1} alt= 'react-logo'/>
         
          
            <ul className = 'nav-items'>
                <li>About</li>
                <li>Contact</li>
                <li>Pricing</li>
            </ul>
      </nav>
    </header>
      
    )
  }
  