
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-masar-light/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">شروط الاستخدام</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">مقدمة</h2>
                  <p>
                    تُحدد شروط الاستخدام هذه القواعد والشروط التي تحكم استخدامك لمنصة "مسار العقار" الإلكترونية. باستخدامك للمنصة، فإنك توافق على الالتزام بهذه الشروط. في حالة عدم الموافقة على أي جزء من هذه الشروط، يرجى عدم استخدام المنصة.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">التسجيل والحسابات</h2>
                  <p>
                    عند إنشاء حساب في منصتنا، فإنك تقر وتضمن ما يلي:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>أنك تقدم معلومات دقيقة وكاملة عند التسجيل</li>
                    <li>أنك ستحافظ على تحديث معلومات حسابك</li>
                    <li>أنك مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك</li>
                    <li>أنك مسؤول عن جميع الأنشطة التي تتم باستخدام حسابك</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">الاشتراكات والمدفوعات</h2>
                  <p>
                    تقدم المنصة خدمات بناءً على اشتراك مدفوع. بالتسجيل في الاشتراك:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>توافق على دفع جميع الرسوم المرتبطة بالاشتراك</li>
                    <li>تفوض منصتنا بتحصيل رسوم الاشتراك باستخدام طريقة الدفع المقدمة</li>
                    <li>تقر بأن رسوم الاشتراك غير قابلة للاسترداد إلا في الحالات التي يحددها القانون</li>
                    <li>تقر بأننا قد نغير أسعار الاشتراك بإشعار مسبق</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">قيود الاستخدام</h2>
                  <p>
                    أنت توافق على عدم:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>استخدام المنصة لأي غرض غير قانوني أو غير مصرح به</li>
                    <li>إنشاء حسابات متعددة لنفس المستخدم</li>
                    <li>نقل أو بيع حسابك لشخص آخر</li>
                    <li>استخدام المنصة بطريقة قد تعطل أو تثقل أو تضر بالمنصة أو تتداخل مع استخدام الآخرين</li>
                    <li>محاولة الوصول إلى المناطق المحظورة من المنصة</li>
                    <li>نسخ أو تعديل المحتوى المقدم على المنصة دون إذن صريح</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">حقوق الملكية الفكرية</h2>
                  <p>
                    منصة "مسار العقار" وجميع محتوياتها، بما في ذلك النصوص والرسومات والشعارات والصور وواجهات المستخدم، هي مملوكة لـ "مسار العقار" ومحمية بموجب قوانين حقوق الطبع والنشر والعلامات التجارية وغيرها من حقوق الملكية الفكرية.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">إخلاء المسؤولية</h2>
                  <p>
                    تقدم منصة "مسار العقار" معلومات وأدوات لمساعدتك في اتخاذ قرارات عقارية، ولكننا:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>لا نقدم استشارات مالية أو عقارية أو قانونية محددة</li>
                    <li>لا نضمن دقة أو اكتمال المعلومات المقدمة</li>
                    <li>لا نتحمل المسؤولية عن القرارات التي تتخذها بناءً على معلوماتنا</li>
                    <li>ننصح دائماً باستشارة متخصصين مؤهلين قبل اتخاذ أي قرار عقاري</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">التعديلات على الشروط</h2>
                  <p>
                    نحتفظ بالحق في تعديل شروط الاستخدام في أي وقت. سيتم إخطارك بالتغييرات المهمة في الشروط عبر البريد الإلكتروني أو إشعار على المنصة. استمرارك في استخدام المنصة بعد إجراء تعديلات يعتبر موافقة على الشروط المعدلة.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">الاتصال بنا</h2>
                  <p>
                    إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى التواصل معنا على:
                  </p>
                  <p className="font-semibold">البريد الإلكتروني: info@masaraqar.com</p>
                  <p className="font-semibold">الهاتف: 966123456789+</p>
                </section>

                <div className="text-center text-sm text-masar-gray mt-8">
                  آخر تحديث: {new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
