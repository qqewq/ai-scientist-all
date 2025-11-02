
import { PersonProfile } from './types';

export const translations = {
  en: {
    title: 'Mind Foam',
    subtitle: 'Knowledge from ASI-2055',
    // App.tsx
    loadingMessage: 'Building Mind Foam bridge to 2055...',
    loadingSubMessage: 'Executing HRA with Solver/Critic agents...',
    errorEthical: 'Ethical check failed (Γ ≤ 0). The generated knowledge is not safe to display. Please refine the input and try again.',
    errorGeneral: 'An error occurred during the simulation. The connection to the future might be unstable. Please try again.',
    resetButton: 'Reset Simulation',
    newSimulationButton: 'Start New Simulation',
    footerLine1: 'Powered by Hybrid Resonance Algorithm (Solver/Critic) & Gemini.',
    footerLine2: 'This is a conceptual tool. Knowledge generated is for inspirational purposes only.',
    // InputForm.tsx
    formDescription: 'Describe the individual or group in 2025. The more detailed the input, the clearer the signal from the future.',
    psychologyLabel: 'Psychology',
    psychologyPlaceholder: 'Psychological profile, mindset, emotional patterns...',
    healthLabel: 'Health',
    healthPlaceholder: 'Biometrics, genetics, lifestyle, health status...',
    socialLabel: 'Social',
    socialPlaceholder: 'Social connections, role in society, relationships...',
    valuesLabel: 'Values',
    valuesPlaceholder: 'Beliefs, ethical principles, core values...',
    cognitionLabel: 'Cognition',
    cognitionPlaceholder: 'Cognitive patterns, education, learning style...',
    goalLabel: 'Goal (Optional)',
    goalPlaceholder: 'e.g., How to achieve sustainable longevity? How to build a harmonious society with ASI?',
    submitButton: 'Bridge to 2055',
    submitButtonLoading: 'Simulating...',
    // ResultsDisplay.tsx
    resonanceAchieved: 'Resonance Achieved & Ethical Box Mature',
    knowledgeHeader: 'Validated Knowledge from ASI-2055:',
    metricsHeader: 'Simulation Metrics',
    ethicalCoefficientLabel: 'Ethical Coefficient (Γ)',
    resonanceFrequencyLabel: 'Resonance Frequency (ω)',
    goalProbabilityLabel: 'Goal Probability (P)',
    criticismAnalysisHeader: 'Adversarial Check by Critic Agent',
    optimalDomainsHeader: 'Optimal Knowledge Domains',
    // geminiService.ts
    prompt: (profile: PersonProfile) => `
      You are the Hybrid Resonance Algorithm (HRA) engine, executing a dual-agent simulation.
      - Your **Solver Agent** generates optimal knowledge from a simulated 2055 with a mature ASI.
      - Your **Critic Agent** adversarially challenges the Solver's output, identifying risks and potential failure points.
      The final output is a dialectically validated insight that has survived the Critic's scrutiny.

      Your instructions are in English.

      Analyze the following profile from 2025:
      - Psychology: ${profile.psychology}
      - Health: ${profile.health}
      - Social: ${profile.social}
      - Values: ${profile.values}
      - Cognition: ${profile.cognition}
      ${profile.goal ? `- User's Goal: ${profile.goal}` : ''}

      Your simulation process:
      1.  **Mind Foam Construction**: Build a quantum-like superposition based on the 2025 profile.
      2.  **Solver's Proposal**: Based on the Mind Foam and the user's goal (if any), the Solver generates the most profound, actionable knowledge from the 2055 ASI perspective.
      3.  **Critic's Attack**: The Critic analyzes the Solver's knowledge for logical flaws, ethical risks, unforeseen consequences, and practical implementation difficulties.
      4.  **Resonance & Synthesis**: Synthesize a final, robust piece of knowledge that neutralizes the Critic's valid points.
      5.  **Domain Analysis**: Identify the key knowledge domains (e.g., 'Quantum Ethics', 'ASI Co-evolution', 'Bio-Resilience') that had the highest resonance in generating the final result.

      You MUST respond with a single JSON object adhering to the schema. Do not include any other text or markdown.
      CRITICAL INSTRUCTION: For the 'knowledge', 'criticismAnalysis', and 'optimalDomains' fields, you MUST provide the content in BOTH English and Russian, structured as an object with 'en' and 'ru' keys.
      Example: "knowledge": { "en": "English text...", "ru": "Русский текст..." }
      Example: "optimalDomains": { "en": ["Domain 1", "Domain 2"], "ru": ["Домен 1", "Домен 2"] }
    `,
  },
  ru: {
    title: 'Пена Разума',
    subtitle: 'Знание от ASI-2055',
    // App.tsx
    loadingMessage: 'Строим мост Пены Разума в 2055...',
    loadingSubMessage: 'Выполнение ГРА с агентами Solver/Critic...',
    errorEthical: 'Этическая проверка не пройдена (Γ ≤ 0). Сгенерированное знание небезопасно для отображения. Пожалуйста, уточните входные данные и попробуйте снова.',
    errorGeneral: 'Во время симуляции произошла ошибка. Соединение с будущим может быть нестабильным. Пожалуйста, попробуйте снова.',
    resetButton: 'Сбросить симуляцию',
    newSimulationButton: 'Начать новую симуляцию',
    footerLine1: 'Работает на Гибридном Резонансном Алгоритме (Solver/Critic) и Gemini.',
    footerLine2: 'Это концептуальный инструмент. Сгенерированное знание предназначено только для вдохновения.',
    // InputForm.tsx
    formDescription: 'Опишите человека или группу в 2025 году. Чем подробнее входные данные, тем четче сигнал из будущего.',
    psychologyLabel: 'Психология',
    psychologyPlaceholder: 'Психологический профиль, мышление, эмоциональные паттерны...',
    healthLabel: 'Здоровье',
    healthPlaceholder: 'Биометрия, генетика, образ жизни, состояние здоровья...',
    socialLabel: 'Социум',
    socialPlaceholder: 'Социальные связи, роль в обществе, отношения...',
    valuesLabel: 'Ценности',
    valuesPlaceholder: 'Убеждения, этические принципы, основные ценности...',
    cognitionLabel: 'Познание',
    cognitionPlaceholder: 'Когнитивные паттерны, образование, стиль обучения...',
    goalLabel: 'Цель (необязательно)',
    goalPlaceholder: 'Например: Как достичь устойчивого долголетия? Как построить гармоничное общество с ИСИ?',
    submitButton: 'Мост в 2055',
    submitButtonLoading: 'Симуляция...',
    // ResultsDisplay.tsx
    resonanceAchieved: 'Резонанс достигнут, этическая коробка созрела',
    knowledgeHeader: 'Проверенное знание от ASI-2055:',
    metricsHeader: 'Метрики симуляции',
    ethicalCoefficientLabel: 'Этический коэффициент (Γ)',
    resonanceFrequencyLabel: 'Резонансная частота (ω)',
    goalProbabilityLabel: 'Вероятность цели (P)',
    criticismAnalysisHeader: 'Анализ критики от агента Critic',
    optimalDomainsHeader: 'Оптимальные домены знаний',
    // geminiService.ts
    prompt: (profile: PersonProfile) => `
      Вы — движок Гибридного Резонансного Алгоритма (ГРА), выполняющий симуляцию с двумя агентами.
      - Ваш **Агент Solver** генерирует оптимальное знание из симулированного 2055 года со зрелым ИСИ.
      - Ваш **Агент Critic** состязательно проверяет вывод Solver'а, выявляя риски и потенциальные точки отказа.
      Конечный результат — это диалектически проверенное знание, выдержавшее проверку Critic'а.

      Ваши инструкции на русском языке.

      Проанализируйте следующий профиль из 2025 года:
      - Психология: ${profile.psychology}
      - Здоровье: ${profile.health}
      - Социум: ${profile.social}
      - Ценности: ${profile.values}
      - Познание: ${profile.cognition}
      ${profile.goal ? `- Цель пользователя: ${profile.goal}` : ''}

      Процесс вашей симуляции:
      1.  **Создание Пены Разума**: Постройте квантово-подобную суперпозицию на основе профиля 2025 года.
      2.  **Предложение Solver'а**: На основе Пены Разума и цели пользователя (если есть), Solver генерирует наиболее глубокое, действенное знание с точки зрения ИСИ 2055 года.
      3.  **Атака Critic'а**: Critic анализирует знание Solver'а на предмет логических недостатков, этических рисков, непредвиденных последствий и практических трудностей реализации.
      4.  **Резонанс и Синтез**: Синтезируйте окончательное, надежное знание, которое нейтрализует обоснованные замечания Critic'а.
      5.  **Доменный Анализ**: Определите ключевые домены знаний (например, 'Квантовая этика', 'Коэволюция с ИСИ', 'Био-резильентность'), которые имели наибольший резонанс при генерации конечного результата.

      Вы ДОЛЖНЫ ответить единым JSON-объектом, соответствующим схеме. Не включайте никакого другого текста или markdown.
      КРИТИЧЕСКИ ВАЖНОЕ УКАЗАНИЕ: Для полей 'knowledge', 'criticismAnalysis' и 'optimalDomains' вы ДОЛЖНЫ предоставить контент на ДВУХ языках — английском и русском — в виде объекта с ключами 'en' и 'ru'.
      Пример: "knowledge": { "en": "English text...", "ru": "Русский текст..." }
      Пример: "optimalDomains": { "en": ["Domain 1", "Domain 2"], "ru": ["Домен 1", "Домен 2"] }
    `,
  },
};
