
import React from 'react'
import '../assets/css/style.css';

export default function NewScaleModal({ showModal, setShowModal }) {
    return (
        <>
            {showModal ? (
                <div className="background">
                    <div className="new-barn-modal modal-text-center">
                        <h1>Add a<span> New Scale</span></h1>
                        <p>Please select a scale to add <br /> this Barn</p>
                        <div className="fields-container">
                            <div className="select-input">
                                <select id="country" name="country" required >
                                    <option disabled selected value="" style={{ display: "none" }} >#BK101</option>
                                    <option value="#BK102">#BK102</option>
                                    <option value="#BK103">#BK103</option>
                                    <option value="#BK104">#BK104</option>
                                </select>
                            </div>
                            <p>only sales that are not <br /> assoicate with other barn can  <br /> be added</p>
                            <div className="btn-start-cycle">
                                <button className="btn-start">Add</button>
                                <button className="btn-cancel" onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            ) : null
            }
        </>
    )
}
