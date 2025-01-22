import React, { useState } from "react";
import { downArrow, upArrow } from "../Index";

const SemesterThreeNotes = () => {
  const onButtonClick = () => {
    const pdfUrl = "http://localhost:5173/C-CT-A.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);

  const toogleArrow1 = () => {
    setShowContent1(!showContent1);
  };
  const toogleArrow2 = () => {
    setShowContent2(!showContent2);
  };
  const toogleArrow3 = () => {
    setShowContent3(!showContent3);
  };
  const toogleArrow4 = () => {
    setShowContent4(!showContent4);
  };
  const toogleArrow5 = () => {
    setShowContent5(!showContent5);
  };
  const toogleArrow6 = () => {
    setShowContent6(!showContent6);
  };

  return (
    <div className=" lg:w-[55%] md:w-[60%] w-[90%] m-auto pb-24 px-3">
      <div className="semester-head">
        <h1 className="text-white text-center text-lg lg:text-xl md:text-xl">
          Third Semester Notes
        </h1>
      </div>
      <div className="semester-body w-full grid grid-cols-1 gap-4 mt-4">
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1>Software Engineering</h1>
            </div>
            <div>
              <img
                src={showContent1 ? upArrow : downArrow}
                onClick={toogleArrow1}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent1 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button
                    onClick={onButtonClick}
                    className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm"
                  >
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1>Automata and Language Processors</h1>
            </div>
            <div>
              <img
                src={showContent2 ? upArrow : downArrow}
                onClick={toogleArrow2}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent2 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="block lg:hidden">Data Communication and CN</h1>
              <h1 className="hidden lg:block">Data Communication and Computer Networks</h1>
            </div>
            <div>
              <img
                src={showContent3 ? upArrow : downArrow}
                onClick={toogleArrow3}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent3 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Data Communication</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Computer Network</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1>Elective-I</h1>
            </div>
            <div>
              <img
                src={showContent4 ? upArrow : downArrow}
                onClick={toogleArrow4}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent4 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1>Elective-II</h1>
            </div>
            <div>
              <img
                src={showContent5 ? upArrow : downArrow}
                onClick={toogleArrow5}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent5 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h1>Elective-III</h1>
            </div>
            <div>
              <img
                src={showContent6 ? upArrow : downArrow}
                onClick={toogleArrow6}
                className="w-4 h-4 hover:cursor-pointer "
              />
            </div>
          </div>
          <div className={`mt-2 ${showContent6 ? "block" : "hidden"}`}>
            <div>
              <hr className="my-3" />
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h3>Notes</h3>
                </div>
                <div>
                  <button className="bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm">
                    download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemesterThreeNotes;
