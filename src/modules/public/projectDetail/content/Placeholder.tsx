import { projects } from "@assets/projects";
import styles from "./placeholder.module.css";

/**
 * Temporary content for a project detail page until the bespoke masonry of
 * images + text is built. Shows the project thumbnail and a "coming soon" note.
 */
const Placeholder = ({ slug }: { slug: string }) => {
  const project = projects.find((p) => p.slug === slug);

  return (
    <div className={styles.placeholder}>
      {project && (
        <img src={project.image} alt="" className={styles.image} />
      )}
      <p className={styles.note}>Content coming soon</p>
    </div>
  );
};

export default Placeholder;
