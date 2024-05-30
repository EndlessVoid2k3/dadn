"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Toggle from './Toggle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Control = () => {
    return (
        <Box sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', marginBottom: '100px'}}>
            <Card sx={{ width: 345,  borderRadius: '16px', marginLeft: '20px'}}>
                <CardMedia
                    sx={{ height: 140}}
                    image="https://imgs.search.brave.com/HkuR2QcfOL-to9kUGhxyYzU63rhnQqg4E3yX8vcb-e4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjgwMDUx/OTA0MTEtMTA0MmNk/Mzg1MjJlP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OGJHRnRjQ1V5/TUd4cFoyaDBmR1Z1/ZkRCOGZEQjhmSHd3"
                    title="lamp"
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Light Monitor
                    </Typography>
                    <Toggle/>
                </CardContent>
                </Card>
        </Box>       
    );
};

export default Control;