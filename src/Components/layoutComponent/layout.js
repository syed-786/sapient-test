import React from 'react';
import SideBar from '../sideBarComponent/sideBar';
import './layout.css'
function Layout(props) {
  
    return (
        <>
            <h1 className='header'>SpaceX Launch Program</h1>
                <div className="container">
                <SideBar/>  {/* SideBar component redered as a child of Layout component */}
                {props.children} {/* Data from main & search component reneder here*/}
                </div>
                <div className="text-center"><strong>Developed By :</strong> Syed Adeeb Ahmad
            </div>
        </>
    )
}

export default React.memo(Layout);   // React.memo() from component optimization. It will prevent unnecessory rerendring of Component. 


