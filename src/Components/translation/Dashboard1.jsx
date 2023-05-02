import React from 'react'
import { useTranslation, Trans } from 'react-i18next';

function Traslation() {
  const { t, i18n } = useTranslation();
  const lngs={
    tel:{nativeName:'Telugu'},
    en:{nativeName:'English'},
    hin:{nativeName:'Hindi'}
  }
  const handleChange=(e)=>{
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div>
        <h1>{t('greeting')}</h1>
        <p><Trans i18nKey="message">{t('message')}</Trans></p>
        <select onChange={(e)=>handleChange(e)}>
          <option value="">Select Language</option>
          <option value="tel">Telugu</option>
          <option value="en">English</option>
          <option value="hin">Hindi</option>
          <option value="tam">Tamil</option>
          <option value="kan">Kannada</option>
          {/* {Object.keys(lngs).map((lng)=>(
            <option key={lng} onClick={()=>i18n.changeLanguage(lng)}>{lngs[lng].nativeName}</option>
          ))} */}
        </select>
    </div>
  )
}

export default Traslation