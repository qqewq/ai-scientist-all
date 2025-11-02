
import React, { useState } from 'react';
import { PersonProfile } from '../types';
import { Bot, HeartPulse, Scale, Shield, Users, Target } from 'lucide-react';

interface InputFormProps {
  onSubmit: (profile: PersonProfile) => void;
  isLoading: boolean;
  t: any;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading, t }) => {
  const [profile, setProfile] = useState<PersonProfile>({
    psychology: '',
    health: '',
    social: '',
    values: '',
    cognition: '',
    goal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };
  
  const isFormValid = Object.entries(profile).every(([key, value]) => {
      if (key === 'goal') return true; // goal is optional
      return typeof value === 'string' && value.trim().length > 0;
  });

  const inputFields = [
    { name: 'psychology', label: t.psychologyLabel, placeholder: t.psychologyPlaceholder, icon: <Shield className="w-5 h-5 text-cyan-400" /> },
    { name: 'health', label: t.healthLabel, placeholder: t.healthPlaceholder, icon: <HeartPulse className="w-5 h-5 text-cyan-400" /> },
    { name: 'social', label: t.socialLabel, placeholder: t.socialPlaceholder, icon: <Users className="w-5 h-5 text-cyan-400" /> },
    { name: 'values', label: t.valuesLabel, placeholder: t.valuesPlaceholder, icon: <Scale className="w-5 h-5 text-cyan-400" /> },
    { name: 'cognition', label: t.cognitionLabel, placeholder: t.cognitionPlaceholder, icon: <Bot className="w-5 h-5 text-cyan-400" /> },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-center text-gray-300">
        {t.formDescription}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inputFields.map(field => (
          <div key={field.name} className="relative">
            <div className="absolute top-3 left-3 flex items-center gap-2 text-sm font-semibold text-cyan-300">
              {field.icon}
              <span>{field.label}</span>
            </div>
            <textarea
              name={field.name}
              value={profile[field.name as keyof PersonProfile]}
              onChange={handleChange}
              placeholder={field.placeholder}
              rows={5}
              className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 pt-10 pb-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-gray-200 placeholder-gray-500"
              required
            />
          </div>
        ))}
         <div className="relative md:col-span-2">
            <div className="absolute top-3 left-3 flex items-center gap-2 text-sm font-semibold text-purple-300">
              <Target className="w-5 h-5 text-purple-400" />
              <span>{t.goalLabel}</span>
            </div>
            <textarea
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              placeholder={t.goalPlaceholder}
              rows={3}
              className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 pt-10 pb-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500"
            />
          </div>
      </div>
      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={isLoading || !isFormValid}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30"
        >
          {isLoading ? t.submitButtonLoading : t.submitButton}
        </button>
      </div>
    </form>
  );
};

export default InputForm;
