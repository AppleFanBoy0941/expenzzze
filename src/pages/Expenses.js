/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../templates/ExpenseList';
import { useState } from 'react';
import Input from '../components/subcomponents/Input';
import CreatableSelect from 'react-select';
import MoneyInput from '../components/subcomponents/MoneyInput';
import { variables } from '../variables';

const Expenses = () => {
	const defaultList = [
		{
			name: 'Candy',
			type: ['food', 'extra'],
			currency: '$',
			price: 10,
		},
		{ name: 'Bacon', type: ['food', 'important'], currency: '$', price: 5 },
		{
			name: 'Vacuum',
			type: ['house', 'important'],
			currency: '$',
			price: 200,
		},
		{ name: 'Meds', type: ['health', 'important'], currency: '$', price: 20 },
		{
			name: 'Jurassic World 4',
			type: ['entertainment', 'extra'],
			currency: '$',
			price: 9,
		},
		{ name: 'Clothes', type: ['shopping'], currency: '$', price: 17 },
	];

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

	const onSubmit = data => console.log(data);

	const [expenseList, setExpenseList] = useState(defaultList);
	const styles = {
		main: css`
			max-width: 1200px;
			margin: 5rem auto;
			display: flex;
			gap: 2rem;
		`,
		expense_section: css`
			width: 480px;
			position: relative;
			height: clamp(30rem, calc(100vh - 64px - 10rem), 60rem);
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
	return (
		<main css={styles.main}>
			<section css={styles.expense_section}>
				<ExpenseList list={expenseList} />
				<ExpenseForm onSubmit={onSubmit}>
					<Input name="nameInput" placeholder="Enter your expense..." />
					<CreatableSelect
						options={options}
						isMulti
						onChange={event => handleChange(event)}
						placeholder="Select a category..."
						css={styles.select}
						name="category"
					/>
					<MoneyInput name="amountInput" placeholder="Enter price..." />
				</ExpenseForm>
				<ExpenseFilter />
			</section>
			<aside>Ting her</aside>
		</main>
	);
};

export default Expenses;
