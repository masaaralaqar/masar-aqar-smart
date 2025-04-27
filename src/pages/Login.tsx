
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("login");
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    // Check if register=true in query params
    const params = new URLSearchParams(location.search);
    if (params.get('register') === 'true') {
      setActiveTab('register');
    }
  }, [location.search]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    console.log('Login submitted:', loginData);
    
    // For demo purposes, just show a success toast and redirect
    toast({
      title: "تم تسجيل الدخول بنجاح",
      description: "جاري تحويلك للصفحة الرئيسية...",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password match
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "خطأ في التسجيل",
        description: "كلمات المرور غير متطابقة، يرجى المحاولة مرة أخرى",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would handle registration here
    console.log('Registration submitted:', registerData);
    
    // For demo purposes, just show a success toast and redirect
    toast({
      title: "تم إنشاء الحساب بنجاح",
      description: "جاري تحويلك للصفحة الرئيسية...",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-masar-light/30">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">مرحباً بك في مسار العقار</CardTitle>
              <CardDescription>
                منصتك المتكاملة لاتخاذ قرارات عقارية ذكية
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                  <TabsTrigger value="register">إنشاء حساب</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">البريد الإلكتروني</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        placeholder="أدخل بريدك الإلكتروني" 
                        required
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <a href="#" className="text-sm text-masar-primary hover:underline">
                          نسيت كلمة المرور؟
                        </a>
                        <Label htmlFor="login-password">كلمة المرور</Label>
                      </div>
                      <Input 
                        id="login-password" 
                        type="password" 
                        placeholder="أدخل كلمة المرور" 
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox 
                        id="remember-me" 
                        checked={loginData.rememberMe}
                        onCheckedChange={(checked) => 
                          setLoginData({...loginData, rememberMe: checked as boolean})
                        }
                      />
                      <Label htmlFor="remember-me" className="mr-2">تذكرني</Label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-masar-primary hover:bg-masar-dark">
                      تسجيل الدخول
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegisterSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">الاسم الكامل</Label>
                      <Input 
                        id="register-name" 
                        placeholder="أدخل اسمك الكامل" 
                        required
                        value={registerData.fullName}
                        onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-email">البريد الإلكتروني</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="أدخل بريدك الإلكتروني" 
                        required
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password">كلمة المرور</Label>
                      <Input 
                        id="register-password" 
                        type="password" 
                        placeholder="أدخل كلمة المرور" 
                        required
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm-password">تأكيد كلمة المرور</Label>
                      <Input 
                        id="register-confirm-password" 
                        type="password" 
                        placeholder="أعد إدخال كلمة المرور" 
                        required
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="text-right"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-masar-primary hover:bg-masar-dark">
                      إنشاء حساب
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
