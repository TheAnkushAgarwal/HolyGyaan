import { useState } from "react";

export default function FormElementsLargeSelect({onSelectChange}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    onSelectChange(event.target.value);
  };
    return (
      <>
        {/* Form Elements: Large Select */}
        <form className="space-y-6 dark:text-gray-100">
          {/* Select Box */}
          <div className="space-y-1">
            {/* <label htmlFor="select" className="font-medium">
              
            </label> */}
            <select
              id="select"
              name="select"
              value={selectedValue}
              onChange={handleSelectChange}
              className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-purple-500"
            >
              <option>en</option>
              <option>hi</option>
              <option>san</option>
              <option>ara</option>
              <option>zh</option>
            </select>
          </div>
          {/* END Select Box */}
  

        </form>
        {/* END Form Elements: Large Select */}
      </>
    );
  }
  