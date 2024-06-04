export default function TextareaElement({value, onChange }) {
    return (
      <>
        {/* Form Elements: Small Textarea */}
        <form className="space-y-6 dark:text-gray-100">
          {/* Textarea */}
          <div className="space-y-1 ">
            {/* <label htmlFor="details" className="font-medium text-white">
              Textarea
            </label> */}
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="How to deal with failure?"
              className="block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm leading-5 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-purple-500"
              defaultValue={""}
              value={value}
              onChange={onChange}
            />
          </div>
         
          {/* END Textarea */}
        </form>
        {/* END Form Elements: Small Textarea */}
      </>
    );
  }
  