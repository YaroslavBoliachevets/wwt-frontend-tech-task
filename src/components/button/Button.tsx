type ButtonProps = {
	onClick: () => void
	children?: React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary'
}

const Button = ({
	onClick,
	children,
	className,
	variant = 'primary'
}: ButtonProps) => {
	const base =
		' text-[16px] py-5 px-8 cursor-pointer font-semibold rounded-2xl shadow transition duration-200'

	const variants = {
		primary: 'bg-orange-500 hover:bg-orange-600 text-white',
		secondary: 'border border-gray-300 text-black bg-white hover:bg-gray-100'
	}
	return (
		<button
			onClick={onClick}
			className={`
				${base}
				${variants[variant]}
				${className}
			
				
			`}
		>
			{' '}
			{children}
		</button>
	)
}

export default Button
