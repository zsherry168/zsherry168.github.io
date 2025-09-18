import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

/**
 * A reusable primary button component 
 * 
 * @param {object} props - The props for the button
 * @param {React.ReactNode} props.children - The content inside the button (e.g., text)
 * @param {string} [props.href] - Optional link the button should navigate to
 * @param {function} [props.onClick] - Optional click handler for button
 * @returns {JSX.Element} A styled Bootstrap button
 */
export default function PrimaryButton({ children, href, onClick}) {
	return (
		<Button
			variant="dark"
			size="lg"
			className="px-4"
			style={{ 
				fontSize: "17px", 
				paddingTop: "10px", 
				paddingBottom: "10px"
			}}
			href={href}
			onClick={onClick}
		>
			{children}
		</Button>
	);
}

PrimaryButton.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};