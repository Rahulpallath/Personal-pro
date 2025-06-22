import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 2,
        projectName: 'MindMate – AI Mental Health Companion',
        projectDesc: 'AI-powered mental health web app with mood tracking, breathing tools, and empathetic chat—built using AWS, React, and Bedrock.',
        tags: ['React', 'Node.js', 'AWS Amplify', 'AWS Bedrock', 'Cognito', 'Tailwind CSS'],
        code: 'https://github.com/Rahulpallath/mindmate',
        demo: 'https://dev.dfi69wt422dkk.amplifyapp.com/mindmate', // Replace if a separate live demo link exists
        image: three // Replace with actual image import or path as per your codebase
    },
    {
        id: 1,
        projectName: 'Stock Trading Simulator',
        projectDesc: 'Full-stack stock trading simulator that lets users buy/sell stocks, track portfolios, and view real-time data, powered by AWS Amplify and React.',
        tags: ['React', 'Node.js', 'AWS Amplify', 'AWS Lambda', 'DynamoDB', 'Cognito'],
        code: 'https://github.com/Rahulpallath/stock-application',
        demo: 'https://dev.dfi69wt422dkk.amplifyapp.com/',
        image: one // Replace with actual image import or path as per your codebase
    },{
        id: 3,
        projectName: 'Movie Ticket Booking System',
        projectDesc: 'This project aims to build an employee management system that consolidates all information of a company',
        tags: ['Javascript','Stripe', 'Java', 'MySQL'],
        code: 'https://github.com/Rahulpallath/Movie_Management_System',
        demo: 'https://github.com/Rahulpallath/Movie_Management_System',
        image: six
    },
    {
        id: 4,
        projectName: 'Student Coding Platform for University',
        projectDesc: 'I developed this project as part of my research work, enabling students to solve coding problems, upload notes, and receive automated evaluations, while optimizing performance through database indexing and API caching to improve load times by 25%.',
        tags: ['.NET', 'Java', 'C#'],
        code: 'https://github.com/Rahulpallath/OnlineSystemWebApp',
        demo: 'https://github.com/Rahulpallath/OnlineSystemWebApp',
        image: two
    },
    {
        id: 5,
        projectName: 'Fairness-Aware News Recommendation System',
        projectDesc: 'I developed a fairness-aware news recommendation system using Generative Adversarial Networks (GANs) to mitigate bias in personalized news recommendations by reducing bias',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'GANs', 'Decomposed Adversarial Learning'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: seven
    },
    {
        id: 6,
        projectName: 'Android Patient Tracker',
        projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
        tags: ['Flutter', 'Firebase'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: seven
    },
    {
        id: 7,
        projectName: 'LinkedIn Job Alert Script',
        projectDesc: 'Python script that monitors LinkedIn job postings by keywords and sends instant email alerts. Fully customizable and easy to run as a background job.',
        tags: ['Python', 'Web Scraping', 'Automation', 'Requests', 'BeautifulSoup', 'Email'],
        code: 'https://github.com/Rahulpallath/linkedin-job-alert', // Replace with your actual repo if different
        demo: 'https://github.com/Rahulpallath/Automatic-job-search', // No live demo since it's a script, leave blank or point to documentation if you have it
        image: three // Replace with your actual image import or path as per your codebase
    }
    
]