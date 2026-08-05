import { Icon } from './Icon';
import type { Task, TaskRisk, TaskStatus, TeamMember } from '../types/task';

interface TaskTableProps {
  tasks: Task[];
  members: TeamMember[];
  onToggleRisk: (taskId: number) => void;
}

const statusLabels: Record<TaskStatus, string> = {
  complete: 'Complete',
  pending: 'Pending',
  'in-progress': 'In progress',
};

const riskLabels: Record<TaskRisk, string> = {
  none: '—',
  watch: 'Watch',
  'at-risk': 'At risk',
};

export function TaskTable({ tasks, members, onToggleRisk }: TaskTableProps) {
  const memberMap = new Map(members.map((member) => [member.id, member]));

  return (
    <div className="table-shell" id="task-table">
      <table className="task-table">
        <caption className="sr-only">Today’s team tasks and delivery risk</caption>
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Task</th>
            <th scope="col">Due</th>
            <th scope="col">Status</th>
            <th scope="col">Risk</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const member = memberMap.get(task.employeeId);
            if (!member) {
              return null;
            }

            return (
              <tr key={task.id}>
                <td data-label="Employee">
                  <div className="employee-cell">
                    <span className="avatar">{member.initials}</span>
                    <strong>{member.name}</strong>
                  </div>
                </td>
                <td data-label="Task">{task.title}</td>
                <td className={task.risk === 'at-risk' ? 'due-time due-time--urgent' : 'due-time'} data-label="Due">
                  {task.dueTime}
                </td>
                <td data-label="Status">
                  <span className={`status-badge status-badge--${task.status}`}>
                    {statusLabels[task.status]}
                  </span>
                </td>
                <td data-label="Risk">
                  <span className={`risk-badge risk-badge--${task.risk}`}>
                    {riskLabels[task.risk]}
                  </span>
                </td>
                <td data-label="Action">
                  <button
                    className={`flag-button${task.risk === 'at-risk' ? ' flag-button--active' : ''}`}
                    type="button"
                    onClick={() => onToggleRisk(task.id)}
                    aria-pressed={task.risk === 'at-risk'}
                    aria-label={`${task.risk === 'at-risk' ? 'Remove risk flag from' : 'Flag'} ${task.title}`}
                  >
                    <Icon name="flag" size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {tasks.length === 0 && (
        <div className="empty-state" role="status">
          <strong>No matching tasks</strong>
          <span>Adjust the filters to see more of the team’s work.</span>
        </div>
      )}
    </div>
  );
}
