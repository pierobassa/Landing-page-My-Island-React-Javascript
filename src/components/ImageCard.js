import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import { Collapse } from '@material-ui/core';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
    title:{
        fontSize: 10,
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#3ead28",
    '&:hover': {
      backgroundColor: "#248710",
    },
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Nunito",
  }));

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} { ... (checked ? {timeout: 1000} : {})}>
        <Card sx={{ 
            maxWidth: 475,
            background: "rgb(0,0,0,0.5)",
            margin: '20px',
        }}>
        <CardMedia
            component="img"
            height="340"
            image={place.imageUrl}
            alt="Island 1"
        />
        <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: "white",
                }}
            >
            {place.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"
            sx={{
                fontFamily: "Nunito",
                fontSize: "1rem",
                color: "#ddd",
            }}
            >
            {place.description}
            </Typography>
        </CardContent>
        <CardActions>
        <ColorButton variant="contained">Book</ColorButton>
        </CardActions>
        </Card>
    </Collapse>
  );
}