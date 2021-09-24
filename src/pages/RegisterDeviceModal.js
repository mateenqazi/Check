import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import remove_tag from '../assets/images/close-tag.svg'
import '../assets/css/style.css';

export default function RegisterDeviceModal({ showModal, setShowModal }) {
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
                <div className="background" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="model-wrapper modal-text-center">
                            <h1>Register a <span> New Device</span></h1>
                            <p>The Scale should be connected with internet during registeration</p>
                            <div className="fields-container pt">
                                <p>The <b>serial number</b> should be located on a sticker placed on the bottom of the scale</p>

                                <div className="box2 box-width-last-rg">
                                    <input type="text" required />
                                    <span>Serial Number</span>
                                </div>

                                <div className="fields-container pt-sm">
                                    <p>Add <b>tags</b> to identify the device more easily</p>
                                    <div className="box2 box-width-last m-auto">
                                        <input type="text" required />
                                        <span>Tags (optional)</span>
                                    </div>
                                </div>
                                <div className="tags">
                                    <div className="tag-item bg-light-gray">
                                        <span>#prototype</span>
                                        <div className="remove-tag">
                                            <img src={remove_tag} alt='' />
                                        </div>

                                    </div>
                                    <div className="tag-item bg-light-gray">
                                        <span>#male_tag</span>
                                        <div className="remove-tag">
                                            <img src={remove_tag} alt='' />
                                        </div>
                                    </div>
                                    <div className="tag-item bg-light-gray">
                                        <span>#male</span>
                                        <div className="remove-tag">
                                            <img src={remove_tag} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-start-cycle">
                                    <button className="btn-start">Register Device</button>
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
