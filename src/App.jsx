import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

function App() {

  const email = () => {
    return "jaxonmccue" + 718 +"@" +"gmail" +".com"
  }

  return (
    <div>
      <div className="p-5 pr-7 pb-0 lg:pl-10 bg-cyan-100">
        <h1 className="font-bold text-3xl">Jaxon McCue</h1>
        <div className="pb-4 xl:grid grid-cols-5">
          <div className="col-span-2">
            <p className="italic">Software Developer</p>
          </div>

          <div className="grid grid-flow-col justify-start">
            <EnvelopeIcon className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold">Email</p>
              <a
                href={`mailto:${email()}`}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {email()}
              </a>
            </div>
          </div>

          <LinkingSet link="https://github.com/JaxonMcCue" linkType="Github" />
          <LinkingSet
            link="https://www.linkedin.com/in/jaxon-mccue-268b02255/"
            linkType="LinkedIn"
          />
        </div>
      </div>

      <div className="flex lg:pl-10 lg:grid grid-cols-3">
        <div className="grow lg:col-span-2 p-5 pr-3 max-w-screen-md">
          <div>
            <h1 className="font-bold text-xl pb-2">Education</h1>
            <Experience
              company="Southeast Community College"
              location="Lincoln, NE"
              timeFrame="August 2021 - Now"
              position="Application Development"
              description="This school has helped teach me new languages and applications. They focused more on teaching website and form creation, as well as working in group and project management."
            />
            <Experience
              company="Lincoln Southeast High School"
              location="Lincoln, NE"
              timeFrame="August 2017 - May 2021"
              description="Early introduction to programming through a Java focused class."
            />
          </div>

          <div className="pt-2">
            <h1 className="font-bold text-xl pb-2">Volunteer</h1>
            <Experience
              company="Girls Code Lincoln"
              position="Board Member"
              location="Lincoln, NE"
              timeFrame="June 2021 - August 2021"
              description=""
            />
          </div>

          <div className="pt-2">
            <h1 className="font-bold text-xl pb-2">Work</h1>
            <Experience
              company="McDonalds"
              position="Employee"
              location="Lincoln, NE"
              timeFrame="June 2021 - May 2022"
              description="I trained several new employees, as well as learned and coordinated with a team to accomplish tasks."
            />
          </div>
        </div>

        <div className="shrink justify-end border-l-2 p-5 px-3 bg-cyan-50">
          <h1 className="font-bold text-xl">Skills</h1>
          <div className="pl-2">
            <p className="font-bold">Technology</p>
            <div className="pl-2 pb-4">
              <p>Java</p>
              <p>JavaScript</p>
              <p>Asp.Net</p>
              <p>Python</p>
              <p>HTML/CSS</p>
              <p>SQL</p>
            </div>
            <p className="font-bold">Programs/Applications</p>
            <div className="pl-2 pb-4">
              <p>GitHub</p>
              <p>Visual Studio</p>
              <p className="pl-3">-Code</p>
              <p className="pl-3">-2019</p>
              <p>Eclipse</p>
              <p>MySQL</p>
              <p>SQL Server</p>
              <p>Access</p>
              <p>Word</p>
            </div>
            <p className="font-bold">Other</p>
            <div className="pl-2 pb-4">
              <p>Teamwork</p>
              <p>Quick learner</p>
              <p>Critical thinker</p>
              <p>Flexible</p>
              <p>Problem Solving</p>
            </div>
          </div>
          <h1 className="font-bold text-xl">Languages</h1>
          <div className="pl-4 pb-4">
            <p>Fluent English</p>
            <p>Basic German</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const LinkingSet = ({ link, linkType }) => {
  return (
    <div className="grid grid-flow-col justify-start">
      <LinkIcon className="h-7 w-7 m-2" />
      <div>
        <p className="font-bold">{linkType}</p>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

const Experience = ({ company, location, timeFrame, position, description }) => {
  return (
    <div className="ml-3 pb-3">
      <h1 className="font-bold">{company}</h1>
      <p className="text-sm italic">{position}</p>
      <p>{description}</p>
      <p className="text-sm">{location}</p>
      <p className="text-sm">{timeFrame}</p>
    </div>
  );
};

export default App;
