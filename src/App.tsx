import React from 'react';
import BMICalculator from './components/BMICalculator';
import BMIEducation from './components/BMIEducation';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="floating-animation">
        <BMICalculator />
      </div>
      <BMIEducation />
    </div>
  );
}

export default App;