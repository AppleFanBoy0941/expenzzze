/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { variables } from '../variables';
import ThemeContext from '../context/themeContext';

const ExpenseFilter = () => {
	const { base, light, dark } = variables;
	const colors = useContext(ThemeContext);
	const styles = {
		footer: css`
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background: ${colors.elevated};
			padding: 1rem 2rem;
			border-radius: ${colors.br_drop_bottom};
			box-shadow: ${colors.bs_drop_bottom} ${colors.primary}10;
			color: ${colors.text};
		`,
	};
	return (
		<footer css={styles.footer}>
			Here goes a little bit of documentation, this is the footer
		</footer>
	);
};

export default ExpenseFilter;
