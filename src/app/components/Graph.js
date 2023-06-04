import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlockCommits, clearAll } from '../../redux/features/graph/graphSlice';
import { selectPalette } from '../../redux/features/palette/paletteSlice';
2

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
          case '1':
            dispatch(selectPalette('green1'));
            break;
          case '2':
            dispatch(selectPalette('green2'));
            break;
            case '3':
                dispatch(selectPalette('green3'));
                break;
            case '4':
                dispatch(selectPalette('green4'));
                break;
            // space
            case ' ':
                dispatch(selectPalette('blank'));
                break;
            // esc key
            case 'Escape':
                dispatch(clearAll());
                break;
          default:
            break;
        }
      };
  
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
  
    // const handleMouseLeave = (_) => {
    //   setIsMouseDown(false);
    // };
  
    const updateCommitCount = (index) => {
        const updatedCommitCount = convertLabelToCommitLevel(paletteValue) // set commit count based on palette value
        dispatch(updateBlockCommits({ index, commitCount: updatedCommitCount }));
    };
  
    useEffect(() => {
      const graphElement = graphRef.current;
  
        // keyboard stuff
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
      
    //   if (graphElement) {
    //     graphElement.addEventListener('mouseleave', handleMouseLeave);
    //   }
  
    }, []);

  return (
    <div
      className="graph"
      ref={graphRef}
          onMouseUp={handleMouseUp}
          onMouseDown={(event) => {
            event.preventDefault(); // prevent default browser behavior (weird grey world thing)
            setIsMouseDown(true);
          }}    >
      {Array.from({ length: 53 }, (_, columnIndex) => (
      <div className="column" key={columnIndex}>
        {commitData.slice(columnIndex * 7, (columnIndex + 1) * 7).map((commitCount, rowIndex) => (
          <div
            className="square"
            key={rowIndex + columnIndex}
                title={`${commitCount} commits`}
                onMouseDown={() => handleMouseDown(columnIndex * 7 + rowIndex)}
                style={{ backgroundColor: getColorForCommitLevel(commitCount) }}
            onMouseEnter={() => handleMouseEnter(columnIndex * 7 + rowIndex)}
            onClick={() => handleClick(columnIndex * 7 + rowIndex)}
            onDragStart={handleDragStart}
            draggable={false}
          />
        ))}
      </div>
    ))}

      <style jsx>{`
        .graph {
            padding: 5px;
            display: grid;
            grid-template-columns: repeat(53, 1fr);
            background-color: #1c1c1c;
            overflow: hidden;
            shape-rendering: crispEdges;
            box-shadow: 0 0 70px rgba(0, 223, 162, 0.15); /* Add a box shadow */
            cursor: crosshair;
        }

        .square {
            height: 15px;
            width: 15px;
            padding: 3px;
            transition: background-color 0.3s;
            background-color: transparent;
            display: flex;
            cursor: crosshair;
            justify-content: center;
            align-items: center;
            margin: 2px;
          }

          
      `}</style>
    </div>
  );
};

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
      return '#292929';
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
