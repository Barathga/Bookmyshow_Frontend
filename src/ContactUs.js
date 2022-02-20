import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import myshow from "./myshow.png";
import Box from "@mui/material/Box";


export default function Contact() {
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

        If you face any issues regarding the bookings, cancellations, or managing your payments, 
        you can contact the customer care team via call or BookMyShow email ID.
        Connect with BookMyShow customer care executives by calling on  ☎️ 022 6144 5050
        
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}