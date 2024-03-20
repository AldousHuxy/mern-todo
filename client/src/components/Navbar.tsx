import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from '@tanstack/react-router';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <Button color="inherit">Home</Button>
                </Link>
                <Link to="/about">
                    <Button color="inherit">About</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}