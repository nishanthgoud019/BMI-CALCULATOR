import React, { useState } from 'react';
import { Scale, Sparkles } from 'lucide-react';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';
import HealthInfo from './HealthInfo';
import { calculateBMI, getBMICategory } from '../utils/bmiCalculator';
import type { BMICategory } from '../types';

const BMICalculator: React.FC = () => {
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (height: number, weight: number, unit: 'cm' | 'm') => {
    if (height <= 0 || weight <= 0) {
      setError('Height and weight must be positive values');
      return;
    }

    try {
      const calculatedBMI = calculateBMI(height, weight, unit);
      setBMI(calculatedBMI);
      setCategory(getBMICategory(calculatedBMI));
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred during calculation');
      }
    }
  };

  const handleClear = () => {
    setBMI(null);
    setCategory(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl glass-morphism rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] pulse-glow">
      <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 px-8 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Scale className="text-white animate-pulse" size={28} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">BMI Calculator</h1>
              <p className="text-slate-200 text-sm">Professional health assessment tool</p>
            </div>
          </div>
          <Sparkles className="text-slate-300 animate-spin" size={24} style={{ animationDuration: '4s' }} />
        </div>
      </div>
      
      <div className="p-8">
        <BMIForm onCalculate={handleCalculate} onClear={handleClear} error={error} />
        
        {bmi !== null && category && (
          <div className="mt-10 space-y-8 slide-up">
            <BMIResult bmi={bmi} category={category} />
            <HealthInfo category={category} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;