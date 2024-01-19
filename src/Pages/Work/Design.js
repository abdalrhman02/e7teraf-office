
import {  useState, useEffect} from 'react';

function Design() {

    // For Images Slide
    let [postImgsCounting, setPostImgsCounting] = useState(1);
    let postImages = document.querySelectorAll('.carousel .post img');

    useEffect(() => {
        postImages.forEach((p) => {
            p.classList.remove('active')
        
            if(p.id == postImgsCounting) {
                p.classList.add('active')
            }
        });
    }, [postImgsCounting]);

    function nextPost() { setPostImgsCounting((prevCount) => (prevCount < postImages.length ? prevCount + 1 : prevCount)); };
    function prevPost() { setPostImgsCounting((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); };

    return (
        <div className="gallery designGallery">
            <div className="container">
                
                <div className="bar">
                    <div className='barContent'>
                        <img src={require('../../Images/logo1.png')} />
                        <h2>بعض من اعمالنا</h2>
                        <div className="ourWork">
                            <a href=''>التصميم</a>
                            <a href='Marketing'>التسويق</a>
                            <a href='Rights'>تحصيل الحقوق</a>
                            <a href='Web'>بناء المواقع</a>
                        </div>
                    </div>
                </div>


                <div className='content'>
                    <div className='title'>
                        <h2>اعمالنا من تصميم البوستات و الاعلانات</h2>
                    </div>

                    {/* <div className='carousel'>
                        <i class="fa-solid fa-arrow-right"></i>

                        <div className='post'>
                            <img src={require('../../Images/design-gallery/1.jpeg')} id='1' className='active' />
                            <img src={require('../../Images/design-gallery/2.jpeg')} id='2' />
                            <img src={require('../../Images/design-gallery/3.jpeg')} id='3' />
                            <img src={require('../../Images/design-gallery/4.jpeg')} id='4' />
                            <img src={require('../../Images/design-gallery/5.jpeg')} id='5' />
                            <img src={require('../../Images/design-gallery/6.jpeg')} id='6' />
                            <img src={require('../../Images/design-gallery/7.jpeg')} id='7' />
                            <img src={require('../../Images/design-gallery/8.jpeg')} id='8' />
                            <img src={require('../../Images/design-gallery/9.jpeg')} id='9' />
                            <img src={require('../../Images/design-gallery/10.jpeg')} id='10' />
                            <img src={require('../../Images/design-gallery/11.jpeg')} id='11' />
                        </div>

                        <i class="fa-solid fa-arrow-left"></i>
                    </div> */}

                    <div className='examples'>
                        <img src={require('../../Images/design-gallery/1.jpeg')} />
                        <img src={require('../../Images/design-gallery/2.jpeg')} />
                        <img src={require('../../Images/design-gallery/3.jpeg')} />
                        <img src={require('../../Images/design-gallery/4.jpeg')} />
                        <img src={require('../../Images/design-gallery/5.jpeg')} />
                        <img src={require('../../Images/design-gallery/6.jpeg')} />
                        <img src={require('../../Images/design-gallery/7.jpeg')} />
                        <img src={require('../../Images/design-gallery/8.jpeg')} />
                        <img src={require('../../Images/design-gallery/9.jpeg')} />
                        <img src={require('../../Images/design-gallery/10.jpeg')} />
                        <img src={require('../../Images/design-gallery/11.jpeg')} />
                    </div>

                    <div className='more'>
                        <h2>بعض الاعلانات الاخرى:</h2>

                        <div className='imgs'>
                            <img src={require('../../Images/design-gallery/A1.jpeg')} />
                            <img src={require('../../Images/design-gallery/A2.jpeg')} />
                            <img src={require('../../Images/design-gallery/A3.jpeg')} />
                            <img src={require('../../Images/design-gallery/A4.jpeg')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;