# FlowTrack Dashboard

A responsive manager dashboard for **FlowTrack**, a mock internal task-tracking tool. The interface lets a manager compare team progress, filter daily work, and flag tasks that may be missed.

## Deliverables

- **Figma design:** [Employee and Manager dashboards](https://www.figma.com/design/A4I8IGaHlv09DLveruoA6X)
- **Working frontend:** Manager dashboard built with React and TypeScript
- **Design note:** [Read the short design rationale](./DESIGN_NOTE.txt)

## Features

- Summary metrics derived from mock task data
- Per-employee completion progress
- Employee, status, and risk filters
- Functional flag and unflag controls
- Accessible semantic table and controls
- Responsive mobile card layout
- GitHub Pages deployment workflow

## Local development

```bash
npm install
npm run dev
```

Run the production checks and build:

```bash
npm run check
npm run build
```

## Assumptions

- Managers manually flag tasks that appear at risk.
- Only task risk is editable in this screen; completion is treated as employee-owned.
- At-risk and watch states are independent of completion status.
- All task data is static and resets when the page reloads.
