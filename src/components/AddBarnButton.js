import React from 'react'


export default function AddBarnButton({ openModal }) {

    return (
        <>
            <div className="btn-add">
                <button onClick={openModal}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 19H28.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 28.5V9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}
