import Logo from '../../assets/logo.png';

export const = Header = () => {
    return (
        <div className="relative">
            <header className="fixed">
                <div>
                    <img src={Logo} alt="Logo Syntax Wear"/>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>

                    </nav>
            </header>
        </div>
    )
}