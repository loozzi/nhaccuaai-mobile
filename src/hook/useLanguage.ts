import {useContext} from 'react';
import {LanguageContext, LanguageProvider} from '../contexts/languageContext';

const useLanguage = () => useContext(LanguageContext);
export default useLanguage;
