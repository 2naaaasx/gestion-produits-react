import { Link } from "react-router-dom";

function Menu () {
    return (  

        <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
            <a className="navbar-brand text-dark" href="#"> LAAYOUNE STORE </a>
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link text-dark" to={"/produit/liste"}>Liste des Produits </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-dark" to={"/produit/create"}>Nouveau Produit</Link>
                    </li>
                   
                </ul>
           
            </div>
        </nav>
    );
}

export default Menu;