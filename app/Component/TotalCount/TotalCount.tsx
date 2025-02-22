import React from 'react';

const TotalCount = ({totalCount}:{totalCount: number}) => {
    // {totalCount}:{totalCount: number}
    return (
        <div className="card w-[500px]">
            <h5 className="text-2xl font-semibold">Total Count: {totalCount}</h5>
        </div>
    );
};

export default TotalCount;