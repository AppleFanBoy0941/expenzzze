/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Expense from '../components/Expense';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const ExpenseList = ({ list }) => {
	const [parent] = useAutoAnimate();
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
		<ul css={styles.ul} ref={parent}>
			{list.map((item, index) => (
				<Expense item={item} key={index} />
			))}
		</ul>
	);
};

export default ExpenseList;
