import React from 'react';
import type { BMICategory } from '../types';
import { Info, Heart, Activity, Apple, Brain, Utensils, Scale, Salad, Coffee } from 'lucide-react';

interface HealthInfoProps {
  category: BMICategory;
}

const HealthInfo: React.FC<HealthInfoProps> = ({ category }) => {
  const getCategoryInfo = (cat: BMICategory): { 
    title: string; 
    description: string;
    dietaryAdvice: Array<{ icon: React.ReactNode; title: string; text: string }>;
    lifestyle: Array<{ icon: React.ReactNode; title: string; text: string }>;
    mealPlan: Array<{ time: string; suggestions: string[] }>;
    color: string;
  } => {
    switch (cat) {
      case 'Underweight':
        return {
          title: 'Underweight (BMI < 18.5)',
          description: 'Being underweight might indicate malnutrition or other health problems. Focus on gaining weight healthily through nutrient-dense foods and strength training.',
          dietaryAdvice: [
            {
              icon: <Utensils className="text-amber-600" />,
              title: 'Increase Caloric Intake',
              text: 'Aim for 300-500 calories above your maintenance level. Focus on nutrient-dense foods like nuts, dried fruits, and healthy oils.'
            },
            {
              icon: <Apple className="text-amber-600" />,
              title: 'Protein-Rich Foods',
              text: 'Consume 1.6-2.2g of protein per kg of body weight. Include eggs, lean meats, fish, legumes, and dairy products.'
            },
            {
              icon: <Coffee className="text-amber-600" />,
              title: 'Frequent Meals',
              text: 'Eat 5-6 smaller meals throughout the day instead of 3 large ones. This helps increase overall calorie intake.'
            }
          ],
          lifestyle: [
            {
              icon: <Activity className="text-amber-600" />,
              title: 'Strength Training',
              text: 'Focus on resistance training 3-4 times per week to build muscle mass. Include compound exercises like squats and deadlifts.'
            },
            {
              icon: <Brain className="text-amber-600" />,
              title: 'Rest & Recovery',
              text: 'Ensure 7-9 hours of quality sleep. Adequate rest is crucial for muscle growth and weight gain.'
            }
          ],
          mealPlan: [
            {
              time: 'Breakfast (7-8 AM)',
              suggestions: [
                'Oatmeal with nuts, seeds, and dried fruits',
                'Whole grain toast with avocado and eggs',
                'Protein smoothie with banana and peanut butter'
              ]
            },
            {
              time: 'Mid-Morning (10-11 AM)',
              suggestions: [
                'Greek yogurt with honey and granola',
                'Trail mix with dried fruits and nuts',
                'Protein bar with a banana'
              ]
            },
            {
              time: 'Lunch (1-2 PM)',
              suggestions: [
                'Quinoa bowl with grilled chicken and vegetables',
                'Whole grain pasta with olive oil and protein source',
                'Rice bowl with beans, avocado, and eggs'
              ]
            }
          ],
          color: 'amber'
        };
      case 'Normal weight':
        return {
          title: 'Normal Weight (BMI 18.5–24.9)',
          description: 'Maintain your healthy weight by balancing nutrition and physical activity. Focus on sustainable habits and regular exercise.',
          dietaryAdvice: [
            {
              icon: <Salad className="text-emerald-600" />,
              title: 'Balanced Nutrition',
              text: 'Maintain a balanced diet with 45-65% carbohydrates, 20-35% fats, and 10-35% protein. Focus on whole foods.'
            },
            {
              icon: <Apple className="text-emerald-600" />,
              title: 'Portion Control',
              text: 'Use the plate method: ½ vegetables, ¼ lean protein, ¼ whole grains. Listen to your hunger cues.'
            },
            {
              icon: <Coffee className="text-emerald-600" />,
              title: 'Hydration',
              text: 'Drink 8-10 glasses of water daily. Include herbal teas and limit sugary beverages.'
            }
          ],
          lifestyle: [
            {
              icon: <Activity className="text-emerald-600" />,
              title: 'Mixed Exercise',
              text: '150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus strength training.'
            },
            {
              icon: <Brain className="text-emerald-600" />,
              title: 'Stress Management',
              text: 'Practice stress-reducing activities like meditation, yoga, or regular walks in nature.'
            }
          ],
          mealPlan: [
            {
              time: 'Breakfast (7-8 AM)',
              suggestions: [
                'Overnight oats with berries and seeds',
                'Whole grain toast with eggs and spinach',
                'Smoothie bowl with fruits and granola'
              ]
            },
            {
              time: 'Lunch (12-1 PM)',
              suggestions: [
                'Mixed green salad with grilled chicken',
                'Quinoa buddha bowl with roasted vegetables',
                'Whole grain wrap with hummus and vegetables'
              ]
            },
            {
              time: 'Dinner (6-7 PM)',
              suggestions: [
                'Grilled fish with roasted vegetables',
                'Stir-fried tofu with brown rice',
                'Lean protein with sweet potato'
              ]
            }
          ],
          color: 'emerald'
        };
      case 'Overweight':
        return {
          title: 'Overweight (BMI 25–29.9)',
          description: 'Focus on gradual, sustainable weight loss through a combination of calorie reduction and increased physical activity.',
          dietaryAdvice: [
            {
              icon: <Scale className="text-orange-600" />,
              title: 'Calorie Awareness',
              text: 'Create a moderate calorie deficit of 500-750 calories per day for sustainable weight loss of 0.5-1kg per week.'
            },
            {
              icon: <Apple className="text-orange-600" />,
              title: 'Food Quality',
              text: 'Choose nutrient-dense, whole foods. Increase fiber intake through vegetables, fruits, and whole grains.'
            },
            {
              icon: <Salad className="text-orange-600" />,
              title: 'Meal Timing',
              text: 'Plan regular meals to avoid overeating. Consider intermittent fasting under professional guidance.'
            }
          ],
          lifestyle: [
            {
              icon: <Activity className="text-orange-600" />,
              title: 'Progressive Exercise',
              text: 'Start with walking 30 minutes daily, gradually increase intensity. Add resistance training 2-3 times per week.'
            },
            {
              icon: <Brain className="text-orange-600" />,
              title: 'Behavioral Changes',
              text: 'Keep a food diary, practice mindful eating, and identify emotional eating triggers.'
            }
          ],
          mealPlan: [
            {
              time: 'Breakfast (7-8 AM)',
              suggestions: [
                'Greek yogurt with berries and chia seeds',
                'Egg white omelet with vegetables',
                'Steel-cut oats with protein powder'
              ]
            },
            {
              time: 'Lunch (12-1 PM)',
              suggestions: [
                'Large salad with grilled chicken breast',
                'Lentil soup with mixed vegetables',
                'Tuna wrap with lots of vegetables'
              ]
            },
            {
              time: 'Dinner (6-7 PM)',
              suggestions: [
                'Baked fish with roasted vegetables',
                'Turkey breast with quinoa and greens',
                'Vegetarian stir-fry with tofu'
              ]
            }
          ],
          color: 'orange'
        };
      case 'Obesity':
        return {
          title: 'Obesity (BMI ≥ 30)',
          description: 'Professional medical guidance is recommended. Focus on sustainable lifestyle changes and gradual weight loss.',
          dietaryAdvice: [
            {
              icon: <Heart className="text-red-600" />,
              title: 'Medical Supervision',
              text: 'Work with healthcare providers to create a safe and effective weight loss plan. Consider professional nutritional counseling.'
            },
            {
              icon: <Apple className="text-red-600" />,
              title: 'Structured Eating',
              text: 'Follow a structured meal plan with portion control. Focus on lean proteins, vegetables, and whole grains.'
            },
            {
              icon: <Salad className="text-red-600" />,
              title: 'Eliminate Triggers',
              text: 'Identify and remove food triggers from your environment. Plan meals and snacks in advance.'
            }
          ],
          lifestyle: [
            {
              icon: <Activity className="text-red-600" />,
              title: 'Safe Exercise',
              text: 'Begin with low-impact activities like swimming or walking. Gradually increase duration and intensity.'
            },
            {
              icon: <Brain className="text-red-600" />,
              title: 'Support System',
              text: 'Join support groups or work with a counselor to address emotional aspects of eating.'
            }
          ],
          mealPlan: [
            {
              time: 'Breakfast (7-8 AM)',
              suggestions: [
                'Protein smoothie with spinach and berries',
                'Egg whites with vegetables and whole grain toast',
                'High-fiber cereal with unsweetened almond milk'
              ]
            },
            {
              time: 'Lunch (12-1 PM)',
              suggestions: [
                'Grilled chicken salad with light dressing',
                'Bean and vegetable soup',
                'Turkey and vegetable wrap'
              ]
            },
            {
              time: 'Dinner (6-7 PM)',
              suggestions: [
                'Baked fish with steamed vegetables',
                'Lean protein with cauliflower rice',
                'Vegetable stir-fry with tofu'
              ]
            }
          ],
          color: 'red'
        };
      default:
        return {
          title: 'BMI Information',
          description: 'BMI is a screening tool but doesn\'t diagnose body fatness or health.',
          dietaryAdvice: [
            {
              icon: <Info className="text-slate-600" />,
              title: 'Balanced Diet',
              text: 'Maintain a balanced diet with all essential nutrients.'
            }
          ],
          lifestyle: [
            {
              icon: <Activity className="text-slate-600" />,
              title: 'Regular Exercise',
              text: 'Stay active with regular physical activity.'
            }
          ],
          mealPlan: [
            {
              time: 'General Advice',
              suggestions: [
                'Consult with healthcare professionals for personalized advice'
              ]
            }
          ],
          color: 'slate'
        };
    }
  };

  const info = getCategoryInfo(category);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm bg-white/90 backdrop-blur-sm">
      <div className={`flex items-center gap-2 bg-${info.color}-50 p-4 border-b border-slate-200`}>
        <Info size={20} className={`text-${info.color}-600`} />
        <h2 className="text-lg font-medium text-slate-800">Personalized Health Information</h2>
      </div>
      
      <div className="p-6 space-y-8">
        <div>
          <h3 className="font-medium text-slate-800 mb-2">{info.title}</h3>
          <p className="text-slate-600">{info.description}</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-slate-800 mb-4">Dietary Recommendations:</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {info.dietaryAdvice.map((advice, index) => (
                <div key={index} className="health-tip p-4 rounded-lg bg-white/70 hover:bg-white/90 transition-all duration-300 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    {advice.icon}
                    <h5 className="font-medium text-slate-700">{advice.title}</h5>
                  </div>
                  <p className="text-slate-600 text-sm">{advice.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-slate-800 mb-4">Lifestyle Recommendations:</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {info.lifestyle.map((item, index) => (
                <div key={index} className="health-tip p-4 rounded-lg bg-white/70 hover:bg-white/90 transition-all duration-300 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h5 className="font-medium text-slate-700">{item.title}</h5>
                  </div>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-slate-800 mb-4">Sample Meal Plan:</h4>
            <div className="space-y-4">
              {info.mealPlan.map((meal, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/70 border border-slate-100">
                  <h5 className="font-medium text-slate-700 mb-2">{meal.time}</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {meal.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="text-slate-600 text-sm">{suggestion}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm text-slate-700 italic">
            Note: These recommendations are general guidelines. Always consult with healthcare professionals for personalized advice tailored to your specific needs and medical conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthInfo;