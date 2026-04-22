export interface Course {
  id: string;
  code: string;
  title: string;
  category: string;
  image: string;
  description: string;
  outcomes: string;
  deliveryMode: string;
  durationStructure: string;
  entryRequirements: string[];
  licensingOutcomes: string;
  prerequisites: string;
  tuitionFees?: string;
  nonTuitionFees: string;
  preEnrolmentInfo: string;
  equipmentRequired: string;
  rplProcess: string;
  units: string[];
  deliveryDetail?: string;
  deliveryNotes?: string[];
  unitsCount?: string;
  unitsDetail?: string;
  durationDetail?: string;
  occupations?: string[];
  additionalRequirements?: string;
}
