import PropTypes from 'prop-types';
Popup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    onConfirmPayment: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export function Popup({ trigger, onConfirmPayment, onClose }) {
    return (trigger) ? (
        <>
            <div className="popup">
                <div className="popup_inner">
                    <div className='popuptitle'>Confirm M-Pesa Payment</div>
                    <p className='popupdescription'>
                        You will receive an M-Pesa popup on your phone. Enter your M-Pesa pin to approve the transaction.
                        When you have received the M-Pesa 
                        transaction message, click Confirm Payment below
                    </p>
                    <p className='popupdescription2'>
                        Report any payment issues to us. Our technical team 
                        will sort them our promptly.
                    </p>
                    <button className="closebtn" onClick={onClose}>Close</button>

                    <div className='confirmbtndiv'>
                        <button className='confirmbtn' onClick={onConfirmPayment}>Confirm Payment</button>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}