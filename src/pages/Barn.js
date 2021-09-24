import React, { useState } from "react";
import NewBarnModal from "./NewBarnModal";
import SideBar from "../components/SideBar";
import AddBarnButton from "../components/AddBarnButton";
import '../assets/css/style.css'
import barn_icon from '../assets/images/barn_icon.svg'
import search_icon from '../assets/images/Search.svg'
import star_icon from '../assets/images/star.svg'
import more_icon from '../assets/images/more.svg'
import BarnTable from '../components/BarnTable'


// data used for Table

const getData = () => [
    {
        barnname: "Barns 01",
        weight: "3.13kg   (+0.234)",
        farm: "Japfa Kata Depak",
        death: "12/20,124 (0.01%)",
        performance: "above baseline",
        imgUrl: barn_icon,
    },
    {
        barnname: "Barns 02",
        weight: "2.13kg   (+0.234)",
        farm: "Budi Cahyo",
        death: "12/20,122 (0.01%)",
        performance: "below baseline",
        imgUrl: barn_icon,
    },
    {
        barnname: "Barns 03",
        weight: "1.13kg   (+0.234)",
        farm: "Japfa Kata Depak",
        death: "12/20,120 (0.01%)",
        performance: "below baseline",
        imgUrl: barn_icon,
    },
    {
        barnname: "Barns 04",
        weight: "5.13kg   (+0.234)",
        farm: "Japfa banyuwangi",
        death: "12/20,121 (0.01%)",
        performance: "above baseline",
        imgUrl: barn_icon,
    },
    {
        barnname: "Barns 05",
        weight: "1.13kg   (+0.234)",
        farm: "Japfa Malang",
        death: "12/20,120 (0.01%)",
        performance: "above baseline",
        imgUrl: barn_icon,
    },
];


export default function Barn() {
    const columns = React.useMemo(
        () => [
            {
                Header: " Barn Name",
                accessor: "barnname",
            },
            {
                Header: "Weight",
                accessor: "weight",
            },
            {
                Header: "Farm",
                accessor: "farm",
            },
            {
                Header: "Death",
                accessor: "death",
            },
            {
                Header: "Performance",
                accessor: "performance",
            },
        ],
        []
    );
    const data = React.useMemo(() => getData(), []);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>
            <NewBarnModal showModal={showModal} setShowModal={setShowModal} />
            <div className="main-container">
                <AddBarnButton openModal={openModal} />
                {/* Side Panel Bar */}
                <SideBar />
                {/* End Side Panel Bar  */}

                {/* User Management Section */}
                <div className="user-management">
                    <h1>Hello, Budi Cahyo</h1>
                    <p className="heading-text">Here you can view all of your Barns</p>

                    <BarnTable columns={columns} data={data} />

                </div>

                {/* End Management Section  */}
            </div>
        </>
    )
}
