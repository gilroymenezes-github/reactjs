import logo from './logo.svg';

const Header = ({ subtitle }: any) => (
    
    <header className="row">
        <div className="col-md-2">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="col-md-8 mt-4 subtitle">{subtitle}</div>
    </header> 
);

export default Header;