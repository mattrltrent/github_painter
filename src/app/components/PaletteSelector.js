import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPalette } from '../../redux/features/palette/paletteSlice';
import { clearAll } from '../../redux/features/graph/graphSlice';
import PaletteButton from "../components/PaletteButton";
import TextButton from "../components/TextButton";
import styles from "../styles/PaletteSelector.module.css";
import downloadFile from '@/utils/download';
import { selectGraph } from '../../redux/features/graph/graphSlice';
import { selectedText } from '../../redux/features/text/textSlice';
import { selectedYear } from '../../redux/features/year/yearSlice';


const PaletteSelector = () => {
  const selectedPalette = useSelector((state) => state.palette.selectedPalette);
  const selectedTextVal = useSelector(selectedText);
  const selectedGraph = useSelector(selectGraph);
  const selectedYearVal = useSelector(selectedYear);
  const dispatch = useDispatch();
  const buttonRefs = useRef([]);

  const handlePaletteSelect = (palette) => {
    dispatch(selectPalette(palette));
  };

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <div className={styles.topRow}>
      <div className={styles.buttonGroup}>
        <TextButton text="Clear board (esc)" onClick={handleClearAll} />
        <div className={styles.between} />
        <TextButton text="Instructions & repo" onClick={() => open("https://github.com/mattrltrent/github_painter#usage")} />
        <div className={styles.between} />
        <TextButton className={styles.spacer} text="Download script ->" onClick={() => downloadFile(selectedTextVal, selectedGraph, selectedYearVal)} />
      </div>
      <div className="palette-selector">
        <PaletteButton
          color="#292929"
          selected={selectedPalette === 'blank'}
          onClick={() => handlePaletteSelect('blank')}
          text={"space"}
        />
        <PaletteButton
          color="#c6e48b"
          selected={selectedPalette === 'green1'}
          onClick={() => handlePaletteSelect('green1')}
          text={"a"}
        />
        <PaletteButton
          color="#7bc96f"
          selected={selectedPalette === 'green2'}
          onClick={() => handlePaletteSelect('green2')}
          text={"s"}
        />
        <PaletteButton
          color="#239a3b"
          selected={selectedPalette === 'green3'}
          onClick={() => handlePaletteSelect('green3')}
          text={"d"}
        />
        <PaletteButton
          color="#196127"
          selected={selectedPalette === 'green4'}
          onClick={() => handlePaletteSelect('green4')}
          text={"f"}
        />
      </div>

      <style jsx>{`
        .palette-selector {
          display: flex;
          flex-wrap: wrap; 
          justify-content: flex-start; 
          margin-top: 15px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default PaletteSelector;
