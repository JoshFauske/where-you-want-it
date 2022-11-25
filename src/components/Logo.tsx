type LogoProps = {
	width: number;
	className?: string;
};

const Logo = ({ width, className }: LogoProps) => {
	return (
		<img
			src="/logo.png"
			alt=""
			width={width}
			className={className}
		/>
	);
};

export default Logo;
