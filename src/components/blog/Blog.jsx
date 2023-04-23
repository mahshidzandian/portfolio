import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img src={`img/blog/blog-1.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">29/FEB/2022 - BY MAHSHID</div>
              <h6>
                <a>
                  Five Crucial Factors that can Contribute to a Successful Career as a Front-End Developer.
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">01/JAN/2022 - BY MAHSHID</div>
              <h6>
                <a>
                  Five Mind-Blowing Reasons Why Design Is Critical in Today's World.
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/blog-3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">12/AUG/2022 - BY MAHSHID</div>
              <h6>
                <a>
                  I Will Share With You The Honest Facts About Coding Job.
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img src={`img/blog/blog-4.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">22/JUN/2021 - BY MAHSHID</div>
              <h6>
                <a>
                  What You Know About Design And What You Don't Know About Design.
                </a>
              </h6>
            </div>
          </div>
        </div>

      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>

                <article className="article">
                  <div className="article-title">
                    <h2>
                      Five Crucial Factors that can Contribute to a Successful Career as a Front-End Developer.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/blog-me.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MAHSHID</label>
                        <span>29 FEB 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <p>
                      <strong>Mastery of HTML, CSS, and JavaScript: </strong>
                      As a front-end developer, it's imperative to have a comprehensive understanding of these three core technologies. 
                      Proficiency in writing well-structured, efficient code and designing responsive user interfaces is a must.
                    </p>
                    <p>
                      <strong> Familiarity with UX and design principles: </strong>
                      Front-end developers work closely with designers to create visually appealing and user-friendly interfaces. 
                      Therefore, a solid grasp of UX and design principles like layout, typography, color theory, 
                      and accessibility can go a long way in enhancing the quality of your work.
                    </p>
                    <p>
                      <strong>Knowledge of front-end frameworks and libraries: </strong>
                      Front-end frameworks and libraries like React, Angular, Vue.js, and Bootstrap can greatly enhance development 
                      speed and code quality. Familiarity with these tools can make you a more efficient and effective front-end developer.
                    </p>
                    <p>
                      <strong>Proficiency in version control: </strong>
                      Version control tools like Git are essential for managing collaborative development projects. 
                      A front-end developer must be comfortable with these tools to work effectively as part of a team.
                    </p>
                    <p>
                      <strong>Continuous learning and growth mindset:</strong>
                      The technology industry is dynamic and ever-evolving, and front-end development is no exception. 
                      A successful front-end developer must possess a thirst for knowledge and a willingness to learn new skills and 
                      technologies to stay competitive in the field. Conferences, industry blogs, and other learning resources can help you 
                      stay up-to-date with the latest trends and best practices.
                    </p>
                    <blockquote>
                      <p>
                      Mastering HTML, CSS, JavaScript, UX principles, and continuously learning new front-end frameworks are 
                      the five golden keys to unlock success as a front-end developer.
                      </p>
                    </blockquote>
                  </div>
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                </article>

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>

                <article className="article">
                  <div className="article-title">
                    <h2>
                      Five Mind-Blowing Reasons Why Design Is Critical in Today's World.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/blog-me.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MAHSHID</label>
                        <span>01 JAN 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <p>
                      Design for creating a website is critical in today's world 
                      because it impacts first impressions, user experience, brand identity, 
                      mobile optimization, search engine optimization, trust, conversion rates, 
                      competitor differentiation, customer engagement, and cost-effectiveness. 
                      It can ultimately make or break a business's online presence and success.
                    </p>
                    <h4>
                      Effective website design is essential in today's digital age for creating 
                      a positive user experience, establishing credibility, and driving business success.
                    </h4>    
                    <blockquote>
                      <p>
                        Design is not just what it looks like and feels like. Design is how it works.
                      </p>
                      <p className="blockquote-footer">
                        Steve Jobs{" "}
                        <cite title="Source Title">Co-founder of Apple Inc.</cite>
                      </p>
                    </blockquote>
                    <p>
                      <strong>Design is more than just aesthetics:</strong>
                      Good design goes beyond what something looks like and takes into account how it functions and performs.
                      User experience is crucial: The success of a product or service often depends on how easy 
                      it is for users to navigate and interact with it.
                    </p>
                    <p>
                      <strong>Form and function are interconnected:</strong> 
                      The design of a product should reflect its intended purpose and functionality.
                    </p>
                    <p>
                      <strong>Attention to detail matters:</strong>
                        Small design decisions can have a big impact on user experience and overall functionality.
                    </p>
                    <p>
                      <strong>Design thinking is problem-solving:</strong>
                      Design thinking involves understanding user needs and finding creative solutions to meet those needs.
                    </p>
                    <p>
                      <strong>Design can drive innovation:</strong>
                      By thinking outside the box and challenging traditional design conventions, 
                      designers can drive innovation and push the boundaries of what's possible.
                    </p>
                    <p>
                      In conclusion, good design goes beyond aesthetics and takes into account how a 
                      product or service functions, ultimately impacting user experience and business success. 
                      It highlights the importance of design thinking and attention to detail.
                    </p>
                  </div>
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                </article>

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>

                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Share With You The Honest Facts About Coding Job.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/blog-me.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MAHSHID</label>
                        <span>12 AUG 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <h5>
                      First of all, I would like to share with you some pros and cons of a career in coding.
                    </h5>
                    <p>
                      <strong>
                        The coding job has many undeniable advantages.
                        Let's review some of these advantages together
                      </strong>
                    </p>
                    <p>
                      <strong>High demand: </strong>
                      As technology continues to advance, the demand for skilled programmers is increasing. 
                      This means that there are many job opportunities available for coders.
                    </p>
                    <p>
                      <strong>Good salary: </strong>
                      The high demand for coders often results in high salaries. 
                      Coders can earn a comfortable living, and in some cases, even a six-figure salary.
                    </p>
                    <p>
                      <strong>Flexibility: </strong>
                      Many coding jobs offer flexible work schedules and the ability to work remotely. 
                      This allows coders to balance their work and personal lives.
                    </p>
                    <p>
                      <strong>Creativity: </strong>
                      Coding is a creative process, and programmers have the ability to create something from scratch. 
                      This can be incredibly satisfying and fulfilling.
                    </p>
                    <p>
                      <strong>
                        The field of coding, like any other profession, comes with its fair share of challenges and 
                        drawbacks that are worth discussing. Let's take a closer look at some of these potential downsides.
                      </strong>
                    </p>
                    <p>
                      <strong>High stress: </strong>
                      Working on coding projects can be stressful, particularly if you're facing tight deadlines 
                      or dealing with complex issues that are difficult to solve.
                    </p>
                    <p>
                      <strong>Long hours: </strong>
                      Coders may need to work long hours, particularly if they're working on a project with a 
                      tight deadline or if they're working in a startup environment.
                    </p>
                    <p>
                      <strong>Sitting for long periods: </strong>
                      Coders often spend a lot of time sitting in front of a computer screen, 
                      which can lead to health issues like back pain, eye strain, and carpal tunnel syndrome.
                    </p>
                    <blockquote>
                      <p>
                        Everyone should learn how to code, because it teaches you how to think.
                      </p>
                      <p className="blockquote-footer">
                        Steve Jobs 
                        <cite title="Source Title"> Co-founder of Apple Inc.</cite>
                      </p>
                    </blockquote>
                    <p>
                      Long story short, coding is a valuable skill in today's digital world with high demand 
                      and good earning potential. However, it requires constant learning and 
                      can be challenging and stressful at times.
                    </p>
                  </div>
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                </article>

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-4.jpg" alt="blog post"></img>
                </div>

                <article className="article">
                  <div className="article-title">
                    <h2>
                      What You Know About Design And What You Don't Know About Design.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/blog-me.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY MAHSHID</label>
                        <span>22 JAN 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <p>
                      In the web industry, good design is essential to create an engaging user experience 
                      and to communicate the intended message effectively. Here are three important things to keep in mind:
                      <ol>
                        <li>Design should be user-centered and easy to navigate.</li>
                        <li>Consistency in design helps to establish brand identity and credibility.</li>
                        <li>Keeping up with the latest design trends and technologies can help to stay competitive in the industry.</li>
                      </ol>
                    </p>
                    <p>
                      Below are some significant points regarding design in the web industry that web designers 
                      may not be aware of.
                      <ol>
                        <li>
                          Accessibility: Designers should consider accessibility issues, such as making designs readable 
                          for people with visual impairments, designing for keyboard navigation, and ensuring that the 
                          design can be understood by people with different levels of language proficiency.
                        </li>
                        <li>
                          Performance: Good design also takes into account the performance of a website, 
                          including factors such as load time, image sizes, and other design elements that 
                          can impact the user experience.
                        </li>
                        <li>
                          SEO: Design can also affect a website's search engine optimization (SEO), 
                          so designers should have a basic understanding of how design choices can 
                          impact a website's search engine rankings.
                        </li>
                        <li>
                          Copywriting: Copywriting is an essential part of web design, and designers should 
                          be able to work with content writers to ensure that the design and copy 
                          work together to effectively communicate the intended message.
                        </li>
                        <li>
                          Usability testing: Designers should conduct usability testing to ensure that their 
                          designs are intuitive, user-friendly, and meet the needs of the target audience.
                        </li>
                      </ol>
                    </p>
                    <blockquote>
                      <p>
                        The power of the web is in its universality. Access by everyone regardless 
                        of disability is an essential aspect.
                      </p>
                      <p className="blockquote-footer">
                        Tim Berners-Lee {" "}
                        <cite title="Source Title">inventor of the World Wide Web</cite>
                      </p>
                    </blockquote>
                    <p>
                      At the end I should mention Design is a broad field that involves 
                      both aesthetics and functionality. While designers may have expertise in certain areas, 
                      there is always more to learn and explore in the constantly evolving world of design
                    </p>
                  </div>
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                </article>

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default News;
