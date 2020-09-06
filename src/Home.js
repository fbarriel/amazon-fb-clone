import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""/>
                {/* Product id, title, price, rating, image*/}
                {/* Product */}
                <div className="home__row">
                    <Product
                        id="12345"
                        title="Kidzlane Dance Mat – Dance Game for Kids Boys & Girls – Light Up Dance Pad with Built in or External AUX/Bluetooth Music – Dancing Mat with Multi-Function Games and Levels"
                        price={59.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91BaIyjC04L._AC_UY327_FMwebp_QL65_.jpg" />
                         <Product
                        id="12346"
                        title="VTech KidiBuzz G2 Kids’ Electronics Smart Device with KidiConnect, Pink"
                        price={82.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71q+TKBEqBL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
                <div className="home__row">
                <Product
                        id="12347"
                        title="Apple iPad 9.7inch with WiFi 32GB- Space Gray (2017 Model) (Renewed)"
                        price={239}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71iCsEpE-xL._AC_UL480_FMwebp_QL65_.jpg" />
                         <Product
                        id="12348"
                        title="Apple 13in MacBook Air, 1.8GHz Intel Core i5 Dual Core Processor, 8GB RAM, 128GB SSD, Mac OS, Silver, MQD32LL/A"
                        price={695}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71y9Xkil0OL._AC_UL480_FMwebp_QL65_.jpg" />
                         <Product
                        id="12349"
                        title="iPhone Charger, 3 Pack 10FT Lightning Cable Nylon Braided USB Charging Cord Compatible with iPhone"
                        price={11.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/711rERj+1TL._AC_UL480_FMwebp_QL65_.jpg" />
                         <Product
                        id="12360"
                        title="OCHENTA Mens' Little & Big Boy's Print Button Down Hawaiian Shirtt"
                        price={9.99}
                        rating={1}
                        image="https://m.media-amazon.com/images/I/61XigLcVX7L._AC_UL480_FMwebp_QL65_.jpg" />
                </div>
                <div className="home__row">
                    <Product
                        id="12574"
                        title="Gyn&Joy Ruby Red Rhinestones Fruit Brooch Pin"
                        price={13.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81dS2steguL._AC_UL480_FMwebp_QL65_.jpg" />
                </div>                
        </div>
    )
}

export default Home
