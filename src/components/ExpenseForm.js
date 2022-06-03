/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { variables } from '../variables';
import Button from './subcomponents/Button';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ defaultValues, children, onSubmit }) => {
	console.log(children);
	const methods = useForm({ defaultValues });
	const { handleSubmit } = methods;
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
	};

	return (
		<form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div css={styles.div}>
				{React.Children.map(children, child => {
					return child.props.name
						? React.createElement(child.type, {
								...{
									...child.props,
									register: methods.register,
									key: child.props.name,
								},
						  })
						: child;
				})}
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
