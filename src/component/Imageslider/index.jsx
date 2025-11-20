import Slider from "react-slick";
import styles from "./styles.module.css"

const ImageSlider = () => {
    const imageData = [
        { imgUrl: "/assets/sliderImage1.jpg" },
        { imgUrl: "/assets/sliderImage2.jpg" },
        { imgUrl: "/assets/sliderImage3.jpg" },
        { imgUrl: "/assets/sliderImage4.jpg" },
        { imgUrl: "/assets/sliderImage5.jpg" },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        ltr: true,
        arrows: false,
        swipe:false,
        draggable:false,
    };

    return (
        <section className={styles.sliderSection}>
            <Slider {...settings}>
                {
                    imageData?.map((data, i) => {
                        return (
                            <div className={styles.slide} key={i}>
                                <div
                                    className={styles.heroBg}
                                    style={{ backgroundImage: `url(${data.imgUrl})` }}
                                ></div>
                            </div>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default ImageSlider;