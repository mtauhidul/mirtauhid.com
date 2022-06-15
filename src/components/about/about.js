import shape1 from '../../images/about/shape1.png';
import shape2 from '../../images/about/shape2.png';
import bootstrapIcon from '../../images/icon/bootstrap.svg';
import expressIcon from '../../images/icon/express.svg';
import firebaseIcon from '../../images/icon/firebase.svg';
import materialIcon from '../../images/icon/material.svg';
import mongoIcon from '../../images/icon/mongo.svg';
import nextIcon from '../../images/icon/next.svg';
import nodeIcon from '../../images/icon/node.svg';
import reactIcon from '../../images/icon/react.svg';
import reduxIcon from '../../images/icon/redux.svg';
import scssIcon from '../../images/icon/scss.svg';
import tailwindIcon from '../../images/icon/tailwind.svg';
import tsIcon from '../../images/icon/typescript.svg';

const About = (props) => {
  return (
    <div className='wpo-about-area section-padding' id='about'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='wpo-about-exprience-wrap'>
              <div className='wpo-about-exprience'>
                <h2>02</h2>
                <span>Years of Experience</span>
              </div>
              <div className='client'>
                <h3>
                  <span data-count='100'>100</span>%
                </h3>
                <p>Clients Satisfaction</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 offset-lg-1 col-md-12 col-sm-12'>
            <div className='wpo-about-content'>
              <div className='wpo-about-title'>
                <h2>My Skills</h2>
              </div>
              <div className='wpo-about-funfact'>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={reactIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>React JS</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={nextIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Next JS</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={tsIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Typescript</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={nodeIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Node JS</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={expressIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Express</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={mongoIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Mongo DB</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={reduxIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Redux</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={firebaseIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Firebase</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={tailwindIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Tailwind</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={materialIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Material UI</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={bootstrapIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>Bootstrap</p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='grid-inner'>
                    <div className='icon-1 '>
                      <img
                        src={scssIcon}
                        alt=''
                        style={{ height: '50px', width: '50px' }}
                      />
                    </div>
                    <p>SCSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ab-shape'>
        <svg width='995' height='1495' viewBox='0 0 995 1495' fill='none'>
          <g opacity='0.3' filter='url(#filter0_f_39_4267)'>
            <circle cx='247.5' cy='747.5' r='247.5' fill='#FFE500' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4267'
              x='-500'
              y='0'
              width='1495'
              height='1495'
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
                result='effect1_foregroundBlur_39_4267'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='ab-shape-s2'>
        <svg width='1252' height='1901' viewBox='0 0 1252 1901' fill='none'>
          <g opacity='0.15' filter='url(#filter0_f_39_4265)'>
            <circle cx='950' cy='950.004' r='450' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4265'
              x='-0.00012207'
              y='0.00402832'
              width='1900'
              height='1900'
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
                result='effect1_foregroundBlur_39_4265'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='line-shape-1'>
        <img src={shape1} alt='' style={{ height: '50px', width: '50px' }} />
      </div>
      <div className='line-shape-2'>
        <img src={shape2} alt='' style={{ height: '50px', width: '50px' }} />
      </div>
    </div>
  );
};

export default About;
