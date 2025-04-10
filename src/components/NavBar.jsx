import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav style={{display:"flex", justifyContent: "space-around", alignItems:"center", padding:"2rem", color:"black", backgroundColor:"lightblue"}}>
            <a className="NavLink"href="">
                <img className="NavImg" src="../cobayo.png" alt="cobayo" />
            </a>
            <a className="NavLink" href="">Productos</a>
            <a className="NavLink" href="">Novedades</a>
            <a className="NavLink" href="">Contacto</a>
        <CartWidget/>
        </nav>
    )
}

export default NavBar