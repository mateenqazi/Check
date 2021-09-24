import React, { useState } from "react"
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import StartNewCycleModal from "./StartNewCycleModal";
import DeathChickenModal from "./DeathChickenModal";
import AdminChart from "../components/AdminChart";
import SideBar from "../components/SideBar";
import ProgressBar from "../components/ProgressBar";
import home_icon from '../assets/images/home.svg'
import arrow_left from '../assets/images/arrow-left.svg'
import notification from '../assets/images/notification-bing.svg'
import user_icon from '../assets/images/user.svg'
import current_weight from '../assets/images/current-weight.svg'
import average_growth from '../assets/images/average-growth.svg'
import death_ratio from '../assets/images/chicken-icon.svg'
import predicted_weight from '../assets/images/predicted-weight.svg'
import edit_icon from '../assets/images/Edit-Icon.svg'
import horizontal_slider from '../assets/images/slider-horizontal.svg'
import close_icon from '../assets/images/close-icon.svg'
import '../assets/css/style.css'


export default function Admin() {
    const [showModal, setShowModal] = useState(false);
    const [showcycleModal, setShowCycleModal] = useState(false);

    const [barnname, setBarnName] = useState('Barn 01');
    const [farmname, setFarmName] = useState('Japfa Kota Depok Farm');
    const [location, setLocation] = useState('Jakarta, Indonesia');


    const [breed, setBreed] = useState('Indian River Broiler');
    const [origin, setOrigin] = useState('Indonesia');
    const [startage, setStartAge] = useState('3');
    const [sex, setSex] = useState('Male');
    const [chicken, setChicken] = useState('20,000');
    // const [startdate, setStartDate] = useState('21st August 2021');
    // const [harvestdate, setHarvestDate] = useState('21st September 2021');
    const [harvestdate, setHarvestDate] = useState(new Date());
    const [harvestweight, setHarvestWeight] = useState('3.2 kg');



    const HandleBarnOverview = (e) => {
        setBarnName(e.target.value)
        setFarmName(e.target.value)
        setLocation(e.target.value)
    }
    const HandleCycleDetails = (e) => {
        setBreed(e.target.value)
        setOrigin(e.target.value)
        setStartAge(e.target.value)
        setSex(e.target.value)
        setChicken(e.target.value)
        // setStartDate(e.target.value)
        // setHarvestDate(e.target.value)
        setHarvestWeight(e.target.value)
    }

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    const opencycleModal = () => {
        setShowCycleModal(prev => !prev);
    };
    return (
        <>
            <StartNewCycleModal showcycleModal={showcycleModal} setShowCycleModal={setShowCycleModal} />
            <DeathChickenModal showModal={showModal} setShowModal={setShowModal} />
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
                    <div className="admin-header">
                        <div className="home-detail">
                            <div className="profile-icon bg-orange">
                                <Link to='/'>
                                    <img src={home_icon} alt='' />
                                </Link>
                            </div>
                            <div className="barn-btn">
                                <img src={arrow_left} alt='' />
                                <Link to='/'>
                                    Barn 01 Detail
                                </Link>
                            </div>
                        </div>
                        <div className="button-icon">
                            <div className="barn-btn border" onClick={openModal}>
                                Add death chicken
                            </div>
                            <div className="barn-btn bg-orange text-white " onClick={opencycleModal}>
                                Add a new cycle
                            </div>
                            <div className="notification">
                                <Link to='/'>
                                    <img src={notification} alt="" />
                                </Link>
                            </div>
                            <div className="profile-icon">
                                <Link to='/login'>
                                    <img src={user_icon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="barn-container">
                        {/* Barn Analysis  */}
                        <div className="barn-analysis bg-white">
                            <h3>Barn Analysis</h3>
                            <div className="barn-meta">
                                <div className="barn-current-weight border">
                                    <div className="barn-analysis-svg">
                                        <img src={current_weight} alt='' />
                                    </div>
                                    <div className="barn-data">
                                        <h3>2.53 &nbsp;<small>kg</small></h3>
                                        <p>Current weight </p>
                                    </div>
                                </div>

                                <div className="barn-current-weight border">
                                    <div className="barn-analysis-svg bg-light-orange">
                                        <img src={average_growth} alt='' />
                                    </div>
                                    <div className="barn-data">
                                        <h3>260 &nbsp;&nbsp; <small>gr / day</small></h3>
                                        <p>Average Growth </p>
                                    </div>
                                </div>

                                <div className="barn-current-weight border">
                                    <div className="barn-analysis-svg bg-light-gray">
                                        <img src={death_ratio} alt='' />
                                    </div>
                                    <div className="barn-data">
                                        <h3>1.1%</h3>
                                        <p>Death Ratio </p>
                                    </div>
                                </div>

                                <div className="barn-current-weight border">
                                    <div className="barn-analysis-svg bg-light-gray">
                                        <img src={predicted_weight} alt='' />
                                    </div>
                                    <div className="barn-data">
                                        <h3>3.5 &nbsp;<small>kg / 60 days</small></h3>
                                        <p>Predicted weight  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Barn Analysis  */}

                        {/* Weight Statistics  */}
                        <div className="weight-statistics bg-white">
                            <div className="drop-btn">
                                <h3>Weight Statistics</h3>
                                <div className="daily-weight border">
                                    <select name="" id="">
                                        <option value="daily weight">daily weight</option>
                                    </select>
                                </div>
                            </div>
                            <div className='chart'>
                                <AdminChart />
                            </div>
                        </div>
                        {/* End Weight Statistics  */}

                        {/* Target Weight  */}
                        <div className="target-weight ">

                            <div className="target-weight-range bg-white">
                                <h3>Target Weight</h3>
                                <div className="input-range">
                                    <ProgressBar value={50} />
                                </div>
                            </div>
                            {/* End target Weight  */}

                            {/* Barn Overview  */}
                            <div className="barn-overview bg-white">
                                <div className="drop-btn">
                                    <h3>Barn Overview</h3>
                                    <div className="btn-edit bg-light-orange" onClick={HandleBarnOverview}>
                                        <img src={edit_icon} alt='' />
                                    </div>
                                </div>
                                <div className="barn-overview-fields">
                                    <div className="box2">
                                        <input type="text"
                                            value={barnname}
                                            required />
                                        <span>Barn Name</span>
                                    </div>
                                    <div className="box2">
                                        <input type="text"
                                            value={farmname}
                                            required />
                                        <span>Farm Name</span>
                                    </div>
                                    <div className="box2">
                                        <input type="text"
                                            value={location} required />
                                        <span>Location</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="cycle-scale">
                        {/* Cycle Detail  */}
                        <div className="cycle-detail">
                            <div className="drop-btn">
                                <h2>Cycle Details</h2>
                                <div className="btn-edit bg-light-orange" onClick={HandleCycleDetails}>
                                    <img src={edit_icon} alt='' />
                                </div>
                            </div>
                            <div className="row mt-box">
                                <div className="box2">
                                    <input type="text"
                                        value={breed}
                                        required />
                                    <span>Breed</span>
                                </div>
                                <div className="box2">
                                    <input type="text"
                                        value={origin}
                                        required />
                                    <span>Origin</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 ">
                                    <div className="box2 cycle-detail-form">
                                        <input type="text"
                                            value={startage}
                                            required />
                                        <span>Starting Age(days)</span>
                                    </div>
                                    <div className="box2 cycle-detail-form ">
                                        <select id="gender" name="gender" value={sex} required>
                                            <option disabled style={{ display: "none" }}></option>
                                            <option value="Male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Others</option>
                                        </select>
                                        <span>Sex</span>
                                    </div>
                                </div>
                                <div className="box2">
                                    <input type="text"
                                        value={chicken}
                                        required />
                                    <span>Number of Chickens</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="box2">
                                    <DatePicker selected={harvestdate} onChange={date => setHarvestDate(date)} />
                                    <span>Starting Date</span>
                                </div>
                                <div className="box2">
                                    <DatePicker selected={harvestdate} onChange={date => setHarvestDate(date)} />
                                    <span>Desired Harvest Date</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="box2 custom-width">
                                    <input type="text"
                                        value={harvestweight}
                                        required />
                                    <span>Desired Harvest Weight</span>
                                </div>
                            </div>
                        </div>
                        {/* End Cycle Details  */}



                        {/* Scale Overview  */}
                        <div className="scale-overview ">
                            <div className="drop-btn bg-white">
                                <h3>Scale Overview</h3>
                                <div className="number text-white bg-orange">
                                    03
                                </div>
                            </div>
                            <div className="scale-item-container bg-white">
                                <div className="scale-item">
                                    <div className="scale-item-svg">
                                        <img src={horizontal_slider} alt='' />
                                    </div>
                                    <div className="scale-item-content">
                                        <h5>#BK001</h5>
                                        <small>view details</small>
                                    </div>
                                    <div className="close">
                                        <img src={close_icon} alt='' />
                                    </div>
                                </div>
                                <div className="scale-item">
                                    <div className="scale-item-svg bg-dark-green">
                                        <img src={horizontal_slider} alt='' />
                                    </div>
                                    <div className="scale-item-content">
                                        <h5>#BK002</h5>
                                        <small>view details</small>
                                    </div>
                                    <div className="close">
                                        <img src={close_icon} alt='' />
                                    </div>
                                </div>
                                <div className="scale-item">
                                    <div className="scale-item-svg bg-sky">
                                        <img src={horizontal_slider} alt='' />
                                    </div>
                                    <div className="scale-item-content">
                                        <h5>#BK003</h5>
                                        <small>view details</small>
                                    </div>
                                    <div className="close">
                                        <img src={close_icon} alt='' />
                                    </div>
                                </div>
                                <div className="new-scale-item">
                                    <button> Add a new scale</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* End Dashboard Section  */}
            </div>
        </>
    )
}
