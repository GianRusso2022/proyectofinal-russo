import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

export const NavBar = () => {
    const { cart, getCartQty } = useCartContext();
    return <nav className="navbar navbar-expand-lg bg-dark container fixed-top">

        <div className="container ">
            <Link to="/">
                <img src="../logolp.png" alt="Logo LosPaseos" width="70" className='rounded-5' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNavDropdown">
                <ul className="navbar-nav d-flex justify-content-between w-75 ">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link text-white" aria-current="page" href="#">Todos</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link to="/category/arnes" className="dropdown-item" href="#">Arnes</Link></li>
                            <li><Link to="/category/correas" className="dropdown-item" href="#">Correas</Link></li>
                            <li> <Link to="/category/collares" className="dropdown-item" href="#">Collares</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <Link to="/checkout">
            <span className="m-4 d-flex flex-direction-column text-center fs-5 link-light">🛒{getCartQty()}</span>
        </Link>
    </nav>
}

