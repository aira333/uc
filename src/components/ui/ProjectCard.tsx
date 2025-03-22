
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, GitFork, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className={cn(
        "glass-card rounded-xl overflow-hidden flex flex-col card-hover",
        className
      )}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div 
              className="size-10 rounded-full flex items-center justify-center bg-secondary"
              style={{ backgroundColor: `hsl(${project.id * 30}, 70%, 95%)` }}
            >
              <span className="font-medium text-sm" style={{ color: `hsl(${project.id * 30}, 70%, 40%)` }}>
                {project.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-lg leading-tight">{project.name}</h3>
              <p className="text-xs text-muted-foreground">{project.campus}</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {project.languages.slice(0, 2).map((lang) => (
              <span 
                key={lang} 
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: getLanguageColor(lang).bgColor,
                  color: getLanguageColor(lang).textColor
                }}
              >
                {lang}
              </span>
            ))}
            {project.languages.length > 2 && (
              <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                +{project.languages.length - 2}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
              {topic}
            </span>
          ))}
          {project.topics.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
              +{project.topics.length - 3}
            </span>
          )}
        </div>
      </div>
      
      <div className="px-6 py-3 bg-secondary/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star size={14} />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitFork size={14} />
            <span>{project.forks}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>Updated {project.lastUpdated}</span>
          </div>
        </div>
        <ExternalLink size={14} />
      </div>
    </Link>
  );
};

// Helper function to generate consistent colors for programming languages
function getLanguageColor(language: string) {
  const colors = {
    JavaScript: { bgColor: '#f7df1e30', textColor: '#8a7604' },
    TypeScript: { bgColor: '#3178c630', textColor: '#3178c6' },
    Python: { bgColor: '#3572A530', textColor: '#3572A5' },
    Java: { bgColor: '#b0781130', textColor: '#b07811' },
    'C++': { bgColor: '#f34b7d30', textColor: '#f34b7d' },
    C: { bgColor: '#55577730', textColor: '#555777' },
    'C#': { bgColor: '#17852330', textColor: '#178523' },
    Ruby: { bgColor: '#cc342d30', textColor: '#cc342d' },
    Go: { bgColor: '#00ADD830', textColor: '#00ADD8' },
    PHP: { bgColor: '#4F588530', textColor: '#4F5885' },
    R: { bgColor: '#198CE730', textColor: '#198CE7' },
    Swift: { bgColor: '#F0523030', textColor: '#F05230' },
    Rust: { bgColor: '#DEA58430', textColor: '#DEA584' },
    Kotlin: { bgColor: '#A97BFF30', textColor: '#A97BFF' },
    Scala: { bgColor: '#c2262130', textColor: '#c22621' },
    Jupyter: { bgColor: '#DA5B0B30', textColor: '#DA5B0B' },
  };

  return colors[language as keyof typeof colors] || { bgColor: '#6e768130', textColor: '#6e7681' };
}

export default ProjectCard;
