import {
	ContainerContent,
	ContainerPages,
} from "../components/Container/container-pages/container";
import NavbarLandingPages from "../components/Organism/o-navbar";

const TemplateLandingPages = ({ children }) => {
	return (
		<ContainerPages>
			<ContainerContent>
				{/* <NavbarLandingPages /> */}
				{children}
			</ContainerContent>
		</ContainerPages>
	);
};

export default TemplateLandingPages