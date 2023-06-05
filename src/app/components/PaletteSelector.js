import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPalette } from '../../redux/features/palette/paletteSlice';
import { clearAll } from '../../redux/features/graph/graphSlice';
import { selectYear } from '../../redux/features/year/yearSlice';
import PaletteButton from "../components/PaletteButton";


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

  return (
    <div className="palette-selector">
      <PaletteButton 
        ref={(ref) => (buttonRefs.current[0] = ref)}
        color="#292929"
        selected={selectedPalette === 'blank'}
        onClick={() => handlePaletteSelect('blank')}
        text={"space"}
      />
      <PaletteButton 
        ref={(ref) => (buttonRefs.current[1] = ref)}
        color="#c6e48b"
        selected={selectedPalette === 'green1'}
        onClick={() => handlePaletteSelect('green1')}
        text={"a"}
      />
      <PaletteButton 
        ref={(ref) => (buttonRefs.current[2] = ref)}
        color="#7bc96f"
        selected={selectedPalette === 'green2'}
        onClick={() => handlePaletteSelect('green2')}
        text={"s"}
      />
      <PaletteButton 
        ref={(ref) => (buttonRefs.current[3] = ref)}
        color="#239a3b"
        selected={selectedPalette === 'green3'}
        onClick={() => handlePaletteSelect('green3')}
        text={"d"}
      />
  <PaletteButton 
        ref={(ref) => (buttonRefs.current[4] = ref)}
        color="#196127"
        selected={selectedPalette === 'green4'}
        onClick={() => handlePaletteSelect('green4')}
        text={"f"}
      />
      <button className="clear-all-button" onClick={handleClearAll}>
        Clear All (esc)
      </button>

      <style jsx>{`
        .palette-selector {
          display: flex;
          margin-top: 15px;
          justify-content: left;
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
