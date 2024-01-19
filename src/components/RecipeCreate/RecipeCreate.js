"use client";

const RecipeCreate = () => {
    return (
        <div>
            <form className="space-y-4 font-[sans-serif] max-w-4xl mx-auto mt-20">
                <h1 className="text-3xl font-bold "> Create Food Recipe</h1>
                <input type="email" placeholder="Enter Email" required
                    className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />
                <input type="password" placeholder="Enter Password" required
                    className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded" />

                <div className="w-full">
                    <textarea placeholder='Instruction' required
                        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
                        rows="4">
                    </textarea>
                </div>

                <div className="w-full">
                    <label htmlFor="uploadFile1"
                        className="bg-white text-center rounded w-full px-3 py-4  flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300  font-[sans-serif] ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path
                                d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                                data-original="#000000" />
                            <path
                                d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                                data-original="#000000" />
                        </svg>
                        <p className="text-gray-400 font-semibold text-sm">Drag & Drop or <span className="text-[#007bff]">Choose file</span> to upload</p>
                        <input type="file" id='uploadFile1' className="hidden" />
                        <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                    </label>
                </div>

                <button type="button"
                    className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default RecipeCreate;