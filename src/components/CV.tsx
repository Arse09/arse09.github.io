import React from 'react'
import clsx from 'clsx'

type Props = {
	disabled?: boolean
}

const CV: React.FC<Props> = ({ disabled = false }) => {
	return (
		<>
			<div className={clsx(
				disabled ? 'hidden' : 'flex',
				""
				)}
			>
				CV
			</div>
		</>
	)
}
export default CV
