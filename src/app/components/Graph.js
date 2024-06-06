"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlockCommits, clearAll } from '../../redux/features/graph/graphSlice';
import { selectPalette } from '../../redux/features/palette/paletteSlice';
import { selectOffset } from '../../redux/features/graph/graphSlice';
import {backgroundBlack, blank, borderGray, green1, green2, green3, green4} from '@/utils/constants';

const Graph = () => {
  const paletteValue = useSelector((state) => state.palette.selectedPalette);
  const commitData = useSelector((state) => state.graph);
  const dispatch = useDispatch();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const graphRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (isMouseDown) {
      updateCommitCount(index);
    }
  };

  const handleClick = (index) => {
    updateCommitCount(index);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'a':
        dispatch(selectPalette('green1'));
        break;
      case 's':
        dispatch(selectPalette('green2'));
        break;
      case 'd':
        dispatch(selectPalette('green3'));
        break;
      case 'f':
        dispatch(selectPalette('green4'));
        break;
      case ' ':
        dispatch(selectPalette('blank'));
        break;
      case 'Escape':
        dispatch(clearAll());
        break;
      default:
        break;
    }
  };

  const offset = useSelector(selectOffset);

  const handleMouseDown = (index) => {
    setIsMouseDown(true);
    updateCommitCount(index);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const updateCommitCount = (index) => {
    const updatedCommitCount = convertLabelToCommitLevel(paletteValue);
    dispatch(updateBlockCommits({ index: index, commitCount: updatedCommitCount }));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },   );
//}, []);



  return (
    <div       className="graph"
    ref={graphRef} onMouseUp={handleMouseUp}>
      <div className="row-container">
        {Array.from({ length: Math.ceil(commitData.grid.length / 7) }, (_, rowIndex) => (
          <div className="column-container" key={rowIndex}>
            {Array.from({ length: 7 }, (_, columnIndex) => {
              const blockIndex = rowIndex * 7 + columnIndex;
              const adjustedBlockIndex = blockIndex - offset;

              if (adjustedBlockIndex < 0 || adjustedBlockIndex >= commitData.grid.length) {
                return <div className="empty-spot" key={blockIndex} />;
              }

              const commitCount = commitData.grid[adjustedBlockIndex];

              return (
                <div
                  className="square"
                  key={blockIndex}
                  title={`${commitCount === 1 ? commitCount + " commit" : commitCount + " commits"}`}
                  onMouseDown={() => handleMouseDown(adjustedBlockIndex)}
                  style={{ backgroundColor: getColorForCommitLevel(commitCount) }}
                  onMouseEnter={() => handleMouseEnter(adjustedBlockIndex)}
                  onClick={() => handleClick(adjustedBlockIndex)}
                  onDragStart={handleDragStart}
                  draggable={false}
                />
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        .row-container {
          display: flex;
          flex-wrap: no-wrap;
          justify-content: center;
          overflow: hidden;
        }

        .column-container {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          flex-basis: 0;
          flex-grow: 1;
        }

        .square {
          flex: 1 1;
          // padding: 0;
          transition: background-color 0.3s;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: inset 0 0 0 1px ${backgroundBlack};
          width: 100%;
          aspect-ratio: 1/1; 
        }

        .empty-spot {
          flex: 1 0 0;
          width: 100%;
          height: 100%;
          box-shadow: none;
        }

        .graph {
          padding: 5px;
          background-color: ${backgroundBlack};
          border: 1px solid ${borderGray};
          overflow: auto;
          shape-rendering: crispEdges;
          box-shadow: 0 0 5px ${borderGray};
          flex-wrap: wrap;
          width: 100%;
          // aspect-ratio: 1/1;
          cursor: crosshair;
        }
      `}</style>
    </div>
  );
};

const getColorForCommitLevel = (commitLevel) => {
  switch (commitLevel) {
    case 4:
      return green4;
    case 3:
      return green3;
    case 2:
      return green2;
    case 1:
      return green1;
    default:
      return blank;
  }
};

const convertLabelToCommitLevel = (label) => {
  switch (label) {
    case 'blank':
      return 0;
    case 'green1':
      return 1;
    case 'green2':
      return 2;
    case 'green3':
      return 3;
    case 'green4':
      return 4;
    default:
      return 0;
  }
};

export default Graph;
