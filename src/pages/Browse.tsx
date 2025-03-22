
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import SearchBar from '@/components/ui/SearchBar';
import FilterPanel from '@/components/ui/FilterPanel';
import ProjectCard from '@/components/ui/ProjectCard';
import { useProjects } from '@/lib/hooks/useProjects';
import { campuses, languages, topics } from '@/lib/data';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    campus: [],
    language: [],
    topic: [],
  });
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Update URL when search query changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  }, [searchQuery, setSearchParams]);

  // Create filter groups with counts
  const filterGroups = [
    {
      id: 'campus',
      name: 'Campus',
      options: campuses.map(campus => ({
        id: campus,
        label: campus,
      })),
    },
    {
      id: 'language',
      name: 'Programming Language',
      options: languages.map(language => ({
        id: language,
        label: language,
      })),
    },
    {
      id: 'topic',
      name: 'Topic',
      options: topics.map(topic => ({
        id: topic,
        label: topic,
      })),
    },
  ];

  // Fetch projects based on search and filters
  const { projects, isLoading, totalCount } = useProjects({
    searchQuery,
    filters: selectedFilters,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterId: string, selectedOptions: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterId]: selectedOptions,
    }));
  };

  const handleClearAllFilters = () => {
    setSelectedFilters({
      campus: [],
      language: [],
      topic: [],
    });
  };

  // Count total active filters
  const totalActiveFilters = Object.values(selectedFilters)
    .reduce((total, selected) => total + selected.length, 0);

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Projects</h1>
          <p className="text-muted-foreground">
            Explore open source projects from across the UC system
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full">
            <SearchBar 
              onSearch={handleSearch}
              initialQuery={searchQuery}
              placeholder="Search projects by name, description, language, or topic"
              className="w-full max-w-full"
            />
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-secondary/50 text-sm"
            >
              <div className="flex items-center">
                <SlidersHorizontal size={16} className="mr-2" />
                <span>Filters</span>
                {totalActiveFilters > 0 && (
                  <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                    {totalActiveFilters}
                  </span>
                )}
              </div>
              <ChevronDown size={16} className={isMobileFiltersOpen ? "transform rotate-180" : ""} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Panel - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel
              filters={filterGroups}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAllFilters}
            />
          </div>

          {/* Filters Panel - Mobile */}
          <div className={cn(
            "lg:hidden fixed inset-0 z-40 flex flex-col bg-background transition-transform duration-300 transform",
            isMobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          )}>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="font-medium">Filters</h2>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-1 rounded-full hover:bg-secondary/70"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
              <FilterPanel
                filters={filterGroups}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
              />
            </div>
            <div className="border-t p-4">
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full py-2 bg-primary text-primary-foreground rounded-md"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Mobile filter overlay backdrop */}
          {isMobileFiltersOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
          )}

          {/* Projects Grid */}
          <div className="flex-grow">
            {/* Active Filters */}
            {totalActiveFilters > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {Object.entries(selectedFilters).map(([filterId, options]) => 
                  options.map(option => (
                    <div 
                      key={`${filterId}-${option}`}
                      className="bg-secondary flex items-center text-sm rounded-full px-3 py-1"
                    >
                      <span className="mr-1">{option}</span>
                      <button
                        onClick={() => {
                          handleFilterChange(
                            filterId, 
                            selectedFilters[filterId].filter(o => o !== option)
                          );
                        }}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))
                )}
                <button
                  onClick={handleClearAllFilters}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 text-sm text-muted-foreground">
              {isLoading ? (
                <span>Loading projects...</span>
              ) : (
                <span>
                  Showing {totalCount} project{totalCount === 1 ? '' : 's'}
                  {searchQuery && <> for &quot;{searchQuery}&quot;</>}
                </span>
              )}
            </div>

            {/* Projects Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="h-64 rounded-xl bg-secondary/50 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <>
                {projects.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No projects found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters
                    </p>
                    <button
                      onClick={handleClearAllFilters}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Browse;
