import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const data = [
  {
    avatar: AVTR1,
    name: 'Kelly May',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae ipsa ut nisi explicabo voluptate eius dignissimos reiciendis a sunt doloribus, ex vel optio! Non ipsam itaque odio cupiditate ea.'
  },
  {
    avatar: AVTR2,
    name: 'Chartey DeSultan',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae ipsa ut nisi explicabo voluptate eius dignissimos reiciendis a sunt doloribus, ex vel optio! Non ipsam itaque odio cupiditate ea.'
  },
  {
    avatar: AVTR3,
    name: 'Tee Paa-kwesi',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae ipsa ut nisi explicabo voluptate eius dignissimos reiciendis a sunt doloribus, ex vel optio! Non ipsam itaque odio cupiditate ea.'
  },
  {
    avatar: AVTR4,
    name: 'Hajia Juliana',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae ipsa ut nisi explicabo voluptate eius dignissimos reiciendis a sunt doloribus, ex vel optio! Non ipsam itaque odio cupiditate ea.'
  }
]


const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        >
        {
          data.map(({name, review, avatar}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials