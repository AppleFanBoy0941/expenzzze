import { createContext } from 'react';
import { variables } from '../variables';

const { light } = variables;

const ThemeContext = createContext(light);
export default ThemeContext;
