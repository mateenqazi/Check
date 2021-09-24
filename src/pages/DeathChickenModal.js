import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import '../assets/css/style.css'
import chickenlogo from '../assets/images/chicken-death-logo.svg'


export default function DeathChickenModal({ showModal, setShowModal }) {
    const modalRef = useRef();
    const [deathchicken, setDeathChicken] = useState('24');
    const handleDeathChicken = (e) => {
        setDeathChicken(e.target.value)
    }

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
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="new-barn-modal modal-text-center">
                            <img src={chickenlogo} alt="" />
                            <h1>Chicken <br /><span> Death </span>today</h1>
                            <div className="fields-container">
                                <div className="death-figure">
                                    <input type="text"
                                        value={deathchicken}
                                        onChange={handleDeathChicken}
                                        required />
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

