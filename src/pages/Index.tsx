import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, Bot, ShieldCheck } from 'lucide-react';
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
                <Link to="/login?register=true">
                  <Button size="lg" className="bg-masar-primary hover:bg-masar-dark w-full sm:w-auto">
                    اشترك الآن بـ 49 ريال فقط
                  </Button>
                </Link>
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
            <h2 className="heading-lg text-center mb-16">اكتشف مميزات منصة مسار العقار</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Book size={48} strokeWidth={1.5} />}
                title="دليل عقاري متكامل"
                description="استفد من دليلنا العقاري الشامل الذي يغطي كل ما تحتاج معرفته عن سوق العقار في السعودية، من أساسيات الشراء إلى نصائح التفاوض وتقييم العقارات"
                className="bg-gradient-to-br from-emerald-50 to-white"
              />
              <FeatureCard
                icon={<Calculator size={48} strokeWidth={1.5} />}
                title="حاسبة تمويل ذكية"
                description="احسب قدرتك الشرائية وقسطك الشهري المتوقع بدقة عالية مع حاسبتنا الذكية التي تراعي راتبك، التزاماتك الشهرية، والدعم السكني المتاح لك"
                className="bg-gradient-to-br from-amber-50 to-white"
              />
              <FeatureCard
                icon={<Bot size={48} strokeWidth={1.5} />}
                title="بوت عقاري ذكي"
                description="استشر بوتنا العقاري المدعوم بالذكاء الاصطناعي على مدار الساعة. يجيب على استفساراتك ويقدم نصائح مخصصة لحالتك، مع فهم عميق لسوق العقار السعودي"
                className="bg-gradient-to-br from-sky-50 to-white"
              />
              <FeatureCard
                icon={<ShieldCheck size={48} strokeWidth={1.5} />}
                title="تجربة آمنة وموثوقة"
                description="نضمن لك تجربة آمنة مع حماية كاملة لبياناتك الشخصية. اشترك الآن بـ 49 ريال فقط واستفد من جميع خدماتنا المتكاملة مع دعم فني متواصل"
                className="bg-gradient-to-br from-rose-50 to-white"
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
