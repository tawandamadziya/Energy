import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './huis'; // Replace './Home' with the correct path to the Home component file
import 'C:/Users/Tawanda Madziya/Desktop/front-ended/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './lg.png';
import EnergyChart from './data';
import EnergyChart2 from './data2';

const Home = () => {
  return (
    <div>
      <div> <nav
          className="navbar navbar-expand bg-body-tertiary bg-dark border-bottom border-bottom-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">GRIP Energiemonitor</span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link disabled">GRIP Energiemonitor</a>
                </li>
              </ul>
            </div>
          </div>
        </nav></div>
      <div>
      {/* <Link to="/"><h1>Grip energiemeter</h1></Link> */}
      </div>
      {/* <div>
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
          <div class="row align-items-center">
            <div class="col-auto">
              <a href="#" class="user-avatar rounded bordered">
                <img
                  class="p-1 rounded"
                  alt="Image placeholder"
                  src="./assets/img/team/profile-picture-1.jpg"
                />
              </a>
            </div>
            <div class="col-auto px-0">
              <h4 class="fs-6 mb-0">Chris Wood</h4>
              <span class="small text-muted">Graphic Designer</span>
            </div>
            <div class="col text-end">
              <span class="fs-6 fw-bolder">$1,834</span>
            </div>
          </div>
        </li>
      </div> */}
      <div className='ABC'><h1>Current Energy Spend</h1> <EnergyChart2/></div>
      <div className='ABC'> <EnergyChart/></div>
      <div className='ABC'> <EnergyChart/></div>
    </div>
  );
};

export default Home;

// import {
//   makeStyles,
//   tokens,
//   MenuList,
//   MenuItem,
//   Menu,
//   MenuPopover,
//   MenuTrigger,
// } from "@fluentui/react-components";
// // import * as React from "react";

// // const useMenuListContainerStyles = makeStyles({
// //   container: {
// //     backgroundColor: tokens.colorNeutralBackground1,
// //     minWidth: "128px",
// //     minHeight: "48px",
// //     maxWidth: "300px",
// //     width: "max-content",
// //     boxShadow: `${tokens.shadow16}`,
// //     paddingTop: "4px",
// //     paddingBottom: "4px",
// //   },
// // });

// // export default Home = () => {
// //   const styles = useMenuListContainerStyles();
// //   return (
// //     <div className={styles.container}>
// //       <MenuList>
// //         <MenuItem>Cut</MenuItem>
// //         <MenuItem>Paste</MenuItem>
// //         <MenuItem>Edit</MenuItem>
// //         <Menu>
// //           <MenuTrigger disableButtonEnhancement>
// //             <MenuItem>Preferences</MenuItem>
// //           </MenuTrigger>
// //           <MenuPopover>
// //             <MenuList>
// //               <MenuItem>Cut</MenuItem>
// //               <MenuItem>Paste</MenuItem>
// //               <MenuItem>Edit</MenuItem>
// //             </MenuList>
// //           </MenuPopover>
// //         </Menu>
// //       </MenuList>
// //     </div>
// //   );
// // };


// // const Home = () => {
// //   // Component implementation
// // };

// // Other code...

// const SomeComponent = () => {
//   return <Home />; // Reference to Home compone//  className={styles.container}nt
//   <div >     
//       <MenuList>
//         <MenuItem>Cut</MenuItem>
//         <MenuItem>Paste</MenuItem>
//         <MenuItem>Edit</MenuItem>
//         <Menu>
//           <MenuTrigger disableButtonEnhancement>
//             <MenuItem>Preferences</MenuItem>
//           </MenuTrigger>
//           <MenuPopover>
//             <MenuList>
//               <MenuItem>Cut</MenuItem>
//               <MenuItem>Paste</MenuItem>
//               <MenuItem>Edit</MenuItem>
//             </MenuList>
//           </MenuPopover>
//         </Menu>
//       </MenuList>
//     </div>
// };
// export default Home;
