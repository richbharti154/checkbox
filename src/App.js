import React, { useState } from 'react';
import './style.css';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';
export default function App() {
  const [show, setShow] = useState(false);

  const option = [
    { value: 'frontend', label: 'FrontEnd', isClick: false },
    { value: 'backend', label: 'BackEnd', isClick: false },
    { value: 'uiux', label: 'UI/UX', isClick: false },
    { value: 'data', label: 'Data Analyst', isClick: false },
  ];
  const [list, setList] = useState(option);
  function handleDropDown() {
    setShow(!show ? true : false);
  }

  function captureValue(x) {
    console.log(x);
    if (!x.isClick) {
      x.isClick = true;
      setList([...list]);
    } else {
      x.isClick = false;
      setList([...list]);
    }
  }
  console.log(list, 'maub');
  return (
    <div>
      <div onClick={handleDropDown} className="screen">
        {list.map((x) => (
          <div className="items">
          <p>{x.isClick ? x.label : ''}</p>
          </div>
        ))}
        <div>
          {show ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
        </div>
      </div>

      {show ? (
        <div className="option">
          {list.map((x) => (
            <div key={x.value}>
              <input
                onClick={() => captureValue(x)}
                id={x.value}
                type="checkbox"
              />
              <label htmlFor={x.value}>{x.label}</label>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
