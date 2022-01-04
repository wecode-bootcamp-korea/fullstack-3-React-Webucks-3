import "./Topnav.scss"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Topnav() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/")
    };

    return (
        <div className="Topnav">
            <header>
                <h1 onClick={goToLogin}>WeBucks</h1>
                <nav>
                    <ul>
                        <li>COFFEE</li>
                        <li>MENU</li>
                        <li>STORE</li>
                        <li>WHAT'S NEW</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Topnav;