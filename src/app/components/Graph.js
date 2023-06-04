import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlockCommits } from '../../redux/features/graph/graphSlice';
// import { getColorForCommitLevel } from '../utils/colorCommitLevel';

const Graph = () => {
  const commitData = useSelector(state => state.graph);
  const dispatch = useDispatch();

  const handleMouseEnter = (index) => {
    const updatedCommitCount = (commitData[index] + 1) % 5; // Increment commit count and reset to 0 if it reaches 5
    dispatch(updateBlockCommits({ index, commitCount: updatedCommitCount }));
  };

  return (
    <div className="graph">
      {commitData.map((commitCount, index) => (
        <div
          className="square"
          key={index}
          title={`${commitCount} commits`}
          style={{ backgroundColor: getColorForCommitLevel(commitCount) }}
          onMouseEnter={() => handleMouseEnter(index)}
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

export default Graph;


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
        return '#828282';
    }
};
  