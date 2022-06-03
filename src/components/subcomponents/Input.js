/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../../variables';
import React from 'react';

const Input = ({
	type,
	label,
	color,
	placeholder,
	name,
	formLabel,
	register,
}) => {
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
			border: 1px solid ${variables.primary}30;
			box-shadow: 0 0 0 1px ${variables.primary}30;
			font-family: 'Space Mono';
			padding: 2px 2px 2px 8px;
			transition: 0.3s;

			:focus {
				outline: none;
				border: 1px solid ${variables.primary};
				box-shadow: 0 0 0 1px ${variables.primary};
			}
		`,
		span: css`
			padding: 0 0 4px 8px;
			color: ${color || variables.primary}80;
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
				name={name}
				{...register(formLabel)}
			/>
		</label>
	);
};

export default Input;
