import React from "react";
import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Banner from "../partials/Banner";

const Profile = () => {
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [img, setimg] = useState("");
  const [number, setNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [residence, setResidence] = useState("");
  const [SelectedImagePreview, setSelectedImagePreview] = useState("");
  const Countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua",
    "Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
  ];

  const ChangeImage = (e) => {
    e.preventDefault();
    let Reader = new FileReader();
    let FileNameAtZeroIndex = e.target.files[0];

    Reader.onloadend = () => {
      setimg(FileNameAtZeroIndex);
      setSelectedImagePreview(Reader.result);
    };

    Reader.readAsDataURL(FileNameAtZeroIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, img, number);

    setFName("");
    setLName("");
    setEmail("");
    setimg("");
    setNumber("");
    setDob("");
    setNationality("");
    setAddress("");
    setResidence("");
    setGender("");
    SelectedImagePreview("");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={true} setSidebarOpen={true} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={true} setSidebarOpen={true} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            <div className="h-screen">
              <div className="flex flex-row">
                <form>
                  <div className="max-w-xl mt-20 bg-transparent p-10 rounded-md mx-auto">
                    <div className="flex flex-row gap-20">
                      <div className="my-2">
                        <label htmlFor="" className="block">
                          Profile Picture
                        </label>
                        <input
                          className="my-5 text-sm text-grey-500
                        file:mr-2 file:py-2 file:px-6
                        file:rounded-full file:border-0
                        file:text-sm file:font-medium
                        file:bg-blue-50 file:text-blue-700
                        hover:file:cursor-pointer hover:file:bg-indigo-800
                        hover:file:text-blue-50"
                          type="file"
                          accept="image/*"
                          key={img}
                          id="image"
                          name="image"
                          onChange={(e) => {
                            ChangeImage(e);
                          }}
                        />
                      </div>
                      <div class="overflow-hidden relative bg-gray-100 rounded-full dark:bg-gray-600 w-28 h-28">
                        {img !== "" ? (
                          <img
                            src={
                              SelectedImagePreview !== ""
                                ? SelectedImagePreview
                                : "../images/user-36-01.png"
                            }
                            className="w-full h-full"
                          />
                        ) : (
                          <svg
                            class="absolute w-20 h-20 text-gray-400 ml-4 mt-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row gap-5">
                      <div>
                        <label htmlFor="" className="block">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={Fname}
                          className="w-full py-2 px-2 rounded-md mt-2"
                          onChange={(e) => setFName(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <label htmlFor="" className="block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={Lname}
                          placeholder="Last Name"
                          className="w-full py-2 px-2 rounded-md mt-2"
                          onChange={(e) => setLName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 my-2">
                      <div className="w-full">
                        <label htmlFor="" className="block">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          className="w-full py-2 px-2 rounded-md mt-2"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="" className="block">
                          Gender
                        </label>
                        <select
                          value={gender}
                          placeholder="Gender"
                          className="w-full py-2 px-2 pr-10 rounded-md mt-2"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option>Select Gender</option>
                          <option value={"Male"}>Male</option>
                          <option value={"Female"}>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5">
                      <div>
                        <label htmlFor="" className="block">
                          Date of Birth
                        </label>
                        <input
                          type="text"
                          placeholder="DOB"
                          value={dob}
                          className="w-full py-2 px-2 rounded-md mt-2"
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <label htmlFor="" className="block">
                          Phone #
                        </label>
                        <input
                          type="tel"
                          placeholder="phone #"
                          value={number}
                          className="w-full py-2  px-2 rounded-md mt-2"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 my-2">
                      <div className="w-full">
                        <label htmlFor="" className="block">
                          Nationality
                        </label>
                        <select
                          value={nationality}
                          placeholder="Nationality"
                          className="w-full py-2 px-2 pr-10 rounded-md mt-2"
                          onChange={(e) => setNationality(e.target.value)}
                        >
                          <option>Select Nationality</option>
                          {Countries.map((country, index) => {
                            return (
                              <option id={index} value={country}>
                                {country}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="w-full">
                        <label htmlFor="" className="block">
                          Country Of Residence
                        </label>
                        <select
                          value={residence}
                          placeholder="Gender"
                          className="w-full py-2 px-2 pr-10 rounded-md mt-2"
                          onChange={(e) => setResidence(e.target.value)}
                        >
                          <option>Select Residence</option>
                          {Countries.map((country, index) => {
                            return (
                              <option id={index} value={country}>
                                {country}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="my-2">
                      <label htmlFor="" className="block">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        className="w-full py-2 px-2 rounded-md mt-2"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <button
                      className="text-center mt-6 w-full bg-indigo-600 py-1 rounded-md text-white text-lg"
                      onClick={handleSubmit}
                    >
                      Add Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
