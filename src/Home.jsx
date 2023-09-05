import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
    <div>
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
            <h1 className="font-bold text-xl pb-2">Certificate</h1>
            <div className="ml-3 pb-3">
              <h1 className="font-bold">TestOut PC Pro Certification</h1>
              <p>
                A certification for qualifying to install and manage computer
                components, aimed for help-desk related jobs.
              </p>
              <a
                href="https://certification.testout.com/verifycert/6-2C6-VVSGA7"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Certificate
              </a>
              <hr className="mt-1 w-11 border-gray-400" />
              <p className="text-sm italic">May 2023</p>
            </div>
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

const Experience = ({
  company,
  location,
  timeFrame,
  position,
  description,
}) => {
  return (
    <div className="ml-3 pb-3">
      <h1 className="font-bold">{company}</h1>
      <p className="text-sm italic">{position}</p>
      <p>{description}</p>
      <hr className="mt-1 w-11 border-gray-400" />
      <p className="text-sm italic">{location}</p>
      <p className="text-sm italic">{timeFrame}</p>
    </div>
  );
};
