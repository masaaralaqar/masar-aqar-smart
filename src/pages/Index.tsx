
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-masar-light to-white py-20">
          <div className="container-custom">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h1 className="heading-xl mb-6 text-masar-dark">
                  اتخذ قرارك العقاري <span className="text-masar-primary">بذكاء</span>
                </h1>
                <p className="text-lg text-masar-gray mb-8">
                  مسار العقار منصتك المتكاملة لمساعدتك في اتخاذ قرارات ذكية في شراء وتملك العقار في السعودية
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login?register=true">
                    <Button size="lg" className="bg-masar-primary hover:bg-masar-dark w-full sm:w-auto">
                      اشترك الآن بـ 49 ريال فقط
                    </Button>
                  </Link>
                  <Link to="/calculator">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      جرب الحاسبة المجانية
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                  alt="مسار العقار" 
                  className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-16">ميزاتنا الرئيسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Book size={48} strokeWidth={1.5} />}
                title="دليل عقاري متكامل"
                description="احصل على المعلومات الشاملة حول سوق العقار في السعودية"
              />
              <FeatureCard
                icon={<Calculator size={48} strokeWidth={1.5} />}
                title="حاسبة تمويل ذكية"
                description="احسب قدرتك الشرائية وقسطك الشهري المتوقع بدقة عالية"
              />
              <FeatureCard
                icon={<Bot size={48} strokeWidth={1.5} />}
                title="بوت عقاري ذكي"
                description="احصل على إجابات لجميع استفساراتك العقارية على مدار الساعة"
              />
              <FeatureCard
                title="اشتراك ميسر وآمن"
                description="اشترك بسعر تنافسي واستفد من جميع خدمات المنصة"
                icon={
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-masar-light text-masar-primary text-2xl font-bold">
                    49
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-masar-primary text-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">جاهز لاتخاذ قرار عقاري أفضل؟</h2>
              <p className="text-lg mb-8 text-white/90">
                انضم إلى منصة مسار العقار اليوم واستفد من أدواتنا الذكية لمساعدتك في رحلتك العقارية
              </p>
              <Link to="/login?register=true">
                <Button size="lg" className="bg-white text-masar-primary hover:bg-masar-light">
                  اشترك الآن بـ 49 ريال فقط
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
