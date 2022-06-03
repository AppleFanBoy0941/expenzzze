/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../../variables';

const Tag = ({ tag }) => {
	const styles = {
		span: css`
			display: inline-block;
			background-color: ${variables.tertiary}20;
			border-radius: 100px;
			padding: 0.25em 1.5rem;
			font-weight: 700;
			height: 29px;
			color: ${variables.tertiary};
			cursor: pointer;
		`,
	};
	return <span css={styles.span}>{tag}</span>;
};

export default Tag;
