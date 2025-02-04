import React, { useState, useEffect } from "react";
import pageLogo from "./../assets/images/png/header-logo.png";
import { HEADER_LIST } from "../utils/helper";
import { DiscordIcon } from "../utils/icons";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex justify-between bg-black bg-opacity-80">
            <div className="max-w-[1320px] flex justify-between w-full mx-auto xl:py-[21px] lg:py-4 py-3 items-center max-xl:px-6">
                <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-5 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white ${open ? "hidden" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
                </button>
                <a href="/">
                    <img className="xl:max-w-[286px] lg:max-w-44 max-w-40" src={pageLogo} alt="page-logo" />
                </a>
                <div className={`flex xl:gap-[39px] items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto justify-end lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 max-lg:justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                    <div className="xl:gap-10 lg:gap-8 gap-7 flex max-lg:flex-col justify-center items-center">
                        {HEADER_LIST.map((item, index) => (
                            <a onClick={handleOpen} key={index} href={item.link} className="font-bold xl:text-[22px] lg:text-lg text-base hover:text-blue text-white transition-all duration-300 ease-linear hover:text-blue-700">{item.title}</a>
                        ))}
                    </div>
                    <div className="bg-white bg-gradient group bg-opacity-10 gap-2.5 xl:py-[14px] py-3 xl:px-[34px] px-8 rounded-[79px] flex justify-center items-center">
                        <span><DiscordIcon /></span>
                        <button onClick={handleOpen} className=" text-white whitespace-nowrap rounded-[9px] xl:text-2xl md:text-xl text-base hover:bg-transparent font-medium transition-all duration-300 ease-linear">Discord</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
