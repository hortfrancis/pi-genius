import React from 'react';

function ResourceCard({ title, url }) {
    return (
        <div className="resource-card">
            <a href={url}>
                <h3>{title}</h3>
            </a>
        </div>
    );
}

export default ResourceCard;
