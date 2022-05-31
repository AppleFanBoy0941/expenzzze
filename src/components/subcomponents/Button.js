/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';
import { variables } from '../../variables';

const Button = ({ link, text, type, color }) => {
	const styles = {
		button: css`
			padding: 1rem 2.5rem;
			display: inline-block;
			width: fit-content;
			border-radius: 1.5rem;
			font-weight: 600;
			transition: 0.3s;
			color: ${color || variables.text};
			position: relative;
			${type === 'primary' &&
			`
				background-color: ${color};
				${
					color === variables.tertiary
						? `color: ${variables.text};`
						: `color: ${variables.background};`
				}

				&:hover {
					filter: brightness(110%);
					box-shadow: ${variables.subtle_shadow} ${color}30;
				}
			`}
			${type === 'secondary' &&
			`
				color: ${color};
				border: 2px solid ${color};

				&:hover {
					background-color: ${color};
					${
						color === variables.tertiary
							? `color: ${variables.text};`
							: `color: ${variables.background};`
					}
					box-shadow: ${variables.subtle_shadow} ${color}30;
				}
			`}
			${type === 'tertiary' &&
			`
				border-radius: 4px;

				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					height: 4px;
					width: 4px;
					background: ${color};
					border-radius: 100px;
					opacity: 0;
					transition: all .3s ease;
				}

				&:hover {
					background: ${color}15;
					&:after {
						width: 100%;
						opacity: 1;
					}
				}
			`}
		`,
	};
	return (
		<Link css={styles.button} to={link}>
			{text}
		</Link>
	);
};

export default Button;
