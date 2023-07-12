// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';

 const resumeData = {
    name:"hazim khasawneh",
    title:"Front - end developer",
    email:"hazemkh51@gmail.com",
    address:"Amman - jordan ",
    Phone:"00962 7968 339 66",
    company:"Avertra Corp",

    socials:{
        Twitter:{
            link:"",
            text:'hazim ',
            icon: <TwitterIcon />
        },
        Linkedin:{
            link:'https://www.linkedin.com/in/hazem-khasawneh/',
            text:'hazim khasawneh',
            icon: <LinkedInIcon />
        }
    },

    about:"Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20%. \n\n  The university degree that I obtained in software engineering enabled me to understand the processes for building a system, how to collect requirements, develop strategies and plans, and pay attention to the efficiency of products, in addition to the power of communication with others.",

    experiences:[
        { 
            title: "Avertra Corp",
            date: "April/2022 - present",
            descripition: "work as Front - End developer with Avertra deal with Sass , javaScript and React to build widget or application reusable by Mendix Developer"
        },
        { 
            title: "Aspire",
            date: " March/2021 -  April/2022",
            descripition: "Work as Front - End developer using Drupal to build pages and make maintenance in weight watchers pages to make offers continuously"
        }

    ],

    Eduication:[
        {
            title: "jordan university of science and technology",
            date: " 2021 -  2017",
            descripition: "bachelor degree of software engineer"
        }
    ]

    ,

    clients:" Work with (WW) Weight Watchers is a global company headquartered in the U.S. that offers weight loss and maintenance, fitness . Also work with PwC It is the second-largest professional services network in the world and is considered one of the Big Four accounting firms"

}
export default resumeData