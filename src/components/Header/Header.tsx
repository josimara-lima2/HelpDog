import './Header.css'
import pataDog from '../../assets/images/pet.png'
const Header = () => {
  return (
    <header>
      <img  width='24px' height='24px' src={pataDog} alt="pata_dog" />
      <p>HelpDog</p>
      </header>
  )
}

export default Header