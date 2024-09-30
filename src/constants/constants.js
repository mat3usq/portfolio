export const navigation = [
	{
		id: '0',
		title: 'About Me',
		url: '#aboutMe',
	},
	{
		id: '1',
		title: 'Skills',
		url: '#skills',
	},
	{
		id: '2',
		title: 'Projects & Experience',
		url: '#exprojects',
	},
	{
		id: '3',
		title: 'Contact',
		url: '#contact',
	},
]

import javaLogo from '../assets/logos/javaLogo.svg'
import springLogo from '../assets/logos/springLogo.svg'
import mavenLogo from '../assets/logos/mavenLogo.svg'
import githubLogo from '../assets/logos/githubLogo.svg'
import htmlLogo from '../assets/logos/htmlLogo.svg'
import cssLogo from '../assets/logos/cssLogo.svg'
import jsLogo from '../assets/logos/jsLogo.svg'
import mysqlLogo from '../assets/logos/mysqlLogo.svg'
import oracleLogo from '../assets/logos/oracleLogo.svg'
import typescriptLogo from '../assets/logos/typescriptLogo.svg'
import thymeleafLogo from '../assets/logos/thymeleafLogo.svg'
import cppLogo from '../assets/logos/cppLogo.svg'
import figmaLogo from '../assets/logos/figmaLogo.svg'
import pythonLogo from '../assets/logos/pythonLogo.svg'
import qgisLogo from '../assets/logos/qgisLogo.svg'
import reactLogo from '../assets/logos/reactLogo.svg'
import scssLogo from '../assets/logos/scssLogo.svg'
import tailwindLogo from '../assets/logos/tailwindLogo.svg'
import angularLogo from '../assets/logos/angularLogo.svg'

export const heroIcons = [
	{ title: 'Java Logo', width: '35', height: '35', source: javaLogo },
	{ title: 'Spring Logo', width: '33', height: '33', source: springLogo },
	{ title: 'Maven Logo', width: '43', height: '43', source: mavenLogo },
	{ title: 'Github Logo', width: '35', height: '35', source: githubLogo },
]

import gamer from '../assets/gamer.svg'
import coffee from '../assets/coffee.svg'
import computer from '../assets/computer.svg'

export const notificationsImages = [
	{ title: 'Gamer PacMan', width: '35', height: '35', source: gamer },
	{ title: 'Coffee', width: '33', height: '33', source: coffee },
	{ title: 'Computer with Rocket', width: '43', height: '43', source: computer },
]

export const mySkillsSet = [
	{
		title: 'Proficient in Java and Spring Framework',
		text: 'I have a solid foundation in Java programming, having studied object-oriented programming and design patterns during my academic career. I gained hands-on experience with the Spring framework, creating several projects that leverage its features, such as Dependency Injection, Aspect-Oriented Programming, and Spring Boot for rapid application development. Additionally, I developed several games using Java Swing, which further honed my programming skills.',
		stars: 4.5,
	},
	{
		title: 'Basic Knowledge of SQL',
		text: 'I possess a foundational understanding of SQL, specifically with MySQL and PostgreSQL. During my studies, I completed courses that covered database management and SQL querying, which equipped me with the skills to design and manipulate relational databases. My coursework included practical exercises that enhanced my ability to write efficient queries and perform data analysis.',
		stars: 3.5,
	},
	{
		title: 'Proficient in HTML, CSS, and JavaScript',
		text: 'I have a strong foundation in HTML, CSS, and JavaScript, which I utilize to create engaging and functional websites. I enjoy front-end development and take pride in designing user-friendly interfaces that enhance the user experience. Additionally, I have experience working with frameworks like React and Angular, allowing me to build dynamic web applications. My passion for web design drives me to continually improve my skills and explore new technologies.',
		stars: 4,
	},
	{
		title: 'Interest in Algorithmic Reasoning',
		text: 'I enjoy algorithmic reasoning, particularly with languages like C, C++, and Python. Solving complex problems and developing efficient algorithms enhances my understanding of data structures and computational theory.',
		stars: 4.5,
	},
	{
		title: 'Open to Growth',
		text: 'I possess strong communication skills and the ability to learn quickly. I am fully committed to developing my skills and eager to collaborate within a team. Open to new opportunities, I thrive in environments that challenge me and allow for continuous growth.',
		stars: 5,
	},
]
export const skillsIcons = [
	{
		id: 0,
		title: 'Java',
		source: javaLogo,
		width: 35,
		height: 35,
	},
	{
		id: 1,
		title: 'Spring',
		source: springLogo,
		width: 33,
		height: 33,
	},
	{
		id: 2,
		title: 'ThymeLeaf',
		source: thymeleafLogo,
		width: 34,
		height: 34,
	},
	{
		id: 3,
		title: 'Html',
		source: htmlLogo,
		width: 35,
		height: 35,
	},
	{
		id: 4,
		title: 'Css',
		source: cssLogo,
		width: 35,
		height: 35,
	},
	{
		id: 5,
		title: 'JavaScript',
		source: jsLogo,
		width: 30,
		height: 30,
	},
	{
		id: 6,
		title: 'TypeScript',
		source: typescriptLogo,
		width: 35,
		height: 35,
	},
	{
		id: 7,
		title: 'MySql',
		source: mysqlLogo,
		width: 38,
		height: 38,
	},
]

export const technologiesIcons = [
	{
		title: 'C++',
		source: cppLogo,
	},
	{
		title: 'Figma',
		source: figmaLogo,
	},
	{
		title: 'Python',
		source: pythonLogo,
	},
	{
		title: 'Qgis',
		source: qgisLogo,
	},
	{
		title: 'Oracle',
		source: oracleLogo,
	},
	{
		title: 'React',
		source: reactLogo,
	},
	{
		title: 'Scss',
		source: scssLogo,
	},
	{
		title: 'TailWind',
		source: tailwindLogo,
	},
	{
		title: 'Angular',
		source: angularLogo,
	},
	{
		title: 'Github',
		source: githubLogo,
	},
	{
		title: 'Maven',
		source: mavenLogo,
	},
]
export const exprojectsInfo = [
	{
		title: 'Computer Science',
		company_name: 'General Secondary School No. IV named after C.K. Norwid, Białystok',
		icon: 'school',
		iconBg: '#ffcc00',
		date: 'September 2018 - May 2021',
		description: [
			'Studied the foundations of programming, focusing on C and C++.',
			'Developed skills in algorithmic thinking, logical reasoning, and problem-solving techniques.',
			'Achieved top grades and participated in various programming competitions.',
			'Acquired a solid understanding of basic database principles, including data structures and SQL queries.',
			'Built a strong foundation in mathematics and its applications to informatics and programming tasks.',
		],
	},
	{
		title: "Computer Science Engineer's  Degree Student",
		company_name: 'Bialystok University of Technology',
		icon: 'university',
		iconBg: '#66ccff',
		date: 'October 2021 - Present',
		description: [
			'Pursuing a Engineers degree in Informatics Engineering, with a strong focus on software development and computer science principles.',
			'Recipient of the Rector’s Scholarship for academic excellence, maintaining high grades throughout the course of study.',
			'Expanded programming expertise with Java, C, and C++, focusing on object-oriented design and architecture.',
			'Developed skills in popular web development frameworks such as Angular and React, specializing in front-end development.',
			'Gained advanced knowledge of the Spring Framework for back-end development, building scalable, enterprise-level web applications.',
			'Enhanced database management skills, including relational databases (MySQL, Oracle).',
			'Strong proficiency in HTML, CSS, and JavaScript, enabling the creation of responsive, dynamic web interfaces.',
			'Participated in various research projects related to software engineering, algorithm design, and system architecture.',
			'Improved collaborative and team-based software development through agile methodologies, code versioning systems, and code reviews.',
			'Acquired deep knowledge of technical problem-solving and troubleshooting, especially in distributed systems and networked applications.',
		],
	},
	{
		title: 'Image Processing & Remote Sensing',
		company_name: 'Intern in Statistical Office in Bialystok',
		icon: 'office',
		iconBg: '#32CD32',
		date: 'June 2024 - August 2024',
		description: [
			'Gained hands-on experience in applying advanced geospatial analysis techniques using QGIS, focusing on the processing and interpretation of spatial data.',
			'Worked with Java, JavaScript, and Python to create scripts and tools for automating workflows and enhancing the efficiency of image processing tasks within QGIS.',
			'Engaged in projects related to remote sensing, using programming languages to handle and analyze geospatial imagery, contributing to environmental and spatial research.',
			'Utilized Python for developing automated solutions to streamline image analysis tasks, improving data processing times and accuracy.',
			'Collaborated closely with senior analysts to support research on spatial data analysis, contributing technical solutions that facilitated smoother data handling processes.',
			'Gained an in-depth understanding of QGIS functionalities, including layers, projections, and raster data, applying this knowledge to solve practical data-driven challenges.',
		],
	},
	{
		title: 'Directory Synchronization Daemon',
		company_name: 'Operating Systems - Project',
		icon: 'folder',
		iconBg: '#008080',
		date: 'April 2023',
		description: [
			'Developed a program that keeps two directories in sync by checking for differences and updating files as needed.',
			'Supported synchronizing subdirectories as well, using the -R option to handle everything inside the directories.',
			'The program can be manually triggered to run using a specific signal (SIGUSR1), and every action it takes is recorded in the system log.',
			'Optimized file handling by using different methods for small and large files to make the process faster and more efficient.',
			'All file operations are done using the Linux API directly, without relying on external tools or libraries.',
			'The programs sleep interval can be customized, and it includes strong error handling to ensure it runs smoothly and without issues.',
		],
	},
	{
		title: 'Readers and Writers Synchronization Problem',
		company_name: 'Operating Systems - Project',
		icon: 'sync',
		iconBg: '#FF8C00',
		date: 'May 2023 - June 2023',
		description: [
			'Developed multiple solutions for the readers-writers problem, ensuring fair access to a shared resource for both readers and writers.',
			'Implemented three versions: one where writers may starve, one where readers may starve, and one preventing starvation for both.',
			'Used thread synchronization techniques to manage access to the shared resource, avoiding conflicts between readers and writers.',
			'Program allows users to specify the number of readers and writers via command-line arguments, adapting to various scenarios.',
			'Displayed real-time updates on the queue of readers and writers, as well as those currently accessing the resource.',
		],
	},
	{
		title: 'Noteally - Note Management Application',
		company_name: 'Java Spring Application Development',
		icon: 'note',
		iconBg: '#3498db',
		date: 'May 2023 - June 2023',
		description: [
			'Developed a web application for saving and sharing notes, to-do lists, and other useful information.',
			'Implemented three user roles: admin, full user, and limited user, each with different permissions.',
			'Utilized a relational MySQL database to store user data, notes, and shared information.',
			'Ensured form validation, filtering, and sorting capabilities to provide an intuitive and efficient note management experience.',
			'Integrated Spring Security for user authentication and session management, ensuring secure login and role-based access control.',
		],
	},
	{
		title: 'Battleships - Interactive Game',
		company_name: 'Java Swing Application',
		icon: 'game',
		iconBg: '#1abc9c',
		date: 'October 2023 - January 2024',
		description: [
			'Developed an interactive version of the classic "Battleships" game with both a text-based and graphical interface using Java Swing.',
			'Enabled players to switch between the text-based interface and graphical mode, enhancing flexibility and user experience.',
			'Implemented tactical ship placement and gameplay mechanics for single-player mode against a computer.',
			'Simulated battles between two computer players, showcasing automatic game scenarios.',
			'Introduced a virtual store for purchasing special ships or barriers to enhance gameplay.',
			'Used Model-View-Controller (MVC) architecture to separate game logic from the user interface, facilitating easy modifications and future expansions.',
			'Included a ranking system and in-game access to the rules for a complete player experience.',
		],
	},
	{
		title: 'Battleships - Enhanced Interactive Game',
		company_name: 'Java Swing Application',
		icon: 'game',
		iconBg: '#e67e22',
		date: 'January 2024',
		description: [
			'Basic game "Battleships" has been extended by using design patterns such as Singleton to manage the game instance, State for player actions and Factory Method for ship creation, providing scalable and maintainable code.',
			'Improved AI with Strategy and Iterator patterns, enabling multiple difficulty levels with intelligent shot placement.',
			'Implemented a ranking system with Decorator pattern to dynamically assign points based on difficulty level.',
			'used MVC architecture to separate game logic from the interface, allowing for future expansions without major code changes.',
		],
	},
	{
		title: 'Computer Service - React Application',
		company_name: 'React Web Development',
		icon: 'laptop',
		iconBg: '#3498db',
		date: 'December 2023',
		description: [
			'Developed a computer service management app using React and TypeScript, focusing on user-friendly data validation and efficient state management.',
			'Implemented custom form validation across multiple fields (e.g., customer details and service issues).',
			'Utilized reusable components and integrated two-way communication between them, ensuring efficient data flow.',
			'Managed data modification through HTTP requests, using a dedicated service for clean, organized API calls.',
			'Set up routing with dynamic parameters and state management using the Flux architecture.',
			'Ensured no console errors and followed accessibility standards to improve user experience.',
		],
	},
	{
		title: 'Driving School - Responsive Website',
		company_name: 'Web Development Project',
		icon: 'car',
		iconBg: '#3498db',
		date: 'January 2024',
		description: [
			'Developed a responsive website for a driving school, accessible on desktop, tablet, and mobile, with the goal of future use in an engineering thesis.',
			'Designed using clean HTML, CSS, JavaScript, featuring an intuitive user interface.',
			'Provided interactive learning features such as lectures, quizzes, and exam simulations for different driving license categories.',
			'Integrated tools like Bootstrap and slick.js for responsive design and smooth transitions.',
			'Hosted the project on GitHub for easy access and future academic use.',
		],
	},
	{
		title: 'Schoolify - Educational Management System',
		company_name: 'Spring Java Project',
		icon: 'school',
		iconBg: '#2ecc71',
		date: 'March 2024 - June 2024',
		description: [
			'Designed and developed a full-featured web application to simplify the management of educational processes within schools and universities, leveraging the power of Spring Boot.',
			'Implemented a secure authentication and authorization system using Spring Security, ensuring robust protection against unauthorized access with role-based controls and CSRF protection.',
			'Developed intuitive interfaces for managing contacts, courses, and grades, allowing teachers to efficiently handle enrollments, add or update student information, and assign grades.',
			'Created an administrative panel with comprehensive tools for managing system users, courses, classes, and in-app communications.',
			'Integrated a MySQL database on AWS Cloud for reliable data storage and scalability, ensuring the system can handle a growing number of users and data.',
			'Prioritized responsive design to ensure that the system is accessible and user-friendly on both desktop and mobile devices, making educational management convenient and flexible.',
		],
	},
	{
		title: 'Online Exam System',
		company_name: 'Spring Application',
		icon: 'exam',
		iconBg: '#1abc9c',
		date: 'January 2024 - March 2024',
		description: [
			'Developed an online exam management system with secure authentication and role-based access control using Spring Security.',
			'Implemented features for students to view and take exams, and for administrators and examiners to create, edit, and manage exams.',
			'Enabled role-based exam display, where students can view assigned exams and administrators/examiners can view all exams.',
			'Integrated functionality for adding students or groups to exams, with duplicate checking, via a dedicated interface.',
			'Provided user registration, login, and profile management features for both students and examiners, including history of completed exams.',
		],
	},
	{
		title: 'Driving School - Comprehensive Educational Management System',
		company_name: 'Engineering Thesis Project',
		icon: 'car',
		iconBg: '#2980b9',
		date: 'March 2024 - In progress',
		description: [
			'Developed a responsive web application to streamline the management of driving lessons, exams, and student progress for driving schools.',
			'Implemented a lesson booking system with an interactive calendar, allowing instructors and students to schedule and track lessons.',
			'Created educational materials and tests section for students to learn driving theory, complete quizzes, and prepare for exams.',
			'Integrated student progress tracking, allowing both students and instructors to monitor progress, including test results and driving hours.',
			'Implemented communication tools and notifications to remind users about upcoming lessons, exams, and important updates.',
			'Developed an admin panel for school management, including managing instructor schedules, generating reports, and handling payments.',
			'Prioritized data security, ensuring personal information protection in compliance with data privacy laws.',
			'The project is optimized for mobile and desktop use, making it accessible and convenient for users on all platforms.',
		],
	},
]
