/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '../components/subcomponents/Button';
import { variables } from '../variables';

const Hero = () => {
	const styles = {
		hero: css`
			background: linear-gradient(
				45deg,
				${variables.primary},
				${variables.secondary}
			);
			background-size: 200% 100%;
			background-position: left;
			height: 80vh;
			color: ${variables.background};
			animation: slide 20s infinite;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			& span {
				color: ${variables.secondary};
			}

			@keyframes slide {
				0% {
					background-position: left;
				}
				50% {
					background-position: right;
				}
			}

			@keyframes pulse {
				50% {
					opacity: 0;
				}
			}
		`,
		header: css`
			font-size: 64px;
			font-weight: 700;
			margin-top: 0.5rem;
			position: relative;
		`,
		subheader: css`
			font-size: 24px;
			font-weight: 700;
			font-family: 'Space Mono';
		`,
		z1: css`
			position: absolute;
			right: -1rem;
			top: -1.5rem;
			font-size: 32px;
			transform: rotate(-7.5deg);
			color: ${variables.tertiary} !important;
			animation: pulse 2s infinite;
		`,
		z2: css`
			position: absolute;
			right: -2rem;
			top: -3rem;
			font-size: 24px;
			transform: rotate(3deg);
			opacity: 0.75;
			color: ${variables.tertiary} !important;
			animation: pulse 2s infinite 0.5s;
		`,
		z3: css`
			position: absolute;
			right: -3rem;
			top: -3.5rem;
			font-size: 16px;
			transform: rotate(15.5deg);
			opacity: 0.5;
			color: ${variables.tertiary} !important;
			animation: pulse 2s infinite 1s;
		`,
	};

	return (
		<header css={styles.hero}>
			<div>
				<p css={styles.subheader}>
					Expenses made so <span>eazzzy</span>
				</p>
				<h1 css={styles.header}>
					... you could fall <span>asleep</span>
					<div>
						<span css={styles.z1}>Z</span>
						<span css={styles.z2}>Z</span>
						<span css={styles.z3}>Z</span>
					</div>
				</h1>
				<Button
					link="/expenses"
					text="Get Started"
					type="primary"
					color={variables.tertiary}
				/>
			</div>
		</header>
	);
};

export default Hero;
