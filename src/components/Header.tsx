
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-masar-primary">مسار العقار</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link to="/" className="font-medium hover:text-masar-primary transition-colors">الرئيسية</Link>
              <Link to="/calculator" className="font-medium hover:text-masar-primary transition-colors">حاسبة التمويل</Link>
              <Link to="/chatbot" className="font-medium hover:text-masar-primary transition-colors">البوت العقاري</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">تسجيل الدخول</Button>
              </Link>
              <Link to="/login?register=true">
                <Button className="bg-masar-primary hover:bg-masar-dark">إنشاء حساب</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-masar-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t pt-4 pb-6 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-6">
            <Link 
              to="/" 
              className="font-medium hover:text-masar-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/calculator" 
              className="font-medium hover:text-masar-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              حاسبة التمويل
            </Link>
            <Link 
              to="/chatbot" 
              className="font-medium hover:text-masar-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              البوت العقاري
            </Link>
          </nav>
          
          <div className="flex flex-col gap-3">
            <Link 
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full">تسجيل الدخول</Button>
            </Link>
            <Link 
              to="/login?register=true"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-masar-primary hover:bg-masar-dark">إنشاء حساب</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
