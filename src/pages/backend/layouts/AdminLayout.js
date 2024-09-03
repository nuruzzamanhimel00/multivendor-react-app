import React from 'react'
//react router
import { Outlet} from "react-router-dom";

//components
import TopBar from '../../../components/backend/layout/TopBar.js'
import SideBar from '../../../components/backend/layout/SideBar.js'
import FooterBar from '../../../components/backend/layout/FooterBar.js'

const AdminLayout = () =>{
    return (
    <>
      <div className={`layout-wrapper layout-static `}>
        {/* progess bar  */}
        {/* <ProgressBar /> */}
        {/* topbar  */}
        <TopBar />
        {/* topbar end */}
        <div className="layout-sidebar">
          <SideBar />
        </div>
        <div className="layout-main-container">
          <div className="layout-main">
            <Outlet />
          </div>
          <FooterBar />
        </div>

        {/* spinner  */}
        {/* <BounceLoader
          color={`#FFF`}
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </div>
    </>
    )
}

export default AdminLayout;