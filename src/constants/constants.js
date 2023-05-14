import { instagram, facebook, twitter, linkedin, projects ,a, b, c ,e} from "../assets";
export const navLinks = [
    {
      id: "home",
      title: "Home",
      to:"home"
    },
    {
      id: "features",
      title: "Projects",
      to:"projects"
    },
    {
      id: "product",
      title: "About",
      to:"about"
    },
    {
      id: "clients",
      title: "Contact",
      to:"contact"
    },
   
    {
      id:"button",
      title:"login"
    }
  ];
  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  export const projects1 =[
    {
      id:1,
      name:'Fund Raising for Flood',
      campaignBy:'Ali Rehman',
      Raised:5,
      Goal: 20,
      days:5,
      img:e,
      progress:40,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms. '
    },
    {
      id:2,
      name:'Fund Raising for Food',
      campaignBy:'Hamza Ilyas',
      Raised:5,
      Goal: 20,
      days:5,
      img:a,
      progress:40,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms. '
    },
    {
      id:3,
      name:'Fund Raising for Education',
      campaignBy:'Huraim Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:b,
      progress:40,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms.'
    },
    {
      id:4,
      name:'Fund Raising for Shelter',
      campaignBy:'Ghori Abubakr',
      Raised:5,
      Goal: 20,
      days:5,
      img:c,
      progress:40,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms.'
    },
    {
      id:5,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:projects,
      progress:50,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms.'
    },
    {
      id:5,
      name:'Fund Raising for Clothes',
      campaignBy:'Anis Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:projects,
      progress:40,
      detail:'Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect money from a large number of people via online platforms.'
    },
    
   
  ]

 export const questions = [
    {
      id:1,
      user_id:1,
      timestamp:24,
      title:'Startup Of Busniess',
      Docs:'This is my question one',
      category:'Startups'
    },
    {
      id:2,
      user_id:1,
      timestamp:12,
      title:'Severe Road Accident',
      Docs:'This is my question two',
      category:'Accident'
    },
    {
      id:3,
      user_id:1,
      timestamp:90,
      title:'Emergency needed money',
      Docs:'This is my question three',
      category:'Emergency'
    },

  ]
  export const asnweres = [
    {
      Answerid:1,
      DiscussionFormId:2, 
      UserId:1, 
      Date:12,
      Time:34,
      Detail:'Depending on the type of crowdfunding, investors either donate money altruistically or get rewards such as equity in the company that raised the money.'
    },
    {
      Answerid:1,
      DiscussionFormId:2, 
      UserId:1, 
      Date:12,
      Time:34,
      Detail:'Depending on the type of crowdfunding, invest'
    },
    {
      Answerid:1,
      DiscussionFormId:2, 
      UserId:1, 
      Date:12,
      Time:34,
      Detail:'Crowdfunding is a form of fundraising where a business asks the public for a contribution, usually in exchange for equity in the company. Crowdfunding usually entails a private company asking large numbers of people for small contributions.'
    },

  ]
 export const pakPhoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
 export const interRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
 export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
 export const URL = 'http://127.0.0.1:3000'
 export const userRegex = /^[a-zA-Z\-]+$/;