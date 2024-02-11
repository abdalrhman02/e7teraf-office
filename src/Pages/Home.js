
import { useState, useEffect, useRef, useMemo } from 'react';


function Home() {

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



    useMemo(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
    
          const elementsAtScrollPosition = document.elementsFromPoint(window.innerWidth / 1.5, scrollPosition);
    
          elementsAtScrollPosition.forEach(element => {

            if(element.classList.contains('container')) {
                let elementChildren = Array.from(element.children);

                elementChildren.forEach(childrenEle => {
                    if(childrenEle.classList.contains('animate__animated')) {
                        childrenEle.classList.add('animate__flipInX')
                        // console.log(childrenEle)
                    }
                });
            };
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
            <div className="landing">
                <div className='container'>
                    <div className="text animate__animated">
                        <h2 className='subTitle'>مغناطيس النجاحات</h2>
                        <h1 className='mainTitle'>نقودك للنجاحات بجميع الوسائل الصحيحة</h1>
                        <p>مكتبنا متخصص بخدمات متكاملة في مجالات التصميم | التسويق | بناء مواقع | تحصيل الحقوق
            يتميز المكتب بطاقم من المحترفين المبدعين الذين يجمعون بين الخبرة والإبداع لتلبية احتياجات الزبائن بشكل فعّال. 
            سواء كنت بحاجة إلى تصميم جذاب، حملة إعلانية فعّالة، أو استراتيجية تسويقية ملهمة، نقدم لك حلاً مخصصًا لضمان تحقيق أهدافك بنجاح.</p>
                        <a href="Design"><button>المزيد</button></a>

                        <ul>
                            <a href='https://www.facebook.com/mohamed96sh'><i class="fa-brands fa-facebook-f"></i></a>
                            <a href='https://www.instagram.com/e7teraf_office/'><i class="fa-brands fa-instagram"></i></a>
                            <a href='https://wa.link/dn75jc'><i class="fa-brands fa-whatsapp"></i></a>
                            <a href='https://www.e7teraf-office.com/'><img src={require('../Images/logo1.png')}/></a>
                        </ul>
                    </div>

                    <div className="image animate__animated">
                        <img src={require('../Images/mohammed.png')} />
                        <div className='shape'></div>

                        <div className='name'>
                                <h2>مدير</h2>
                                <h2>مكتب إحتراف</h2>
                                <h2>محمد شملة</h2>
                        </div>

                        <div className='logo'>
                            <img className='logo' src={require('../Images/logo1.png')} />

                        </div>
                    </div>
                </div>

                <div className='callUs callUsClosed' id='callUs' onMouseOver={callUsOpen} onMouseLeave={callUsClose}>
                    <i className="fa-solid fa-phone-volume"></i>

                    <div className='number'>
                        <h4>اتصل بنا</h4>
                        <p dir='ltr'>+972 52-450-7838</p>
                    </div>
                </div>
            </div>


            <div className='services'>
                <div className='container'>
                    
                    <div className='title'>
                        <h1>الخدمات التي نقدمها</h1>
                    </div>

                    <div className='service design animate__animated'>
                        <div className='text'>
                            <div className='title'>
                                <h2>01 /</h2>
                                <h3>تصميم بوستات و اعلانات</h3>
                            </div>

                            <div className='desc'>
                                <p>نساعدك على صنع واجهة افضل لمصلحتك من خلال تصميم منشوراتك و اعلاناتك على مواقع التواصل الاجتماعي بالطريقة الانسب لمجال مصحلتك او مشروعك</p>
                                <p>مهما يكن مجال مصلحتك فأنت بحاجة لمنشورات ملفته لجذب الزبائن!</p>
                            
                                <a href="Design"><button>انظر للمزيد</button> </a>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/design.png')} />
                        </div>
                    </div>

                    <div className='service marketing animate__animated' dir='ltr'>
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

                                <a href="Marketing"><button>انظر للمزيد</button> </a>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/marketing.png')} />
                        </div>
                    </div>

                    <div className='service rights animate__animated'>
                        <div className='text'>
                            <div className='title'>
                                <h2>03 /</h2>
                                <h3>تحصيل الحقوق</h3>
                            </div>

                            <div className='desc'>
                                <p>مكتبنا يقدم خدمة الإستشارة بما يتعلق بقضايا التأمين الوطني وتحصيل الحقوق وحل القضايا ضمن طاقم مؤهل ومهني</p>  
                            
                                <a href='Rights'><button>انظر للمزيد</button></a>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/rights.png')} />
                        </div>
                    </div>

                    <div className='service website animate__animated' dir='ltr'>
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

                                    <a href='Web'><button>انظر للمزيد</button></a>
                                </div>
                            </div>
                        </div>

                        <div className='image'>
                            <img src={require('../Images/website.png')} />
                        </div>
                    </div>

                </div>
            </div>


            <div className='customers'>
                <div className='container'>
                    <div className='title'>
                        <h4 className='number'>+80</h4>
                        <p>شخص تعامل معنا حتى اليوم</p>
                    </div>

                    <div className='feedbacks animate__animated'>
                        <div className='feedback animate__animated'>
                            <div className='person'>
                                <img src={require('../Images/client1.jpeg')} />
                                <h3 className='name'>بإدارة سجى مراعبة</h3>
                            </div>
                            <p className='fb'>شغل معلمين🌺🌺<br></br> اشي روعه تسلم يا معلم</p>
                        </div>

                        <div className='feedback '>
                            <div className='person'>
                                <img src={require('../Images/client2.jpeg')} />
                                <h3 className='name'>بإدارة حسناء سعادة</h3>
                            </div>
                            <p className='fb'>احتراف مش بس اسم !!! <br></br>وكمااان الشغل احترافي</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/client3.jpeg')} />
                                <h3 className='name'>بإدارة مجلس محلي كفر برا</h3>
                            </div>
                            <p className='fb'>ذوق راق ورائع عمل فوري وسريع واسعار منافسة انصح بشدة ، كل التوفيق لكم</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/client4.jpeg')} />
                                <h3 className='name'>بإدارة منال رابي</h3>
                            </div>
                            <p className='fb'>تصاميم مرتبة جدا</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/client5.jpeg')} />
                                <h3 className='name'>بإدارة يوسف جرن</h3>
                            </div>
                            <p className='fb'>تصاميم و تسويق ابداع و احتراف, شكرا</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/client6.jpeg')} />
                                <h3 className='name'>بإدارة يوسف إغبارية - ام الفحم</h3>
                            </div>
                            <p className='fb'>عمل جيد جدا!</p>
                        </div>

                        <div className='feedback'>
                            <div className='person'>
                                <img src={require('../Images/client7.jpeg')} />
                                <h3 className='name'>بإدارة ابو القاسم</h3>
                            </div>
                            <p className='fb'>شغل بجنن شكرا كتير</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='contact'>
                <div className='container'>
                    <div className='formContainer animate__animated'>
                        <div className='title'>
                            <h1>تواصل معنا</h1>
                            <p>اترك تفاصيلك و سوف نعود لك في اقرب وقت ممكن</p>
                        </div>

                        <form >
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
                <div className='copyright'>
                    <p>جميع الحقوق محفوظة © مكتب احتراف</p>
                </div>
            </footer>
        </>
    )
}

export default Home;