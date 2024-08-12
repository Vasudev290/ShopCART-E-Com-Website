import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../Components/PageHeader';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Autoplay} from 'swiper/modules'
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPost from './PopularPost';
import Tags from './Tags';

const SingalProduct = () => {
    const [product, setProduct]= useState([])
    const {id} = useParams();
    //console.log(id);
    useEffect(()=>{
        fetch("/products.json").then(res => res.json()).then(data => setProduct(data));
    }, [])

    const result = product.filter((p) => p.id === id)
    /* console.log(result); */
    
    return (
    <div>
        <PageHeader title={"OurShop Singal"} curPage={"Shop / Single Product"}/>
        <div className="shop-single padding-tb aside-bg">
            <div className="container">
                <div className="row justify-content-center">
                      <div className="col-lg-8 col-12">
                        <article>
                            <div className="product-details">
                                <div className="row align-item-center">
                                    <div className="col-md-6 col-12">
                                        <div className="product-thumb">
                                            <div className="swiper-container pro-single-top">
                                            <Swiper 
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            loop={"true"}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false
                                            }}
                                            modules={[Autoplay]}
                                            navigation={
                                                {
                                                    prevEl: ".pro-single-prev",
                                                    nextvEl: ".pro-single-next",
                                                }
                                            }
                                            className="mySwiper">
                                             {
                                                result.map((item, i) => (
                                                    <SwiperSlide key={i}>
                                                        <div className="single-thumb">
                                                        <img src={item.img} alt="" />
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                             }
                                             </Swiper>  
                                             <div className="pro-single-next">
                                                <i className='icofont-rounded-left'></i>
                                             </div>
                                             <div className="pro-single-prev">
                                                <i className='icofont-rounded-right'></i>
                                             </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="post-content">
                                            <div>
                                                {
                                                    result.map(item => <ProductDisplay key={item.id} item={item} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <Review />
                            </div>
                        </article>
                      </div>

                      {/* Right Side */}
                      <div className="col-lg-4 col-12">
                        <aside className='ps-lg-4'>
                            <PopularPost />
                            <Tags />
                        </aside>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingalProduct