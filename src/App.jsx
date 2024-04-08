import { useState, useCallback, useRef, useEffect } from "react";

export default function App() {
  const [copy, setCopy] = useState("Copy");

  const [capitalALl, setCapitalALl] = useState(false);

  const [length, setLength] = useState(8);

  const [numbersAll, setNumbersAll] = useState(false);

  const [specialCharsAll, setSpecialCharsAll] = useState(false);

  return (
    <>
      <div className="h-screen bg-slate-800 flex justify-center ">
        <div className="bg-one h-[300px] w-[350px] mt-[100px] rounded-lg">
          <div className="h-[50px] w-[100%] flex items-center justify-center border-b-[2px] border-black">
            <h1 className="text-four">Password Generator</h1>
          </div>

          <div className="bg-two  h-[50px] w-[100%] flex items-center justify-center">
            <input
              type="text"
              className="border-[2px] border-black outline-none"
              readOnly
            />

            <button
              className="border-r-[2px] border-t-[2px] border-b-[2px] border-black text-three px-[15px] "
              onClick={() => {
                setCopy("Copied");
              }}
            >
              {copy}
            </button>
          </div>

          <div className=" text-three  w-[100%] flex items-start justify-center flex-col gap-[15px] pl-[20px] py-[10px]">
            <div className="flex gap-[10px] items-center justify-center">
              <input
                type="checkbox"
                id="capital"
                checked={capitalALl}
                onChange={() => {
                  setCapitalALl((prev) => !prev);
                }}
              />
              <label htmlFor="capital">Capital Letters</label>
            </div>

            <div className="flex flex-col ml-[25px] gap-[5px]">
              <label htmlFor="length">Length: {length}</label>
              <input
                type="range"
                id="length"
                min={6}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>

            <div className="flex gap-[10px] items-center justify-center">
              <input
                type="checkbox"
                id="numbers"
                checked={numbersAll}
                onChange={() => {
                  setNumbersAll((prev) => !prev);
                }}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>

            <div className="flex gap-[10px] items-center justify-center">
              <input
                type="checkbox"
                id="specialChars"
                checked={specialCharsAll}
                onChange={() => {
                  setSpecialCharsAll((p) => !p);
                }}
              />
              <label htmlFor="specialChars">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
