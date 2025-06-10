import type { BMICategory } from '../types';

/**
 * Calculate BMI based on height and weight
 * @param height Height in cm or m
 * @param weight Weight in kg
 * @param unit Unit of height measurement ('cm' or 'm')
 * @returns Calculated BMI value
 */
export const calculateBMI = (height: number, weight: number, unit: 'cm' | 'm'): number => {
  if (height <= 0 || weight <= 0) {
    throw new Error('Height and weight must be positive values');
  }

  // Convert height to meters if it's in centimeters
  const heightInMeters = unit === 'cm' ? height / 100 : height;
  
  // Calculate BMI: weight (kg) / (height (m))^2
  const bmi = weight / (heightInMeters * heightInMeters);
  
  // Return BMI rounded to 2 decimal places
  return Math.round(bmi * 100) / 100;
};

/**
 * Determine BMI category based on the calculated BMI value
 * @param bmi Calculated BMI value
 * @returns BMI category
 */
export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
};