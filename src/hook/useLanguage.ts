import {useContext} from 'react';
import {LanguageContext} from '../contexts/languageContext';

const useLanguage = () => useContext(LanguageContext);
export default useLanguage;
