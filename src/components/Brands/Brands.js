import React from "react";
import TopicTitle from "../UI/Topic__title/TopicTitle";
import Card from "../UI/Card";
import style from "./Brands.module.css";
const BrandsData = [
  {
    brandName: "IPHONE",
    logo: require('./image/logo/Group 48.png'),
    phone: require('./image/phones/image 9.png'),
    id:Math.random() * (40 - 39) + 39,
    color:style.one
  },
  {
    brandName: "REALME",
    logo: require('./image/logo/download 1.png'),
    phone: require('./image/phones/image 9-1.png'),
    id:Math.random() * (40 - 39) + 39,
    color:style.two
},
  {
    brandName: "XIAOMI",
    logo: require('./image/logo/mi-xiaomi 1.png'),
    phone: require('./image/phones/image 9-2.png'),
    id:Math.random() * (40 - 39) + 39,
    color:style.three
},
];
function Brands() {
  return (
    <TopicTitle
      title="Top"
      titleSpan="Electronics Brands"
      sectionAfter={style.sectionAfter}
      contentMargin={style.section}
      >
      <div className={style.brand__conteiner}>
        {BrandsData.map((brand) => {
          return (
            <Card nameClass={`${style.brand__card} ${brand.color}`} key={brand.id}>
              <div className={style.brandText}>
                <h2 className={style.brandMean}>{brand.brandName}</h2>
                <img className={style.brandLogo} src={brand.logo} alt="logo"/>
                <h3 className={style.discount}>UP to 80% OFF</h3>
              </div>
              <img src={brand.phone} alt='phone' className={style.phone}/>

            </Card>
          );
        })}
      </div>
    </TopicTitle>
  );
}

export default Brands;
