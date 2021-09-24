import React from 'react'
import { Link } from 'react-router-dom'
import notification from '../assets/images/notification-bing.svg'
import user_icon from '../assets/images/user.svg'

export default function ProfileHeader() {
    return (
        <>
            <div className="profile-notification">
                <div className="notification">
                    <img src={notification} alt="" />
                </div>
                <div className="profile-icon">
                    <Link to="/login">
                        <img src={user_icon} alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}
