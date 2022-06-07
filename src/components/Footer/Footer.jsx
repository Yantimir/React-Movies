import materialize from "./img/materialize.svg";
import "./Footer.css";

function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} by using Materialize
                    <a className="grey-text text-lighten-4 right" href="https://materializecss.com/">
                        <img src={materialize} alt="materializeCSS" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export { Footer }