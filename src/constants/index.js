import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    git,
    figma,
    webcoder,
    garageacademy,
    airBnb,
    homeDecor,
    baroShop,
    threejs,
    csharp,
    serviceProject,
    nextjs,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },

];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "C#",
        icon: csharp,
    },

];

const experiences = [
    {
        title: ".NET Instructor",
        company_name: "Garage Academy",
        icon: garageacademy,
        iconBg: "#383E56",
        date: "October 2023 - Present",
        points: [
            "Instruct and mentor students in .NET development.",
            "Create educational content and enhance curricula.",
            "Provide guidance and support for students.",
            "Stay updated on industry trends and advancements through continuous learning.",
        ],
    },

    {
        title: "Front End Intern",
        company_name: "Web Coder",
        icon: webcoder,
        iconBg: "#E6DEDD",
        date: "April 2023 - Septempber 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];


const projects = [
    {
        name: "AirBnb",
        description:
            "Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms"
        ,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: airBnb,
        source_code_link: "https://github.com/Mirgubad/airbnbclone",
    },
    {
        name: "Service",
        description:
            "Users to seamlessly create, edit, and delete items within a parent box. Additionally, the application supports the functionality to effortlessly add new child items to expand the scope and depth of the parent box",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: serviceProject,
        source_code_link: "https://github.com/Mirgubad/taskservices",
    },
    {
        name: "Home Decor",
        description:
            "Language support.Search algorithm by category,collection.Sorting by price.Support all devices (Full responsive).",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "json server",
                color: "green-text-gradient",
            },
        ],
        image: homeDecor,
        source_code_link: "https://github.com/Mirgubad/homeDecor",
    },
    {
        name: "BaroShop",
        description:
            "E Commerce website FullStack with Admin Panel.Full responsive.Filter by name,price,color,material,type,gender",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "cSharp",
                color: "pink-text-gradient",
            },
            {
                name: "mssql",
                color: "blue-text-gradient",
            },
        ],
        image: baroShop,
        source_code_link: "https://github.com/Mirgubad/FinalProjectBaroShop",
    },


];

export { services, technologies, experiences, projects };