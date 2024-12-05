import express from 'express';
import cors from 'cors';
const app = express();
const port = 4000;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({
        education: [
            {
                institution: "UNIVERSITY NAME",
                years: "2018 - PRESENT",
                degree: "Master Degree Graduate in Design",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            },
            {
                institution: "UNIVERSITY NAME",
                years: "2015 - 2017",
                degree: "MASTER GRAPHIC & WEB DESIGHER",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            },
            {
                institution: "UNIVERSITY NAME",
                years: "2010 - 2012",
                degree: "MASTER OF DESIGH",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            } ],
        jobExperience: [
            {
                company: "Compny Name",
                years: "2020 - Present",
                position: "WEB DESINGER",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            },
            {
                company: "Compny Name",
                years: "2015 - 2018",
                position: "Graphic Designer",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            },
            {
                company: "Compny Name",
                years: "2010 - 2015",
                position: "MARKETING MANAGER",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, molestias provident."
            } ],
        contact: [
            {
                phone: "+1-856-822-2156",
                website: "www.yourwebsite.com yourinfo@email.com",
                address: "1173 Valley Street Camber, NJ 08102"
            }],
        skills: [
            { name: "Microsoft Word", level: "90%" },
            { name: "Adobe illustrator", level: "65%" },
            { name: "Microsoft Powerpoint", level: "85%" },
            { name: "Adobe Photoshop", level: "70%" },
        ],
        references: [
            {
                name: "MICHAEL R.MAGEE",
                address: "4418 Bobcat Drive Southfield, MI 48034",
            },
            {
                name: "TRAVIS M.GODINEZ",
                address: "2755 Oakmound Drive Chicago, IL 60605",
            }
        ],
        hoddies: [
            {name: "READING BOOKS"},
            {name: "PLAYING FOOTBALL"},
            {name: "TRAVELING"},
        ],
        about_me: [
            {text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ex ducimus odit qui incidunt dolorum eligendi explicabo mollitia! accusantium incidunt. Eius soluta molestiae dolore" },
            {text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae autem sunt at?"}
        ]
    });
});

app.listen(port, () => {
    console.log(`Server works on http://localhost:${port}`);
});