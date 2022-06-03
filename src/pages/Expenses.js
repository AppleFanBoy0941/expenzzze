/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../templates/ExpenseList';
import { useState } from 'react';
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
	};
	return (
		<main css={styles.main}>
			<section css={styles.expense_section}>
				<ExpenseList list={expenseList} />
				<ExpenseForm />
				<ExpenseFilter />
			</section>
			<aside>Ting her</aside>
		</main>
	);
};

export default Expenses;
