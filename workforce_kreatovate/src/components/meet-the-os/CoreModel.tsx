import React from 'react';
import BrainIcon from '../shared/icons/BigBrainIcon';
import ElipseIcon from '../shared/icons/ElipseIcon';
import CircleIcon from '../shared/icons/ElipseIcon';

export default function CoreModel() {
  return (
    <div className="custom-container relative w-full mx-auto py-12 space-y-4">
      {/* <div className="absolute top-23 right-10 opacity-90 ">
        <ElipseIcon className="w-140 h-140 rounded-full" />
      </div> */}
      <h1 className="text-5xl font-bold text-center">
        A.D.O.N.I.S. Core Model
      </h1>

      <p className="text-sm text-center">
        The Brain Behind Your Business Operating System
      </p>

      <div className="absolute top-0 left-18 opacity-90 ">
        <ElipseIcon className="w-140 h-140 rounded-full" />
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="bg-gradient-to-l from-[#3700ff] to-[#e21717] w-[192px] h-[192px] rounded-full p-[3px]">
          <div className="bg-black rounded-full w-full h-full flex items-center justify-center opacity-80">
            <BrainIcon />
          </div>
        </div>
        <div className="absolute top-2 right-30  ">
          <ElipseIcon className="w-140 h-140 rounded-full" />
        </div>
      </div>
    </div>
  );
}
