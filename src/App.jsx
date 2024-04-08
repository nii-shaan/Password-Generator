import { useState, useCallback, useRef, useEffect } from "react";

export default function App() {
  const [password, setPassword] = useState("");

  const [copy, setCopy] = useState("Copy");

  const [capitalALl, setCapitalALl] = useState(false);

  const [length, setLength] = useState(8);

  const [numbersAll, setNumbersAll] = useState(false);

  const [specialCharsAll, setSpecialCharsAll] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (capitalALl) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAll) str += "0123456789";
    if (specialCharsAll) str += "!@#$%^&*_-<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [capitalALl, length, numbersAll, specialCharsAll]);

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
  };

  useEffect(() => {
    setCopy("Copy");
    generatePassword();
  }, [capitalALl, length, numbersAll, specialCharsAll]);

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
              value={password}
              className="border-[2px] bg-black text-three border-five outline-none rounded-l-lg px-[10px]"
              readOnly
            />

            <button
              className="border-r-[2px] border-t-[2px] border-b-[2px] border-five text-three px-[15px] rounded-r-lg
              hover:bg-slate-500 active:bg-slate-100 active:text-black
              "
              onClick={handleCopy}
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
                max={21}
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
