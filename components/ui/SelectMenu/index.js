export default function FormElementsLargeSelect() {
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
              className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-purple-500"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Sanskrit</option>
              <option>Arabic</option>
              <option>  Punjabi</option>
              <option>Chinese</option>
            </select>
          </div>
          {/* END Select Box */}
  

        </form>
        {/* END Form Elements: Large Select */}
      </>
    );
  }
  