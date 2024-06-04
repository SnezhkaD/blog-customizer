import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

import { useState } from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;
const [isActive, setIsActive] = useState(false);

const handleClick = () => {
	setIsActive((prev) => !prev);
	alert('клик на кнопку');
};

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton handleClick={handleClick} state={isActive} />
			</>
		);
	},
};
