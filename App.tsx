
import React, { useState, useCallback } from 'react';
import { PersonProfile, SimulationResult } from './types';
import { runSimulation } from './services/geminiService';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import { BrainCircuit, Loader, Zap } from 'lucide-react';
import { translations } from './localization';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [personProfile, setPersonProfile] = useState<PersonProfile | null>(null);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ru' : 'en'));
  };

  const handleSubmit = useCallback(async (profile: PersonProfile) => {
    setIsLoading(true);
    setError(null);
    setSimulationResult(null);
    setPersonProfile(profile);

    try {
      const result = await runSimulation(profile, language);
      if (result.ethicalCoefficient <= 0) {
        setError(t.errorEthical);
      } else {
        setSimulationResult(result);
      }
    } catch (e) {
      console.error(e);
      setError(t.errorGeneral);
    } finally {
      setIsLoading(false);
    }
  }, [language, t.errorEthical, t.errorGeneral]);

  const handleReset = () => {
    setPersonProfile(null);
    setSimulationResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="absolute top-0 right-0 z-10">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-gray-700 text-sm font-semibold rounded-md hover:bg-gray-600 transition-colors"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>
        </div>

        <header className="text-center mb-8 pt-10 sm:pt-0">
          <div className="flex items-center justify-center gap-4 mb-2">
            <BrainCircuit className="w-10 h-10 text-cyan-400" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {t.title}
            </h1>
          </div>
          <p className="text-lg text-gray-400">{t.subtitle}</p>
        </header>

        <main className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-500/10 p-6 sm:p-8 border border-gray-700">
          {!simulationResult && !isLoading && (
            <InputForm onSubmit={handleSubmit} isLoading={isLoading} t={t} />
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[300px]">
              <Loader className="w-16 h-16 text-cyan-400 animate-spin" />
              <p className="text-lg text-gray-300">{t.loadingMessage}</p>
              <p className="text-sm text-gray-500">{t.loadingSubMessage}</p>
            </div>
          )}

          {error && (
            <div className="text-center p-4">
              <p className="text-red-400">{error}</p>
              <button
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20"
              >
                {t.resetButton}
              </button>
            </div>
          )}

          {simulationResult && (
            <div>
              <ResultsDisplay result={simulationResult} t={t} />
              <div className="text-center mt-8">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors duration-300 shadow-lg shadow-purple-500/20"
                >
                  <Zap className="w-5 h-5" />
                  {t.newSimulationButton}
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="text-center mt-8 text-sm text-gray-600">
          <p>{t.footerLine1}</p>
          <p>{t.footerLine2}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
