
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-masar-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">مسار العقار</h3>
            <p className="text-gray-300 mb-4">
              منصة إلكترونية احترافية لمساعدة الأفراد في السعودية لاتخاذ قرارات ذكية في شراء وتملك العقار
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-300 hover:text-white transition-colors">حاسبة التمويل</Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-gray-300 hover:text-white transition-colors">البوت العقاري</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">شروط الاستخدام</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-300 mb-2">البريد الإلكتروني: info@masaraqar.com</p>
            <p className="text-gray-300 mb-4">الهاتف: 966123456789+</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">جميع الحقوق محفوظة © {new Date().getFullYear()} مسار العقار</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
