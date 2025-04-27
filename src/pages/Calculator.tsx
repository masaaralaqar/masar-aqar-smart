
import React, { useState } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Calculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlySalary: 10000,
    monthlyObligations: 0,
    age: 30,
    sector: 'government',
    hasSupport: 'yes',
    propertyType: 'apartment',
    financingPeriod: 25
  });
  
  const [result, setResult] = useState<{
    purchasingPower: number;
    monthlyPayment: number;
    advice: string;
  } | null>(null);

  const updateFormData = (field: string, value: string | number | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    const { monthlySalary, monthlyObligations, financingPeriod, sector, hasSupport } = formData;
    
    // Basic calculation for purchasing power
    // In a real app, this would be more complex and accurate
    let availableIncome = monthlySalary - monthlyObligations;
    let maxMonthlyPayment = availableIncome * 0.33; // Typically banks allow up to 33% of income for mortgage
    
    // Adjust based on sector
    const sectorMultiplier = sector === 'government' ? 1.1 : sector === 'military' ? 1.15 : 1;
    
    // Adjust based on support program
    const supportBonus = hasSupport === 'yes' ? 500000 : 0;
    
    // Simple calculation for loan amount based on monthly payment
    const interestRate = 0.04; // Assume 4% interest rate
    const monthlyRate = interestRate / 12;
    const totalPayments = financingPeriod * 12;
    
    const loanAmount = (maxMonthlyPayment * (1 - Math.pow(1 + monthlyRate, -totalPayments))) / monthlyRate;
    
    // Final purchasing power
    const purchasingPower = (loanAmount * sectorMultiplier) + supportBonus;
    
    // Monthly payment calculation (simplified)
    const monthlyPayment = purchasingPower * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    // Generate simple advice
    let advice = "بناءً على المعلومات المقدمة، يمكنك تحمل التمويل المعروض أعلاه.";
    
    if (monthlyPayment > monthlySalary * 0.4) {
      advice = "القسط الشهري مرتفع نسبياً مقارنة بدخلك. ننصح بزيادة الدفعة المقدمة أو تمديد فترة السداد.";
    }
    
    setResult({
      purchasingPower: Math.round(purchasingPower),
      monthlyPayment: Math.round(monthlyPayment),
      advice
    });
  };

  const resetCalculator = () => {
    setFormData({
      monthlySalary: 10000,
      monthlyObligations: 0,
      age: 30,
      sector: 'government',
      hasSupport: 'yes',
      propertyType: 'apartment',
      financingPeriod: 25
    });
    setCurrentStep(1);
    setResult(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">ما هو راتبك الشهري؟</h3>
            <div className="space-y-2">
              <Label htmlFor="monthlySalary">الراتب الشهري (ريال)</Label>
              <Input
                id="monthlySalary"
                type="number"
                value={formData.monthlySalary}
                onChange={(e) => updateFormData('monthlySalary', Number(e.target.value))}
                className="text-right"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">ما هي التزاماتك المالية الشهرية؟</h3>
            <div className="space-y-2">
              <Label htmlFor="monthlyObligations">الالتزامات الشهرية (ريال)</Label>
              <Input
                id="monthlyObligations"
                type="number"
                value={formData.monthlyObligations}
                onChange={(e) => updateFormData('monthlyObligations', Number(e.target.value))}
                className="text-right"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">كم عمرك؟</h3>
            <div className="space-y-2">
              <Label htmlFor="age">العمر (سنة)</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData('age', Number(e.target.value))}
                className="text-right"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">ما هو قطاعك الوظيفي؟</h3>
            <div className="space-y-4">
              <Select
                value={formData.sector}
                onValueChange={(value) => updateFormData('sector', value)}
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر القطاع الوظيفي" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">قطاع حكومي</SelectItem>
                  <SelectItem value="private">قطاع خاص</SelectItem>
                  <SelectItem value="military">قطاع عسكري</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">هل لديك دعم سكني؟</h3>
            <RadioGroup
              value={formData.hasSupport}
              onValueChange={(value) => updateFormData('hasSupport', value)}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="yes" id="support-yes" />
                <Label htmlFor="support-yes">نعم</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="no" id="support-no" />
                <Label htmlFor="support-no">لا</Label>
              </div>
            </RadioGroup>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">ما نوع العقار المطلوب؟</h3>
            <RadioGroup
              value={formData.propertyType}
              onValueChange={(value) => updateFormData('propertyType', value)}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="apartment" id="type-apartment" />
                <Label htmlFor="type-apartment">شقة</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="villa" id="type-villa" />
                <Label htmlFor="type-villa">فيلا</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="land" id="type-land" />
                <Label htmlFor="type-land">أرض</Label>
              </div>
            </RadioGroup>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">مدة التمويل المطلوبة</h3>
            <div className="space-y-6">
              <div className="flex justify-between">
                <span>5 سنوات</span>
                <span>{formData.financingPeriod} سنة</span>
                <span>30 سنة</span>
              </div>
              <Slider
                value={[formData.financingPeriod]}
                min={5}
                max={30}
                step={1}
                onValueChange={(value) => updateFormData('financingPeriod', value[0])}
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderResult = () => {
    if (!result) return null;

    return (
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader className="bg-masar-primary text-white rounded-t-lg">
          <CardTitle className="text-center text-2xl">نتيجة الحساب</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-medium text-masar-gray">القدرة الشرائية التقديرية</h3>
              <p className="text-3xl font-bold text-masar-primary mt-2">
                {result.purchasingPower.toLocaleString()} ريال
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium text-masar-gray">القسط الشهري المتوقع</h3>
              <p className="text-3xl font-bold text-masar-secondary mt-2">
                {result.monthlyPayment.toLocaleString()} ريال
              </p>
            </div>
            
            <div className="bg-masar-light p-4 rounded-lg mt-4">
              <h3 className="font-bold mb-2">نصيحة مخصصة:</h3>
              <p>{result.advice}</p>
            </div>
            
            <Button 
              onClick={resetCalculator}
              variant="outline" 
              className="w-full"
            >
              إعادة الحساب
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 px-4 bg-masar-light/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">حاسبة التمويل العقاري</h1>
              <p className="text-masar-gray mt-2">
                احسب قدرتك الشرائية والقسط الشهري المتوقع بناءً على معلوماتك المالية
              </p>
            </div>
            
            {result ? (
              renderResult()
            ) : (
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b pb-3">
                  <CardTitle className="text-center">خطوة {currentStep} من 7</CardTitle>
                  <CardDescription className="text-center">
                    {Math.round((currentStep / 7) * 100)}% مكتمل
                  </CardDescription>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-masar-primary h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${(currentStep / 7) * 100}%` }}
                    ></div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {renderStep()}
                  
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      disabled={currentStep === 1}
                    >
                      السابق
                    </Button>
                    <Button onClick={handleNextStep}>
                      {currentStep === 7 ? 'احسب النتيجة' : 'التالي'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;
