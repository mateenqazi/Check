import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import ProfileHeader from '../components/ProfileHeader'
import SideBar from '../components/SideBar'
import calendar_icon from '../assets/images/calendar.svg'
import chicken_icon from '../assets/images/chicken-1.svg'
import chicken_logo from '../assets/images/chicken-logo.svg'
import active_scales from '../assets/images/active-scales.svg'
import register_barn from '../assets/images/register-barn.svg'

export default function Dashboard() {
    return (
        <>
            <div className="main-container">
                <div className="hamburger hamburger-disp">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {/* Side Panel Bar */}
                <SideBar />
                {/* End Side Panel Bar  */}

                {/* DashBoard Section  */}
                <div className="user-management">
                    <div className='dashboard-header'>
                        <ProfileHeader />
                        <h1>Hello, Budi Cahyo</h1>
                        <p>Welcome to your dashboard,
                            <span className="text-black"> here is an overview of your favorite  </span>
                            <span className="text-orange">barns.</span>
                            <small className="text-orange link-barns"><Link to="/barn">View All Barns</Link></small>
                        </p>
                    </div>

                    <div className="barn-detail">
                        <div className="card-container">
                            <div className="card-row">
                                <div className="barn barn1-bg-sky ">
                                    <div className="gradient barn1-gradient-sky"></div>
                                    <p>Barn 1 </p>
                                    <h1>3.8 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="barn barn1-bg-green">
                                    <div className="gradient barn1-gradient-green"></div>
                                    <p>Barn 2 </p>
                                    <h1>2.7 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="barn barn1-bg-pink">
                                    <div className="gradient barn1-gradient-pink"></div>
                                    <p>Barn 3 </p>
                                    <h1>1.9 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="barn barn1-bg-purple">
                                    <div className="gradient barn1-gradient-purple"></div>
                                    <p>Barn 4 </p>
                                    <h1>3.8 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="barn barn1-bg-blue">
                                    <div className="gradient barn1-gradient-blue"></div>
                                    <p>Barn 5 </p>
                                    <h1>1.9 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="barn barn1-bg-gray">
                                    <div className="gradient barn1-gradient-gray"></div>
                                    <p>Barn 3 </p>
                                    <h1>2.7 <span>kg</span></h1>
                                    <p>Average weight</p>
                                    <div className="chicken-day">
                                        <div className="day">
                                            <img src={calendar_icon} alt="" />
                                            <p>10 Days old</p>
                                        </div>
                                        <div className="day">
                                            <img src={chicken_icon} alt="" />
                                            <p>200 Australian Chickens</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="status-container">
                            <div className="status">
                                <div className="status-image">
                                    <img src={chicken_logo} alt="" />
                                </div>
                                <h1>30,000</h1>
                                <p>Total Chickens</p>
                            </div>
                            <div className="status">
                                <div className="status-image img-bg">
                                    <img src={active_scales} alt="" />
                                </div>
                                <h1>16</h1>
                                <p>Active Scales</p>
                            </div>
                            <div className="status">
                                <div className="status-image img-bg-color">
                                    <img src={register_barn} alt="" />
                                </div>
                                <h1>5</h1>
                                <p>Registered Barns</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Dashboard Section */}
            </div>
        </>
    )
}
