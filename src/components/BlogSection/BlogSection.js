import { Button } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import blogs from '../../api/blogs';

const settings = {
  dots: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogSection = () => {
  const handleClickOpen = (item) => {
    window.open(item.url);
  };
  return (
    <section className='wpo-blog-section section-padding' id='blog'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5'>
            <div className='wpo-section-title'>
              <h2>Latest Blogs</h2>
              <p>
                Writing is my hobby and coding is my passion. I make them
                together in my writings section.
              </p>
            </div>
          </div>
        </div>
        <div className='wpo-blog-wrap wpo-blog-slide owl-carousel'>
          <Slider {...settings}>
            {blogs.map((blog, bl) => (
              <div className='wpo-blog-item' key={bl}>
                <div className='wpo-blog-img'>
                  <img
                    style={{ height: '240px', objectFit: 'cover' }}
                    src={blog.screens}
                    alt=''
                  />
                </div>
                <div className='wpo-blog-text'>
                  <ul>
                    <li>{blog.create_at}</li>
                  </ul>
                  <h2>{blog.title}</h2>
                  <Button
                    className='details'
                    onClick={() => handleClickOpen(blog)}>
                    Read now
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='shadow-shape'>
        <svg width='1319' height='1567' viewBox='0 0 1319 1567' fill='none'>
          <g filter='url(#filter0_f_39_3832)'>
            <circle
              cx='803'
              cy='803'
              r='303'
              fill='#59C378'
              fillOpacity='0.5'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_39_3832'
              x='0'
              y='0'
              width='1606'
              height='1606'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='250'
                result='effect1_foregroundBlur_39_3832'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
