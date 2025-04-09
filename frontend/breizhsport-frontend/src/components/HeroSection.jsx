import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width:"100%",
                backgroundImage: 'url(https://wallpapercat.com/w/full/5/c/0/2117697-3840x2160-desktop-4k-dark-wallpaper.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center'
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Prêts à dépasser vos limites ?
            </Typography>
            <Typography variant="h5" sx={{ marginTop: '10px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                Découvrez notre sélection premium pour tous vos besoins sportifs.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: '20px', padding: '10px 20px', fontSize: '18px', borderRadius: '20px' }}
            >
                Explorer nos produits
            </Button>
        </Box>
    );
};

export default HeroSection;
