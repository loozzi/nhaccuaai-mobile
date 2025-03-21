import React, {Children, createContext, ReactNode, useState} from 'react';

const LanguageContext = createContext({});

interface LanguageProviderProps {
  children: ReactNode;
}
const LanguageProvider = (props: LanguageProviderProps) => {
  const {children} = props;
  const [lang, setLang] = useState<string>('vi');
  const translations: Record<string, any> = {
    vi: require('../i18n/vi.json'),
  };

  return (
    <LanguageContext.Provider value={{lang, setLang, t: translations[lang]}}>
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageContext, LanguageProvider};
