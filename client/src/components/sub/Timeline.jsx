import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) => (
    <div className="p-4">
        {data.map((item, idx) => (
            <TimelineItem data={item} key={idx} isLast={idx === data.length - 1} />
        ))}
    </div>
);

export default Timeline;
