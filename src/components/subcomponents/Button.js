/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';
import { variables } from '../../variables';
import FeatherIcon from 'feather-icons-react';
import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

const Button = ({ link, text, type, color, click, icon }) => {
	const { base, light, dark } = variables;
	const colors = useContext(ThemeContext);

	const styles = {
		button: css`
			padding: 1rem 2.5rem;
			display: flex;
			width: fit-content;
			border-radius: 1.5rem;
			font-weight: 600;
			transition: 0.3s;
			color: ${color || colors.text};
			position: relative;
			border: none;
			cursor: pointer;
			${type === 'primary' &&
			`
				background-color: ${color};
				${
					color === colors.tertiary
						? `color: ${colors.dark};`
						: `color: ${colors.light};`
				}

				&:hover {
					filter: brightness(110%);
					box-shadow: ${base.subtle_shadow} ${color}30;
				}
			`}
			${type === 'secondary' &&
			`
				color: ${color};
				border: 2px solid ${color};
				background: transparent;

				&:hover {
					background-color: ${color};
					${
						color === colors.tertiary
							? `color: ${colors.dark};`
							: `color: ${colors.light};`
					}
					box-shadow: ${base.subtle_shadow} ${color}30;
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
			${type === 'circle' &&
			`
				border-radius: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2rem;
				height: 2rem;
				padding: 0;
				border: 2px solid ${color || colors.primary};
				color: ${color || colors.primary};
				background-color: transparent;

				& svg {
					height: 1rem;
					width: 1rem;
					stroke-width: 3px;
				}

				&:hover	{
					background-color: ${color || colors.primary};
					${
						color === colors.tertiary
							? `color: ${colors.text};`
							: `color: ${colors.background};`
					}
				}
				`};
		`,
	};
	return (
		<>
			{link && (
				<Link css={styles.button} to={link}>
					{text && text}
					{icon && <FeatherIcon icon={icon} />}
				</Link>
			)}
			{click && (
				<button css={styles.button} onClick={click}>
					{text && text}
					{icon && <FeatherIcon icon={icon} />}
				</button>
			)}
		</>
	);
};

export default Button;
