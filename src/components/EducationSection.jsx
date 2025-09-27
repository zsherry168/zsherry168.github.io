import EducationCard from "../components/EducationCard";
import education from "../data/education.js";

export default function EducationSection() {
	return (
		<section className="mb-4">
			<h2 className="h3 fw-bold mb-3">Education</h2>
			{education.map(({ id, ...props }) =>
				<div key={id} className="mb-3">
					<EducationCard {...props} />
				</div>
			)}
		</section>
	);
}