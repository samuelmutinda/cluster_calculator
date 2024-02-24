import PropTypes from 'prop-types';
Popup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    onConfirmPayment: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export function Popup({ trigger, onConfirmPayment }) {
    return (trigger) ? (
        <>
            <div className="popup">
                <div className="popup_inner">
                    <div className='popuptitle'>M-Pesa Payment Confirmed. CLICK THE BUTTON TO VIEW YOUR CLUSTER POINTS</div>
                    <p className='popupdescription'>
                        Your payment has been approved! Thank you!.
                        Click the button below to view your cluster points.
                    </p>
                    {/* <p className='popupdescription'>Awaiting Payment..</p> */}
                    {/* <div className='loader'></div> */}
                    <p className='popupdescription2'>
                        Report any payment issues to us. Our technical team 
                        will sort them our promptly.
                    </p>
                    {/* <button className="closebtn" onClick={onClose}>Close</button> */}

                    <div className='confirmbtndiv'>
                        <button className='confirmbtn' onClick={onConfirmPayment}>View Points</button>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}