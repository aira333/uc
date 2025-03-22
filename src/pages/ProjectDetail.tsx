
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { useProject } from '@/lib/hooks/useProjects';
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Calendar, FileText, Users, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : undefined;
  const { project, isLoading, error } = useProject(projectId);

  if (isLoading) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-secondary/50 rounded w-3/4"></div>
            <div className="h-4 bg-secondary/50 rounded w-1/2"></div>
            <div className="h-64 bg-secondary/50 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !project) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/browse" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Browse</span>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link 
          to="/browse" 
          className="inline-flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Browse</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <div 
                className="size-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `hsl(${project.id * 30}, 70%, 95%)` }}
              >
                <span className="font-medium" style={{ color: `hsl(${project.id * 30}, 70%, 40%)` }}>
                  {project.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold leading-tight">{project.name}</h1>
                <p className="text-muted-foreground">{project.campus} • {project.department}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 bg-secondary hover:bg-secondary/70 transition-colors rounded-md px-3 py-1.5 text-sm"
              >
                <Github size={16} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <p className="text-lg mb-6">{project.description}</p>

          {/* Project Stats */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            <div className="bg-secondary/30 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                <Star size={14} />
                <span className="text-xs uppercase font-medium">Stars</span>
              </div>
              <p className="text-lg font-medium">{project.stars}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                <GitFork size={14} />
                <span className="text-xs uppercase font-medium">Forks</span>
              </div>
              <p className="text-lg font-medium">{project.forks}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                <Calendar size={14} />
                <span className="text-xs uppercase font-medium">Updated</span>
              </div>
              <p className="text-sm font-medium">{project.lastUpdated}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                <Users size={14} />
                <span className="text-xs uppercase font-medium">Contributors</span>
              </div>
              <p className="text-lg font-medium">{project.contributors?.length || 0}</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3 text-center col-span-1 md:col-span-2">
              <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                <Scale size={14} />
                <span className="text-xs uppercase font-medium">License</span>
              </div>
              <p className="text-sm font-medium">{project.license || 'Not specified'}</p>
            </div>
          </div>

          {/* Languages and Topics */}
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <span 
                    key={lang} 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: getLanguageColor(lang).bgColor,
                      color: getLanguageColor(lang).textColor
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <span 
                    key={topic} 
                    className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contributors */}
          {project.contributors && project.contributors.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Contributors</h3>
              <div className="flex flex-wrap gap-4">
                {project.contributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name} 
                      className="size-8 rounded-full object-cover border border-border"
                    />
                    <span className="text-sm">{contributor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* README Content */}
          {project.readme && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                <FileText size={18} />
                <h2 className="text-xl font-bold">README</h2>
              </div>
              <div className="prose prose-sm max-w-none border rounded-lg p-6 bg-secondary/10">
                <pre className="whitespace-pre-wrap font-mono text-sm">{project.readme}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
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

export default ProjectDetail;
