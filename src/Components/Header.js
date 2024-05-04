import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Container, Tooltip} from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector((state) => state.userData);
    return (
        <AppBar sx={{ background: '#2E3B55' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        Quotes!
                    </Typography>
                    <Box sx={{ flexGrow: 0, marginLeft: "auto", flexDirection: "column" }}>
                        <Tooltip title="Open settings">
                            <Typography>{user.data.name || "Ravi Kant"}</Typography>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;