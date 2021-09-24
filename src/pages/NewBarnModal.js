import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/style.css';

export default function NewBarnModal({ showModal, setShowModal }) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 750
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };


    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
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
            {showModal ? (
                <div className="background" onClick={closeModal} ref={modalRef} >
                    <animated.div style={animation}>
                        <div className="new-barn-modal modal-text-center">
                            <h1>Add a <span> New Barn</span></h1>
                            <div className="fields-container">
                                <div className="box2">
                                    <input type="text" required />
                                    <span>Barn Name</span>
                                </div>
                                <div className="box2 mt-box">
                                    <input type="text" required />
                                    <span>Fam Name</span>
                                </div>
                                <div className="box2 mt-box">
                                    <input type="text" required />
                                    <span>Location</span>
                                </div>
                                <div className="btn-start-cycle">
                                    <button className="btn-start">Add</button>
                                    <button className="btn-cancel" onClick={() => setShowModal(prev => !prev)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
}
