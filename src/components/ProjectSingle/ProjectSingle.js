import { Dialog, Grid } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Fragment } from 'react';
import 'react-fancybox/lib/fancybox.css';
import Contact from './contact';
import RelatedProject from './related';
import './style.css';

const ProjectSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  pImg,
  psub1img1,
  psub1img2,
  description,
  location,
  client,
  projectType,
  duration,
  completion,
  url,
}) => {
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant='h6'>{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={onClose}>
            <i className='fa fa-close'></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className='modalWrapper quickview-dialog'
        maxWidth={maxWidth}>
        <DialogTitle
          id='customized-dialog-title'
          onClose={onClose}></DialogTitle>
        <Grid className='modalBody modal-body project-modal'>
          <div className='wpo-project-single-area'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-12 col-12'>
                  <div className='wpo-project-single-wrap'>
                    <div className='wpo-project-single-item'>
                      <div className='row align-items-center mb-5'>
                        <div className='col-lg-7'>
                          <div className='wpo-project-single-title'>
                            <h3>{title} Project</h3>
                          </div>
                          <p>{description}</p>
                        </div>
                        <div className='col-lg-5'>
                          <div className='wpo-project-single-content-des-right'>
                            <ul>
                              <li>
                                Location :<span>{location}</span>
                              </li>
                              <li>
                                Client :<span>{client}</span>
                              </li>
                              <li>
                                Project Type :<span>{projectType}</span>
                              </li>
                              <li>
                                Duration :<span>{duration}</span>
                              </li>
                              <li>
                                Completion :<span>{completion}</span>
                              </li>
                              <li>
                                <a href={url}>See live</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div className='wpo-project-single-main-img'>
                        <ReactFancyBox thumbnail={pImg} image={pImg} />
                      </div> */}
                    </div>
                    {/* <div className='wpo-project-single-item list-widget'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='wpo-project-single-title'>
                            <h3>Our Strategies</h3>
                          </div>
                          <p>
                            Massa volutpat odio facilisis purus sit elementum.
                            Non, sed velit dictum quam. Id risus pharetra est,
                            at rhoncus, nec ullamcorper tincidunt. Id aliquet
                            duis sollicitudin diam.
                          </p>
                          <ul>
                            <li>
                              Non saed velit dictum quam risus pharetra esta.
                            </li>
                            <li>
                              Id risus pharetra est, at rhoncus, nec ullamcorper
                              tincidunt.
                            </li>
                            <li>
                              Hac nibh fermentum nisi, platea condimentum
                              cursus.
                            </li>
                            <li>
                              Massa volutpat odio facilisis purus sit elementum.
                            </li>
                            <li>Elit curabitur amet risus bibendum.</li>
                          </ul>
                        </div>
                        <div className='col-lg-6'>
                          <div className='wpo-project-single-item-quote'>
                            <p>
                              "Amazing looking theme and instantly turns your
                              application into a great looking one. Really shows
                              that pro_ fessionals built this theme up. Very
                              happy with the way the theme looks ."
                            </p>
                            <span>
                              Robert - <span>Yellow Theme</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='wpo-project-single-item'>
                      <div className='wpo-project-single-title'>
                        <h3>Our approach</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consequat suspendisse aenean tellus augue morbi risus.
                        Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                        eros sed pellentesque. Risus id sed tortor sed
                        scelerisque. Vestibulum elit elementum, magna id viverra
                        non, velit. Pretium, eros, porttitor fusce auctor vitae
                        id. Phasellus scelerisque nibh eleifend vel enim mauris
                        purus. Rutrum vel sem adipiscing nisi vulputate molestie
                        scelerisque molestie ultrices. Eu, fusce vulputate diam
                        interdum morbi ac a.
                      </p>
                    </div>
                    <div className='wpo-project-single-gallery'>
                      <div className='row mt-4'>
                        <div className='col-md-6 col-sm-6 col-12'>
                          <div className='wpo-p-details-img'>
                            <img src={psub1img1} alt='' />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-12'>
                          <div className='wpo-p-details-img'>
                            <img src={psub1img2} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='wpo-project-single-item list-widget'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='wpo-project-single-title'>
                            <h3>Resieved goals</h3>
                          </div>
                          <ul>
                            <li>
                              Non saed velit dictum quam risus pharetra esta.
                            </li>
                            <li>
                              Id risus pharetra est, at rhoncus, nec ullamcorper
                              tincidunt.
                            </li>
                            <li>
                              Hac nibh fermentum nisi, platea condimentum
                              cursus.
                            </li>
                            <li>
                              Massa volutpat odio facilisis purus sit elementum.
                            </li>
                          </ul>
                        </div>
                        <div className='col-lg-6 list-widget-s'>
                          <div className='wpo-project-single-title'>
                            <h3>Results</h3>
                          </div>
                          <ul>
                            <li>
                              Mauris dignissim blandit cursus imperdiet accumsan
                              lorem.
                            </li>
                            <li>Nam id in non sed cras purus nunc et.</li>
                            <li>
                              Mauris orci, cursus nisl odio est adipiscing
                              gravida magna eget.
                            </li>
                            <li>
                              Quis mauris vel felis convallis nulla dignissim.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <RelatedProject />
                    <div className='wpo-project-single-item'>
                      <div className='wpo-project-contact-area'>
                        <div className='wpo-contact-title'>
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
                        </div>
                        <div className='wpo-contact-form-area'>
                          <Contact />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ProjectSingle;
