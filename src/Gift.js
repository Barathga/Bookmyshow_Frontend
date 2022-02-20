import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import gift from './giftcard.jpeg'
import gift2 from './gift2.jpeg'


export default function Gift() {
  return(

      <Box sx={{mx:30}}>
      <Card sx={{ maxWidth: 400,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {gift}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Exclusive Gift cards for all
        </Typography>
        <CardActions>
      <Button size="small">Claim It</Button>
      </CardActions>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 400,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {gift2}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Come Collect Yours!!
        </Typography>
        <CardActions>
      <Button size="small">Claim It</Button>
      </CardActions>
      </CardContent>
    </Card>
    </Box>
  );
}