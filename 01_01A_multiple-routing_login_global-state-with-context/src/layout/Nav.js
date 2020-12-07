
const Nav = props => {
    return (
        <nav>
            <a href="/" className="brand"><i className="fas fa-book"></i> <span>LIBB</span>  </a>
            <div className="menu">
                <button className="pseudo button icon-help-circled">Borrow</button>
                <button className="button icon-file-code">Login</button>
            </div>
        </nav>
    )
} 

export default Nav;
