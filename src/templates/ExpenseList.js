/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Expense from '../components/Expense';

const ExpenseList = ({ list }) => {
	const styles = {
		ul: css`
			padding: calc(244px + 2rem) 0 calc(74px);
			height: 100%;
			overflow-y: scroll;

			::-webkit-scrollbar {
				display: none;
			}
		`,
	};
	return (
		<ul css={styles.ul}>
			{list.map((item, index) => (
				<Expense item={item} key={index} />
			))}
		</ul>
	);
};

export default ExpenseList;
