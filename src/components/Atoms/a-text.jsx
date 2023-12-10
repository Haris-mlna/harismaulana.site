import styles from "./styles/a-text.module.css";

const PTag = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<p
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.p} ${new_classname}`}
			{...props}>
			{children}
		</p>
	);
};

const ATag = ({
	children,
	size,
	fontWeight,
	new_classname,
	link,
	...props
}) => {
	return (
		<a
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.a} ${new_classname}`}
			href={link}
			{...props}>
			{children}
		</a>
	);
};

const H1Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h1
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h1} ${new_classname}`}
			{...props}>
			{children}
		</h1>
	);
};

const H2Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h2
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h2} ${new_classname}`}
			{...props}>
			{children}
		</h2>
	);
};

const H3Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h3
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h3} ${new_classname}`}
			{...props}>
			{children}
		</h3>
	);
};

const H4Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h4
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h4} ${new_classname}`}
			{...props}>
			{children}
		</h4>
	);
};

const H5Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h5
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h5} ${new_classname}`}
			{...props}>
			{children}
		</h5>
	);
};

const H6Text = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<h6
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.h6} ${new_classname}`}
			{...props}>
			{children}
		</h6>
	);
};

const DisableText = ({
	children,
	size,
	fontWeight,
	new_classname,
	...props
}) => {
	return (
		<p
			style={{
				fontSize: size,
				fontWeight: fontWeight,
			}}
			className={`${styles.default} ${styles.disable_text} ${new_classname}`}
			{...props}>
			{children}
		</p>
	);
};

const TitleText = ({ children, size, fontWeight, new_classname, ...props }) => {
	return (
		<div className={`${styles.title_container} ${new_classname}`}>
			<h1
				style={{
					fontSize: size || "32px",
					fontWeight: fontWeight || 700,
					position: "relative",
					fontFamily: "var(--font-outfit)"
				}}
				className={`${styles.default} ${styles.title}`}
				{...props}>
					{children}
			</h1>
		</div>
	);
};

export {
	PTag,
	ATag,
	H1Text,
	H2Text,
	H3Text,
	H4Text,
	H5Text,
	H6Text,
	DisableText,
	TitleText,
};
