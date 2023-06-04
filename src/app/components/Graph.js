import React from 'react';

const Graph = () => {
  // Generate random commit data for demonstration
  const commitData = Array.from({ length: 365 }, () => Math.floor(Math.random() * 5));

  return (
    <div className="graph">
      {commitData.map((commitCount, index) => (
          <div
          className="square"
          key={index}
          title={`${commitCount} commits`}
          style={{ backgroundColor: getColorForCommitLevel(commitCount) }}
        />
      ))}

      <style jsx>{`
        .graph {
          display: grid;
          grid-template-columns: repeat(53, 1fr);
          gap: 1px;
          background-color: #ebedf0;
          padding: 5px;
          border-radius: 4px;
        }

        .square {
            height: 12px;
            width: 12px;
          border-radius: 2px;
          transition: background-color 0.2s;
        }
      `}</style>
    </div>
  );
};

// Helper function to get the color based on the commit level
const getColorForCommitLevel = (commitLevel) => {
  switch (commitLevel) {
    case 1:
      return '#c6e48b';
    case 2:
      return '#7bc96f';
    case 3:
      return '#239a3b';
    case 4:
      return '#196127';
    default:
      return '#ebedf0';
  }
};

export default Graph;
