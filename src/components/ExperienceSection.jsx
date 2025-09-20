import { Accordion } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection({
	title,
	items,
	className = "",
	defaultOpen = null,
	alwaysOpen = true
}) {
	return (
		<section className={className}>
			<h2 className="h4 fw-bold mb-3">{title}</h2>
			<Accordion
				className="xp-accordion"
				alwaysOpen={alwaysOpen}
				defaultActiveKey={defaultOpen ?? undefined}
			>
				{items.map((item, idx) => (
					<ExperienceItem key={`${title}-${idx}`} eventKey={String(idx)} {...item} />
				))}
			</Accordion>
		</section>
	);
}