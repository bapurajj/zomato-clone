import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

// creating array obj of food brands
const topBrandsList = [
  {
    id: 1,
    brand: "Empire",
    time: "26 min",
    cover:
      "https://th.bing.com/th/id/OIP.-vBOa-c0VI7cG0-wIjm_CgHaE0?pid=ImgDet&rs=1",
  },
  {
    id: 2,
    brand: "McDonald's",
    time: "20 min",
    cover: "https://static-wix-blog.wix.com/design/uploads/2018/05/1-06.png",
  },
  {
    id: 3,
    brand: "Nandhana",
    time: "22 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f7e21286435d82037d62392994ea0104_1638685800.png?output-format=webp",
  },
  {
    id: 4,
    brand: "MexicanGrill",
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp",
  },

  {
    id: 5,
    brand: "FreshMenu",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
  },
  {
    id: 6,
    brand: "Subway",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502580.png?output-format=webp",
  },
  {
    id: 7,
    brand: "Third Wave Coffee",
    time: "24 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c96445d0ee23e72dc1643e3a581bd64e_1573817168.png?output-format=webp",
  },
  {
    id: 8,
    brand: "EatFit",
    time: "23 min",
    cover: "https://www.adgully.com/img/800/202012/eat-fit.png.jpg",
  },
  {
    id: 9,
    brand: "Udupi Food",
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d48a032833fc37de75ad6d0883da4331_1629441554.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title max-width">Top brands for you</div>

      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          // for each of the map method (brand) returning food brand which is stored in an array.
          <div>
            <div className="absolute-center">
              <div className="top-brands-cover">
                <img
                  className="top-brands-image "
                  src={brand.cover}
                  alt={brand.time}
                />
              </div>
            </div>
            <div className="top-brands-name absolute-center">{brand.brand}</div>
            <span className="time absolute-center">{brand.time}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
