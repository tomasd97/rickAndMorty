import { Box } from "@mui/material";
import './header.scss'

const Header = () => {
    const image = require('../../assets/rickAndMortyPng.png')
    return(
        <Box className="header-container">
            <img src={image} style={{ height: '100%' }} alt="Rick and morty"/>
        </Box>
    )
}

export default Header;
