import React from 'react';
import styles from '@/styles/Product.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Comments({ data }) {

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div >

          {
            data.length === 0 ? (
              <div className={`${styles.alert} ${styles.alert_primary}`} role="alert">There are no comments yet</div>
            ) : (

              <Swiper
                loop={true}

                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 100,
                  },
                }}
                modules={[Pagination]}
                className={styles.swiper}
              >
                {
                  data.slice(0, 6).map(comment => (
                    <SwiperSlide className={styles.swiper_slide} key={comment.id}>
                      <div class="testimonial-item">
                        <div class="d-flex align-items-center mb-3">
                          <img class="img-fluid" src={comment.profile} alt="" />
                          <div class="ml-3">
                            <h4>{comment.username}</h4>
                            <p className="text-left mb-0">User</p>
                          </div>
                        </div>
                        <p class="m-0">{comment.body}</p>
                        <hr />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>


            )
          }

        </div>
      </div>
    </div>
  )
}

export default Comments