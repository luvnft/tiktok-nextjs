import { footerList1, footerList2, footerList3 } from "@/utils/constants"
import FooterList from "./FooterList"

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <FooterList data={footerList1} mt={false}/>
      <FooterList data={footerList2} mt={true}/>
      <FooterList data={footerList3} mt={true}/>
      <p className="text-gray-400 text-sm mt-5">2024 TikTik</p>
    </div>
  )
}

export default Footer