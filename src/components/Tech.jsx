import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // 1. Change the wrapper to a Column (flex-col) to stack items vertically
        <div className='flex flex-col items-center justify-center' key={technology.name}>
          
          {/* 2. Keep the Ball inside its own fixed-size container */}
          <div className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>

          {/* 3. Add the Text below the ball */}
          <p className='text-white text-[14px] font-bold mt-2 text-center'>
            {technology.name}
          </p>
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");