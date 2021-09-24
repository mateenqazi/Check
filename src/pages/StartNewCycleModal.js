import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/style.css';

export default function StartNewCycleModal({ showcycleModal, setShowCycleModal }) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 750
        },
        opacity: showcycleModal ? 1 : 0,
        transform: showcycleModal ? `translateY(0%)` : `translateY(-100%)`
    });


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowCycleModal(false);
        }
    };


    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showcycleModal) {
                setShowCycleModal(false);
                console.log('I pressed');
            }
        },
        [setShowCycleModal, showcycleModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
            {showcycleModal ? (
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="model-wrapper">
                            <h1>Start a <span> New Cycle</span></h1>
                            <p>Please fill-in the cycle information to start</p>
                            <div className="fields-container">

                                <div className="row">
                                    <div className="box2">
                                        <input type="text" required />
                                        <span>Breed</span>
                                    </div>
                                    <div className="box2">
                                        <input type="text" required />
                                        <span>Origin</span>
                                    </div>
                                </div>

                                <div className="row mt-mb">
                                    <div className="col-2 ">
                                        <div className="box2 sel-box-width">
                                            <input type="text" required />
                                            <span>Starting Age(days)</span>
                                        </div>
                                        <div className="box2 sel-box-width">
                                            <select id="gender" name="gender" defaultValue="" required>
                                                <option disabled style={{ display: "none" }}></option>
                                                <option value="Male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Others</option>
                                            </select>
                                            <span>Sex</span>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <input type="text" required />
                                        <span>Number of Chickens</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="box2">
                                        <input type="date" required />
                                        <span>Starting Date</span>
                                    </div>
                                    <div className="box2">
                                        <input type="date" required />
                                        <span>Desired Harvest Date</span>
                                    </div>
                                </div>

                                <div className="row mt-mb">
                                    <div className="box2 box-width-last">
                                        <input type="text" required />
                                        <span>Desired Harvest Weight</span>
                                    </div>
                                </div>

                                <div className="btn-start-cycle">
                                    <button className="btn-start">Start New Cycle</button>
                                    <button className="btn-cancel" onClick={() => setShowCycleModal(prev => !prev)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
}
