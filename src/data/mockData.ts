import type { Task, TeamMember } from '../types/task';

export const teamMembers: TeamMember[] = [
  { id: 'adedamola', name: 'Adedamola Folaranmi', initials: 'AF' },
  { id: 'bayo', name: 'Bayo Ogechukwu', initials: 'BO' },
  { id: 'ngozi', name: 'Ngozi Peace', initials: 'NP' },
  { id: 'oni', name: 'Oni Bimi', initials: 'OB' },
];

export const initialTasks: Task[] = [
  { id: 1, employeeId: 'adedamola', title: 'Finalize onboarding flow', dueTime: '10:30 AM', dueMinutes: 630, status: 'pending', risk: 'at-risk' },
  { id: 2, employeeId: 'bayo', title: 'Validate analytics events', dueTime: '11:00 AM', dueMinutes: 660, status: 'complete', risk: 'none' },
  { id: 3, employeeId: 'ngozi', title: 'Prepare research summary', dueTime: '1:30 PM', dueMinutes: 810, status: 'pending', risk: 'watch' },
  { id: 4, employeeId: 'oni', title: 'Resolve mobile navigation bug', dueTime: '2:00 PM', dueMinutes: 840, status: 'pending', risk: 'at-risk' },
  { id: 5, employeeId: 'adedamola', title: 'Share usability notes', dueTime: '3:00 PM', dueMinutes: 900, status: 'pending', risk: 'none' },
  { id: 6, employeeId: 'oni', title: 'Update release checklist', dueTime: '4:30 PM', dueMinutes: 990, status: 'complete', risk: 'none' },
  { id: 7, employeeId: 'adedamola', title: 'Review empty-state copy', dueTime: '9:00 AM', dueMinutes: 540, status: 'complete', risk: 'none' },
  { id: 8, employeeId: 'adedamola', title: 'Confirm accessibility labels', dueTime: '11:45 AM', dueMinutes: 705, status: 'complete', risk: 'none' },
  { id: 9, employeeId: 'adedamola', title: 'Document handoff decisions', dueTime: '1:00 PM', dueMinutes: 780, status: 'complete', risk: 'none' },
  { id: 10, employeeId: 'adedamola', title: 'Sync prototype annotations', dueTime: '5:00 PM', dueMinutes: 1020, status: 'complete', risk: 'none' },
  { id: 11, employeeId: 'bayo', title: 'Check dashboard event naming', dueTime: '9:15 AM', dueMinutes: 555, status: 'complete', risk: 'none' },
  { id: 12, employeeId: 'bayo', title: 'Verify conversion tracking', dueTime: '12:15 PM', dueMinutes: 735, status: 'complete', risk: 'none' },
  { id: 13, employeeId: 'bayo', title: 'Publish reporting notes', dueTime: '2:30 PM', dueMinutes: 870, status: 'complete', risk: 'none' },
  { id: 14, employeeId: 'bayo', title: 'Audit experiment properties', dueTime: '3:45 PM', dueMinutes: 945, status: 'pending', risk: 'none' },
  { id: 15, employeeId: 'bayo', title: 'Reconcile campaign sources', dueTime: '5:15 PM', dueMinutes: 1035, status: 'pending', risk: 'none' },
  { id: 16, employeeId: 'ngozi', title: 'Clean interview transcripts', dueTime: '9:30 AM', dueMinutes: 570, status: 'complete', risk: 'none' },
  { id: 17, employeeId: 'ngozi', title: 'Tag recurring pain points', dueTime: '10:45 AM', dueMinutes: 645, status: 'complete', risk: 'none' },
  { id: 18, employeeId: 'ngozi', title: 'Update insight repository', dueTime: '12:30 PM', dueMinutes: 750, status: 'complete', risk: 'none' },
  { id: 19, employeeId: 'ngozi', title: 'Prepare stakeholder readout', dueTime: '4:00 PM', dueMinutes: 960, status: 'in-progress', risk: 'none' },
  { id: 20, employeeId: 'ngozi', title: 'Archive consent records', dueTime: '5:30 PM', dueMinutes: 1050, status: 'complete', risk: 'none' },
  { id: 21, employeeId: 'oni', title: 'Retest navigation fix', dueTime: '10:00 AM', dueMinutes: 600, status: 'complete', risk: 'none' },
  { id: 22, employeeId: 'oni', title: 'Review open pull requests', dueTime: '12:00 PM', dueMinutes: 720, status: 'complete', risk: 'none' },
  { id: 23, employeeId: 'oni', title: 'Update regression cases', dueTime: '2:45 PM', dueMinutes: 885, status: 'pending', risk: 'none' },
  { id: 24, employeeId: 'oni', title: 'Confirm staging deployment', dueTime: '5:45 PM', dueMinutes: 1065, status: 'in-progress', risk: 'none' },
];
