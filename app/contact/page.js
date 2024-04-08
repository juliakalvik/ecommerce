"use client"

import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            alert("Thank you for your message, you'll hear from us soon");
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    function validateForm() {
        let isValid = true;

        if (name.length < 3) {
            setNameError('Name must be at least 3 characters');
            isValid = false;
        }

        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        }

        if (message.length < 10) {
            setMessageError('Message must be at least 10 characters');
            isValid = false;
        }

        return isValid;
    }

    function handleBlur(event, validationFunction, setErrorMessage) {
        const value = event.target.value;
        const isValid = validationFunction(value);
        setErrorMessage(isValid ? '' : 'Invalid input');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function myPopupFunction() {
        
    }

    return (
        <>
            <h1>contact us</h1>
            <div className="antialiased bg-gray-100 justify-center">
                <div className="flex flex-col md:flex-col  min-h-screen justify-center items-center">
                    <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-3xl p-8 rounded-xl shadow-lg text-white overflow-hidden">
                        <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0 justify-between items-center">
                            <div className="flex flex-col space-y-8 justify-between p-4">
                                <div>
                                    <h1 className="font-bold text-4xl tracking-wide">SAY HI</h1>
                                    <p className="pt-4 pb-4 text-cyan-100 text-sm">
                                        lorem ipsum tralala lorem ipsum tralala, <br /> lorem lorem ipsum tralala lorem ipsum tralala, lorem
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-6 pt-4">
                                    <div className="inline-flex space-x-2 items-center">
                                        <i className="fa-solid fa-phone text-teal-300"></i>
                                        <span>+47 998 89 98</span>
                                    </div>
                                    <div className="inline-flex space-x-2 items-center">
                                        <i className="fa-solid fa-envelope  text-teal-300"></i>
                                        <span>contact@julezshoez.com</span>
                                    </div>
                                    <div className="inline-flex space-x-2 items-center">
                                        <i className="fa-solid fa-location-dot text-teal-300"></i>
                                        <span>Noroff Road 45B</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute hidden md:block z-0 w-40 h-40 bg-teal-400 rounded-full right-60 -bottom-70"></div>
                                </div>

                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
                                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:w-full lg:w-64">
                                    <div>
                                        <label htmlFor="name" className="text-sm">Your name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onBlur={(e) => handleBlur(e, (value) => value.length >= 3, setNameError)}
                                            placeholder="Your name"
                                            className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ${nameError ? 'border-red-500' : ''}`}
                                        />
                                        {nameError && <div className="text-red-500">{nameError}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm">Your E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={(e) => handleBlur(e, isValidEmail, setEmailError)}
                                            placeholder="Your E-mail"
                                            className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ${emailError ? 'border-red-500' : ''}`}
                                        />
                                        {emailError && <div className="text-red-500">{emailError}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="text-sm">Your message</label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onBlur={(e) => handleBlur(e, (value) => value.length >= 10, setMessageError)}
                                            placeholder="Your message"
                                            rows="4"
                                            className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ${messageError ? 'border-red-500' : ''}`}
                                        />
                                        {messageError && <div className="text-red-500">{messageError}</div>}
                                    </div>
                                    <button type="submit" onClick={myPopupFunction} className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send message</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
