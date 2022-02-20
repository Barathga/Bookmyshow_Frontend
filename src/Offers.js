import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import offers1 from './offers1.jpeg';
import offers2 from './offers2.jpeg';
import offers3 from './offers3.jpeg';


export default function Offers() {
  return (
    <Box sx={{mx:10}}>
      <Card sx={{ maxWidth:345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="185"
        image = {offers1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BUY 1 GET 1 OFFERS ON ALL MOVIES
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Claim It</Button>
      </CardActions>
    </Card>

      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="185"
        image = {offers2}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          100 YEARS OF SUPREMACY
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Claim It</Button>
      </CardActions>
    </Card>
    
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="185"
        image = {offers3}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           20% DISCOUNT TALKCHARGE
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Claim It</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
