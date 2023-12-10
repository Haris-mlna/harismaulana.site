import styles from "./styles/a-button.module.css";

const ButtonPrimary = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.primary} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonSecondary = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.secondary} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonReverse = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.reverse} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonWarning = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.warning} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonDanger = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.danger} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonLogin = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.login} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

const ButtonRegister = ({
	children,
	new_className,
	width,
	height,
	borderRadius,
	onclick,
	...props
}) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
			className={`${styles.default} ${styles.register} ${new_className}`}
			onClick={onclick}
			{...props}>
			{children}
		</button>
	);
};

export {
	ButtonPrimary,
	ButtonSecondary,
	ButtonReverse,
	ButtonWarning,
	ButtonDanger,
	ButtonLogin,
	ButtonRegister,
};
