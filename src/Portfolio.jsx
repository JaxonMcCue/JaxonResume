import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-5 lg:pl-14 max-w-screen-xlg">
      <Project
        title="Resume Website"
        link="https://github.com/JaxonMcCue/JaxonResume"
        description="A simple website created to provide an alternative way of providing my resume to others. This site includes all the 
        information I have on my resume while being set up to hopefully be easy to update when needed."
        viewLink="https://jaxon.codes/"
        viewText="https://jaxon.codes/"
        technology="React, JavaScript"
      />
      <Project
        title="Drive Tracker"
        link="https://github.com/JaxonMcCue/DriveTracker"
        description="An app that is created to help track the practice time of learning drivers, so they know when they have reached the required 
        minimum amount of practice hours. The data is split up to show by day and night hours as well as the total. Time can be entered manually or 
        by a button that is pushed for the start/end times. Times are calculated with consideration of different points in the day and change to a
        different day."
        viewLink="https://expo.dev/@vm737839/DriveTracker"
        viewText="Click here to view using expo app (Unavailable without installing expo)"
        technology="React, Expo"
      />
      <Project
        title="Warehouse Manager"
        link="https://github.com/JaxonMcCue/WarehouseManager"
        description="With the collaboration of two others, this project is made to be a inventory manager for warehouses. This includes features 
        like managing inventory numbers, basic ordering, and accounts with levels of permissions."
        technology="Asp.net using C#"
      />
    </div>
  );
}

const Project = ({
  title,
  link,
  description,
  technology,
  viewLink,
  viewText,
}) => {
  return (
    <div className="pb-5">
      <a href={link} target="_blank" className="font-bold">
        {title}
      </a>
      <div className="pl-2">
        <p>{description}</p>
        <a
          href={viewLink}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {viewText}
        </a>
        <p className="italic">Uses: {technology}</p>
      </div>
    </div>
  );
};
