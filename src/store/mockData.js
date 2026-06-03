export const mockProjects = [
  { id: 1, name: 'Skyline Tower', client: 'Apex Group', status: 'Active', currentMilestone: '02 - Schematic Design', progress: 45 },
  { id: 2, name: 'Riverfront Mall', client: 'Riverfront Corp', status: 'Active', currentMilestone: '08 - Site Work in Progress', progress: 80 },
  { id: 3, name: 'Tech Park', client: 'Global Tech', status: 'Planning', currentMilestone: '01 - Design Brief', progress: 15 },
];

export const mockClients = [
  { id: 1, name: 'Apex Group', contact: 'John Doe', email: 'john.doe@apexgroup.com', phone: '+1 (555) 123-4567', projectsCount: 2 },
  { id: 2, name: 'Riverfront Corp', contact: 'Sarah Smith', email: 'sarah.s@riverfront.com', phone: '+1 (555) 987-6543', projectsCount: 1 },
  { id: 3, name: 'Global Tech', contact: 'Michael Chen', email: 'm.chen@globaltech.io', phone: '+1 (555) 456-7890', projectsCount: 3 },
  { id: 4, name: 'Horizon Estates', contact: 'Emma Wilson', email: 'emma@horizonestates.net', phone: '+1 (555) 234-5678', projectsCount: 0 }
];

export const mockConsultants = [
  { id: 1, type: 'STR', company: 'BuildStrong Structural', contact: 'Rajiv Sharma', email: 'rajiv@buildstrong.com', phone: '+1 (555) 111-2222', activeProjects: 2 },
  { id: 2, type: 'STR', company: 'Prime Engineering', contact: 'Anita Patel', email: 'anita@primeeng.com', phone: '+1 (555) 111-3333', activeProjects: 1 },
  { id: 3, type: 'MEPF', company: 'Airflow Systems', contact: 'Amit Kumar', email: 'amit@airflow.com', phone: '+1 (555) 222-1111', activeProjects: 3 },
  { id: 4, type: 'Liaison', company: 'City Permits Inc.', contact: 'Suresh Menon', email: 'suresh@citypermits.com', phone: '+1 (555) 333-1111', activeProjects: 1 },
  { id: 5, type: 'Landscape', company: 'Green Earth Designs', contact: 'Nina Singh', email: 'nina@greenearth.com', phone: '+1 (555) 444-1111', activeProjects: 2 },
  { id: 6, type: 'Facade', company: 'Glass & Steel Co.', contact: 'Vikram Joshi', email: 'vikram@glasssteel.com', phone: '+1 (555) 555-1111', activeProjects: 1 },
  { id: 7, type: 'Render Agency', company: 'Pixel Perfect Studios', contact: 'Neha Gupta', email: 'neha@pixelperfect.com', phone: '+1 (555) 666-1111', activeProjects: 4 },
  { id: 8, type: 'Contractor', company: 'Solid Foundations Ltd', contact: 'Rahul Desai', email: 'rahul@solidfoundations.com', phone: '+1 (555) 777-1111', activeProjects: 2 },
  { id: 9, type: 'Vendor', company: 'Material Supplies HQ', contact: 'Karan Shah', email: 'karan@materialsupplies.com', phone: '+1 (555) 888-1111', activeProjects: 5 },
  { id: 10, type: 'Vendor', company: 'Lumber World', contact: 'Simran Kaur', email: 'simran@lumberworld.com', phone: '+1 (555) 888-2222', activeProjects: 1 },
];

export const mockProjectMilestones = [
  { id: '1', phase: '1. Concept Design', owner: 'Architect', dueDate: 'Oct 15, 2026', status: 'Completed', progress: 100 },
  { id: '2', phase: '2. Schematic Design', owner: 'Architect', dueDate: 'Nov 10, 2026', status: 'In Progress', progress: 60 },
  { id: '3', phase: '3. Design Development', owner: 'STR & MEPF', dueDate: 'Dec 05, 2026', status: 'Delayed', progress: 0 },
  { id: '4', phase: '4. Good For Construction', owner: 'Contractor', dueDate: 'Jan 20, 2027', status: 'Pending', progress: 0 },
];

export const mockQueries = [
  { id: 1, project: 'Skyline Tower', subject: 'Clarification on facade material', author: 'Client', status: 'Pending', date: '2026-06-03' },
  { id: 2, project: 'Tech Park', subject: 'Budget approval for concept changes', author: 'Architect', status: 'Pending', date: '2026-06-02' },
];

export const mockRoles = [
  { role: 'Architect', name: 'Priya Desai' },
  { role: 'STR', name: 'Rajiv Sharma' },
  { role: 'MEPF', name: 'Amit Kumar' },
  { role: 'Client', name: 'Apex Group Rep' }
];

export const mockDocuments = [
  { id: 1, name: 'Site_Plan_v2.pdf', type: 'PDF', date: '2026-06-01', uploadedBy: 'Architect' },
  { id: 2, name: 'Structural_Analysis.docx', type: 'DOCX', date: '2026-05-28', uploadedBy: 'STR' }
];

export const mockActions = [
  { id: 1, text: 'Approve facade material selection', requiredBy: 'Client', due: '2026-06-05' },
  { id: 2, text: 'Submit revised schematic drawings', requiredBy: 'Architect', due: '2026-06-04' }
];

export const milestones = [
  { id: '01', name: 'Design Brief' },
  { id: '02', name: 'Feasibility' },
  { id: '03', name: 'Concept Design' },
  { id: '04', name: 'Schematic Design' },
  { id: '05', name: 'Liaison / Approval Drawings' },
  { id: '06', name: 'Detail Design' },
  { id: '06A', name: 'Tendering' },
  { id: '07', name: 'Working Drawings' },
  { id: '07A', name: 'GFC Architecture' },
  { id: '07B', name: 'GFC Interior' },
  { id: '08', name: 'Site Work in Progress' },
  { id: '09', name: 'Closure / Handover' }
];

export const matrix = {
  'Client': {
    '01': ['Approve'],
    '02': ['Approve'],
    '03': ['Approve'],
    '04': ['Approve'],
    '05': ['Review'],
    '06': ['Review'],
    '06A': ['Review', 'Approve'],
    '07': ['Review'],
    '07A': ['Review'],
    '07B': ['Review'],
    '08': ['Review'],
    '09': ['Approve']
  },
  'Architect': {
    '01': ['Approve'],
    '02': ['Approve'],
    '03': ['Approve', 'Submit'],
    '04': ['Approve', 'Submit'],
    '05': ['Support'],
    '06': ['Approve', 'Submit'],
    '06A': ['Approve', 'Submit'],
    '07': ['Approve', 'Submit'],
    '07A': ['Approve', 'Submit'],
    '07B': ['Approve', 'Submit'],
    '08': ['Approve', 'Submit'],
    '09': ['Approve', 'Submit']
  }
};
