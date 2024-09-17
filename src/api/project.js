import pimg1 from '../images/project/care-sync.jpg';
import pimg3 from '../images/project/dorus.jpg';
import pimg4 from '../images/project/kiosk.jpg';
import pimg2 from '../images/project/spe.jpg';

import ps1img1 from '../images/project-single/img-1.jpg';
import ps1img2 from '../images/project-single/img-2.jpg';
import ps1img3 from '../images/project-single/img-3.jpg';

import psub1img1 from '../images/project-single/p1.jpg';
import psub1img2 from '../images/project-single/p2.jpg';

const Projects = [
  {
    Id: '1',
    pImg: pimg1,
    ps1img: ps1img1,
    psub1img1: psub1img1,
    psub1img2: psub1img2,
    title: 'Care Sync - Medical Management Web Application',
    subTitle: 'Full Stack Development',
    description:
      'Care Sync is a full-stack hospital management system currently running in Texas. There are four dashboards: Admin, Doctor, Assistants and Receptionists. Each must authenticate to enter their dashboard. Admin sets the whole hospital workflow from his control panel. Also, he can create the room and assign a doctor. A doctor can check his assignments, call the assistant, and provide directions to receptionists. Similarly, assistants and receptionists have also some functionalities but fewer than the admin and the doctor. The hospital knows which room has an emergency, which space is vacant, how many patients are waiting, how many entered the room, which room needs to clean now and many more functionalities.',
    location: 'Texas, USA',
    client: 'Cyril Thomas',
    projectType: 'Fullstack',
    duration: '9 Months',
    completion: '30 OCT, 2021',
    url: 'https://medical-management-web-app.vercel.app',
  },
  {
    Id: '2',
    pImg: pimg4,
    ps1img: ps1img2,
    psub1img1: psub1img1,
    psub1img2: psub1img2,
    title: 'KIOSK - Patient Demographic Info Collecting Web Application',
    subTitle: 'Front End Development & API Integration',
    description:
      'KIOSK is a patient data collecting web application. I developed it for a US-based foot care center. This application takes patient history, signature, scans photo, insurance and driving licenses. A backend API provides an appointment schedule and patient desk code in it. This application has a VPS-based SQL server on its back.',
    location: 'Texas, USA',
    client: 'Cyril Thomas',
    projectType: 'Front End & API Integration',
    duration: '5 Months',
    completion: '27 MAY, 2022',
    url: 'https://kiosk-wine.vercel.app',
  },
  {
    Id: '3',
    pImg: pimg3,
    ps1img: ps1img3,
    psub1img1: psub1img1,
    psub1img2: psub1img2,
    title: 'Dorus - Dynamic Landing Page for Digital Agency',
    subTitle: 'Front End Development & API Integration',
    description:
      'Dorus is a Cyprus-based digital agency. I used a re-usable micro-component-based architecture for this application with content modifying and adding-removing new page features via the control panel. This project was a complex landing page with dynamic contents where there was an admin panel for that. Complex UI components with animation transition made this application great. It’s responsive for all devices. The application is optimized correctly. That’s why the user experience is good.',
    location: 'Cyprus',
    client: 'Mohamed Hassan',
    projectType: 'Front End, Dashboard & API Integration',
    duration: '4 Months',
    completion: '18 JAN, 2022',
    url: 'https://dorus-web-app.vercel.app',
  },
  {
    Id: '4',
    pImg: pimg2,
    ps1img: ps1img2,
    psub1img1: psub1img1,
    psub1img2: psub1img2,
    title: 'Storefront Prototype Editor - Web based custom design tool',
    subTitle: 'Front End Development',
    description:
      'Storefront Prototype Editor is an open-source project of my own. I developed it targeting a marketplace where store owners can design their storefront prototype, which is available for ad space. Also, every part will assign a specific id and rent fare, where different companies will see that and take storefront spaces for their ad. Workflow in it is simple but complex in functionality as I developed a full-fledged editor with guides.',
    location: 'N/A',
    client: 'N/A',
    projectType: 'Front End, Dashboard & API Integration',
    duration: '4 Months',
    completion: '22 DEC, 2021',
    url: 'https://storefront-prototyping.vercel.app',
  },
];

export default Projects;
