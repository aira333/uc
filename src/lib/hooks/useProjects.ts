
import { useState, useEffect, useMemo } from 'react';
import { mockProjects, Project, getProjectById } from '@/lib/data';

interface UseProjectsProps {
  searchQuery?: string;
  filters?: Record<string, string[]>;
}

interface UseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
  totalCount: number;
}

export function useProjects({ searchQuery = '', filters = {} }: UseProjectsProps = {}): UseProjectsReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Simulate API loading delay
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchQuery, filters]);

  // Filter projects based on search query and filters
  const filteredProjects = useMemo(() => {
    try {
      let result = [...mockProjects];

      // Apply search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          (project) =>
            project.name.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.topics.some((topic) => topic.toLowerCase().includes(query)) ||
            project.languages.some((lang) => lang.toLowerCase().includes(query))
        );
      }

      // Apply filters
      Object.entries(filters).forEach(([filterId, selectedOptions]) => {
        if (selectedOptions.length > 0) {
          switch (filterId) {
            case 'campus':
              result = result.filter((project) => selectedOptions.includes(project.campus));
              break;
            case 'language':
              result = result.filter((project) =>
                project.languages.some((lang) => selectedOptions.includes(lang))
              );
              break;
            case 'topic':
              result = result.filter((project) =>
                project.topics.some((topic) => selectedOptions.includes(topic))
              );
              break;
            default:
              break;
          }
        }
      });

      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      return [];
    }
  }, [searchQuery, filters]);

  return {
    projects: filteredProjects,
    isLoading,
    error,
    totalCount: filteredProjects.length,
  };
}

export function useProject(id: number | undefined) {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (id === undefined) {
      setProject(undefined);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    const timeout = setTimeout(() => {
      try {
        const fetchedProject = getProjectById(id);
        setProject(fetchedProject);
        if (!fetchedProject) {
          setError(new Error(`Project with ID ${id} not found`));
        } else {
          setError(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [id]);

  return { project, isLoading, error };
}
