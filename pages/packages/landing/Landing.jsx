"use client";

import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { editData } from "@/public/data/editing";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { medwriting } from "@/public/data/medicalWriting.js";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import styles from "./landing.module.css";
import Card from "./Card";

function Landing() {
  const [servicePackage, setServicePackage] = useState(true);
  const [editing, setEditing] = useState(false);
  const [translation, setTranslation] = useState(false);
  const [writing, setWriting] = useState(false);
  const [seelectedEditing, setSelectedEditing] = useState("" || false);
  const [wordCount, setWordCount] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [showAmount, setShowAmount] = useState(false);
  const [checkedAmounts, setCheckedAmounts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedWriting, setSelectedWriting] = useState("" || false);
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [writingProceed, setWritingProceed] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [languageOption, setLanguageOption] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const editDataCount = [
    {
      wordCount: 1000,
      amounts: [
        { amount: "1.87", criteria: 1, description: "basic amount" },
        { amount: "2.50", description: "average amount", criteria: 2 },
      ],
    },
    {
      wordCount: 2000,
      amounts: [
        { amount: "5.87", criteria: 1, description: "basic amount" },
        { amount: "6.50", criteria: 2, description: "basic amount" },
      ],
    },
    {
      wordCount: 3000,
      amounts: [
        { amount: "20.87", criteria: 1, description: "basic amount" },
        { amount: "22.50", criteria: 2, description: "basic amount" },
      ],
    },
    {
      wordCount: 10000,
      amounts: [
        { amount: "90.87", criteria: 1, description: "basic amount" },
        { amount: "1002.50", criteria: 2, description: "basic amount" },
      ],
    },
  ];

  const handleEdit = () => {
    setEditing(true);
    setTranslation(false);
    setWriting(false);
    setServicePackage(false);
    setSelectedEditing(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleTraslation = () => {
    setTranslation(true);
    setEditing(false);
    setWriting(false);
    setServicePackage(false);
    setSelectedEditing(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const handleServices = () => {
    setWriting(true);
    setEditing(false);
    setTranslation(false);
    setServicePackage(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleEditSelect = (amount) => {
    setSelectedEditing(amount || true);
    setServicePackage(false);
    setEditing(false);
    setTranslation(false);
    setWriting(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleWritingSelect = (data) => {
    setSelectedWriting(data || true);
    setWriting(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleWordCountChange = (e) => {
    const count = parseInt(e.target.value);

    setWordCount(count); // Update word count state

    // Calculate total amount based on word count and price per word (0.8 in this case)
    const amount = count * selectedWriting.price;
    setTotalAmount(amount.toFixed(2));
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setShowAmount(true);
    // Find the first item in editData where wordCount is greater than or equal to the entered count
    const selectedEdit = editDataCount.find(
      (item) => item.wordCount >= wordCount
    );

    if (selectedEdit) {
      setSelectedAmount(selectedEdit.amounts.map((amountObj) => amountObj));
    } else {
      setSelectedAmount([]); // Reset amount if no matching item found
    }
  };

  const handleWritingProceed = (e) => {
    e.preventDefault();
    setWritingProceed(true);
    setShowPopup(true)
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedAmounts([value]); // Set only the newly checked value
      setShowPopup(true);
    } else {
      setCheckedAmounts([]); // Clear all checked values
      setShowPopup(false);
    }
  };

  const handleOptionChange = (event) => {
    setLanguageOption(event.target.value);
  };

  const handlebackservice = () => {
    setServicePackage(true);
    setEditing(false);
    setTranslation(false);
    setWriting(false);
    setSelectedEditing(false);
    setSelectedWriting(false);
    setWordCount("");
    setTotalAmount("");
    setWritingProceed(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="py-5">
      {servicePackage ? (
        <div className="mt-[5rem] mb-[10rem]">
          <h1 className="text-center text-4xl font-semibold ">
            Choose your Service Packages
          </h1>
          <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row xl:flex-row gap-6 mt-10">
            <button
              onClick={handleEdit}
              className="max-[425px]:w-[80%]  w-[20%] h-[20vh] border border-transparent bg-gray-300 rounded-md hover:bg-gray-400 transition duration-500 ease-in-out"
            >
              <i></i>
              <span className="text-lg">Medical Research Publishing</span>
            </button>
            <button
              onClick={handleTraslation}
              className="max-[425px]:w-[80%]  w-[20%] h-[20vh] border border-transparent bg-gray-300 rounded-md hover:bg-gray-400 transition duration-500 ease-in-out"
            >
              <i></i>
              <span className="text-lg">Medical Editing</span>
            </button>
            <button
              onClick={handleServices}
              className="max-[425px]:w-[80%]  w-[20%] h-[20vh] border border-transparent bg-gray-300 rounded-md hover:bg-gray-400 transition duration-500 ease-in-out"
            >
              <i></i>
              <span className="text-lg">Medical Writing</span>
            </button>
            {/* <button
              onClick={handlePublish}
              className=" max-[425px]:w-[80%] w-[20%] h-[20vh] border border-transparent bg-gray-300 rounded-md hover:bg-gray-400 transition duration-500 ease-in-out"
            >
              <i></i>
              <span className="text-lg">Publications</span>
            </button> */}
          </div>
        </div>
      ) : (
        ""
      )}

      {editing ? (
        <>
          <div className="p-2">
            <button
              onClick={handlebackservice}
              className="bg-blue-600 px-5 py-2 rounded flex gap-4 items-center text-white"
            >
              <FaAngleLeft />
              Services
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-[50px] text-gray-800 font-[700]">
              Select Editing Package
            </h1>
            <p className="text-[16px] font-[500] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              similique.
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 flex-col md:flex-row lg:flex-row xl:row mx-10 my-20">
            {editData.map((items, key) => {
              return (
                <>
                  <div
                    key={key}
                    className={`flex flex-col gap-5 justify-center text-center border border-1 rounded-lg ${items?.borderColor}`}
                    style={{ width: "300px", height: "500px" }}
                  >
                    <h1
                      className={`text-2xl py-5 rounded-t-lg ${items?.bgColor}`}
                    >
                      {items.heading}
                    </h1>
                    <div className="">
                      <p className="p-4 mb-[3rem]">{items.description}</p>
                    </div>
                    <p>+ other benifits</p>
                    <p>
                      from-{" "}
                      <span className="font-semibold text-lg">
                        ${items.amount}
                      </span>{" "}
                      /word
                    </p>
                    <div>
                      <button
                        className="bg-blue-600 text-white px-20 py-2 rounded"
                        onClick={() => handleEditSelect(items)}
                      >
                        {" "}
                        Select
                      </button>
                    </div>
                    <p className="mb-6">Starting from 8 hours</p>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

      {translation ? (
        <div>
          <h1>Translation packages</h1>
        </div>
      ) : (
        ""
      )}

      {writing ? (
        <div>
          <div className="p-2">
            <button
              onClick={handlebackservice}
              className="bg-blue-600 px-5 py-2 rounded flex gap-4 items-center text-white border-none"
            >
              <FaAngleLeft />
              <span>Services</span>
            </button>
          </div>
          <div className="p-5">
            <h1 className="max-md:text-[42px] text-[50px] max-md:font-[400] font-[600] text-gray-800 text-center">
              Medical Writing
            </h1>
            <div className="text-center max-md:text-[12px] text-gray-500 max-[768px]:px-[0]  px-[200px]">
              <p className="">
                Authentic and original medical writing services for Healthcare
                providers, Payers, Biotech, Pharmaceutical, Consumer Health and
                Medical Devices companies across the Globe. Our team of well
                qualified and experienced Medical Writers have deep experience
                in writing Regulatory, Clinical, Scientific and MedCom areas.{" "}
                {!showMore && (
                  <button
                    onClick={() => setShowMore(true)}
                    className="text-blue-300 text-[14px]"
                  >
                    Read More
                  </button>
                )}
              </p>

              {showMore && (
                <>
                  <br />
                  <p>
                    Our experts have a comprehensive understanding of various
                    Regulatory guidelines such as ICH-GCP, FDA, EMA guidelines.
                    Our team consisting of professionals with qualifications in
                    Medical, Pharmaceutical and other Life Science subjects
                    (MBBS, MD, PhD and Masters) has expertise across therapeutic
                    areas.
                  </p>
                  <br />
                  <p>
                    Our Medical Writers can help you prepare clear, concise, and
                    high quality reports and documents. Our writers undergo
                    continuous training with professional organizations.
                  </p>
                  <button
                    onClick={() => setShowMore(false)}
                    className="text-blue-300 text-[14px]"
                  >
                    Read less
                  </button>
                </>
              )}
            </div>
            <div className="mt-[5rem]">
              <h1 className="text-xl text-center">Available Packages</h1>
              <div className="flex justify-center items-center gap-5 flex-wrap mt-4">
                {medwriting.map((items) => {
                  return (
                    <div
                      key={items.id}
                      onClick={() => handleWritingSelect(items)}
                      className="cursor-pointer hover:bg-gray-200 transition duration-500 flex justify-between items-center gap-5 border border-1 border-gray-400 p-5 rounded w-full h-[18vh] md:w-[40%] md:h-[20vh] xl:w-[30%] xl:h-[15vh]"
                    >
                      <p>{items.name}</p>
                      <p className="whitespace-nowrap">${items.price} / word</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        selectedWriting && (
          <div className="p-4">
            <div className="p-2">
              <button
                onClick={handlebackservice}
                className="bg-blue-600 px-5 py-2 rounded flex gap-4 items-center text-white border-none"
              >
                <FaAngleLeft />
                Services
              </button>
            </div>
            <div className=" xl:px-[100px]">
              <form className="mt-6 max-[768px]:px-auto">
                <h1 className="text-[40px] max-[768px]:text-[28px] w-[50%] max-[768px]:w-auto">
                  {selectedWriting.name}
                </h1>
                <div>
                  <p>Please share your details to continue</p>
                  <div className="p-4 border border-dotted border-1 border-gray-500 w-fit mt-5">
                    <h3 className="text-[24px] max-[768px]:text-[18px]">
                      Enter the number of words in your manuscript
                    </h3>
                    <div className="flex flex-col xl:flex-row justify-center items-center gap-4 mt-4">
                      <div className="border border-1 border-gray-400 outline-none p-2 rounded flex">
                        <input
                          type="number"
                          placeholder="eg:5476"
                          className="outline-none"
                          onChange={handleWordCountChange}
                          value={wordCount}
                        />
                        <span>words</span>
                      </div>
                      <div>
                        <button
                          onClick={handleWritingProceed}
                          className="bg-blue-600 p-2 rounded text-white"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* {showAmount && (
                  <div className="mt-5 p-3">
                    <p className="text-[24px]">Select your delivery plan:</p>
                    <ul className="w-auto xl:w-[500px]">
                      {selectedAmount.map((amount, index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-[9rem]"
                        >
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              value={amount.amount}
                              onChange={handleCheckboxChange}
                              checked={checkedAmounts.includes(amount?.amount)}
                              className=""
                            />
                            <p>{amount?.description}</p>
                          </div>
                          <label>${amount.amount}</label>
                        </li>
                      ))}
                      {selectedAmount == 0 && <p>Word exceeds 10000</p>}
                    </ul>
                  </div>
                )} */}
                  <div className="mt-5">
                    <h1 className="text-2xl">Share Document Details</h1>
                    <div className="flex flex-col mt-2">
                      <span>Uplaod file to be editted</span>
                      <input type="file" />
                    </div>
                    <div className="mt-5 flex flex-col">
                      <label htmlFor="">Type of Document</label>
                      <div>
                        <select name="" id="" className="p-2">
                          <option value="">Abstarct</option>
                          <option value="">Case Report </option>
                          <option value="">Thesis/Disertion</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col">
                      <label htmlFor="">Subject area</label>
                      <div>
                        <select name="" id="" className="p-2">
                          <option value="">Abstarct</option>
                          <option value="">Case Report </option>
                          <option value="">Thesis/Disertion</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Subject area name" />
                        )}
                      />
                    </div>
                    <div className="mt-5">
                      <label>Language Style</label>
                      <div className="mt-2 flex gap-5">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="american"
                            checked={languageOption === "american"}
                            onChange={handleOptionChange}
                          />
                          American English
                        </label>
                        <br />
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="british"
                            checked={languageOption === "british"}
                            onChange={handleOptionChange}
                          />
                          British English
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="max-[768px]:hidden p-8 fixed right-[3rem] top-[30%] border border-1 border-gray-400 w-[25%] text-center rounded bg-white">
                <h3 className="text-xl font-[500] mb-3">Order Summary</h3>
                {/* <div className="flex justify-between gap-6">
                  <p>{selectedWriting.name}</p>
                  <p>checked amounts</p>
                </div> */}
                <p>${selectedWriting.price} / word</p>
                {writingProceed ? (
                  <div className="flex justify-center">
                    <table>
                      <thead>
                        <tr>
                          <th>Number of Words</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{wordCount}</td>
                          <td>${totalAmount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  "No orders Yet"
                )}

                <div className="flex justify-between mt-5 border-t border-solid border-gray-600">
                  <h2>Total :</h2>
                  {writingProceed ? <p>${totalAmount}</p> : "$"}
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleOpen}
                    className="px-5 py-2 rounded bg-blue-600 text-white"
                  >
                    Pay
                  </button>
                </div>
                <Backdrop
                  sx={{
                    color: "#fff",
                    position: "fixed",
                    backdropFilter: "blur(8px)",
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Card handleClose={handleClose} />
                </Backdrop>
              </div>

              {showPopup && (
                <div className="hidden max-[768px]:block p-4 fixed bottom-0 left-0 right-0 border border-1 border-gray-400 w-[95%] mx-auto rounded-t-lg text-center rounded bg-white">
                  <h3 className="text-xl font-[500] mb-4">Order Summary</h3>
                  <p>${selectedWriting.price} / word</p>
                {writingProceed ? (
                  <div className="flex justify-center">
                    <table>
                      <thead>
                        <tr>
                          <th>Number of Words</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{wordCount}</td>
                          <td>${totalAmount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  "No orders Yet"
                )}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded bg-blue-600 text-white"
                      onClick={handleOpen}
                    >
                      Pay
                    </button>
                  </div>
                  <Backdrop
                  sx={{
                    color: "#fff",
                    position: "fixed",
                    backdropFilter: "blur(8px)",
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Card handleClose={handleClose} />
                </Backdrop>
                </div>
              )}
            </div>
          </div>
        )
      )}

      {seelectedEditing ? (
        <div className="p-4">
          <div className="p-2">
            <button
              onClick={handlebackservice}
              className="bg-blue-600 px-5 py-2 rounded flex gap-4 items-center text-white border-none"
            >
              <FaAngleLeft />
              Services
            </button>
          </div>
          <div className=" xl:px-[100px]">
            <form className="mt-6 max-[768px]:px-auto">
              <h1 className="text-[40px]">{seelectedEditing.heading}</h1>
              <div>
                <p>Please share your details to continue</p>
                <div className="p-4 border border-dotted border-1 border-gray-500 w-fit mt-5">
                  <h3 className="text-[24px]">
                    Enter the number of words in your manuscript
                  </h3>
                  <div className="flex flex-col xl:flex-row justify-center items-center gap-4 mt-4">
                    <div className="border border-1 border-gray-400 outline-none p-2 rounded flex">
                      <input
                        type="number"
                        placeholder="eg:5476"
                        className="outline-none"
                        onChange={handleWordCountChange}
                        value={wordCount}
                      />
                      <span>words</span>
                    </div>
                    <div>
                      <button
                        onClick={handleProceed}
                        className="bg-blue-600 p-2 rounded text-white"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
                {showAmount && (
                  <div className="mt-5 p-3">
                    <p className="text-[24px]">Select your delivery plan:</p>
                    <ul className="w-auto xl:w-[500px]">
                      {selectedAmount.map((amount, index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-[9rem]"
                        >
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              value={amount.amount}
                              onChange={handleCheckboxChange}
                              checked={checkedAmounts.includes(amount?.amount)}
                              className=""
                            />
                            <p>{amount?.description}</p>
                          </div>
                          <label>${amount.amount}</label>
                        </li>
                      ))}
                      {selectedAmount == 0 && <p>Word exceeds 10000</p>}
                    </ul>
                  </div>
                )}
                <div className="mt-5">
                  <h1 className="text-2xl">Share Document Details</h1>
                  <div className="flex flex-col mt-2">
                    <span>Uplaod file to be editted</span>
                    <input type="file" />
                  </div>
                  <div className="mt-5 flex flex-col">
                    <label htmlFor="">Type of Document</label>
                    <div>
                      <select name="" id="" className="p-2">
                        <option value="">Abstarct</option>
                        <option value="">Case Report </option>
                        <option value="">Thesis/Disertion</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col">
                    <label htmlFor="">Subject area</label>
                    <div>
                      <select name="" id="" className="p-2">
                        <option value="">Abstarct</option>
                        <option value="">Case Report </option>
                        <option value="">Thesis/Disertion</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Subject area name" />
                      )}
                    />
                  </div>
                </div>
                <div className="mt-6 max-[768px]:hidden">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded bg-blue-600 text-white"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </form>
            <div className="max-[768px]:hidden p-8 fixed right-[3rem] top-[30%] border border-1 border-gray-400 w-[25%] text-center rounded bg-white">
              <h3 className="text-xl font-[500] mb-3">Order Summary</h3>
              {checkedAmounts.length > 0 ? (
                <div className="flex justify-between gap-6">
                  <p>{seelectedEditing.heading}</p>
                  <p>${checkedAmounts}</p>
                </div>
              ) : (
                "No orders yet"
              )}
              <div className="flex justify-between mt-5 border-t border-solid border-gray-600">
                <h2>Total :</h2>
                <p>Total amount</p>
              </div>
            </div>

            {showPopup && (
              <div className="hidden max-[768px]:block p-4 fixed bottom-0 left-0 right-0 border border-1 border-gray-400 w-[95%] mx-auto rounded-t-lg text-center rounded bg-white">
                <h3 className="text-xl font-[500] mb-4">Order Summary</h3>
                {checkedAmounts.length > 0 ? (
                  <div className="flex justify-between gap-6">
                    <p>{seelectedEditing.heading}</p>
                    <p>${checkedAmounts}</p>
                  </div>
                ) : (
                  "No orders yet"
                )}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded bg-blue-600 text-white"
                  >
                    Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Landing;
