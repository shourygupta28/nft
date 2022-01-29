import React, { Component } from 'react';
import "./Profile.css"
class Profile extends Component {
    render() {
        return (
            <div className='main'>
                <div className='maintext'>Create Profile
                    <div className='secondtext'>
                        Amet minim mollit non deserunt ullamco est sit a
                    </div>
                </div>
                <div className="upbtn">
                    <div className='uploadimage'> <img className="icon" src="/images/upload logo.png" /></div>
                    <div className="uploaddelete"><button className="btn">UPLOAD</button>
                        <div className='delete'>
                            DELETE
                        </div>
                    </div>
                </div>
                <div className="bottomfield">
                    <div className='name'>
                        NAME
                        <div className="nameinput">Example : Best NFT Ever
                            <div className="nameline"></div></div>
                    </div>
                    <div className='name'>
                        BIO
                        <div className="nameinput">Describe your work
                            <div className="nameline"></div></div>
                    </div>
                    <div className='name'>
                        URL
                        <div className="nameinput">just.fan /@sahil
                            <div className="nameline"></div></div>
                    </div>
                    <div className='name'>
                        SOCIAL MEDIA
                        <div className="nameinput2"><img className="icons" src="/images/twitter.png" />Enter twitter URL
                            <div className="nameline">
                            </div>
                        </div>
                        <div className="nameinput2"><img className="icons" src="/images/facebook.png" />Enter facebook URL
                            <div className="nameline">
                            </div>
                        </div>
                        <div className="nameinput2"><img className="icons" src="/images/instagram.png" />Enter twitter URL
                            <div className="nameline">
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        <button class="btn2">
                            <div className="conwal">
                                CREATE YOUR PROFILE
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile