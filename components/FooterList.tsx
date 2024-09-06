import React from 'react'

interface IProps{
  data:string[]
  mt:boolean
}

const FooterList = ({data,mt}:IProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${mt ?'mt-5':''}`}>
    {
      data?.map((item:string) => (
        <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">{item}</p>
      ))
    }
  </div>
  )
}

export default FooterList