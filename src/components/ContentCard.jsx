import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

/**
 * Generic card component for projects, blogs, or other content
 * 
 * @param {object} props - The props for the card 
 * @param {string} props.title - The title of the card
 * @param {string} [props.desc] - Optional description text
 * @param {string} props.img - Path or URL of the card's image
 * @param {string} props.link - Destination link for the card
 * @returns {JSX.Element} A styled Bootstrap card
 */

export default function ContentCard({ title, desc, img, link }) {
	return (
		<Card className="h-100 shadow-sm">
			<a href={link || "#"} aria-label={`Open ${title}`}>
				<Card.Img variant="top" src={img} alt={`${title} cover`}/>
			</a>

			<Card.Body>
				<a href={link} style={{ textDecoration: "none", color: "black"}}>
					<Card.Title>{title}</Card.Title>
				</a>
				{desc && <Card.Text className="text-secondary">{desc}</Card.Text>}
			</Card.Body>
		</Card>
	);
}

ContentCard.PropTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string,
	img: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};