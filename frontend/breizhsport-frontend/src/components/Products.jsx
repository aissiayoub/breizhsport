import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Products = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/articles')
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <Grid container spacing={4} sx={{ padding: '40px 20px' }}>
            {articles.map((article) => (
                <Grid item xs={12} sm={6} md={4} key={article._id}>
                    <Card
                        sx={{
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={article.image || 'https://via.placeholder.com/150'}
                            alt={article.name}
                        />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {article.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray', marginBottom: '10px' }}>
                                {article.description}
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#000', marginBottom: '15px' }}>
                                {article.price} €
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth>
                                Ajouter au panier
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Products;
