export type ProgramObjective = {
  text: string;
};

export type LessonScheduleItem = {
  title: string;
  details?: readonly string[];
};

export type MuallimPhase = {
  range: string;
  topics: readonly string[];
};

export type ProgramLesson = {
  number: number;
  title: string;
  topics: readonly string[];
};

export type ProgramModule = {
  id: string;
  romanNumber: string;
  title: string;
  lessonRange: string;
  lessons: readonly ProgramLesson[];
};

export type AgeAdaptation = {
  id: string;
  ageRange: string;
  note?: string;
  points: readonly string[];
};

export type AssessmentCategory = {
  name: string;
  points: number;
};

export type AssessmentLevel = {
  range: string;
  label: string;
};
