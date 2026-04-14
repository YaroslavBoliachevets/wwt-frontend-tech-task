type ButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="
			cursor-pointer
				bg-orange-500 
				hover:bg-orange-600 
				text-white 
				font-semibold 
				px-6 
				py-3 
				rounded-lg 
				shadow 
				transition 
				duration-200
			"
		>
			{' '}
			{children}
		</button>
	)
}

export default Button
