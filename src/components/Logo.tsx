type LogoProps = {
	width: string;
	className: string;
};

const Logo = ({ width, className }: LogoProps) => {
	return (
		<img
			src="/src/assets/logo.png"
			alt=""
			width={width}
			className={className}
		/>
	);
};

export default Logo;
