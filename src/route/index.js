// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  address: 'Ukraine Rivne Soborna Street',
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
    salary: "600$ в місяць",
  }

  var footer = {
    social: {
      email: {
        text: 'dmytro@mail.com',
        href: "mailto:dmytro@mail.com",

      },
      phone: {
        text: "+380670000123",
        href: "tel:+380670000123"
      },
      linkedin: {
        text: "https://www.linkedin.com/in/dmytro-test",
        href: "LinkedIn"
      },
    },
  }
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | summary',
    },

    header,
   main: {
    summary: {
      title: "Summary",
      text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
    experience:{
         title: "Other experience",
         text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
   },
    footer,
  })
})
    
// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | skills',
    },

    header,
   main: {
    title: "My hobbies",
    hobbies:[
    {
      name:'Karting Club',
      isMain: true,
    },
    {
      name: 'Gym',
      isMain: true,
    },
    {
      name: 'Football',
      isMain: false,
    },
  ],
    skills:[
     
      {
        name: 'HTML',
        point:'10',
        isTop: true,
        
      },
      {
        name: 'Handlebars',
        point:'9',
        isTop: false,
        
      },
      {
        name: 'VS Code',
        point:'8',
        isTop: false,
        
      },
      {
        name: 'Git',
        point:'10',
        isTop: true
        
      },
      {
        name: 'Terminal',
        point:'9',
        isTop: false,
        
      },
      {
        name: 'NPM',
        point:'7',
        
      },
      {
        name: 'PHP',
        point: null,
        
      },
      {
        name: 'React.js',
        point: 0,
        
      },
      ],
    summary: {
      title: "Summary",
      text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
    experience:{
         title: "Other experience",
         text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
   },
    footer,
  })
})
router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('Education', {
    page: {
      title: 'Resume |Education ',
    },

    header,
   main: {
    title: "My certificates",
    certificates: [
       {
        name: 'Crowd control',
        id: 767565,
       },
       {
        name: 'Law Enforcement Training for Safety',
        id: 5675,
       },
       {
        name: 'World Powerlifting',
        id: 7887987,
       },
    ],
    title: "My education",
    education: [ 
      {
        name:'School', 
        isEnd: true,
      },
      {
        name:'University',
        isEnd: true,
       }, 
       {
        name:'Stanford University',
        isEnd: false,
        },
         {
          name:'Princeton University',
          isEnd: false,
          },
          {
            name: 'Yale University',
            isEnd: true,
          },
          ],

    skills:['HTML', 'Handlebars', 'VS Code', 'Git', 'Terminal', 'NPM'],
    summary: {
      title: "Summary",
      text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
    experience:{
         title: "Other experience",
         text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
   },
    footer,
      
  }) 
  })
   //            ↙ cюди вводимо назву файлу з сontainer
   
  //                  ↑↑ сюди вводимо JSON дані
  router.get('/work', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('Work', {
      layout: 'big',
      page: {
        title: 'Resume |Work ',
      },
  
      header,
     main: {
      works: [
      {
        position: 'Junior Fullstack Developer',
        company: {
          name: 'IT Brains',
          url: 'https://resume-brains.com.ua/',
        },
       duration: {
        from: '10.10.2022',
        to: null,
       },
       projectAmound: 3,

       projects: [{
         name:'Resume',
         url: 'https://it-brains.com.ua/',
         about: 'Боже,яке глупе',
         stackAmount: '3',
         awardAmount: '2',
         stacks: [
          {
          name: 'React.js',
         },
         {
          name: 'HTML / CSS',
         },
         {
          name: 'Node.js',
         },
         
         
        ],
        awards: [
          {
            name: 'Oskar',
          },
          {
            name: 'Golden Ruspberry',
          },
        ],
       }],
      },
      ],
     },
      footer,
        
    }) 
    })
 // ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layot: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================




// Підключаємо роутер до бек-енду
module.exports = router
