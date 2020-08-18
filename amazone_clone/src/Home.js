import React from 'react'
import "./stylesheets/Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"  src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"} alt="Prime banner"/>
            <div className="home__row">
                <Product id="1222123" title="Lamaze Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories" 
                price={11.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._AC_SY400_.jpg" />
                <Product id="3873003" title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio..." 
                price={11.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SY400_.jpg" />
            </div>
            <div className="home__row">
                <Product id="377749927" title="Arrow 1851 Men's Dress Shirt Poplin (Available in Regular, Slim, Fitted, and Extreme Slim Fits)" 
                price={11.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/317yOx3OgxL._AC_SY200_.jpg" />
                <Product id="288377399" title="Fjallraven, Kanken Classic Backpack for Everyday" 
                price={22.49}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg" />
                <Product id="21233223" title="Database Internals: A Deep Dive into How Distributed Data Systems Work" 
                price={349.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91UYIt74czL._AC_SY220_.jpg" />
                <Product id="28830028" title="Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black" 
                price={11.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61yuDpKZnLL._AC_SY220_.jpg" />
            </div>
            <div className="home__row">
                <Product id="29938794" title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio..." 
                price={11.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81vHq4yY38L._AC_SY400_.jpg" />
            </div>
        </div>
    )
}

export default Home
