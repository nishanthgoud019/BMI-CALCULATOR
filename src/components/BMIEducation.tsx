import React from 'react';
import { BookOpen, Heart, Brain, Activity, Users, AlertTriangle } from 'lucide-react';

const BMIEducation: React.FC = () => {
  const bmiRanges = [
    {
      category: 'Underweight',
      range: 'Below 18.5',
      color: 'amber',
      bgClass: 'underweight-settled',
      icon: <AlertTriangle size={24} />,
      description: 'May indicate malnutrition or underlying health conditions',
      risks: ['Weakened immune system', 'Osteoporosis risk', 'Fertility issues', 'Delayed wound healing']
    },
    {
      category: 'Normal Weight',
      range: '18.5 - 24.9',
      color: 'emerald',
      bgClass: 'normal-settled',
      icon: <Heart size={24} />,
      description: 'Associated with lowest risk of weight-related health problems',
      risks: ['Optimal health range', 'Lower disease risk', 'Better longevity', 'Improved quality of life']
    },
    {
      category: 'Overweight',
      range: '25.0 - 29.9',
      color: 'orange',
      bgClass: 'overweight-settled',
      icon: <Activity size={24} />,
      description: 'Increased risk of developing health complications',
      risks: ['High blood pressure', 'Type 2 diabetes risk', 'Heart disease', 'Sleep apnea']
    },
    {
      category: 'Obesity',
      range: '30.0 and above',
      color: 'red',
      bgClass: 'obesity-settled',
      icon: <AlertTriangle size={24} />,
      description: 'Significantly increased risk of serious health conditions',
      risks: ['Cardiovascular disease', 'Diabetes', 'Stroke', 'Certain cancers', 'Joint problems']
    }
  ];

  const facts = [
    {
      icon: <Brain className="text-slate-600" size={28} />,
      title: 'BMI History',
      description: 'Developed by Belgian mathematician Adolphe Quetelet in the 1830s, originally called the "Quetelet Index".'
    },
    {
      icon: <Users className="text-slate-600" size={28} />,
      title: 'Population Tool',
      description: 'BMI was designed for population studies, not individual health assessment. It works best for large groups.'
    },
    {
      icon: <Heart className="text-slate-600" size={28} />,
      title: 'Health Correlation',
      description: 'Studies show BMI correlates with body fat percentage and health risks in most adults.'
    }
  ];

  return (
    <div className="w-full max-w-6xl glass-morphism rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 px-8 py-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <BookOpen className="text-white" size={28} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Understanding BMI</h2>
            <p className="text-slate-200 text-sm">Comprehensive guide to Body Mass Index</p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-12">
        {/* BMI Categories */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">BMI Categories & Health Implications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bmiRanges.map((range, index) => (
              <div key={index} className={`health-card glass-card rounded-xl p-6 border text-center ${range.bgClass}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <div className="text-current">
                    {range.icon}
                  </div>
                </div>
                <h4 className="font-bold mb-2">{range.category}</h4>
                <p className="font-semibold mb-3">{range.range}</p>
                <p className="text-sm mb-4 opacity-90">{range.description}</p>
                <div className="space-y-1">
                  {range.risks.map((risk, idx) => (
                    <div key={idx} className="text-xs bg-white/30 rounded-full px-3 py-1">
                      {risk}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BMI Facts */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">BMI Facts & Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="health-card glass-card rounded-xl p-6 border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  {fact.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-3">{fact.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BMI Limitations */}
        <div className="glass-card rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">BMI Limitations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">What BMI Doesn't Measure:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Muscle mass vs. fat mass</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Fat distribution (visceral vs. subcutaneous)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Bone density</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Age and gender differences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Ethnic variations in body composition</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Better Health Indicators:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Waist circumference</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Waist-to-hip ratio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Body fat percentage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Blood pressure and cholesterol</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Overall fitness level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-card rounded-xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Remember</h3>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
            BMI is just one tool among many for assessing health. It's most useful when combined with other measurements 
            and evaluated by healthcare professionals who can consider your individual circumstances, medical history, 
            and overall health picture. Focus on maintaining a healthy lifestyle through balanced nutrition, regular 
            physical activity, and adequate rest rather than fixating solely on BMI numbers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMIEducation;