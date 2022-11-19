import React from 'react'

type InputProps = {
	label: string,
	htmlFor: string,
	children: React.ReactNode
}

const Input = ({label, htmlFor, children}: InputProps) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={htmlFor}>{label}</label>
			{children}
		</div>
	)
}

export default Input