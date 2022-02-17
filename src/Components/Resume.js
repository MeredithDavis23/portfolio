import React from 'react';

const Resume = () => {

  return (
    <div class='resume'>
      <h1 id="resume-header" onclick="nameFade()">Meredith Davis</h1>
      <div id="resume-content">
        <aside class="left">
          <div class="page-control">
            <a href="portfolio.html" title="Portfolio" id="prev" class="fa fa-arrow-circle-left animated fadeInLeft delay-2s">
              <span>Portfolio</span>
            </a>
          </div>
        </aside>
        <div class="resume-left">
          <div id="profile-pic">
            {/* <img src="/resume-pic.jpg" id="resume-pic"> */}
          </div>
          <div id="profile">
            <h2>Profile</h2>
            <p>

            </p>
          </div>
        </div>
        <br />
            <section id="skills">
              <h2>Skills</h2>
              <section id="skillsList">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Github</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Responsive Web Design</li>
                <li>Wordpress</li>
                <li>Microsoft Office</li>
                <li>Google Suite</li>
              </section>
            </section>
            <br />
              <div id="interests">
                <h2>Interests</h2>
                <p>

                </p>
              </div>
              <br />
                <div id="resume-contact">
                  <h2>Contact</h2>
                  <p> Email: meredith_e_davis@yahoo.com

                  </p>
                </div>
              </div>
              <div id="resume-main">
                <div id="work">
                  <h2>Work Experience</h2>
                  <h3>City of Austin Municipal Court</h3>
                  <h4>Bilingual Court Clerk Assistant</h4>
                  <h5>Sept. 2020 - Present</h5>
                  <p>Assist and answer questions from the public received in person, by phone or by email regarding the status, disposition, pending actions or other aspects of court cases. Review, interpret, analyze and evaluate all signed legal documents submitted in an assigned cause of action and take appropriate action. Take payments and reconcile daily deposits.-= </p>
                  <h3>Guerrero Thompson Elementary School</h3>
                  <h4>Campus Innovation Coach </h4>
                  <h5>Dec. 2016-Jul. 2019</h5>
                  <p>Implemented STEM and Makerspace technology on campus by leading professional development for staff on how to use technology and STEM in the classroom, as well as collaborate with district technology leaders</p>
                  <h4>Kindergarten Team Leader</h4>
                  <h5>Aug. 2017-Jul.2019</h5>
                  <p>Facilitated weekly team meetings and worked with administration to ensure all kindergarten teachers met expectations and deadlines, as well as other duties</p>
                  <h4>Bilingual Kindergarten Teacher</h4>
                  <h5>Aug. 2013-Jul. 2019</h5>
                  <p></p>
                  <h3>American Cancer Society</h3>
                  <h4>Bilingual Health Insurace Information Specialist</h4>
                  <h5>Jan. 2011-Apr. 2012</h5>
                  <p></p>
                  <h4>Bilingual Cancer Information Specialist</h4>
                </div>
                <br />
                  <div id="education">
                    <h2>Education</h2>
                    <ul>
                      <li> The University of Texas at Austin May 2009 <br />
                        Bachelor of Arts in Spanish Literature <br />
                          Business Certificate from UT Business Foundations Program
                      </li>
                        <li> Region XIII Educator Certification Program     May 2015
                        </li>
                        <li> Bilingual Education Supplemental-Spanish(EC-6) May 2015

                        </li>
                      </ul>
                      </div>
                      <br />
                        <div id="languages">
                          <h2>Languages</h2>
                          <ul>
                            <li>English</li>
                            <li>Spanish</li>
                          </ul>
                        </div>
                        <br />
                      </div>
          </div>
                      )
}

                      export default Resume