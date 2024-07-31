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

      <style jsx>{`
        .year-selector {
          display: flex;
          align-items: left;
          gap: 10px;
          margin-top: 15px;
        }

        .custom-select {
          display: flex;
          align-items: center;
          background-color: ${backgroundGray};
          margin-bottom: 15px;
          border: 1px solid ${borderGray};
          position: relative;
          box-shadow: 0 0 5px ${borderGray};
          width: 100%;
        }

        .separator {
          width: 1px;
          height: 80%;
          background-color: ${borderGray};
        }

        .text-field {
          cursor: text;
          padding: 8px 15px;
          border: none;
          appearance: none; 
          text-align: center;
          color: #ffffff;
          background-color: ${backgroundGray};
          outline: none;
          align-items: center; 
          width: 100%;
          white-space: normal; /* Allow text to wrap */
          overflow-wrap: break-word; /* Break words to prevent overflow */
          text-overflow: ellipsis;
        }        

        .text-field::placeholder {
          color: #9d9d9d;
        }

        .custom-select select {
          cursor: pointer;
          background-color: ${backgroundGray};
          border-radius: 0;
          border: none;
          color: #ffffff;
          text-align-last: center;
          padding-right: 16px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
        }

        .custom-select select::-ms-expand {
          display: none;
        }

        .custom-select select:focus {
          background-color: ${backgroundGray};
          outline: none;
        }

        .custom-select::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          height: 0;
          border-style: solid;
          border-width: 6px 6px 0 6px;
          border-color: #ffffff transparent transparent transparent;
          pointer-events: none;
        }

        .text-field,
        select {
          flex: 1;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default YearSelector;
