import { TitleText } from "../Atoms/a-text";
import styles from "./styles/o-navbar.module.css";

const NavbarLandingPages = () => {
	return (
		<nav className={styles.nav}>
			<div>
        <TitleText>
          Haris Maulana
        </TitleText>
      </div>
			<div>
				<button>REGISTER</button>
				<button>LOGIN</button>
			</div>
		</nav>
	);
};

export default NavbarLandingPages;
