/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { variables } from '../variables';
import Button from './subcomponents/Button';
import Tag from './subcomponents/Tag';
import ThemeContext from '../context/themeContext';

const Expense = ({ item }) => {
	const { base, light, dark } = variables;
	const colors = useContext(ThemeContext);
	console.log(item);
	const styles = {
		li: css`
			padding: 1rem 2rem;
			border: ${base.border_subtle} ${colors.primary}30;
			border-radius: 2rem;
			margin-bottom: 2rem;
			animation: fadeIn 0.5s ease-in-out forwards;

			@keyframes fadeIn {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}
		`,
		header: css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`,
		price: css`
			font-family: 'Space Mono';
		`,
		priceSpan: css`
			font-family: 'Space Mono';
			font-weight: 700;
		`,
		ul: css`
			display: flex;
			gap: 0.5rem;
			margin-top: 0.5rem;
			margin-left: -0.5rem;
			flex-wrap: wrap;
		`,
	};
	const handleClick = () => {
		console.log('Her kommer der så en undermenu');
	};
	return (
		<li css={styles.li}>
			<header css={styles.header}>
				<h3>{item.name}</h3>
				<Button icon="more-vertical" type="circle" click={handleClick} />
			</header>
			<p css={styles.price}>
				{item.currency} <span css={styles.priceSpan}>{item.price}</span>
			</p>
			<ul css={styles.ul}>
				{item.type.map((type, i) => (
					<li key={i}>
						<Tag tag={type} />
					</li>
				))}
			</ul>
		</li>
	);
};

export default Expense;
