import './header.scss';

export default function Header() {
    return (
        <header className={"header"}>
            <h1>TripJawa</h1>
            <nav className={"nav-links"}>
                <a href={"/"}>Home</a>
                <a href={"/booking"}>Booking</a>
            </nav>
        </header>
    );
}