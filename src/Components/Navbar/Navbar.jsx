import React from "react";
import "./style.css";
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';

const theme = createTheme({
    palette: {
      primary: {
        main: '#545D69',
      },
      secondary: {
        main: '#5D5FEF',
      },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                style: {
                    borderRadius: 32,
                    width: 138,
                    textTransform: 'none'
                }
            }
        }
    }
});

const navUser = [
    {
        name: "Insights",
        route: "/insights",
        color: "primary"
    },
    {
        name: "Ativos",
        route: "/assets",
        color: "primary"
    },
    {
        name: "Conta",
        route: "/account",
        color: "primary"
    },
    {
        name: "Sair",
        route: "/logout",
        color: "secondary"
    },
]

const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="navbar">
                <span className="navbar-title">
                    Stonks Wallet
                </span>
                <ul className="navbar-btn-list">
                    {navUser.map(btn =>  (
                        <li key={btn.name} className="navbar-btn">
                            <Button 
                                variant="contained" 
                                color={btn.color}
                            >
                                <Link href={btn.route} underline="none" color="white">
                                    {btn.name}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </ThemeProvider>
    )
}

export default Navbar;
