import { useContext } from 'react';
import { PageContext } from './PageProvider';
import { AuthContext } from './AuthProvider';

export const usePages = () => useContext(PageContext);
export const useAuth = () => useContext(AuthContext);
