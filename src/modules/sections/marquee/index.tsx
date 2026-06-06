import { Fragment, useEffect, useRef } from "react";
import { Box } from "@mantine/core";
import styles from "./marquee.module.css";

const KEYWORDS = [
  "Branding",
  "Print Design",
  "Visual Identity",
  "Creativity",
  "Storytelling",
];

/** Duration of the speed ramp when hovering on/off, in ms. */
const EASE_MS = 600;
/** Cubic ease-in-out. */
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Group = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div className={styles.group} aria-hidden={ariaHidden || undefined}>
    {KEYWORDS.map((word) => (
      <Fragment key={word}>
        <span className={styles.word}>{word}</span>
        <span className={styles.sep}>{"\\"}</span>
      </Fragment>
    ))}
  </div>
);

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  // Smoothly ramp the scroll's playback rate toward `target` (1 = full speed,
  // 0 = stopped) instead of cutting it dead.
  const easeRate = (target: number) => {
    const anims = trackRef.current?.getAnimations() ?? [];
    if (!anims.length) return; // e.g. prefers-reduced-motion: no animation
    const fromRate = anims[0].playbackRate;
    const start = performance.now();
    cancelAnimationFrame(rafRef.current);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / EASE_MS);
      const rate = fromRate + (target - fromRate) * easeInOut(t);
      anims.forEach((a) => (a.playbackRate = rate));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <Box
      component="section"
      className={styles.marquee}
      onMouseEnter={() => easeRate(0)}
      onMouseLeave={() => easeRate(1)}
    >
      {/* Two identical groups → seamless -50% loop. */}
      <div className={styles.track} ref={trackRef}>
        <Group />
        <Group ariaHidden />
      </div>
    </Box>
  );
};

export default Marquee;
