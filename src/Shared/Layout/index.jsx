import Navbar from "../../Elements/NavbarEl"
import CallToAction from "../CallToAction"
import AppFooter from "../Footer"



const LayoutEl=(data)=>{
    const display=(
        <>
          <Navbar/>
          {/* ================= */}
          {
            data.children
          }
          {/* ================= */}
          <CallToAction/>
          <AppFooter/>
        </>
    )
    return display
}
export default LayoutEl