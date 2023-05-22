import React from 'react';
import ResourceCard from './ResourceCard';

function FeaturedResources() {
    // This would be fetched from an API in a real app
    const resources = [
        {
            id: 1,
            title: 'Getting Started with Raspberry Pi',
            url: '#'
        },
        {
            id: 2,
            title: 'Building a Weather Station with Raspberry Pi',
            url: '#'
        },
        {
            id: 3,
            title: 'Raspberry Pi Home Automation Projects',
            url: '#'
        },
    ];

    return (
        <section id="resources" className="featured-resources">
            <h2>Featured Resources</h2>
            <div className="resource-list">
                {resources.map(resource => (
                    <ResourceCard key={resource.id} title={resource.title} url={resource.url} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedResources;
