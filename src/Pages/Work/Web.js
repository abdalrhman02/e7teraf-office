import {  useState, useEffect} from 'react';

function Web() {

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
                            <a href='Rights'>تحصيل الحقوق</a>
                            <a href='#'>بناء المواقع</a>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='title'>
                        <h2>بناء المواقع</h2>
                        <p>لتطوير مصلحتك و تحسينها, اطلب موقعك الخاص الان من مكتب احتراف</p>
                    </div>

                    <video controls>
                        <source src={require('../../Images/web-gallery/web-ad.mp4')} />
                    </video>

                    {/* <div className='note'>
                        <i class="fa-solid fa-exclamation"></i>
                        <p>سيتم إضافة محتوى بناء المواقع قريبا...</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Web;