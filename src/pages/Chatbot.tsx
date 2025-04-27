
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'مرحباً بك في البوت العقاري! كيف يمكنني مساعدتك اليوم؟',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'نصائح': 'من أهم النصائح لشراء العقار: 1) تحديد الميزانية المناسبة، 2) التأكد من سلامة الصكوك، 3) دراسة المنطقة جيداً، 4) الاستعانة بمقيم معتمد، 5) التأكد من جودة البناء والتشطيبات.',
        'قرض': 'تنقسم القروض العقارية في السعودية إلى: 1) قروض تجارية من البنوك، 2) قروض مدعومة من صندوق التنمية العقارية، 3) قروض مدعومة من وزارة الإسكان. يختلف كل نوع في شروطه ومميزاته.',
        'تحت الإنشاء': 'الفرق بين العقار الجاهز وتحت الإنشاء: العقار الجاهز يمكن السكن فيه مباشرة لكنه أغلى، بينما العقار تحت الإنشاء أرخص لكن يحتاج للانتظار ويحمل مخاطر التأخير أو تغيير المواصفات.',
        'سكني': 'برنامج سكني هو أحد برامج وزارة الإسكان، يوفر حلول تمويلية مدعومة للمواطنين، ويمكنك الاستفادة منه عبر التسجيل في بوابة سكني الإلكترونية.',
        'صندوق': 'صندوق التنمية العقارية يقدم قروضاً عقارية بدون فوائد للمواطنين السعوديين، مع فترات سداد مرنة تصل إلى 25 سنة.',
      };
      
      // Generate a bot response based on keywords in the user's message
      let botResponse = 'أعتذر، لم أفهم سؤالك جيداً. هل يمكنك إعادة صياغته بطريقة أخرى؟';
      
      const userMessageLower = userMessage.content.toLowerCase();
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (userMessageLower.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      // Add bot message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-masar-light/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg h-[600px] flex flex-col">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-center">البوت العقاري الذكي</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-0 flex flex-col">
                <ScrollArea className="flex-grow p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`flex max-w-[80%] ${
                            message.sender === 'user' 
                              ? 'flex-row-reverse' 
                              : 'flex-row'
                          }`}
                        >
                          <div className={`min-w-[36px] h-9 flex items-start mt-1 ${
                            message.sender === 'user' ? 'mr-2' : 'ml-2'
                          }`}>
                            <Avatar className={`${
                              message.sender === 'user' 
                                ? 'bg-masar-secondary' 
                                : 'bg-masar-primary'
                            }`}>
                              <span className="text-white font-bold">
                                {message.sender === 'user' ? 'أنت' : 'بوت'}
                              </span>
                            </Avatar>
                          </div>
                          <div 
                            className={`rounded-lg p-3 ${
                              message.sender === 'user' 
                                ? 'bg-masar-secondary text-white' 
                                : 'bg-white border'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <span className="text-xs opacity-70 block mt-1">
                              {message.timestamp.toLocaleTimeString('ar-SA', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex flex-row">
                          <div className="min-w-[36px] h-9 flex items-start mt-1 ml-2">
                            <Avatar className="bg-masar-primary">
                              <span className="text-white font-bold">بوت</span>
                            </Avatar>
                          </div>
                          <div className="rounded-lg p-3 bg-white border">
                            <div className="flex space-x-2 space-x-reverse">
                              <div className="w-2 h-2 bg-masar-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-masar-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-masar-primary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                
                <form 
                  onSubmit={handleSendMessage}
                  className="p-4 border-t flex items-center gap-2"
                >
                  <Button 
                    type="submit" 
                    className="bg-masar-primary hover:bg-masar-dark"
                    disabled={isLoading || !input.trim()}
                  >
                    إرسال
                  </Button>
                  <Input
                    placeholder="اكتب سؤالك هنا..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow text-right"
                    disabled={isLoading}
                  />
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">أسئلة مقترحة:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'ما هي أهم نصائح لشراء العقار؟',
                  'ما الفرق بين العقار الجاهز وتحت الإنشاء؟',
                  'ما هي أنواع القروض العقارية المتاحة؟',
                  'كيف يمكنني الاستفادة من برنامج سكني؟',
                  'ما هي مميزات قروض صندوق التنمية العقارية؟',
                ].map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-right justify-start"
                    onClick={() => {
                      setInput(question);
                    }}
                    disabled={isLoading}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
