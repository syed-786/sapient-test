import React from 'react';
import SideBar from './sideBar';


function Layout(props) {
  
    return (
        <>
            <h1 className='header'>SpaceX Launch Program</h1>
            <div className="container">
            <SideBar/>
            {props.children}
            </div>
            <div className="text-center"><strong>Developed By :</strong> Syed Adeeb Ahmad
            </div>
        </>
    )
}

export default React.memo(Layout);


