import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Badge } from '@mui/material';
import { ShoppingCart, Favorite, Search } from '@mui/icons-material';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Gérer le changement de couleur au défilement
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: scrolled ? '#ffffff' : 'transparent',
                color: scrolled ? '#333' : '#fff',
                transition: 'background-color 0.3s ease',
                boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between'                }}
            >
                {/* Logo */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Poppins, sans-serif',
                        cursor: 'pointer',
                        '&:hover': {
                            color: scrolled ? '#007bff' : '#ffa500',
                            transition: 'color 0.3s ease',
                        },
                    }}
                >
                    BreizhSport
                </Typography>

                {/* Barre de recherche */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: scrolled ? '#f5f5f5' : 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                        padding: '5px 15px',
                        maxWidth: '400px',
                        width: '100%',
                        boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                    }}
                >
                    <Search sx={{ marginRight: '10px', color: scrolled ? '#333' : '#fff' }} />
                    <InputBase
                        placeholder="Rechercher..."
                        sx={{
                            flex: 1,
                            color: scrolled ? '#333' : '#fff',
                        }}
                    />
                </Box>

                {/* Icônes à droite */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        sx={{
                            color: scrolled ? '#333' : '#fff',
                            '&:hover': {
                                color: scrolled ? '#007bff' : '#ffa500',
                            },
                        }}
                    >
                        <Badge badgeContent={2} color="primary">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <IconButton
                        sx={{
                            color: scrolled ? '#333' : '#fff',
                            '&:hover': {
                                color: scrolled ? '#007bff' : '#ffa500',
                            },
                        }}
                    >
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
