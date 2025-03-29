"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectYear } from '../../redux/features/year/yearSlice';
import { clearAll, alterSize } from '../../redux/features/graph/graphSlice';
import {
  setTextFieldValue,
  clearTextFieldValue,
  selectTextFieldValue,
} from '../../redux/features/text/textSlice';
import { backgroundGray, borderGray } from '@/utils/constants';

const YearSelector = () => {
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const textFieldValue = useSelector(selectTextFieldValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedYear) {
      dispatch(clearAll()); // call the clearAll reducer action
    }
  }, [selectedYear, dispatch]);


  const handleTextFieldChange = (event) => {
    const value = event.target.value;
    dispatch(setTextFieldValue(value));
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    dispatch(selectYear(selectedYear));
    dispatch(alterSize({ year: selectedYear })); // call the alterSize reducer action with the new year
  };

  const handleKeyDown = (event) => {
    if (event.target.classList.contains('text-field')) {
      console.log('Keyboard listener triggered');
      event.stopPropagation();
    }
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 15; // specify the range of years (aka, the last 10 years)
    const endYear = currentYear + 2;

    const options = [];
    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="year-selector">
      <div className="custom-select">
      <input
      type="text"
      placeholder="Enter repo URL"
      className="text-field"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      onKeyDown={handleKeyDown}
      onFocus={(e) => e.target.placeholder = ""}
      onBlur={(e) => e.target.placeholder = "Enter Repo URL"} // Optional: To restore placeholder on blur
    />
        <div className="separator"></div>
        <select
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
          onKeyDown={handleKeyDown}
        >
          <option value="">Select year</option>
          {renderYearOptions()}
        </select> 
      </div>
    </div>
  );
};

export default YearSelector;
