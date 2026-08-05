import type { Task, TeamMember } from '../types/task';

interface TeamProgressProps {
  members: TeamMember[];
  tasks: Task[];
}

export function TeamProgress({ members, tasks }: TeamProgressProps) {
  return (
    <section className="panel team-progress" aria-labelledby="team-progress-heading">
      <div className="section-heading section-heading--compact">
        <div>
          <h2 id="team-progress-heading">Team progress</h2>
          <p>Daily completion by employee</p>
        </div>
        <a href="#task-table">View tasks →</a>
      </div>

      <div className="team-progress__grid">
        {members.map((member) => {
          const memberTasks = tasks.filter((task) => task.employeeId === member.id);
          const completed = memberTasks.filter((task) => task.status === 'complete').length;
          const percentage = memberTasks.length === 0 ? 0 : Math.round((completed / memberTasks.length) * 100);

          return (
            <article className="person-progress" key={member.id}>
              <div className="person-progress__identity">
                <span className="avatar">{member.initials}</span>
                <div>
                  <strong>{member.name}</strong>
                  <span>{completed} of {memberTasks.length} complete</span>
                </div>
              </div>
              <div
                className="progress-track"
                role="progressbar"
                aria-label={`${member.name} task completion`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percentage}
              >
                <span style={{ width: `${percentage}%` }} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
