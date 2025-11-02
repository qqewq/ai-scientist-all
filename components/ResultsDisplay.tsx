import React from 'react';
import { SimulationResult } from '../types';
import { CheckCircle, BarChart, Zap, Target, ShieldCheck, Layers } from 'lucide-react';

interface ResultsDisplayProps {
  result: SimulationResult;
  t: any;
  language: 'en' | 'ru';
}

const colorStyles = {
    green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        from: 'from-green-400',
        to: 'to-green-200',
    },
    cyan: {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        from: 'from-cyan-400',
        to: 'to-cyan-200',
    },
    yellow: {
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-400',
        from: 'from-yellow-400',
        to: 'to-yellow-200',
    },
};

type Color = keyof typeof colorStyles;

const MetricCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; color: Color }> = ({ icon, label, value, color }) => {
  const styles = colorStyles[color];
  return (
    <div className={`flex-1 p-4 bg-gray-900/50 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center min-w-[140px]`}>
        <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-3 ${styles.bg}`}>
            {React.cloneElement(icon as React.ReactElement, { className: `w-6 h-6 ${styles.text}` })}
        </div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${styles.from} ${styles.to}`}>{value}</p>
    </div>
)};

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, t, language }) => {
  return (
    <div className="space-y-8">
      <div className="text-center p-4 bg-green-900/30 border border-green-500/50 rounded-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-semibold text-green-300">{t.resonanceAchieved}</h2>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl shadow-2xl shadow-purple-500/10 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-lg font-semibold text-purple-300 mb-2">{t.knowledgeHeader}</h3>
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-serif italic">
          "{result.knowledge[language]}"
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
           <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-6 h-6 text-yellow-400"/>
              <h3 className="text-lg font-semibold text-yellow-300">{t.criticismAnalysisHeader}</h3>
           </div>
           <p className="text-gray-300 text-sm leading-relaxed">{result.criticismAnalysis[language]}</p>
        </div>
        <div className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
                <Layers className="w-6 h-6 text-cyan-400"/>
                <h3 className="text-lg font-semibold text-cyan-300">{t.optimalDomainsHeader}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {result.optimalDomains[language].map((domain, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-900/50 text-cyan-200 text-sm font-medium rounded-full border border-cyan-700">
                        {domain}
                    </span>
                ))}
            </div>
        </div>
      </div>
      
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">{t.metricsHeader}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <MetricCard 
            icon={<BarChart />} 
            label={t.ethicalCoefficientLabel}
            value={result.ethicalCoefficient.toFixed(3)}
            color="green"
          />
          <MetricCard 
            icon={<Zap />} 
            label={t.resonanceFrequencyLabel} 
            value={result.resonanceFrequency.toFixed(2)}
            color="cyan"
          />
          <MetricCard 
            icon={<Target />} 
            label={t.goalProbabilityLabel}
            value={`${result.probability.toFixed(1)}%`}
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;