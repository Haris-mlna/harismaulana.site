import React from "react";
import styles from "./home.module.css";
import TemplateLandingPages from "../../templates/templates-landing";
import cars from "../../assets/images/cars.png";
import forest from "../../assets/images/forest.jpg";
import { TitleText } from "../../components/Atoms/a-text";

const Home = () => {
	return (
		<TemplateLandingPages>
			<header className={styles.header}>
				<div className={styles.hero_title_container}>
					<div className={styles.glow_title}></div>
					<div className={styles.hero_title}>
						<TitleText
							size={120}
							fontWeight={800}
							new_classname={`${styles.title} ${styles.title1}`}>
							HARIS
						</TitleText>
						<TitleText
							size={120}
							fontWeight={800}
							new_classname={`${styles.title} ${styles.title2}`}>
							MAULANA
						</TitleText>
					</div>
				</div>
			</header>
			<section className={styles.section_1}>
				<div></div>
			</section>
		</TemplateLandingPages>
	);
};

export default Home;
