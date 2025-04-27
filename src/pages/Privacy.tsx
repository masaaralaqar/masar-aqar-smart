
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-masar-light/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">سياسة الخصوصية وشروط الاستخدام</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">مقدمة</h2>
                  <p>
                    نرحب بكم في منصة "مسار العقار" الإلكترونية. تُوضِّح هذه الوثيقة كيفية جمع واستخدام وحماية معلوماتكم الشخصية. نلتزم بحماية خصوصيتكم وضمان أمان بياناتكم الشخصية وفقاً للقوانين والتشريعات المعمول بها في المملكة العربية السعودية.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">جمع المعلومات الشخصية</h2>
                  <p>
                    نقوم بجمع المعلومات الشخصية التالية عند إنشاء حساب أو استخدام خدماتنا:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الاسم الكامل</li>
                    <li>البريد الإلكتروني</li>
                    <li>رقم الهاتف (اختياري)</li>
                    <li>المعلومات المالية اللازمة لحساب القدرة الشرائية</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">استخدام المعلومات</h2>
                  <p>
                    نستخدم المعلومات التي نجمعها للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تقديم خدمات المنصة وتحسينها</li>
                    <li>التواصل معكم حول الخدمات والعروض</li>
                    <li>تخصيص تجربة المستخدم</li>
                    <li>تحليل استخدام المنصة وتحسين أدائها</li>
                    <li>الامتثال للالتزامات القانونية</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">حماية المعلومات</h2>
                  <p>
                    نتخذ تدابير أمنية مناسبة لحماية معلوماتكم الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. تشمل هذه التدابير:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تشفير البيانات الحساسة</li>
                    <li>استخدام بروتوكولات آمنة لنقل البيانات</li>
                    <li>الحد من الوصول إلى المعلومات الشخصية للموظفين المصرح لهم فقط</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">ملفات تعريف الارتباط (Cookies)</h2>
                  <p>
                    تستخدم منصتنا ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنكم ضبط متصفحكم لرفض هذه الملفات، مع العلم أن ذلك قد يؤثر على بعض وظائف المنصة.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">شروط الاستخدام</h2>
                  <h3 className="font-semibold">الاشتراك والمدفوعات</h3>
                  <p>
                    باستخدامكم للمنصة، فإنكم توافقون على:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تقديم معلومات دقيقة وحديثة</li>
                    <li>الالتزام بشروط الدفع واتفاقية الاشتراك</li>
                    <li>عدم استخدام المنصة لأغراض غير قانونية</li>
                    <li>عدم نشر محتوى مسيء أو غير لائق</li>
                    <li>عدم محاولة اختراق المنصة أو تعطيلها</li>
                  </ul>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">التعديلات على سياسة الخصوصية</h2>
                  <p>
                    نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر النسخة المحدثة على موقعنا مع تاريخ آخر تحديث. نشجعكم على مراجعة هذه السياسة بشكل دوري.
                  </p>
                </section>

                <Separator />
                
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">التواصل</h2>
                  <p>
                    إذا كان لديكم أي أسئلة أو استفسارات حول سياسة الخصوصية أو شروط الاستخدام، يرجى التواصل معنا على:
                  </p>
                  <p className="font-semibold">البريد الإلكتروني: info@masaraqar.com</p>
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

export default Privacy;
