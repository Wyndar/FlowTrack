import { Icon, type IconName } from './Icon';

interface NavigationItem {
  label: string;
  icon: IconName;
  active?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: 'Team overview', icon: 'grid', active: true },
  { label: 'Tasks', icon: 'tasks' },
  { label: 'People', icon: 'people' },
  { label: 'Settings', icon: 'settings' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <a className="brand" href="#main-content" aria-label="FlowTrack home">
          <span className="brand-mark">F</span>
          <span>FlowTrack</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="navigation-list">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  className={`navigation-link${item.active ? ' navigation-link--active' : ''}`}
                  href={item.active ? '#main-content' : '#'}
                  aria-current={item.active ? 'page' : undefined}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="profile-summary">
        <span className="avatar avatar--profile">FB</span>
        <div>
          <strong>FlowTrack manager</strong>
          <span>Design Manager</span>
        </div>
      </div>
    </aside>
  );
}
