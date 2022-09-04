import React, { useState } from 'react';
import { useTimer } from '../../Hooks/useTimer';

const Watch = () => {
    const { handleStart,
        handlePause,
        handleReset,
        timer } = useTimer()
    return (
        <div className='bg-violet-600 h-screen flex justify-center items-center	'>
            <div className='bg-white p-16 '>
                <h2>Stop watch: </h2>
                <button className="btn btn-outline rounded-none text-3xl">{timer.hDisplay ? timer.hDisplay : '00'}</button>
                <button className="btn btn-outline rounded-none text-3xl">{timer.mDisplay ? timer.mDisplay : '00'}</button>
                <button className="btn btn-outline rounded-none text-3xl">{timer.sDisplay ? timer.sDisplay : '00'}</button>
                <div className='relative mt-3'>
                    <button onClick={handleStart} className="btn bg-violet-600  rounded-none border-0 ">Start</button>
                    <button className="btn bg-violet-600  rounded-none mx-3 border-0" onClick={handleReset}>Reset</button>
                    <button onClick={handlePause} className="bg-violet-600 btn rounded-none border-0">Stop</button>
                </div>


            </div>
        </div>
    );
};

export default Watch;