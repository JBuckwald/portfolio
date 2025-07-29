import headshot from '../assets/images/headshot.png';

export function IntroSection() {
  return (
    <div>
      <img src={headshot} className="rounded-full" />
      <div>
        <div>skills</div>
        <div>intro</div>
      </div>
    </div>
  );
}

// All layout should be flex boxes and grid boxes.
