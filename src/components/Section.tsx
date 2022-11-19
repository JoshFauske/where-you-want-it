import React from 'react'

type SectionProps = {
	children: React.ReactNode
}

const Section = ({children}: SectionProps) => {
	return (
		<div className="mt-12 flex flex-col items-center">{children}</div>
	)
}

export default Section