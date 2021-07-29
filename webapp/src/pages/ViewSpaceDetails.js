import React,{useState,useEffect} from 'react';
import '../css/ViewSpaceDetails.css';
import {Row,Col ,Container,Button,Media , Form} from 'react-bootstrap'
// import Swal from 'sweetalert2';
// import Axios from 'axios';
// import { useParams } from 'react-router';
// import { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import imafff from '../../src/images/Cat04.jpg';


function ViewSpaceDetails() {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& > * + *': {
            marginTop: theme.spacing(1),
          },
        },
      }));
  
      const classes = useStyles();

    return (
        <>
            <h1 className="page_title">Work Space Details</h1>
            <Container className='pro_detail_container'>
            <Row>
            <Col sm={12} lg={5} md={6} className='detail_col col1'>
                    <Media className='pro_det_img imgset'>
                    <img
                            width={200}
                            height= {250}
                            className="mr-3"
                            src={imafff}
                            alt="Product"
                        />
                    </Media>
            </Col>
            <Col sm={12} lg={7} md={6} className='detail_col col2'>
                <h5 className="product_det_category">Available Colors</h5>
                <h3 className="product_det_name">Available Colors</h3>
                <h5 className="product_det_colors">Available Colors</h5>          
            </Col>
            </Row>
            </Container>
            <Container className='pro_detail_container2'>
                <Row>
                    <Col sm={12}  className='detail_col'>
                        <h3 className="product_det_desctitle">Product Description</h3>
                        <p  className="product_det_descpara">
                            Product Description
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='pro_detail_container3'>
                <Row>
                    <Col sm={12}  className='detail_col'>
                                <Row className="individual_review">
                                <div className="review_itemPart1">
                                <h4>{<i class="fas fa-user-circle" >{" Rahul Madhuka "}</i>}</h4>
                                <div style={{display:'flex'}}>
                                <h6 style={{marginRight:'10px'}}>{"2020/07/20"}</h6>
                                <div className={classes.root}> 
                                <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly size='small'/>
                                </div>
                                </div>
                                <h6>{"Good Place..."}</h6>
      
                                </div>
                              </Row>
                              <Divider/>
                    </Col>
                </Row>
            </Container>
            
        </>
                
    )
}

export default ViewSpaceDetails;
