import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'


// Contact Form component
const ContactForm = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/mbljebna"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

// Home Page component
const HomePage = () => {
  return (
    <div className="home">
      <p>
        Hi there! I'm Ali Mujtaba, a passionate student who loves solving real-world problems through code. My journey in tech began
        with a deep interest in how the digital world connects us, and over time, I've honed my skills in various technologies to become well-versed in the realms
        of software development.
      </p>
      <p>
        Here specifically, I will guide you through my journey of learning Mobile Development, throughout the INFT3101 Course in my fifth semester at DC.
        We got to explore different technologies, such as Android Studio, Kotlin, and Dart. We gained the perfect mix of theoretical knowledge, 
        as well as hands-on experience through a combination of research reports, app development assignments, and in-class exercises. 
        Our final project put all this knowledge to the test, challenging us with the creation of a full-stack app in Flutter.
      </p>
      <p>
        When I'm not coding, you can find me experimenting with new web technologies, learning about emerging trends, or exploring the
        outdoors. I'm always eager to learn, grow, and take on new challenges in both the tech world and in life.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>Flutter, Dart, Kotlin</li>
        <li>HTML, CSS, React, Redux, and Front-End Frameworks</li>
        <li>Version Control with Git and GitHub</li>
        <li>Responsive App Design</li>
        <li>APIs and Integrating Third-Party Services</li>
        <li>Node.js & Express (Backend Development)</li>
        <li>Database Management (MongoDB, MySQL)</li>
      </ul>
    </div>
  );
};

// Portfolio Section component
const PortfolioSection = () => {
  const portfolioData = [
    {
      title: "Classwork",
      items: [
        { title: "Classwork 1", description: "Learning Android Studio", details: "<p>In our first Classwork, we learnt the basics of a new IDE (Android Studio) while using Kotlin to develop a basic 'Hello World' type app.</p>" },
        { title: "Classwork 2", description: "Flutter: The Basics", details: "<p>In our second classwork, we were tasked with getting accustomed to Flutter, since it is quite different from Kotlin with all the nesting. To learn this, we recreated the app from CW1, in Flutter.</p>" },
        { title: "Classwork 3", description: "Incomplete", details: "<p>Unfortunately, I was not able to complete CW3.</p>" },
      ],
    },
    {
      title: "Labs",
      items: [
        { title: "Lab 1", description: "What was the Mobile Revolution?", details: `<p>This lab was a research paper that explored the rise of mobile computing, a technology that, despite its recent development, has become mainstream. It traced the timeline of key innovations that made mobile devices portable and accessible to everyone, from early machines like the Osborne 1 to today's smartphones and laptops. The paper also prompted me to reflect on my personal experiences with mobile technology, considering its pros, cons, and the impact it has had on our lives. Read the full report <a href='public/Reports/lab-1.docx' download>here</a>.</p>` },
        { title: "Lab 2", description: "XML and DTD's", details: `<p>In this lab, we learnt how to build DTD's for XML documents. We learnt what <code>&lt;!ELEMENT&gt;</code>'s were, and how to give them constraints with <code>&lt;!ATTLIST&gt;</code>. <code>&lt;!ATTLIST&gt;</code> is predominantly used to specify attribute types, such as <code>CDATA</code> for character data, <code>ID</code> for unique identifiers, <code>NMTOKEN</code> for tokens, as well as default values such as <code>#REQUIRED</code>, <code>#IMPLIED</code>, or <code>#FIXED</code>. Then, we populated an XML schema using our DTD</p>` },
        { title: "Lab 3", description: "Incomplete", details: `<p>Unfortunately, I was not able to complete Lab 3.</p>`},
        { title: "Lab 4", description: "Objects in Dart", details: ` <p>In this lab, I got the chance to revisit an Oject-Oriented Programming Staple, the Object. This lab was fairly simple, all it did was re-iterate what objects were, how they differ in Dart from other langauges, and provide some use cases. Read the full report <a href='public/Reports/lab-4.docx' download>here</a>.</p>` },
        { title: "Lab 5", description: "Gestures in Dart", details: `<p>In this lab, I did research on a core feature to flutter, the gesture. I learnt how gestures, such as <code>&lt;OnTap&gt;</code>; and <code>&lt;OnSwipe&gt;</code> work, as well as how they interact with widgets to create an immersive user experience. Read the whole report <a href='public/Reports/lab-5.docx' download>here</a>.</p>` },
      ],
    },
    {
      title: "Final Project",
      items: [
          {
            title: "Full Stack Application",
            description: "Flappy Bird Clone",
            details: `
                <p>
                  For the final, I worked with a group of 3 to create a Flappy Bird clone, and to make it full-stack, I decided to take the role of backend developer and integrate Firebase into the project. This added a cloud-based backend, enabling us to have a leaderboard for the app.
                </p>
                <p>Here is a video demo of some app gameplay:</p>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://youtube.com/shorts/cXFxLfleH4A?feature=share"
                    title="Video demo"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              `,
            },
          ],
        },
      ]
  
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      {portfolioData.map((section, index) => (
        <div className="accordion" id={`accordion${index}`} key={index}>
          <div className="card">
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {section.title}
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className="collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent={`#accordion${index}`}
            >
              <div className="card-body">
                {section.items.map((item, idx) => (
                  <div key={idx} className="portfolio-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div
                      className="details"
                      dangerouslySetInnerHTML={{ __html: item.details }}
                    />
                    {item.details && (
                      <div className="accordion" id={`nestedAccordion${index}-${idx}`}>
                        <div className="card">
                          <div className="card-header" id={`nestedHeading${index}-${idx}`}>
                            <h2 className="mb-0">
                              <button
                                className="btn btn-link"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#nestedCollapse${index}-${idx}`}
                                aria-expanded="false"
                                aria-controls={`nestedCollapse${index}-${idx}`}
                              >
                                More Details
                              </button>
                            </h2>
                          </div>
                          <div
                            id={`nestedCollapse${index}-${idx}`}
                            className="collapse"
                            aria-labelledby={`nestedHeading${index}-${idx}`}
                            data-bs-parent={`#nestedAccordion${index}-${idx}`}
                          >
                            <div className="card-body">
                              <div dangerouslySetInnerHTML={{ __html: item.details }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar using Bootstrap */}
        <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: '#00734d'}}>
          <a className="navbar-brand" href="/">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route  exact path ="/" component={HomePage} />
          <Route path="/portfolio" component={PortfolioSection} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

