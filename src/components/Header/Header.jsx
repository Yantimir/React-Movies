import { GithubOutlined } from "@ant-design/icons"

function Header() {
    return (
        <nav className="blue-grey darken-2">
            <div className="nav-wrapper">
                <a
                    href="https://github.com/Yantimir"
                    className="brand-logo"
                    target="_blank"
                    rel='noreferrer'
                >
                    <i className="material-icons">local_movies</i>
                    React Movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/Yantimir"
                            target="_blank"
                            rel='noreferrer'
                        >
                            <GithubOutlined style={{ fontSize: '24px' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export { Header }