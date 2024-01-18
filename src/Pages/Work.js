
import { useState, useEffect } from 'react';

function Design() {

    let galleriesBtns = document.querySelectorAll('.galleryPagetitle ul li');
    let galleries = document.querySelectorAll('.container .gallery');

    galleriesBtns.forEach((gBtn) => {
        gBtn.addEventListener('click', () => {
            galleries.forEach((gall) => {
                gall.classList.remove('active')

                if(gall.classList.contains(gBtn.id)) {
                    gall.classList.add('active')
                }
            })
        })
    })



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
        <>
            <div>
                <div className='galleryPagetitle'>
                        <h2>القي نظرة على اعمالنا</h2>

                        <ul>
                            <li id='designGallery'>التصميم</li>
                            <li id='marketingGallery'>التسويق</li>
                            <li id='rightsGallery'>تحصيل الحقوق</li>
                            <li id='webGallery'>بناء المواقع</li>
                        </ul>
                </div>

                <div className='container'>
                    
                    <div className='gallery main active'>
                        <img src={require('../Images/logo.png')} />
                    </div>


                    <div className='gallery designGallery'>

                        <div className='galleryTitle'>
                            <h2>بعض اعمالنا في التصميم</h2>
                            <h3>نهدف لجعل مصلحتك تظهر بشكل افضل!</h3>
                        </div>

                        <div className='carousel'>
                            <i class="next fa-solid fa-arrow-right" onClick={nextPost}></i>

                            <div className='post'>
                                <img src={require('../Images//design-gallery/1.jpeg')} id='1' className='active'/>
                                <img src={require('../Images//design-gallery/2.jpeg')} id='2'/>
                                <img src={require('../Images//design-gallery/3.jpeg')} id='3'/>
                                <img src={require('../Images//design-gallery/4.jpeg')} id='4'/>
                                <img src={require('../Images//design-gallery/5.jpeg')} id='5'/>
                                <img src={require('../Images//design-gallery/6.jpeg')} id='6'/>
                                <img src={require('../Images//design-gallery/7.jpeg')} id='7'/>
                                <img src={require('../Images//design-gallery/8.jpeg')} id='8'/>
                                <img src={require('../Images//design-gallery/9.jpeg')} id='9'/>
                                <img src={require('../Images//design-gallery/10.jpeg')} id='10'/>
                            </div>

                            <i class="next fa-solid fa-arrow-left" onClick={prevPost}></i>
                        </div>
                    </div>

                    <div className='gallery marketingGallery'>
                        U
                    </div>

                    <div className='gallery rightsGallery'>

                        <div className='galleryTitle'>
                            <h2>تحصيل حقوق</h2>
                            <h3>مكتب إحتراف عنوان لحل قضايا التأمين الوطني <br></br> مكتبنا يتابع القضية حتى تحصيلها</h3>
                        </div>
                            
                        <div className='carousel'>
                             <i class="next fa-solid fa-arrow-right" onClick={nextPost}></i>

                            <div className='post'>
                                <img src={require('../Images/rights-gallery/1.jpeg')} id='1' class='active'/>
                                <img src={require('../Images/rights-gallery/2.jpeg')} id='2' />
                                <img src={require('../Images/rights-gallery/3.jpeg')} id='3' />
                                <img src={require('../Images/rights-gallery/4.jpeg')} id='4' />
                                <img src={require('../Images/rights-gallery/5.jpeg')} id='5' />
                                <img src={require('../Images/rights-gallery/6.jpeg')} id='6' />
                                <img src={require('../Images/rights-gallery/7.jpeg')} id='7' />
                                <img src={require('../Images/rights-gallery/8.jpeg')} id='8' />
                                <img src={require('../Images/rights-gallery/9.jpeg')} id='9' />
                                <img src={require('../Images/rights-gallery/10.jpeg')} id='10' />
                                <img src={require('../Images/rights-gallery/11.jpeg')} id='11' />
                                <img src={require('../Images/rights-gallery/12.jpeg')} id='12' />
                                <img src={require('../Images/rights-gallery/13.jpeg')} id='13' />
                                <img src={require('../Images/rights-gallery/14.jpeg')} id='14' />
                            </div>

                            <i class="next fa-solid fa-arrow-left" onClick={prevPost}></i>
                        </div>

                        <div className='proofs'>
                            <h2>بعض انجازات مكتبنا في تحصيل الحقوق:</h2>

                            <div className='pImages'>
                                <img src={require('../Images/rights-gallery/p3.jpeg')} />
                                <img src={require('../Images/rights-gallery/p4.jpeg')} />
                                <img src={require('../Images/rights-gallery/p5.jpeg')} />
                            </div>
                        </div>

                    </div>


                    <footer>
                        <div className='copyright'>
                            <p>جميع الحقوق محفوظة © مكتب احتراف</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Design