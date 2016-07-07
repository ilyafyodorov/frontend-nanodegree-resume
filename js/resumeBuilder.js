'use strict';

var bio = {
    name: 'Ilya Fedorov',
    role: 'Software Developer for Engineering',
    contacts: {
        mobile: '+79091234567',
        email: 'ilyafyodorov@yandex.ru',
        github: 'ilyafyodorov',
        twitter: '@ilyafyodorov16',
        location: 'Moscow, Russia'
    },
    welcomeMessage: 'I combine my knowledge of mathematics and mechanics with web technologies to deliver web-based engineering solutions',
    skills: [
        'Mechanical Integrity Analysis',
        'Applied Mathematics',
        'Software Development',
        'Analytics',
        'Machine Learning'
    ],
    biopic: 'https://s32.postimg.org/nvq9qcjsl/image.png'
};

bio.display = function() {

    // header section
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

    // contacts section

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    // create contacts array

    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    // loop thru contacts to display under header

    var contactLength = contactArray.length;
    for (var i = 0; i < contactLength; i++) {
        $("#topContacts").append(contactArray[i]);
    }

    // loop thru contacts to display in footer

    for (var i = 0; i < contactLength; i++) {
        $("#footerContacts").append(contactArray[i]);
    }

    // Welcome Message section under contacts

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    $("#header").append(HTMLskillsStart);

    // loop thru Skills under Contacts section

    bio.skills.forEach( function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#header").append(formattedSkills);
    });

};

var education = {
    schools: [{
        name: 'Bauman Moscow State Technical University',
        location: 'Moscow, Russia',
        degree: 'PhD',
        majors: ['Mathematics Software Development ', 'Mechanical Integrity and Dynamics of Structures '],
        dates: '2005-2009',
        url: 'http://www.bmstu.ru/'
    }, {
        name: 'Bauman Moscow State Technical University',
        location: 'Moscow, Russia',
        degree: 'Specialist',
        majors: ['Applied Mathematics '],
        dates: '1999-2005',
        url: 'http://www.bmstu.ru/'
    }],
    onlineCourses: [{
        title: 'Machine Learning',
        school: 'Coursera',
        dates: '2016',
        url: 'https://ru.coursera.org/learn/machine-learning'
    }, {
        title: 'Analytics Edge',
        school: 'EdX, MIT',
        dates: '2016',
        url: 'https://www.edx.org/course/analytics-edge-mitx-15-071x-2'
    }, {
        title: 'Intro to Parallel Programming',
        school: 'Udacity',
        dates: '2016',
        url: 'https://www.udacity.com/course/intro-to-parallel-programming--cs344'
    }, {
        title: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        dates: '2016',
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }]
};
    
education.display = function() {

    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var educationURL = school.url;

        // concat school name and degree obtained
        var formattedSchoolNameFinal = formattedSchoolName + formattedSchoolDegree;

        // make school name a clickable link
        var formattedSchoolNameFinal = formattedSchoolNameFinal.replace("#", educationURL);

        // create education array to loop over
        var educationArray = [];
        educationArray.push(formattedSchoolMajor, formattedSchoolLocation, formattedSchoolDates, formattedSchoolNameFinal);
        var educationLength = educationArray.length;

        // loop over education array
        for (var i = 0; i < educationLength; i++) {
            $(".education-entry:last").prepend(educationArray[i]);
        }
    });

    // start online courses section
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(mooc) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", mooc.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", mooc.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", mooc.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", mooc.url);

        // make url strings clickable links
        var formattedOnlineURL = formattedOnlineURL.replace("#", mooc.url);

        // concat course title and university name
        var formattedOnlineProvider = formattedOnlineTitle + formattedOnlineSchool;

        // make course titles clickable links
        var formattedOnlineProvider = formattedOnlineProvider.replace("#", mooc.url);

        // create moocs array to loop over
        var moocsArray = [];
        moocsArray.push(formattedOnlineProvider, formattedOnlineDates, formattedOnlineURL);
        var moocsLength = moocsArray.length;

        // loop over moocs array
        for (var i = 0; i < moocsLength; i++) {
            $(".education-entry:last").append(moocsArray[i]);
        }
    });
};


var work = {
    jobs: [{
        employer: 'Infosys Limited',
        title: 'Group Leader, Mechanical Integrity Software Development',
        location: 'Mysore, India',
        dates: 'June 2016 - now',
        description: 'Mechanical Integrity support of gas turbine part and component design (lifetime assessment, optimization). Main tools: ABAQUS, ANSYS. Knowledge Based Engineering applications development for process automation.'
    }, {
        employer: 'ALSTOM Power Uniturbo Ltd',
        title: 'Mechanical Integrity Engineer, Group Leader',
        location: 'Baden, Switzerland',
        dates: 'February 2005 - June 2016',
        description: 'Mechanical Integrity support of gas turbine part and component design (lifetime assessment, optimization). Main tools: ABAQUS, ANSYS. Leading a team of mechanical integrity engineers, Supervision of projects. A lot of experience with Design Reviews. Big experience in Root Cause analysis of defects, including lab analysis methods. Web-applications development, programming in Fortran, C++, Python, Javascript, Node.js. Development of cloud-based tool for MI results sharing. Programming of GPU (CUDA) solvers for fast lifetime assessment. '
    }, {
        employer: 'Central Institute of Aviation Motors',
        title: 'Engineer in Mathematical Modelling department',
        location: 'Moscow, Russia',
        dates: 'February 2002 - January 2005',
        description: 'Development of sparse solvers for Finite Element Analysis software using Fortran and C++. Various calculations for aircraft engine design using commercial software ANSYS and MARC: rotor limit load analysis, superplastic forming of blades. Foundation for PhD in Numerical Stability Analysis and Optimization of Turbine Blades. '
    }]
};
    
work.display = function() {

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

        // concat employer name and job title
        var formattedWorkTitleFinal = formattedEmployer + formattedWorkTitle;

        // create work array to loop over   
        var workArray = [];
        workArray.push(formattedWorkDescription, formattedWorkLocation, formattedWorkDates, formattedWorkTitleFinal);
        var workLength = workArray.length;

        // loop over work array

        for (var i = 0; i < workLength; i++) {
            $(".work-entry:last").prepend(workArray[i]);
        }
    });

};


var projects = {
    projects: [{
        title: 'MI Web Tool',
        dates: '2016',
        description: 'A web app for viewing Mechanical Integrity results in 3D on the web',
        images: ['images/MIWT4.svg']
    }, {
        title: 'Anomaly Finder',
        dates: '2016',
        description: 'A web app for processing of streaming telemetry data for Internet of Things applications',
        images: ['images/data2.svg']
    }, {
        title: 'Visual NN',
        dates: '2016',
        description: 'A machine learning app created in Javascript with rich visualization for educational purposess',
        images: ['images/NN.svg']
    }]
};
    
projects.display = function() {

        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
            var projectsURL = project.url;

            // Make Project Title a clickable link
            var formattedProjectTitle = formattedProjectTitle.replace("#", projectsURL);

            // create projects array to loop over
            var projectsArray = [];
            projectsArray.push(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
            var projectsLength = projectsArray.length;

            // loop over projects array
            for (var i = 0; i < projectsLength; i++) {
                $(".project-entry:last").append(projectsArray[i]);
            }
        });
};

var map = {
    display: function() {
        $('#mapDiv')
            .append(googleMap);
    }
};

bio.display();
education.display();
work.display();
projects.display();
map.display();