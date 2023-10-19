import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogout() {
        userService.logOut();
        setUser(null);
    }
    return (
        <nav className='nav'>
            welcome { user.username }
            &nbsp; | &nbsp;
            <Link to="" onClick={ handleLogout }> log out</Link>
        </nav>
    )
}