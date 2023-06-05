import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectYear } from '../../redux/features/year/yearSlice';
import { clearAll, alterSize } from '../../redux/features/graph/graphSlice';

const YearSelector = () => {
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedYear) {
      dispatch(clearAll()); // call the clearAll reducer action
    }
  }, [selectedYear, dispatch]);

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    dispatch(selectYear(selectedYear));
    dispatch(alterSize({ year: selectedYear })); // call the alterSize reducer action with the new year
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10; // specify the range of years (aka, the last 10 years)
    const endYear = currentYear;

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
      <label htmlFor="year">Select a Year:</label>
      <div className="custom-select">
        <select id="year" value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          {renderYearOptions()}
        </select>
      </div>

      <style jsx>{`
        .year-selector {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .custom-select {
          position: relative;
          background-color: #f7f7f7;
          border-radius: 20px;
          overflow: hidden;
        }

        select {
          padding: 10px 20px;
          width: 100%;
          border: none;
          appearance: none;
          cursor: pointer;
          text-align: center;
          color: #000;
          background-color: transparent;
          outline: none;
        }

        select:focus {
          background-color: #fff;
        }

        .selected-year {
          margin-top: 5px;
          padding: 4px 10px;
          display: inline-block;
          font-weight: bold;
          background-color: #000;
          color: #fff;
          border-radius: 50px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default YearSelector;
