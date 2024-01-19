
import {  useState, useEffect} from 'react';

function Rights() {
    
    // // For Images Slide
    // let [postImgsCounting, setPostImgsCounting] = useState(5);
    // let postImages = document.querySelectorAll('.carousel .post img');

    // useEffect(() => {
    //     postImages.forEach((p) => {
    //         p.classList.remove('active')
        
    //         if(p.id == postImgsCounting) {
    //             p.classList.add('active')
    //         }
    //     });
    // }, [postImgsCounting]);

    // function nextPost() { setPostImgsCounting((prevCount) => (prevCount < postImages.length ? prevCount + 1 : prevCount)); };
    // function prevPost() { setPostImgsCounting((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); };

    return (
        <div className="gallery rightsGallery">
            <div className='container'>
                <div className="bar">
                    <div className='barContent'>
                        <img src={require('../../Images/logo1.png')} />
                        <h2>بعض من اعمالنا</h2>
                        <div className="ourWork">
                            <a href='Design'>التصميم</a>
                            <a href='Marketing'>التسويق</a>
                            <a href='#'>تحصيل الحقوق</a>
                            <a href='Web'>بناء المواقع</a>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='title'>
                        <h2>تحصيل الحقوق من التأمين الوطني</h2>
                    </div>

                    {/* <div className='carousel'>
                        <i class="fa-solid fa-arrow-right" onClick={nextPost}></i>

                        <div className='post'>
                            <img src={require('../../Images/rights-gallery/1.jpeg')} id='1' className='active' />
                            <img src={require('../../Images/rights-gallery/2.jpeg')} id='2' />
                            <img src={require('../../Images/rights-gallery/3.jpeg')} id='3' />
                            <img src={require('../../Images/rights-gallery/4.jpeg')} id='4' />
                            <img src={require('../../Images/rights-gallery/5.jpeg')} id='5' />
                            <img src={require('../../Images/rights-gallery/6.jpeg')} id='6' />
                            <img src={require('../../Images/rights-gallery/7.jpeg')} id='7' />
                            <img src={require('../../Images/rights-gallery/8.jpeg')} id='8' />
                            <img src={require('../../Images/rights-gallery/9.jpeg')} id='9' />
                            <img src={require('../../Images/rights-gallery/10.jpeg')} id='10' />
                            <img src={require('../../Images/rights-gallery/11.jpeg')} id='11' />
                            <img src={require('../../Images/rights-gallery/12.jpeg')} id='12' />
                            <img src={require('../../Images/rights-gallery/13.jpeg')} id='13' />
                            <img src={require('../../Images/rights-gallery/14.jpeg')} id='14' />
                        </div>

                        <i class="fa-solid fa-arrow-left" onClick={prevPost}></i>
                    </div> */}

                    <div className='examples'>
                        <img src={require('../../Images/rights-gallery/1.jpeg')} />
                        <img src={require('../../Images/rights-gallery/2.jpeg')} />
                        <img src={require('../../Images/rights-gallery/3.jpeg')} />
                        <img src={require('../../Images/rights-gallery/4.jpeg')} />
                        <img src={require('../../Images/rights-gallery/5.jpeg')} />
                        <img src={require('../../Images/rights-gallery/6.jpeg')} />
                        <img src={require('../../Images/rights-gallery/7.jpeg')} />
                        <img src={require('../../Images/rights-gallery/8.jpeg')} />
                        <img src={require('../../Images/rights-gallery/9.jpeg')} />
                        <img src={require('../../Images/rights-gallery/10.jpeg')} />
                        <img src={require('../../Images/rights-gallery/11.jpeg')} />
                        <img src={require('../../Images/rights-gallery/12.jpeg')} />
                        <img src={require('../../Images/rights-gallery/13.jpeg')} />
                        <img src={require('../../Images/rights-gallery/14.jpeg')} />
                    </div>

                    <div className='more'>
                        <h2>بعض انجازاتنا من تحصيل الحقوق:</h2>

                        <div className='imgs'>
                            <img src={require('../../Images/rights-gallery/p3.jpeg')} />
                            <img src={require('../../Images/rights-gallery/p4.jpeg')} />
                            <img src={require('../../Images/rights-gallery/p5.jpeg')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rights;