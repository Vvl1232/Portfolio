import PageTransition from "../components/PageTransition";
import ProjectsSection from "../components/Projects";

export default function Projects() {
  return (
    <PageTransition>
      <div className="py-10">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
}
