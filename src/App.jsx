import "./App.css";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <>
    <Navbar title ='Foodies' links= {[
    {
      name: 'Home', 
      url: '/home', 
    },
    {
      name: 'About', 
      url: '/about', 
    },
    {
      name: 'Foods',
      url: '/foods',
    },
    {
      name: 'Lifestyle',
      url: '/lifestyle',
    },{
      name: 'Contact',
      url: '/contact',
    }
  ]}/>
    </>
  )
}
export default App;