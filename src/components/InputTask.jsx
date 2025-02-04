import React, { useEffect, useState } from 'react';

const InputTask = () => {
    const [firstNameContent, setFirstNameContent] = useState('');
    const [lastNameContent, setLastNameContent] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);

    const handleChange = () => {
        if (firstNameContent === '' || lastNameContent === '' || emailContent === '') {
            alert('Please fill all the fields');
        } else {
            const newEntry = { firstName: firstNameContent, lastName: lastNameContent, email: emailContent };
            setFilteredData([...filteredData, newEntry]);
            setAllData([...allData, newEntry]);
            setFirstNameContent('');
            setLastNameContent('');
            setEmailContent('');
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem('allData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setAllData(parsedData);
            setFilteredData(parsedData);
        }
    }, []);

    useEffect(() => {
        if (allData.length > 0) {
            localStorage.setItem('allData', JSON.stringify(allData));
        }
    }, [allData]);

    const searchBar = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = allData.filter((data) => {
            return (
                data.firstName.toLowerCase().includes(searchValue) ||
                data.lastName.toLowerCase().includes(searchValue) ||
                data.email.toLowerCase().includes(searchValue)
            );
        });

        setFilteredData(filtered);
        if (searchValue === '') {
            setFilteredData(allData);
        }
    };

    const clearAllData = () => {
        localStorage.removeItem('allData'); 
        setAllData([]);                     
        setFilteredData([]);                
    };

    return (
        <div className='min-h-screen justify-center items-center flex flex-col w-full max-lg:px-3'>
            <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center'>
                <div className="flex gap-3 w-full max-w-6xl mx-auto flex-wrap justify-center items-center">
                    <input className='border-2 w-full lg:placeholder:text-lg text-base text-gray-500 min-w-xs max-w-xs border-gray-400 rounded-lg lg:px-5 lg:py-5 px-3 md:py-4 py-3' value={firstNameContent}
                        onChange={(e) => setFirstNameContent(e.target.value)} type="name" placeholder='Enter your First name' />
                    <input className='border-2 w-full lg:placeholder:text-lg text-base text-gray-500 min-w-xs max-w-xs border-gray-400 rounded-lg lg:px-5 lg:py-5 px-3 md:py-4 py-3' value={lastNameContent}
                        onChange={(e) => setLastNameContent(e.target.value)} type="name" placeholder='Enter your Last name' />
                    <input className='border-2 w-full lg:placeholder:text-lg text-base text-gray-500 min-w-xs max-w-xs border-gray-400 rounded-lg lg:px-5 lg:py-5 px-3 md:py-4 py-3' value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)} type="email" placeholder='Enter your email' />
                </div>
                <button onClick={handleChange} className='lg:px-7 px-6 py-1 bg-indigo-600 hover:bg-indigo-800 transition-all ease-linear duration-300 lg:mt-7 mt-5 text-white rounded-md lg:text-lg text-base'>
                    Add
                </button>
                <div className="flex gap-3 lg:mt-10 mt-7 w-full mx-auto justify-center">
                    <input className='border-2 border-sky-400 rounded-lg lg:px-5 lg:py-2.5 px-3 py-1.5' onChange={searchBar} type="text" placeholder='Search...' />
                </div>
                <div className="overflow-x-scroll hide-scroll w-full">
                    <table className='w-full max-w-6xl mx-auto lg:mt-7 mt-5 rounded-lg'>
                        <thead>
                            <tr>
                                <th className='border-2 border-sky-400 rounded-lg px-3 py-1 lg:text-base whitespace-nowrap text-sm'>First Name</th>
                                <th className='border-2 border-sky-400 rounded-lg px-3 py-1 lg:text-base whitespace-nowrap text-sm'>Last Name</th>
                                <th className='border-2 border-sky-400 rounded-lg px-3 py-1 lg:text-base whitespace-nowrap text-sm'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((data, index) => (
                                <tr key={index}>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{data.firstName}</td>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{data.lastName}</td>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{data.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button onClick={clearAllData} className='lg:px-7 px-6 py-2 bg-red-600 hover:bg-red-800 transition-all ease-linear duration-300 lg:mt-7 mt-5 text-white rounded-md lg:text-lg text-base'>
                    Clear All Data
                </button>
            </div>
        </div>
    );
};

export default InputTask;
