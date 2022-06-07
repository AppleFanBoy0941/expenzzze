/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../../variables';
import ThemeContext from '../../context/themeContext';
import { useContext } from 'react';

const Input = ({
	type,
	label,
	color,
	placeholder,
	register,
	formLabel,
	required,
}) => {
	const { base, light, dark } = variables;
	const colors = useContext(ThemeContext);
	const styles = {
		label: css`
			width: 100%;
			display: flex;
			margin: 1rem 0;
			flex-direction: column;
		`,
		input: css`
			width: 100%;
			min-height: 38px;
			border-radius: 1.5rem;
			border: 1px solid ${colors.primary}30;
			box-shadow: 0 0 0 1px ${colors.primary}30;
			font-family: 'Space Mono';
			padding: 2px 2px 2px 8px;
			transition: 0.3s;
			background: ${colors.elevated};
			color: ${colors.text};

			:focus {
				outline: none;
				border: 1px solid ${colors.primary};
				box-shadow: 0 0 0 1px ${colors.primary};
			}
		`,
		span: css`
			padding: 0 0 4px 8px;
			color: ${color || colors.primary}80;
			font-size: 14px;
		`,
	};
	return (
		<label css={styles.label}>
			{label && <span css={styles.span}>{label}</span>}
			<input
				type={type || 'text'}
				css={styles.input}
				placeholder={placeholder}
				{...register(formLabel)}
			/>
		</label>
	);
};

export default Input;
