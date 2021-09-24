import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import beakbooklogo from '../assets/images/logo.svg'
import dashboard_icon from '../assets/images/dashboard_icon.svg'
import barn_icon from '../assets/images/barn_icon.svg'
import device_icon from '../assets/images/device_icon.svg'
import alert_icon from '../assets/images/alert_icon.svg'
import setting_icon from '../assets/images/setting_icon.svg'

export default function SideBar() {
    return (
        <>
            {/* Side Panel Bar */}
            <div className="side-bar">
                <div className="logo">
                    <Link to="/">
                        <img src={beakbooklogo} alt="" />
                    </Link>
                </div>
                {/* Navigations */}
                <div className="side-links">
                    <img src={dashboard_icon} alt="" />
                    <Link to="/">Dashboard </Link>
                </div>
                <div className="side-links">
                    <img src={barn_icon} alt="" />
                    <Link to="/barn">Barns </Link>
                </div>
                <div className="side-links">
                    <img src={device_icon} alt="" />
                    <Link to="/devicemanagement">Devices </Link>
                </div>
                <div className="side-links">
                    <img src={alert_icon} alt="" />
                    <Link to="/">Alerts</Link>
                </div>
                <div className="side-links">
                    <img src={setting_icon} alt="" />
                    <Link to="/admin">Settings</Link>
                </div>

                <div className="profile">
                    <div className="profile-image"></div>
                    <div className="profile-name">
                        <h4>Budi Cahyo</h4>
                        <small>Farm Admin</small>
                    </div>
                </div>
                {/* end Navigations  */}

            </div>
            {/* End Side Panel Bar  */}
        </>
    )
}
