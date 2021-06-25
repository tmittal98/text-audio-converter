import React, { useState, useRef, useEffect } from 'react';
import M from 'materialize-css';

function TestComponent() {

    const dropDown = useRef(null);
    const [text, setText] = useState("");
    const [lang, setLang] = useState("");

    useEffect(() => {
        M.Dropdown.init(dropDown.current);
    }, []);

    const postDetails = () => {

        fetch("/text", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                lang
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    //
                }
            }).catch(err => {
                console.log(err)
            });
    }

    return (
        <div className="link-main-container">

            <div className="card">

                <div className="card-heading">
                    <p>Paste your text here</p>
                </div>

                <div className="link-input">
                    <textarea
                        type="text"
                        placeholder="paste your text here"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    {/* <!-- Dropdown Trigger --> */}
                    <button
                        className='dropdown-trigger btn'
                        data-target='dropdown1'
                        ref={dropDown}
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                    >
                        Drop Me!

                    </button>

                    {/* <!-- Dropdown Structure --> */}
                    <ul id='dropdown1' className='dropdown-content'>
                        <li className="list-item" >Bengali</li>
                        <li className="list-item" >Arabic</li>
                        <li className="list-item" >Czech</li>
                        <li className="list-item" >Danish</li>
                        <li className="list-item" >Dutch</li>
                        <li className="list-item" >English</li>
                        <li className="list-item" >English</li>
                        <li className="list-item" >Finnish</li>
                        <li className="list-item" >French</li>
                        <li className="list-item" >German</li>
                        <li className="list-item" >Greek</li>
                        <li className="list-item" >Gujarati</li>
                        <li className="list-item" >Hindi</li>
                        <li className="list-item" >Hungarian</li>
                        <li className="list-item" >Indonesian</li>
                        <li className="list-item" >Italian </li>
                        <li className="list-item" >Japanese</li>
                        <li className="list-item" >Kannada</li>
                        <li className="list-item" >Korean</li>
                        <li className="list-item" >Malayalam </li>
                        <li className="list-item" >Polish</li>
                        <li className="list-item" >Portuguese </li>
                        <li className="list-item" >Romanian</li>
                        <li className="list-item" >Russian</li>
                        <li className="list-item" >Slovak</li>
                        <li className="list-item" >Spanish</li>
                        <li className="list-item" >Spanish</li>
                        <li className="list-item" >Swedish</li>
                        <li className="list-item" >Tamil</li>
                        <li className="list-item" >Turkish</li>
                        <li className="list-item" >Ukrainian</li>
                        <li className="list-item" >Vietnamese</li>
                        <li className="list-item" >Telugu</li>
                    </ul>
                </div>

                <div className="submit-button">
                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => postDetails()}
                    >
                        Click here to convert
                    </button>
                </div>

            </div>

        </div>
    );
}

export default TestComponent;
