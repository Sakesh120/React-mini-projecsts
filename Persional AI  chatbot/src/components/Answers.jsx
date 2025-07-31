import { useEffect, useState } from "react"
import { checkHeading, replaceHeadingStars } from "../Helper"

const Answer=({ans,index,totalResult,type}) => {

    const [heading,setHeading]=useState(false)
    const [answer,setAnswer]=useState(ans)
    
    useEffect(() => {
      if(checkHeading(ans)){
        setHeading(true)
        setAnswer(replaceHeadingStars(ans))
      }
      
    },[])


  return(
  <>
   {
   index==0 && totalResult>1?<span className="pt-1  block font-bold text-xl dark:text-white text-gray-800">{answer}</span>:
   heading?<span className="pt-1  block font-bold text-lg dark:text-white text-gray-900 ">{answer}</span>
   : <span className={type=='q'?'':'pl-5'}>{answer}</span> }
  </>
  )
}

export default Answer
