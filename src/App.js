import ContactForm from './components/ContactForm.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ProjectShowcase from './components/Project.js'
import NavBar from './components/navBar.js'
import Blogs from './components/Blogs.js'
import Feedback from './components/feedBack.js'
import  './Styles/App.css'
import Skills from './components/Skills.js';



const feedbacks=[{name:"Anis Abed",role:"colleague",text:"serious the best coleague i had",rating:4.5},
{name:"Mason Rodriguez",role:"client",text:"good job",rating:5},
{name:"Olivia Bennett",role:"client",text:"good job delivred in time",rating:4}]
const blogs = [
  {
    author: "Anis Abed",
    title: "The Journey Begins",
    text: "Welcome to my first blog post! This marks the beginning of an exciting journey into the world of blogging. I'm thrilled to share my thoughts, experiences, and insights with all of you. This blog is just a small taste of what's to come. Stay tuned for more!",
    path: "/blog1.jfif"
  },
  {
    author: "Abdelmoudjib Chihoub",
    title: "Exploring the Unknown",
    text: "In this second blog post, we dive into the unknown. Life is an adventure, and sometimes, we find ourselves in uncharted territories. Join me as we navigate through the mysteries, challenges, and surprises that the unknown has to offer. Are you ready for the journey?",
    path: "/blog1.jfif"
  },
  {
    author: "Noredinne Kharbchoun",
    title: "Lessons from Nature",
    text: "Nature has a way of teaching us valuable lessons. In this blog post, I reflect on the wisdom we can gain from observing the world around us. From the resilience of trees to the adaptability of animals, there's much to learn. Let's explore the profound teachings that nature has to offer.",
    path: "/blog1.jfif"
  },
  {
    author: "Unknown",
    title: "A Glimpse into Everyday Life",
    text: "Ever wondered about the beauty of ordinary moments? In this blog post, we take a closer look at the simple joys of everyday life. From sipping a cup of coffee to enjoying a sunset, there's magic in the mundane. Join me in appreciating the little things that make life extraordinary.",
    path: "/blog1.jfif"
  }
];

 const frontEnd=[{title:"Markup languages:",discription:"HTML5, CSS3 "},{title:"JavaScript:",discription:"Core language features, frameworks like React"},{title:"mobile apps:",discription:"flutter framework(multiplatform)"},{title:"Version control systems:",discription:"Git"}]
 const backEnd=[{title:"Server-side programming languages and frameworks:",discription:"PHP(laravel),  Node.js"},{title:"Databases::",discription:"SQL, NoSQL(mongodb) "},{title:"APIs and web services",discription:"  "}]
 const AddSkills=[{title:"linux basics ",discription:"" },{title:"Security fundamentals and frameworks like OWASP  ",discription:"" },{title:" Communication and collaboration skills ",discription:"" }]
 const exp=[{discription:"worked as independent fullstack devloper "},{discription:"worked as independent mobile app devloper"}]
function App() {
  return (
     <div className="App" style={{
      backgroundImage: `url("/back.png")`,
      backgroundRepeat: "no-repeat",
   
    }}>
      <NavBar/>
      <div className='title'><h1>Home</h1></div>
      <div id='Home'>
          <img id='logo' src='/logo.png' ></img>
        <p>Welcome to my portfolio. I am a <strong>full-stack web developer</strong><br></br> <strong>mobile app developer</strong>
        <br></br> <strong>API developer</strong><br></br> And <strong>database conceptor</strong>.</p>


      </div>
      <div className='title'><h1>showcase</h1></div>
      <div id='showcase'>
      <ProjectShowcase></ProjectShowcase>
      </div>
      <div className='title'><h1>Skills</h1></div>
      <div id='skills'>
          <Skills  frontEnd={frontEnd} backEnd={backEnd} AddSkills={AddSkills} exp={exp} />
      </div>
      <div className='title' id='contact'><h1>contact Me</h1></div>
      <div id='contactInfo'>
      <div className="contact-info">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
      </div>
      </div>
      
    
      <div className='title'><h1>Blogs</h1></div>

      <div id='blogs'>
        <Blogs data={blogs} />
      </div>

       <div className='title'><h1>Testimonial</h1></div>
  <     div id='feedback' className="feedback-container">
      {feedbacks.map((feedback) => <Feedback data={feedback} key={feedback.name} />)}
      </div>

    </div>
  );
}

export default App;