import React, {Children, createContext, ReactNode, useState} from 'react';

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'vi',
  setLang: () => {},
  t: {},
});

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
