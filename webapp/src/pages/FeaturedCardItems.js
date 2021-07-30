import React from 'react';
import {Card , Button} from 'react-bootstrap';

//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import '../css/FeaturedCardItems.css';


function FeaturedCardItems(props) {

  
  const useStyles = makeStyles((theme) => ({
    root: {

      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();


  return (
    <>

      
      <Card className='featured_card' >

        <Card.Img className='featured_card_img' variant="top" src={props.src} />

        <Card.Body className='featured_card_body'>

          <Card.Title className='featured_card_title'>{props.title}</Card.Title>


            
              <div style={{display:'flex' , margin:'0px' , alignItems:'center' , marginBottom:'5px' , justifyContent:'center'}}>
              <Card.Text className='featured_card_price'>LKR : {props.price}</Card.Text>
              </div>
            
        
          <Link to={props.id}>
            <Button className='featured_card_btn' variant="primary">VIEW</Button>
          </Link>
          

        </Card.Body>

      </Card>
    </>
  )
}

export default FeaturedCardItems;
