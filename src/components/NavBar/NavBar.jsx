import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

    function handleLogout() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="" onClick={ handleLogout }>Log Out</Link>
        </nav>
    )
}