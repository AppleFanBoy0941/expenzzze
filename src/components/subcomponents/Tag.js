/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { variables } from '../../variables';

const { base, light, dark } = variables;
const colors = light;

const Tag = ({ tag }) => {
	const styles = {
		span: css`
			display: inline-block;
			background-color: ${colors.tertiary}20;
			border-radius: 100px;
			padding: 0.25em 1.5rem;
			font-weight: 700;
			height: 29px;
			color: ${colors.tertiary};
			cursor: pointer;
		`,
	};
	return <span css={styles.span}>{tag}</span>;
};

export default Tag;
