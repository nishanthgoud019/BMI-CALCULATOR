import React from 'react';
import { TrendingUp, Target, Award } from 'lucide-react';
import type { BMICategory } from '../types';

interface BMIResultProps {
  bmi: number;
  category: BMICategory;
}

const BMIResult: React.FC<BMIResultProps> = ({ bmi, category }) => {
  const getCategoryColor = (cat: BMICategory) => {
    switch (cat) {
      case 'Underweight':
        return {
          text: 'text-amber-800',
          bg: 'underweight-settled',
          border: 'border-amber-500',
          glow: 'shadow-amber-200'
        };
      case 'Normal weight':
        return {
          text: 'text-emerald-800',
          bg: 'normal-settled',
          border: 'border-emerald-500',
          glow: 'shadow-emerald-200'
        };
      case 'Overweight':
        return {
          text: 'text-orange-800',
          bg: 'overweight-settled',
          border: 'border-orange-500',
          glow: 'shadow-orange-200'
        };
      case 'Obesity':
        return {
          text: 'text-red-800',
          bg: 'obesity-settled',
          border: 'border-red-500',
          glow: 'shadow-red-200'
        };
      default:
        return {
          text: 'text-slate-700',
          bg: 'bg-slate-100',
          border: 'border-slate-300',
          glow: 'shadow-slate-200'
        };
    }
  };

  const colors = getCategoryColor(category);
  const bmiPercentage = Math.min(Math.max((bmi / 40) * 100, 0), 100);

  return (
    <div className="glass-card rounded-2xl p-8 border border-slate-200 scale-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-4 py-2 glass-morphism rounded-full mb-4 border border-slate-200">
          <Award className="text-slate-600" size={20} />
          <span className="text-slate-700 font-semibold">Your BMI Results</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="text-center health-card glass-card rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-center mb-3">
            <TrendingUp className="text-slate-600 mr-2" size={24} />
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Your BMI</span>
          </div>
          <div className="relative">
            <span className="text-6xl font-black gradient-text block mb-2">{bmi.toFixed(1)}</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-slate-600/10 to-slate-700/10 rounded-full blur-xl -z-10"></div>
          </div>
          <p className="text-slate-600 text-sm">Body Mass Index</p>
        </div>
        
        <div className="text-center health-card glass-card rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-center mb-3">
            <Target className="text-slate-600 mr-2" size={24} />
            <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Category</span>
          </div>
          <div className={`inline-block px-6 py-3 rounded-full border-2 ${colors.bg} ${colors.border} ${colors.glow} shadow-sm mb-2`}>
            <span className={`text-xl font-bold ${colors.text}`}>
              {category}
            </span>
          </div>
          <p className="text-slate-600 text-sm">Health Classification</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">BMI Scale Visualization</h3>
        </div>
        
        <div className="relative">
          <div className="bmi-scale relative">
            <div 
              className="bmi-pointer"
              style={{ left: `${bmiPercentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-6 text-xs font-semibold">
            <div className="text-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto mb-1"></div>
              <span className="text-amber-700 block">18.5</span>
              <span className="text-slate-500">Underweight</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-1"></div>
              <span className="text-emerald-700 block">25</span>
              <span className="text-slate-500">Normal</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-1"></div>
              <span className="text-orange-700 block">30</span>
              <span className="text-slate-500">Overweight</span>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mx-auto mb-1"></div>
              <span className="text-red-700 block">40+</span>
              <span className="text-slate-500">Obesity</span>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 border border-slate-200 mt-8">
          <div className="text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>BMI</strong> is a screening tool that measures body fat based on height and weight. 
              While useful for general health assessment, it doesn't account for muscle mass, bone density, 
              or fat distribution. Consult healthcare professionals for comprehensive health evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMIResult;