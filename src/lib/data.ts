
export interface Project {
  id: number;
  name: string;
  description: string;
  campus: string;
  department: string;
  languages: string[];
  topics: string[];
  stars: number;
  forks: number;
  lastUpdated: string;
  url: string;
  readme?: string;
  contributors?: { name: string; avatar: string }[];
  license?: string;
}

// Mock campuses data
export const campuses = [
  'UC Berkeley',
  'UC Davis',
  'UC Los Angeles',
  'UC San Diego',
  'UC Santa Barbara',
  'UC Santa Cruz',
];

// Mock programming languages data
export const languages = [
  'JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 
  'Go', 'Rust', 'C#', 'R', 'Jupyter', 'PHP', 'Ruby',
  'Swift', 'Kotlin', 'Scala', 'C'
];

// Mock topics data
export const topics = [
  'Machine Learning', 'Data Science', 'Web Development', 
  'Mobile Development', 'Computer Vision', 'Natural Language Processing',
  'IoT', 'Robotics', 'Bioinformatics', 'Climate Science',
  'Education', 'Health', 'Security', 'Database', 'Visualization',
  'API', 'Tools', 'Libraries', 'Frameworks', 'Documentation'
];

// Mock departments data
export const departments = [
  'Computer Science',
  'Electrical Engineering',
  'Bioengineering',
  'Environmental Science',
  'Information Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Medical School',
  'Earth Sciences',
  'Astronomy',
];

// Helper function to generate a random date in the last year
const getRandomDate = () => {
  const now = new Date();
  const monthsAgo = Math.floor(Math.random() * 12);
  const date = new Date(now.setMonth(now.getMonth() - monthsAgo));
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Helper function to generate random items from an array
const getRandomItems = (array: string[], min: number, max: number) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate mock projects data
export const generateProjects = (count: number): Project[] => {
  const projects: Project[] = [];
  
  for (let i = 1; i <= count; i++) {
    const campusIndex = Math.floor(Math.random() * campuses.length);
    const projectLanguages = getRandomItems(languages, 1, 4);
    const projectTopics = getRandomItems(topics, 1, 6);
    const department = departments[Math.floor(Math.random() * departments.length)];
    
    projects.push({
      id: i,
      name: `Project ${i}`,
      description: `This is a description for Project ${i}. It's a ${projectTopics[0]} project developed at ${campuses[campusIndex]}.`,
      campus: campuses[campusIndex],
      department,
      languages: projectLanguages,
      topics: projectTopics,
      stars: Math.floor(Math.random() * 1000),
      forks: Math.floor(Math.random() * 200),
      lastUpdated: getRandomDate(),
      url: `https://github.com/uc-${i}`,
    });
  }
  
  return projects;
};

// Generate 50 mock projects
export const mockProjects = generateProjects(50);

// Sample detailed project with more information
export const getProjectById = (id: number): Project | undefined => {
  const project = mockProjects.find(p => p.id === id);
  
  if (project) {
    // Add additional details for project view
    return {
      ...project,
      readme: `# ${project.name}\n\n## Overview\nThis is a detailed readme for ${project.name}. This project is developed at ${project.campus} by the ${project.department} department.\n\n## Features\n- Feature 1\n- Feature 2\n- Feature 3\n\n## Installation\n\`\`\`bash\nnpm install ${project.name.toLowerCase().replace(/\s/g, '-')}\n\`\`\`\n\n## Usage\n\`\`\`javascript\nimport { exampleFunction } from '${project.name.toLowerCase().replace(/\s/g, '-')}';\n\nexampleFunction();\n\`\`\`\n\n## Contributing\nContributions are welcome!`,
      contributors: Array(5).fill(0).map((_, i) => ({
        name: `Contributor ${i + 1}`,
        avatar: `https://i.pravatar.cc/150?u=${project.id}-${i + 1}`,
      })),
      license: ['MIT', 'Apache-2.0', 'GPL-3.0'][Math.floor(Math.random() * 3)],
    };
  }
  
  return undefined;
};
