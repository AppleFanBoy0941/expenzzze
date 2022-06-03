import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../../variables';
import NumberFormat from 'react-number-format';

const MoneyInput = ({ label, currency, placeholder, register, name }) => {
	const [value, setValue] = useState('');

	const styles = {
		label: css`
			display: flex;
			flex-direction: column;
			margin: 1rem 0;
			width: 100%;
			border: 2px solid ${variables.primary}30;
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
			color: ${variables.primary};
			font-family: 'Space Mono';
			border-right: 1px solid ${variables.primary}30;
		`,
		input: css`
			width: calc(100% - 36px);
			height: 36px;
			border-radius: 0 24px 24px 0;
			border: none;
			padding: 2px 2px 2px 8px;
			font-family: 'Space Mono';

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
				<NumberFormat
					value={value}
					thousandSeparator=" "
					decimalSeparator=","
					allowLeadingZeros={false}
					allowNegative={false}
					fixedDecimalScale={false}
					decimalScale={0}
					displayType="input"
					type="text"
					onChange={e => {
						setValue(e.target.value);
						console.log(parseFloat(value.replace(/\s/g, '')));
					}}
					css={styles.input}
					placeholder={placeholder}
					name={name}
					// {...register(name)}
				/>
			</div>
		</label>
	);
};

export default MoneyInput;
