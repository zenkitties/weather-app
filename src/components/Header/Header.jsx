import './header.scss'
import CloudIcon from '@mui/icons-material/Cloud';

const Header = () => {
    return (
        <div className="header">
            <h1><CloudIcon className="cloud-icon" fontSize="large"/>Weather App</h1>
        </div>
    )
}

export default Header;