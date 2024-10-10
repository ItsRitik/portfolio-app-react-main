import * as React from "react";
import WorkExp from "./timeline/WorkExp";
import Education from "./timeline/Education";

const About = () => {
  return (
    <div name="about" className="w-full py-10   bg-background text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[100%] lg:max-w-[80%] w-full grid lg:grid-cols-2 px-4">
          <WorkExp />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
