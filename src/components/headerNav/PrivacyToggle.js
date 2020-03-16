import React, {useState, useEffect} from 'react'
import { Checkbox } from 'semantic-ui-react'

const PrivacyToggle = ({privacyMode, changePrivacyMode}) => {

  useEffect(()=>{
    if(privacyMode === true){
      console.log('on')
    } else {
      console.log('off')
    }
  }, [privacyMode])


  return (
    <Checkbox toggle onChange={()=>changePrivacyMode(!privacyMode)}/>
  );
};

export default PrivacyToggle;