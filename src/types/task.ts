export type TaskStatus = 'complete' | 'pending' | 'in-progress';
export type TaskRisk = 'none' | 'watch' | 'at-risk';

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
}

export interface Task {
  id: number;
  employeeId: string;
  title: string;
  dueTime: string;
  dueMinutes: number;
  status: TaskStatus;
  risk: TaskRisk;
}
