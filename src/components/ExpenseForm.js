/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';
import { variables } from '../variables';
import Button from './subcomponents/Button';
import Creatable from 'react-select/creatable';
import Input from './subcomponents/Input';
import MoneyInput from './subcomponents/MoneyInput';
import { useForm } from 'react-hook-form';

const ExpenseForm = () => {
	const { register, handleSubmit, errors, setError, clearError } = useForm();
	let ls = JSON.parse(localStorage.getItem('optionsList'));
	if (ls === null) {
		const defaultOptions = [
			{ type: 'type', value: 'food', label: 'Food' },
			{ type: 'type', value: 'house', label: 'House' },
			{ type: 'type', value: 'entertainment', label: 'Entertainment' },
			{ type: 'type', value: 'shopping', label: 'Shopping' },
			{ type: 'type', value: 'transportation', label: 'Transportation' },
			{ type: 'type', value: 'health', label: 'Health' },
			{ type: 'type', value: 'other', label: 'Other' },
			{ type: 'importance', value: 'extra', label: 'Extra' },
			{ type: 'importance', value: 'important', label: 'Important' },
		];

		localStorage.setItem('optionsList', JSON.stringify(defaultOptions));

		ls = JSON.parse(localStorage.getItem('optionsList'));
	}
	const [options, setOptions] = useState(ls);

	const handleChange = event => {
		const thisItem = event.at(-1);
		if (thisItem) {
			const checkItem = options.find(option => option.value === thisItem.value);
			if (!checkItem) {
				const newOption = {
					type: 'type',
					value: thisItem.value.toLowerCase(),
					label: thisItem.value,
				};
				console.log(newOption);
				setOptions(options => {
					let newOptions = [...options, newOption];
					localStorage.setItem('optionsList', JSON.stringify(newOptions));
					return newOptions;
				});
			}
		}
	};

	const styles = {
		form: css`
			width: 100%;
			padding: 2rem;
			box-shadow: 0 2rem 2rem ${variables.primary}10;
			border-radius: 0 0 2rem 2rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			position: absolute;
			top: 0;
			left: 0;
			background: ${variables.background};
		`,
		div: css`
			width: 368px;
		`,
		select: css`
			max-width: 100%;
			font-family: 'Space Mono', monospace;
			font-size: 0.8rem;

			& input:focus {
				outline: none;
			}

			& .css-1s2u09g-control,
			.css-1pahdxg-control,
			.css-1pahdxg-control:hover {
				box-shadow: 0 0 0 1px ${variables.primary}30;
				border-color: ${variables.primary}30;
				border-radius: 18px;
			}

			& .css-1pahdxg-control:hover {
				border-color: ${variables.primary}30;
			}

			& .css-1s2u09g-control {
				width: 100%;
			}

			& .css-319lph-ValueContainer,
			.css-g1d714-ValueContainer {
				max-width: calc(100% - 73px);
				padding: 2px 8px 2px 4px;
			}

			& .css-1rhbuit-multiValue {
				border-radius: 100px;
				padding: 2px 2px 2px 6px;

				& .css-xb97g8 {
					border-radius: 100px;
				}
			}
		`,
	};

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div css={styles.div}>
				<Input
					name="nameInput"
					placeholder="Enter your expense..."
					formLabel="nameInput"
					register={register}
				/>
				<Creatable
					options={options}
					isMulti
					onChange={event => handleChange(event)}
					placeholder="Select a category..."
					css={styles.select}
					name="category"
				/>
				<MoneyInput name="amountInput" placeholder="Enter price..." />
			</div>
			<Button
				icon="plus"
				click={handleSubmit}
				type="circle"
				color={variables.primary}
			/>
		</form>
	);
};

export default ExpenseForm;
