import React from "react";
import Show from "./Show";

const InputForm = () => {
  const base = "https://cu-menu-abhilaksh-arora.vercel.app/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, desc } = e.target.elements;
    try {
      const response = await fetch(`${base}/api/form`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          type: type.value,
          desc: desc.value,
        }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Done");
    }
  };
  return (
    <div className="items-center">
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-24 mx-auto items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Add Menu
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600 pr-3">
                  Type:
                </label>
                {/* <select className="form-select mt-1 block w-full">
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Dinner">Dinner</option>
                </select> */}
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Description
                </label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Show />
      </section>
    </div>
  );
};

export default InputForm;
