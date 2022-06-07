/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { variables } from './variables';
import ThemeContext from './context/themeContext';

function App() {
	const { light, dark } = variables;
	const [theme, setTheme] = useState(light);
	const handleSetTheme = () => {
		if (theme === light) {
			setTheme(dark);
		} else {
			setTheme(light);
		}
	};
	const styles = {
		container: css`
			background: ${theme.background};
			min-height: 100vh;
			color: ${theme.text};
		`,
	};
	return (
		<div className="App" css={styles.container}>
			<ThemeContext.Provider value={theme}>
				<Navbar setTheme={handleSetTheme} />
				<div>
					<Outlet />
				</div>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
