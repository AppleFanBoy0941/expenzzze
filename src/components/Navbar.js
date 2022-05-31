/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { variables } from '../variables.js';
import Button from './subcomponents/Button.js';

const Navbar = () => {
	const styles = {
		nav: css`
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 4rem;
			width: 100vw;
			box-shadow: ${variables.subtle_shadow} #00000015;
			padding: 0 4rem;
			font-family: 'Space Mono', monospace;
			background-color: #ffffff30;
			backdrop-filter: blur(1.5rem);
			position: sticky;
		`,
		logo: css`
			font-size: 24px;
			font-weight: bold;
		`,
		list: css`
			display: flex;
			align-items: center;
			gap: 1.5rem;

			& a {
				padding: 0.25rem 1rem;
				position: relative;
				font-weight: 600;

				&:after {
					content: '';
					height: 3px;
					width: 3px;
					background-color: ${variables.secondary};
					position: absolute;
					bottom: 0;
					left: 0;
					border-radius: 100px;
					transition: all 0.3s;
					opacity: 0;
				}

				&:hover {
					&:after {
						width: 100%;
						opacity: 1;
					}
				}
			}
		`,
	};

	return (
		<nav css={styles.nav}>
			<Link to="home" css={styles.logo}>
				Expenzzze
			</Link>
			<ul css={styles.list}>
				<li>
					<Link to="home">Home</Link>
				</li>
				<li>
					<Link to="about">About</Link>
				</li>
				<li>
					<Button
						text="Get Started"
						link="/expenses"
						type="primary"
						color={variables.primary}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
