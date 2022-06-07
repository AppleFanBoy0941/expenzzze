import { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import { variables } from '../variables';

const ThemeToggle = ({ click }) => {
	const { light, dark } = variables;
	// const currentTheme = useContext(ThemeContext);
	// const handleClick = () => {
	// 	if (currentTheme === 'light') {
	// 		click('dark');
	// 	} else {
	// 		click('light');
	// 	}
	// };

	return <button onClick={click}>Light/Dark mode</button>;
};

export default ThemeToggle;
