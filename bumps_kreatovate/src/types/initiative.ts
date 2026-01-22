
export type InitiativeStatus = 'active' | 'coming' | 'closed';

export interface Initiative {
  id: string;
  title: string;
  description: string;
  status: InitiativeStatus;
  views: string;
  clicks: string;
  raised: string;
  link: string;
}
