import React,{useState,useEffect} from 'react';
import {Container} from 'react-bootstrap';
import FeaturedCardItems from './FeaturedCardItems';
import '../css/FeaturedCardItems.css';
import Axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imafff from '../images/Cat04.jpg';

function Checking() {

    const [products, setProducts] = useState([]);

    const getProductData = async () => {
      try {

        let newArrivals = [
          {
            src:{imafff},
            title:"Hatch",
            price:"15000"
            
          },
          {
           src:{imafff},
           title:"Hatch",
           price:"10000"
          },
          {
           src:{imafff},
           title:"WTC",
           price:"10000"
          },
          {
           src:{imafff},
           title:"Shangri-La Hotel",
           price:"10000"
          },
          {
           src:{imafff},
           title:"World Trade Center",
           price:"10000"
          }
 
        ];
        setProducts(newArrivals);

      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
       getProductData();
     }, []);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1023, min: 600 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 599, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <>
        <Container fluid className='container-lg'>
        <h1 className='feature_title' style={{textAlign:'center' , marginTop:"15px"}}>All Locations</h1>
        <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container featured_col_special"
        itemClass="carousel-item-padding-40-px"
        >
            { 
                
                products.map(  products =>   {
                  
                  return (

                      <FeaturedCardItems
                      src= {products.src }
                      title={products.title}
                      price={parseFloat(products.price)}
                      
                   />

                    ) 
                   }              
                )

                }
        </Carousel>
        </Container>
        </>
    )
}

export default Checking;
