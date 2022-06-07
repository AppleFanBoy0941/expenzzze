/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { variables } from '../../variables';
import themeContext from '../../context/themeContext';

const MoneyInput = ({ label, currency, placeholder, register, formLabel }) => {
	const { base, light, dark } = variables;
	const colors = useContext(themeContext);
	const styles = {
		label: css`
			display: flex;
			flex-direction: column;
			margin: 1rem 0;
			width: 100%;
			border: 2px solid ${colors.primary}30;
			border-radius: 24px;
		`,
		div: css`
			display: flex;
			align-items: center;
			width: 100%;
		`,
		currency: css`
			width: 36px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 24px 0 0 24px;
			border: none;
			padding: 0 0 0 4px;
			font-size: 16px;
			background-color: transparent;
			color: ${colors.tertiary};
			font-family: 'Space Mono';
			border-right: 1px solid ${colors.primary}30;
		`,
		input: css`
			width: calc(100% - 36px);
			height: 36px;
			border-radius: 0 24px 24px 0;
			border: none;
			padding: 2px 2px 2px 8px;
			font-family: 'Space Mono';
			background: ${colors.elevated};
			color: ${colors.text};

			::-webkit-outer-spin-button,
			::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			-moz-appearance: none;

			:focus {
				outline: none;
			}
		`,
	};
	return (
		<label css={styles.label}>
			{label && <span>{label}</span>}
			<div css={styles.div}>
				<span css={styles.currency}>{currency || '$'}</span>
				<input
					type="number"
					css={styles.input}
					placeholder={placeholder}
					{...register(formLabel)}
				/>
			</div>
		</label>
	);
};

export default MoneyInput;
