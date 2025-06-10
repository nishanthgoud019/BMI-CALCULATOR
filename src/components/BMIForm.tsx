import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Calculator } from 'lucide-react';

interface BMIFormProps {
  onCalculate: (height: number, weight: number, unit: 'cm' | 'm') => void;
  onClear: () => void;
  error: string | null;
}

const BMIForm: React.FC<BMIFormProps> = ({ onCalculate, onClear, error }) => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'm'>('cm');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    
    if (!isNaN(heightValue) && !isNaN(weightValue)) {
      onCalculate(heightValue, weightValue, heightUnit);
    }
  };

  const handleClear = () => {
    setHeight('');
    setWeight('');
    setHeightUnit('cm');
    onClear();
  };

  const getInputClassName = (fieldName: string) => {
    return `w-full px-6 py-4 glass-card rounded-xl transition-all duration-300 input-glow
    ${focusedField === fieldName 
      ? 'border-2 border-slate-300 transform scale-[1.01]' 
      : 'border border-slate-200 hover:border-slate-300'} 
    focus:outline-none text-slate-800 placeholder-slate-500 font-medium`;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full border border-slate-200">
          <Calculator className="text-slate-600" size={20} />
          <span className="text-slate-700 font-medium">Enter your measurements</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label htmlFor="height" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Height
            </label>
            <div className="flex rounded-xl overflow-hidden shadow-sm">
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onFocus={() => setFocusedField('height')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your height"
                className={getInputClassName('height')}
                style={{ borderRadius: '0.75rem 0 0 0.75rem' }}
                step="any"
                required
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value as 'cm' | 'm')}
                className="px-4 py-4 glass-card border-l-0 focus:outline-none focus:ring-2 focus:ring-slate-300 text-slate-700 font-medium border border-slate-200"
                style={{ borderRadius: '0 0.75rem 0.75rem 0' }}
              >
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="weight" className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onFocus={() => setFocusedField('weight')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your weight"
              className={getInputClassName('weight')}
              step="any"
              required
            />
          </div>
        </div>

        {error && (
          <div className="p-6 glass-card rounded-xl border-l-4 border-red-500 scale-in bg-red-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-6 pt-4">
          <button
            type="submit"
            className="flex-1 md:flex-none px-8 py-4 button-gradient text-white font-semibold rounded-xl 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-slate-300
              flex items-center justify-center gap-3 text-lg"
          >
            <Calculator size={20} />
            Calculate BMI 
            <ArrowRight size={20} />
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-8 py-4 glass-card text-slate-700 font-semibold rounded-xl 
              transition-all duration-300 transform hover:scale-105 hover:shadow-sm
              focus:outline-none focus:ring-4 focus:ring-slate-200
              flex items-center justify-center gap-3 border border-slate-200"
          >
            <RotateCcw size={20} />
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default BMIForm;