import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from './redux/languageSlice';

function App() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.language);

  const changeLanguage = (lng) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
}

export default App;
