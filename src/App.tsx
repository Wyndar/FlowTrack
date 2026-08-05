import { useMemo, useState, type ChangeEvent } from 'react';
import { Icon } from './components/Icon';
import { Sidebar } from './components/Sidebar';
import { SummaryCard } from './components/SummaryCard';
import { TaskTable } from './components/TaskTable';
import { TeamProgress } from './components/TeamProgress';
import { initialTasks, teamMembers } from './data/mockData';
import type { TaskRisk, TaskStatus } from './types/task';

const allEmployees = 'all';
const allStatuses = 'all';
const allRisks = 'all';
const dueSoonCutoffMinutes = 15 * 60;

type EmployeeFilter = typeof allEmployees | string;
type StatusFilter = typeof allStatuses | TaskStatus;
type RiskFilter = typeof allRisks | TaskRisk;

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [employeeFilter, setEmployeeFilter] = useState<EmployeeFilter>(allEmployees);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(allStatuses);
  const [riskFilter, setRiskFilter] = useState<RiskFilter>(allRisks);

  const completedCount = tasks.filter((task) => task.status === 'complete').length;
  const pendingCount = tasks.filter((task) => task.status === 'pending').length;
  const atRiskCount = tasks.filter((task) => task.risk === 'at-risk').length;
  const dueSoonCount = tasks.filter(
    (task) => task.status === 'pending' && task.dueMinutes < dueSoonCutoffMinutes,
  ).length;
  const completionRate = Math.round((completedCount / tasks.length) * 100);
  const todayLabel = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  const filteredTasks = useMemo(
    () => tasks.filter((task) => {
      const matchesEmployee = employeeFilter === allEmployees || task.employeeId === employeeFilter;
      const matchesStatus = statusFilter === allStatuses || task.status === statusFilter;
      const matchesRisk = riskFilter === allRisks || task.risk === riskFilter;
      return matchesEmployee && matchesStatus && matchesRisk;
    }),
    [employeeFilter, riskFilter, statusFilter, tasks],
  );


  function handleEmployeeFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    setEmployeeFilter(event.target.value);
  }

  function handleStatusFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(event.target.value as StatusFilter);
  }

  function handleRiskFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    setRiskFilter(event.target.value as RiskFilter);
  }

  function toggleRisk(taskId: number) {
    setTasks((currentTasks) => currentTasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      return {
        ...task,
        risk: task.risk === 'at-risk' ? 'none' : 'at-risk',
      };
    }));
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content" id="main-content">
        <header className="page-header">
          <div>
            <h1>Team overview</h1>
            <p>{todayLabel} · Monitor today’s workload and intervene early.</p>
          </div>
          <div className="header-actions">
            <button className="select-button" type="button" aria-label="Date range: Today">
              Today
              <Icon name="chevronDown" size={14} />
            </button>
            <button className="notification-button" type="button" aria-label="Notifications">
              <Icon name="bell" size={18} />
              <span className="notification-dot" />
            </button>
          </div>
        </header>

        <section className="summary-grid" aria-label="Team task summary">
          <SummaryCard
            label="Total tasks"
            value={tasks.length}
            helper={`Across ${teamMembers.length} team members`}
            icon="grid"
            tone="blue"
          />
          <SummaryCard
            label="Complete"
            value={completedCount}
            helper={`${completionRate}% completion rate`}
            icon="check"
            tone="green"
          />
          <SummaryCard
            label="Pending"
            value={pendingCount}
            helper={`${dueSoonCount} due before 3 PM`}
            icon="warning"
            tone="amber"
          />
          <SummaryCard
            label="At risk"
            value={atRiskCount}
            helper="Needs manager attention"
            icon="warning"
            tone="red"
          />
        </section>

        <TeamProgress members={teamMembers} tasks={tasks} />

        <section className="tasks-section" aria-labelledby="tasks-heading">
          <div className="tasks-toolbar">
            <div className="section-heading">
              <h2 id="tasks-heading">Today’s team tasks</h2>
              <p aria-live="polite">{filteredTasks.length} of {tasks.length} tasks shown</p>
            </div>

            <div className="filters" aria-label="Task filters">
              <label>
                <span className="sr-only">Filter by employee</span>
                <select value={employeeFilter} onChange={handleEmployeeFilterChange}>
                  <option value={allEmployees}>All employees</option>
                  {teamMembers.map((member) => (
                    <option key={member.id} value={member.id}>{member.name}</option>
                  ))}
                </select>
              </label>

              <label>
                <span className="sr-only">Filter by status</span>
                <select value={statusFilter} onChange={handleStatusFilterChange}>
                  <option value={allStatuses}>All statuses</option>
                  <option value="complete">Complete</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In progress</option>
                </select>
              </label>

              <label>
                <span className="sr-only">Filter by risk</span>
                <select value={riskFilter} onChange={handleRiskFilterChange}>
                  <option value={allRisks}>Risk: all</option>
                  <option value="at-risk">At risk</option>
                  <option value="watch">Watch</option>
                  <option value="none">Not flagged</option>
                </select>
              </label>
            </div>
          </div>

          <TaskTable tasks={filteredTasks} members={teamMembers} onToggleRisk={toggleRisk} />
        </section>
      </main>
    </div>
  );
}
