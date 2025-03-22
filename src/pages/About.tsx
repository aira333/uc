
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Discover UC ORB</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
           UC ORB is a pioneering tool that showcases and categorizes open-source projects across the University of California system. With a strong commitment to open-source innovation, the UC system is advancing efforts to make software more accessible, transparent, and collaborative. This initiative, in partnership with the UC Network of Open Source Program Offices (OSPOs), brings together six campuses to promote open-source research, drive sustainable development, and set new standards for open collaboration in academia.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">At UC-ORB</h2>
          <p className="mb-6">
           We are dedicated to strengthening the open-source ecosystem within the UC system and beyond. By serving as a central hub, it amplifies the impact of UC’s open-source contributions, nurtures collaboration among researchers and developers, and champions a culture of transparency and innovation. Committed to sustainability and knowledge sharing, UC ORB aspires to set a new standard for institutions looking to embrace and enhance open-source discovery.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">UC Campuses Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'UC Berkeley', url: 'https://berkeley.edu' },
              { name: 'UC Davis', url: 'https://ucdavis.edu' },
              { name: 'UC Los Angeles', url: 'https://ucla.edu' },
              { name: 'UC San Diego', url: 'https://ucsd.edu' },
              { name: 'UC Santa Barbara', url: 'https://ucsb.edu' },
              { name: 'UC Santa Cruz', url: 'https://ucsc.edu' },
            ].map((campus) => (
              <a 
                key={campus.name} 
                href={campus.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <span>{campus.name}</span>
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Project Goals</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Map and classify open source projects across the UC system</li>
            <li>Enhance visibility of UC's open source contributions</li>
            <li>Foster collaboration among researchers and developers</li>
            <li>Promote sustainability of open source software in academia</li>
            <li>Establish best practices for open source program offices</li>
            <li>Serve as a model for other institutions</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Slide Into Our Inbox!</h2>
          <p>
           Want to learn more about UC ORB or join the open-source movement? Reach out to the UC Network of Open Source Program Offices at: <a href="mailto:info@ucorb.edu" className="text-primary hover:text-primary/80 transition-colors">info@ucorb.edu</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
