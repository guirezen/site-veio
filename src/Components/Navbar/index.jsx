import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelect from '../LanguageSelect';

const drawerWidth = 240;
const navItems = ['SOBRE', 'OBRAS', 'PELO MUNDO', 'CONTATO'];

const CustomMenuIcon = styled(MenuIcon)(() => ({
    fontSize: '50px',
    color: `#e6e6e6`
}))

const CustomBox = styled(Box)(() => ({
    backgroundColor: '#303030',
    height: '100%',
    color: '#b85151',

    '.MuiListItem-root': {
        color: '#dbdbdb'
    }
}))

function NavbarMenu(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const param = useLocation().pathname

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const formateString = (item) => {
        if (item == "CONTATO") {
            const navigate = '#ancoraContatos'

            return navigate
        } else {
            const formatItem = item.replace(/\s+/g, '')

            return formatItem
        }
    }

    const drawer = (
        <CustomBox sx={{ textAlign: 'center' }}>
            <LanguageSelect />
            <Link to={'/'}>
                <img src='/Assets/logo_vermelha.png' style={{ width: '70px', marginTop: '30px' }} />
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link key={item} to={`/${formateString(item)}`}>
                        <ListItem key={item}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </CustomBox>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <CustomMenuIcon />
            </IconButton>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default NavbarMenu;
