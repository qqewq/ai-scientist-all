
export interface PersonProfile {
  psychology: string;
  health: string;
  social: string;
  values: string;
  cognition: string;
  goal?: string; // Optional goal for the simulation
}

export interface SimulationResult {
  knowledge: string;
  ethicalCoefficient: number;
  resonanceFrequency: number;
  probability: number;
  optimalDomains: string[];
  criticismAnalysis: string;
}
