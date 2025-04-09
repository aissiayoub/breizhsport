import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const categories = [
    { name: 'Football', image: 'https://via.placeholder.com/150?text=Football' },
    { name: 'Tennis', image: 'https://via.placeholder.com/150?text=Tennis' },
    { name: 'Running', image: 'https://via.placeholder.com/150?text=Running' },
    { name: 'Fitness', image: 'https://via.placeholder.com/150?text=Fitness' },
];

const Categories = () => {
    return (
        <Box sx={{ padding: '40px 20px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
                Explorez par catégories
            </Typography>
            <Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img
                                src={category.image}
                                alt={category.name}
                                style={{ borderRadius: '10px', width: '100%', maxHeight: '120px', objectFit: 'cover' }}
                            />
                            <Typography variant="h6" sx={{ marginTop: '10px' }}>
                                {category.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Categories;
