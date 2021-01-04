import React from "react"
import Mobile from './../footerComponent/mobile'
import Mobile2 from './../footerComponent/mobile2'
import Desktop from './../footerComponent/desktop'
import useMediaQuery from "@material-ui/core/useMediaQuery"



export default function SimpleMediaQuery() {
  const mobile2 = useMediaQuery('(max-width:320px)');  
  const mobile = useMediaQuery('(max-width:432px)'); 
    


if(mobile2){
  return <Mobile2 />
}
 if(mobile){
   return <Mobile />
 }else{
   return <Desktop />
 } 


}