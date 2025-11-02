
export interface BilingualString {
  en: string;
  ru: string;
}

export interface BilingualStringArray {
  en: string[];
  ru: string[];
}

export interface PersonProfile {
  psychology: string;
  health: string;
  social: string;
  values: string;
  cognition: string;
  goal?: string; // Optional goal for the simulation
}

export interface SimulationResult {
  knowledge: BilingualString;
  ethicalCoefficient: number;
  resonanceFrequency: number;
  probability: number;
  optimalDomains: BilingualStringArray;
  criticismAnalysis: BilingualString;
}
