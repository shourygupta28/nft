import React, { Component } from 'react';
import "./Single.css"
class Single extends Component {
    render() {
        return (
            <div >
                <div className='maintext'>Create Single Collectible
                    <div className='secondtext'>Amet minim mollit non deserunt ullamco est sit a
                    </div>
                </div>
                <div className="fullpage">
                    <div className='leftside'>
                        <div className='upload'>
                            {/* <!-- actual upload which is hidden --> */}
                            {/* <input name="file" id="file" type="file" class="inputfile"
                        data-multiple-caption="{count} files selected" multiple /> */}
                            {/* <!-- our custom upload button --> */}
                            <label for="file" title="No File Choosen" className='uploadcontent'>
                                <img className="uploadicon" src="/images/icon upload.png" />
                                <div className="textbtn">
                                    <p className="text">48Mb upload limit, supported file types MP4, GIF, JPG </p>
                                    <button className="btn">Choose File</button>
                                </div>
                            </label>
                        </div>
                        <div className="bottomfield">
                            <div className='name'>
                                NAME
                                <div className="nameinput">Example : Best NFT Ever
                                    <div className="nameline"></div></div>
                            </div>
                            <div className='name'>
                                DESCRIPTION
                                <div className="nameinput">Describe your work
                                    <div className="nameline"></div></div>
                            </div>
                            <div className='name'>
                                ROYALTIES
                                <div className="nameinput">Get a % everytime it’s sold <img className="slider" src="/images/slider.png" />
                                    <div className="nameline"></div></div>
                                <div className="price">
                                    <div className="pricebtn">
                                        <div className="pricebtntext">
                                            5%
                                        </div>
                                    </div>
                                    <div className="pricebtn">
                                        <div className="pricebtntext">
                                            10%
                                        </div>
                                    </div>
                                    <div className="pricebtn">
                                        <div className="pricebtntext">
                                            15%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='name2'>
                                INSTANT SALE PRICE
                                <div className="nameinput">Sell at this price <img className="slider2" src="/images/slider.png" />
                                    <div className="nameline"></div></div>
                            </div>
                            <div className="name">
                                <button class="btn2">
                                    <div className="conwal"><img className="wallet" src="/images/wallet.png" />
                                        CONNECT YOUR WALLET
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="middle" />

                    <div className="rightside">
                        PREVIEW
                        <div className='previewbox'></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Single