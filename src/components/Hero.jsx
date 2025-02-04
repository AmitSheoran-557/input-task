import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {

        const calculateTimeLeft = () => {
            const targetDate = new Date();
            targetDate.setHours(11, 0, 0, 0);
            if (new Date() > targetDate) {
                targetDate.setDate(targetDate.getDate() + 1);
            }

            const now = new Date();
            const timeDifference = targetDate - now;
            if (timeDifference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setTimeLeft({ days, hours, minutes, seconds });
        };
        const intervalId = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='bg-hero-bg bg-cover'>
            <Header />
            <div className="max-w-[1320px] min-h-screen w-full mx-auto xl:pt-[254px] lg:pt-48 md:pt-32 sm:pt-24 pt-20 xl:pb-32 lg:pb-28 md:pb-24 pb-20 max-lg:px-5">
                <h1 className='max-w-[1100px] mx-auto text-center font-poppins text-white xl:text-7xl lg:text-6xl md:text-5xl text-4xl lg:mb-5 mb-4 !leading-[127.5%]'>There are games... And then
                    there are <span className='text-blue'>Gilded</span> Games</h1>
                <p className="font-semibold leading-[127%] text-4xl text-white text-center timer">
                    <span className="text-[#1BABFE]">{timeLeft.days}d</span> :
                    {timeLeft.hours}hr : {timeLeft.minutes}min : {timeLeft.seconds}sec
                </p>
                <p className='lg:text-lg text-base text-white mx-auto text-center lg:mb-[22px] mb-4'>Remaining Presale Time</p>
                <div className="flex justify-center gap-[23px]">
                    <CustomButton iconClassName='!block' title='Presale' />
                    <CustomButton title='Join Now' />
                </div>
            </div>
        </div>
    )
}

export default Hero