import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import myshow from "./myshow.png";
import Box from "@mui/material/Box";


export default function About() {
  return(

      <Box sx={{mx:50}}>
      
      <Card sx={{ maxWidth: 400,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {myshow}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Founded : August 1999 ...............
        CEO : Ashish Hemrajani ....
        Year : (Aug 1999)
        Headquarters location : Mumbai
        Subsidiary : Nfusion
        Founders : Ashish Hemrajani, Rajesh Balpande, Parikshit Dar
        Parent organization : Bigtree Entertainment
        
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}