import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Icon, CardActionArea } from '@mui/material';
import InputSlider from './InputSlider';

function FanCard() {
    return (
        <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', marginBottom: '100px'}}>
            <Card sx={{ width: 345, borderRadius: '16px', marginLeft: '20px'}}>
                <CardMedia
                    sx={{ height: 140}}
                    image={'https://www.ushafans.com/sites/default/files/MicrosoftTeams-image%20%288%29.png'}
                    title={'fan'}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Fan
                    </Typography>
                    <InputSlider/>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FanCard;
