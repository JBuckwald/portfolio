import headshot from '../assets/images/headshot.png';
import python from '../assets/images/techstack/python.png';
import js from '../assets/images/techstack/js.png';
import tailwind from '../assets/images/techstack/tailwind.png';
import d3 from '../assets/images/techstack/d3.png';
import pandas from '../assets/images/techstack/pandas.png';
import vite from '../assets/images/techstack/vite.png';

export function IntroSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={headshot} className="rounded-full drop-shadow-lg" />
      <div>
        <h1 className="pt-2 pb-4 text-4xl">Josh Buckwald</h1>
        <p className="text-m pt-1 pb-3">
          Chef turned full stack engineer with a passion for cybersecurity and
          data structures.
        </p>
        <div id="skill-badges" className="grid grid-flow-col p-4">
          <img src={python} />
          <img src={js} />
          <img src={tailwind} />
          <img src={d3} />
          <img src={pandas} />
          <img src={vite} />
        </div>
      </div>
    </div>
  );
}

// All layout should be flex boxes and grid boxes.
