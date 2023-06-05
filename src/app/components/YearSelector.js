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

  const handleKeyDown = (event) => {
    if (event.target.classList.contains('text-field')) {
      console.log('Keyboard listener triggered');
      event.stopPropagation();
    }
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
      <div className="custom-select">
        <input
          type="text"
          placeholder="Repo url"
          className="text-field"
          style={{ width: '200px' }}
          onKeyDown={handleKeyDown}
        />
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
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.custom-select {

  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #292929;
  overflow: hidden;
  margin-bottom: 15px;
  border: 1px solid #616060;
}

.select,
.text-field {
  cursor: text;

  padding: 8px 15px;
  border: none;
  appearance: none;
  text-align: center;
  color: #ffffff;
  background-color: #292929;
  outline: none;
}

.text-field::placeholder {

  color: #9d9d9d;
}

.custom-select select {
  cursor: pointer;

  background-color: #292929;
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

  background-color: #292929;
  outline: none;
}

.custom-select::after {

  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
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
