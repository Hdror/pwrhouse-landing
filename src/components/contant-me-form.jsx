import { useState } from "react";

import whiteArrow from '../assets/svg/white-arrow.svg'

export default function ContantMeForm() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [nameError, setNameError] = useState('');

    const validatePhoneNumber = (number) => {
        const israeliPhoneNumberRegex = /^(?:\+972|0)(5\d{1})-?\d{7}$/;
        if (!number) return true
        return israeliPhoneNumberRegex.test(number);
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);

        if (validatePhoneNumber(value)) {
            setPhoneError('');
        } else {
            setPhoneError('Invalid Israeli phone number format.');
        }
    };

    const handleNameChange = (e) => {
        const { value } = e.target;
        setName(value);

        if (value.length >= 20) {
            setNameError('Name cannot exceed 20 characters.');
        } else {
            setNameError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-headline">אני רוצה <span style={{ fontWeight: 400 }}>להרשם</span>!</h2>
            <label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="היי אני... |"
                    maxLength="20"
                    className="form-input"
                />
            </label>
            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}

            <label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="זה המספר שלי... |"
                    className="form-input"
                />
            </label>
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
            <button type="submit" className="form-submit-button">
                יס, איי דו
                <img className="form-btn-icon" src={whiteArrow} alt="חץ לבן" />
            </button>
        </form>
    )
}