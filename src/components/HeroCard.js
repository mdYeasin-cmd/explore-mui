import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import laptop from './../assets/cut-apple.jpg';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HeroCard = () => {
    return (
        <Card sx={{ maxWidth: 345, p: 2 }}>
            <CardMedia
                sx={{ height: 190, borderRadius: 1 }}
                image={laptop}
                title="green iguana"
            />
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'between',
                    p: 0,
                    pt: 4
                }}
            >
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                        Lizards are a widespread group
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: '1px solid red'
                }}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default HeroCard;