import logo from './assets/dave.jpg';
import { FaSearch  } from 'react-icons/fa';

function Head() {
  return (
    <div className="header--wrapper">
    <div className="header--title">
        <span>Dave Pettit's Work Tracker</span>
        <h2>Dashboard</h2>
    </div>
    <div className="user--info">
        <div className="search--box">
            <FaSearch className='search-icon'/>
            <input type="text" placeholder="Search" />
        </div>
        <img src={logo} alt="Logo"/>
    </div>
</div>
  )
}
export default Head