import React, {useState, useEffect} from 'react'
import { Checkbox } from 'semantic-ui-react'
import "./PrivacyToggle.css"

const PrivacyToggle = ({privacyMode, changePrivacyMode}) => {

  // useEffect(()=>{
  //   if(privacyMode === true){
  //     console.log('on')
  //   } else {
  //     console.log('off')
  //   }
  // }, [privacyMode])


  return (
    <Checkbox id='privacyToggle' toggle onChange={()=>changePrivacyMode(!privacyMode)} style={{toggleLaneBackground: 'grey !important'}} />
  );
};

export default PrivacyToggle;