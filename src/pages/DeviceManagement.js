import React, { useState } from "react";
import RegisterDeviceModal from "./RegisterDeviceModal";
import SideBar from "../components/SideBar";
import AddBarnButton from "../components/AddBarnButton";
import ProfileHeader from "../components/ProfileHeader";
import '../assets/css/style.css'
import search_icon from '../assets/images/Search.svg'
import more_icon from '../assets/images/more.svg'
import device_icon from '../assets/images/device_icon.svg'

export default function DeviceManagement() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>
            <RegisterDeviceModal showModal={showModal} setShowModal={setShowModal} />
            <div className="main-container">
                <div className="hamburger hamburger-disp">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <AddBarnButton openModal={openModal} />
                {/* Side Panel Bar */}
                <SideBar />
                {/* End Side Panel Bar  */}

                {/* User Management Section  */}
                <div className="user-management">
                    <ProfileHeader />

                    <h1>Hello, Budi Cahyo</h1>
                    <p className="heading-text">Here you can view all of your devices </p>
                    <div className="barn-header">
                        <h3>Device Overview</h3>
                        <div className="search-box">
                            <img src={search_icon} alt="" />
                            <input type="text" placeholder="Search Barns" required />
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Serial Number</th>
                                <th>Device name</th>
                                <th >Status</th>
                                <th>Location</th>
                                <th>Tags</th>
                                <th>Uptime</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK001
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot connected"></div>
                                    Connected
                                </td>
                                <td>Unassociated </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min </td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK002
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot disconnected"></div>
                                    Disconnected
                                </td>
                                <td>Farm 01 | Barn 02 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK003
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot connected"></div>
                                    Connected
                                </td>
                                <td>Farm 02 | Barn 08 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK004
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot connected"></div>
                                    Connected
                                </td>
                                <td>Farm 02 | Barn 08 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK005
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot disconnected"></div>
                                    Connected
                                </td>
                                <td>Farm 02 | Barn 08 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK006
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot disconnected"></div>
                                    Connected
                                </td>
                                <td>Farm 02 | Barn 08 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className="first-item">
                                    <input type="checkbox" />
                                    <img src={device_icon} alt="" />
                                    #BK007
                                </td>
                                <td>Beakbook 001 </td>
                                <td className="performance-item">
                                    <div className="dot connected"></div>
                                    online
                                </td>
                                <td>Farm 02 | Barn 08 </td>
                                <td>#Best #Male # Topquality</td>
                                <td className="table-icon">22h 12m 32 min</td>
                                <td className="action-icon">
                                    <img src={more_icon} alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* End Management Section  */}
            </div>
        </>
    )
}
