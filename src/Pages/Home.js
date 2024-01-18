
import { useState, useEffect } from 'react';


/* i18next framework */
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();

    // For call us notifaction
    let callUsOpen = () => {
        const callUsElement = document.getElementById('callUs');
        callUsElement.classList.remove('callUsClosed');
        callUsElement.classList.add('callUsOpen');
    }
    let callUsClose = () => {
        const callUsElement = document.getElementById('callUs');
        callUsElement.classList.add('callUsClosed');
        callUsElement.classList.remove('callUsOpen');
    }

    
    /* Services Galleries Windows */

    // For Select Services Buttons
    let serviceNoti = document.querySelectorAll('.services .container .serviceDivNoti');
    let servicesButtons = document.querySelectorAll('.services .container .service button')

    servicesButtons.forEach((ser) => {
        ser.addEventListener('click', () => {
            serviceNoti.forEach((serNoti) => {
                if(serNoti.classList.contains(ser.id)) {
                    serNoti.style.display = 'block'
                } else {
                    serNoti.style.display = 'none'
                };
            });
        });
    });


    // For Close The Window
    let exitServiceNoti = document.querySelectorAll('#exitWindow');

    exitServiceNoti.forEach((exit) => {
        exit.addEventListener('click', () => {
            exit.parentElement.parentElement.style.display = 'none'
        })
    })

    // function exitSerNoti() {
    //     let exit = exitServiceNoti.parentElement.parentElement
    //     exit.style.display = 'none'
    // };

    


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


    /* Services Galleries Windows END */



    return (
        <>
            <div className="landing">
                <div className='container'>
                    <div className="text">
                        <h2 className='subTitle'>مغناطيس النجاحات</h2>
                        <h1 className='mainTitle'>نقودك للنجاحات بجميع الوسائل الصحيحة</h1>
                        <p>مكتبنا يقدم لك خدمة التصميم و التسويق لنجاح مصلحتك او مشروعك و الوصول لاكبر عدد ممكن من الزبائن</p>
                        <button>التفاصيل</button>

                        <ul>
                            <a href='https://www.facebook.com/mohamed96sh'><i class="fa-brands fa-facebook-f"></i></a>
                            <a href='https://www.instagram.com/e7teraf_office/'><i class="fa-brands fa-instagram"></i></a>
                            <a href='https://wa.link/dn75jc'><i class="fa-brands fa-whatsapp"></i></a>
                        </ul>
                    </div>

                    <div className="image">
                        <img src={require('../Images/mohammed.png')} />
                        <div className='shape'></div>

                        <div className='name-logo'>
                            <div className='name'>
                                <h2>مدير</h2>
                                <h2>مكتب إحتراف</h2>
                                <h2>محمد شملة</h2>
                            </div>

                            <img className='logo' src={require('../Images/logo1.png')} />

                        </div>
                    </div>
                </div>

                <div className='callUs callUsClosed' id='callUs' onMouseOver={callUsOpen} onMouseLeave={callUsClose}>
                    <i className="fa-solid fa-phone-volume"></i>

                    <div className='number'>
                        <h4>اتصل بنا</h4>
                        <p>+972 52-450-7838</p>
                    </div>
                </div>
            </div>


            <div className='services'>
                <div className='container'>
                    
                    <div className='title'>
                        <h1>ما الخدمات التي نقدمها ؟</h1>
                    </div>

                    <div className='service design'>
                        <div className='text'>
                            <div className='title'>
                                <h2>01 /</h2>
                                <h3>تصميم بوستات و اعلانات</h3>
                            </div>

                            <div className='desc'>
                                <p>نساعدك على صنع واجهة افضل لمصلحتك من خلال تصميم منشوراتك و اعلاناتك على مواقع التواصل الاجتماعي بالطريقة الانسب لمجال مصحلتك او مشروعك</p>
                                <p>مهما يكن مجال مصلحتك فأنت بحاجة لمنشورات ملفته لجذب الزبائن!</p>
                            
                                <button id='designGallery'>انظر للتفاصيل</button>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/design.png')} />
                        </div>
                    </div>

                    <div className='service marketing' dir='ltr'>
                        <div className='text' dir='rtl'>
                            <div className='title'>
                                <h2>02 /</h2>
                                <h3>التسويق</h3>
                            </div>

                            <div className='desc'>
                                <p>مكتب احتراف سيساعدك في نشر مصلحتك بشكل اكبر عن طريق استراتيجيات مجربة و فعالة للوصول الى الجمهور المهتم فيما تقدمه</p>
                            
                                <div className='features'>
                                    <h4>فوائد التسويق الاحترافي:</h4>
                                    <ul>
                                        <li>عدم اضاعة الوقت و المال</li>
                                        <li>الوصول للمهتمين بما تقدمه</li>
                                        <li>انتشار مصحلتك بشكل اسرع و اكبر</li>
                                    </ul>
                                </div>

                                <button id='marketingGallery'>انظر للتفاصيل</button>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/marketing.png')} />
                        </div>
                    </div>

                    <div className='service rights'>
                        <div className='text'>
                            <div className='title'>
                                <h2>03 /</h2>
                                <h3>تحصيل الحقوق</h3>
                            </div>

                            <div className='desc'>
                                <p>مكتبنا يقدم خدمة الإستشارة بما يتعلق بقضايا التأمين الوطني وتحصيل الحقوق وحل القضايا ضمن طاقم مؤهل ومهني</p>  
                            
                                <button id='rightsGallery'>انظر للتفاصيل</button>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/rights.png')} />
                        </div>
                    </div>

                    <div className='service website' dir='ltr'>
                        <div className='text' dir='rtl'>
                            <div className='title'>
                                <h2>04 /</h2>
                                <h3>بناء مواقع</h3>
                            </div>

                            <div className='desc'>
                                <p>نساعدك في تطوير مصلحتك عبر بناء موقع خاص بك و يعتبر وجود موقع بحد ذاته لمصلحتك يعطي طابعا جميلا و ثقة بالنسبة للزبون و اضافة مميزة لمشروعك او مصلحتك</p>  
                            
                                <div className='features'>
                                    <h4>لماذا تحتاج موقع خاص بك؟:</h4>
                                    <ul>
                                        <li>واجهة مميزة لكسب ثقة الزبائن</li>
                                        <li>تطوير مشروعك الخاص</li>
                                        <li>التميز عن المنافسين</li>
                                    </ul>

                                    {/* <button id='webGallery'>انظر للتفاصيل</button> */}
                                </div>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/website.png')} />
                        </div>
                    </div>



                    <div className='serviceDivNoti designGallery'>
                        <div className='container'>

                            <div className='exit' id='exitWindow'>
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <div className='title'>
                                <h2>تصاميم</h2>
                                <h3>نساعد على تحسين واجهة مصلحتك من خلال تصاميمنا</h3>
                            </div>


                            <div className='carousel'>
                                <i class="next fa-solid fa-arrow-right" onClick={nextPost}></i>

                                <div className='post'>
                                    <img src={require('../Images//design-gallery/1.jpeg')} id='1' class='active'/>
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
                    </div>

                    <div className='serviceDivNoti marketingGallery'>
                        <div className='container'>
                            <div className='exit' id='exitWindow'>
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <div className='title'>
                                B
                            </div>
                        </div>
                    </div>

                    <div className='serviceDivNoti rightsGallery'>
                        <div className='container'>

                            <div className='exit' id='exitWindow'>
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <div className='title'>
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
                    </div>

                    <div className='serviceDivNoti webGallery'>
                        <div className='container'>
                            <div className='exit' id='exitWindow'>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                            <div className='title'>
                                D
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='customers'>
                <div className='container'>
                    <div className='title'>
                        <h4 className='number'>+40</h4>
                        <p>شخص تعامل معنا حتى اليوم</p>
                    </div>

                    <div className='feedbacks'>
                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/pr.jpg')} />
                                <h3 className='name'>اسم الشخص</h3>
                            </div>
                            <p className='fb'>شغل معلمين🌺🌺<br></br> اشي روعه تسلم يا معلم</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/pr.jpg')} />
                                <h3 className='name'>اسم الشخص</h3>
                            </div>
                            <p className='fb'>احتراف مش بس اسم !!! <br></br>وكمااان الشغل احترافي</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/pr.jpg')} />
                                <h3 className='name'>اسم الشخص</h3>
                            </div>
                            <p className='fb'>ذوق راق ورائع عمل فوري وسريع واسعار منافسة انصح بشدة ، كل التوفيق لكم</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='contact'>
                <div className='container'>
                    <div className='formContainer'>
                        <div className='title'>
                            <h1>تواصل معنا</h1>
                            <p>اترك تفاصيلك و سوف نعود لك في اقرب وقت ممكن</p>
                        </div>

                        <form action="https://formsubmit.co/mohamed96sh@gmail.com" method="POST">
                            <input type="hidden" name="_captcha" value="false"></input>

                            <div>
                                <div>
                                    <label>الاسم:</label>
                                    <input type="text" name="الاسم" required placeholder='الاسم الكامل'></input>
                                </div>

                                <div>
                                    <label>البلد:</label>
                                    <input type="text" name="البلد" required placeholder='ادخل بلدك هنا'></input>
                                </div>
                            </div>

                            <label>رقم الهاتف:</label>
                            <input type="text" name="رقم الهاتف" required placeholder='سنتواصل معك من خلال الرقم'></input>

                            <label>الخدمات المطلوبة:</label>
                            <input type="text" name="الخدمة المطلوبة" required placeholder='ما الخدمات التي ترغب بها؟'></input>

                            <label>رسالتك:</label>
                            <textarea type="text" name="الرسالة" required placeholder='كيف نستطيع مساعدتك...'></textarea>
                            
                            <button type="submit">ارسل</button>
                        </form>
                    </div>
                </div>
            </div>


            <footer>
                {/* <ul className='socials'>
                    <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='#'><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul> */}

                <div className='copyright'>
                    <p>جميع الحقوق محفوظة © مكتب احتراف</p>
                </div>
            </footer>
        </>
    )
}

export default Home;