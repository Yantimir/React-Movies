function Header() {
    return (
        <nav className="blue-grey darken-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    {/* <i class="material-icons">local_movies</i> */}
                    React Movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export { Header }