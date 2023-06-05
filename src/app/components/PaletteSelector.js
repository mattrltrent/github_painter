import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPalette } from '../../redux/features/palette/paletteSlice';
import { clearAll } from '../../redux/features/graph/graphSlice';
import { selectYear } from '../../redux/features/year/yearSlice';


const PaletteSelector = () => {
  const selectedPalette = useSelector((state) => state.palette.selectedPalette);
  const dispatch = useDispatch();
  const buttonRefs = useRef([]);

  const handlePaletteSelect = (palette) => {
    dispatch(selectPalette(palette));
  };

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  useEffect(() => {
    // focus on the first button initially
    if (buttonRefs.current.length > 0) {
      buttonRefs.current[1].focus();
    }
  }, []);


  return (
    <div className="palette-selector">
      <button
        ref={(ref) => (buttonRefs.current[0] = ref)}
        className={`palette-option ${selectedPalette === 'blank' ? 'selected' : ''}`}
        onClick={() => handlePaletteSelect('blank')}
      >
        Blank (space)
      </button>
      <button
        ref={(ref) => (buttonRefs.current[1] = ref)}
        className={`palette-option ${selectedPalette === 'green1' ? 'selected' : ''}`}
        onClick={() => handlePaletteSelect('green1')}
      >
        Green 1 (1)
      </button>
      <button
        ref={(ref) => (buttonRefs.current[2] = ref)}
        className={`palette-option ${selectedPalette === 'green2' ? 'selected' : ''}`}
        onClick={() => handlePaletteSelect('green2')}
      >
        Green 2 (2)
      </button>
      <button
        ref={(ref) => (buttonRefs.current[3] = ref)}
        className={`palette-option ${selectedPalette === 'green3' ? 'selected' : ''}`}
        onClick={() => handlePaletteSelect('green3')}
      >
        Green 3 (3)
      </button>
      <button
        ref={(ref) => (buttonRefs.current[4] = ref)}
        className={`palette-option ${selectedPalette === 'green4' ? 'selected' : ''}`}
        onClick={() => handlePaletteSelect('green4')}
      >
        Green 4 (4)
      </button>
      <button className="clear-all-button" onClick={handleClearAll}>
        Clear All (esc)
      </button>

      <style jsx>{`
        .palette-selector {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .palette-option {
          margin-right: 5px;
          padding: 5px 10px;
          background-color: #030100;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none; /* Remove default focus outline */
        }

        .palette-option:focus {
          /* Customize focus styles */
          box-shadow: 0 0 0 2px #c6e48b;
        }

        .selected {
          background-color: #c6e48b;
        }

        .clear-all-button {
          margin-left: 10px;
          padding: 5px 10px;
          background-color: #030100;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default PaletteSelector;
