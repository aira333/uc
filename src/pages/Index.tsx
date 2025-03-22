

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Database, Code, Globe } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import SearchBar from '@/components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '@/components/ui/ProjectCard';
import { mockProjects } from '@/lib/data';

const Index = () => {
  const navigate = useNavigate();
  const featuredProjects = mockProjects.slice(0, 3);

  const handleSearch = (query: string) => {
    navigate(`/browse?q=${encodeURIComponent(query)}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-slide-in-down">
              UC Network of Open Source Program Office
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-4xl text-balance animate-slide-in-up">
              Discover Open Source Projects Across the UC System
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              UC ORB is a tool that identifies and categorizes open-source projects within the UC system. It is a part of the UC Network of Open Source Program (OSPO).
            </p>
            <div className="w-full max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              <SearchBar 
                onSearch={handleSearch} 
                placeholder="Search by keyword, language, or topic..."
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <Link 
                to="/browse" 
                className="flex items-center space-x-1 bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-full text-sm font-medium transition-colors"
              >
                <Search size={16} />
                <span>Browse Projects</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center space-x-1 bg-secondary hover:bg-secondary/70 py-2 px-4 rounded-full text-sm font-medium transition-colors"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Campus Icons */}
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {['Berkeley', 'Davis', 'Los Angeles', 'San Diego', 'Santa Barbara', 'Santa Cruz'].map((campus, index) => (
              <div 
                key={campus} 
                className="flex flex-col items-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="size-16 md:size-20 rounded-full flex items-center justify-center border bg-secondary/50">
                  <span className="font-medium">UC</span>
                </div>
                <span className="text-sm mt-2 text-muted-foreground">{campus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore UC's Open Source Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover projects across multiple disciplines, programming languages, and research areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-xl p-6 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Repository Database</h3>
              <p className="text-muted-foreground text-sm">
                Access a comprehensive database of open source projects from six UC campuses.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Language & Topic Filters</h3>
              <p className="text-muted-foreground text-sm">
                Filter projects by programming language, research topic, or academic discipline.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Cross-Campus Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Discover collaboration opportunities across different UC campuses and departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link 
              to="/browse" 
              className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Set to Discover?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
           Explore the vibrant world of open-source projects created across the University of California system.
          </p>
          <Link 
            to="/browse" 
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-full text-base font-medium transition-colors"
          >
            <Search size={18} />
            <span>Browse All Projects</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
