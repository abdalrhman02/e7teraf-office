
import {  useState, useEffect} from 'react';

function Marketing() {

    return (
        <div className="gallery rightsGallery">
            <div className='container'>
                <div className="bar">
                    <div className='barContent'>
                        <img src={require('../../Images/logo1.png')} />
                        <h2>بعض من اعمالنا</h2>
                        <div className="ourWork">
                            <a href='Design'>التصميم</a>
                            <a href='#'>التسويق</a>
                            <a href='Rights'>تحصيل الحقوق</a>
                            <a href='Web'>بناء المواقع</a>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='title'>
                        <h2>التسويق لتقدم مصلحتك و زيادة ارباحك</h2>
                        <p>مكتبنا مختص بمزايا التسويق وطرق ادارة المنتج بوسائل مختلفة ومتعددة، نسعى الى تطوير مصلحتك لنجعلها الرائدة بالسوق، من حيث التسويق الإحترافي .</p>
                    </div>

                    <video controls>
                        <source src={require('../../Images/marketing-gallery/marketing-ad.mp4')} />
                    </video>
                    
                </div>
            </div>
        </div>
    )
}

export default Marketing;