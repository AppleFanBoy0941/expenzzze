/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../variables';

const ExpenseFilter = () => {
	const styles = {
		footer: css`
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: ${variables.background};
			padding: 1rem 2rem;
			border-radius: 2rem 2rem 0 0;
			box-shadow: 0 -2rem 2rem ${variables.primary}10;
		`,
	};
	return (
		<footer css={styles.footer}>
			Here goes a little bit of documentation, this is the footer
		</footer>
	);
};

export default ExpenseFilter;
