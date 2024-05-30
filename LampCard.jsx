import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography} from '@mui/material';
import Toggle from './Toggle';

function LampCard() {
    return (
        <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', marginBottom: '100px'}}>
            <Card sx={{ width: 345, borderRadius: '16px', marginLeft: '20px'}}>
                <CardMedia
                    sx={{ height: 140}}
                    image={'https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg'}
                    title={'Lamp'}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lamp
                    </Typography>
                    <Toggle />
                </CardContent>
            </Card>
        </Box>
    );
}

export default LampCard;
