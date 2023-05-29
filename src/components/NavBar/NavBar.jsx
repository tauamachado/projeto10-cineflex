import { Link, useNavigate, useLocation } from "react-router-dom"
import { NavContainer, BackArrow } from "./styledComponents.js"

export default function NavBar() {
    const navigate = useNavigate()

    return (
        <NavContainer>
            <Link to="/">
                CINEFLEX
            </Link>
        </NavContainer>
    )
}