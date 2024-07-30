"use client";

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
import {blank, green1, green2, green3, green4} from '@/utils/constants';


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
        <TextButton text="Example on my profile" onClick={() => open("https://github.com/mattrltrent?tab=overview&from=2018-12-01&to=2018-12-31#:~:text=January,Jan")} />
        <div className={styles.between} />
        <TextButton text="Example downloaded script" onClick={() => open("https://github.com/mattrltrent/github_painter/blob/main/example_script.sh")} />
        <div className={styles.between} />
        <TextButton  text="GitHub Issues" onClick={() => open("https://github.com/mattrltrent/github_painter/issues")} />
        <div className={styles.between} />
        <TextButton star text="Star on GitHub (I'm trying to beat my friend)" onClick={() => open("https://github.com/mattrltrent/github_painter")} />
        <div className={styles.between} />
        <TextButton highlighted className={styles.star} text="Download script ->" onClick={() => downloadFile(selectedTextVal, selectedGraph, selectedYearVal)} />
      </div>
      <div className="palette-selector">
        <PaletteButton
          color={blank}
          selected={selectedPalette === 'blank'}
          onClick={() => handlePaletteSelect('blank')}
          text={"space"}
        />
        <PaletteButton
          color={green1}
          selected={selectedPalette === 'green1'}
          onClick={() => handlePaletteSelect('green1')}
          text={"a"}
        />
        <PaletteButton
          color={green2}
          selected={selectedPalette === 'green2'}
          onClick={() => handlePaletteSelect('green2')}
          text={"s"}
        />
        <PaletteButton
          color={green3}
          selected={selectedPalette === 'green3'}
          onClick={() => handlePaletteSelect('green3')}
          text={"d"}
        />
        <PaletteButton
          color={green4}
          selected={selectedPalette === 'green4'}
          onClick={() => handlePaletteSelect('green4')}
          text={"f"}
        />
      </div>

      <style jsx>{`
        .palette-selector {
          display: flex;
          flex-wrap: wrap; 
          justify-content: center; 
          margin-top: 5px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default PaletteSelector;
