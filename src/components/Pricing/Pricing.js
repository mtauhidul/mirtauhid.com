import { Link } from 'react-scroll';
import SectionTitle from '../SectionTitle/SectionTitle';

const Pricing = (props) => {
  return (
    <section className='wpo-pricing-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='row justify-content-center'>
            <SectionTitle
              Title={'Pricing Plan'}
              description={
                'Here are the pricing plans for my services. For custom applications, I prefer to discuss first for better pricing estimations.'
              }
            />
          </div>
        </div>
        <div className='wpo-pricing-wrap'>
          <div className='row'>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='wpo-pricing-item'>
                <div className='wpo-pricing-top'>
                  <div className='pricing-thumb'>
                    <span>Basic</span>
                  </div>
                  <div className='wpo-pricing-text'>
                    <h2>
                      $500<span> / per project</span>
                    </h2>
                    <p>Front End Web Application</p>
                  </div>
                </div>
                <div className='wpo-pricing-bottom'>
                  <div className='wpo-pricing-bottom-text'>
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Material UI / Bootstrap</li>
                      <li>SCSS Modules</li>
                      <li>Responsive</li>
                      <li>Vercel</li>
                    </ul>
                    <Link spy={true} smooth={true} duration={500} to='contact'>
                      CHOOSE PLAN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='wpo-pricing-item'>
                <div className='wpo-pricing-top'>
                  <div className='pricing-thumb'>
                    <span>Premium</span>
                  </div>
                  <div className='wpo-pricing-text'>
                    <h2>
                      $1000<span> / per project</span>
                    </h2>
                    <p>Serverless Realtime Web Application</p>
                  </div>
                </div>
                <div className='wpo-pricing-bottom'>
                  <div className='wpo-pricing-bottom-text'>
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Firebase</li>
                      <li>Firestore Realtime Database</li>
                      <li>Material UI / Bootstrap</li>
                      <li>SCSS Modules</li>
                      <li>Responsive</li>
                      <li>Vercel</li>
                    </ul>
                    <Link spy={true} smooth={true} duration={500} to='contact'>
                      CHOOSE PLAN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='wpo-pricing-item'>
                <div className='wpo-pricing-top'>
                  <div className='pricing-thumb'>
                    <span>Advanced</span>
                  </div>
                  <div className='wpo-pricing-text'>
                    <h2>
                      $2000<span> / per project</span>
                    </h2>
                    <p>Custom Full Stack Web Application</p>
                  </div>
                </div>
                <div className='wpo-pricing-bottom'>
                  <div className='wpo-pricing-bottom-text'>
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Mongo DB</li>
                      <li>Mongoose</li>
                      <li>Material UI / Bootstrap</li>
                      <li>SCSS Modules</li>
                      <li>Responsive</li>
                      <li>Heroku</li>
                    </ul>
                    <Link spy={true} smooth={true} duration={500} to='contact'>
                      CHOOSE PLAN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape-p'>
        <svg width='1500' height='1500' viewBox='0 0 1500 1500' fill='none'>
          <g opacity='0.45' filter='url(#filter0_f_39_4213)'>
            <circle cx='750' cy='750' r='200' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4213'
              x='0'
              y='0'
              width='1500'
              height='1500'
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
                stdDeviation='275'
                result='effect1_foregroundBlur_39_4212'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
