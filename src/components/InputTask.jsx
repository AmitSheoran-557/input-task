import React, { useState } from 'react';

const InputTask = () => {
    const [firstName, setFirstName] = useState([]);
    const [firstNameContent, setFirstNameContent] = useState('');
    const [lastName, setLastName] = useState([]);
    const [lastNameContent, setLastNameContent] = useState('');
    const [email, setEmail] = useState([]);
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

            setFirstName([...firstName, firstNameContent]);
            setLastName([...lastName, lastNameContent]);
            setEmail([...email, emailContent]);
            setFirstNameContent('');
            setLastNameContent('');
            setEmailContent('');
        }
    };

    const searchBar = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = allData.filter((entry) => {
            return (
                entry.firstName.toLowerCase().includes(searchValue) ||
                entry.lastName.toLowerCase().includes(searchValue) ||
                entry.email.toLowerCase().includes(searchValue)
            );
        });

        setFilteredData(filtered);

        if (searchValue === '') {
            setFilteredData(allData);
        }
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
                <button onClick={handleChange} className='lg:px-7 px-6 py-1 bg-blue-600 hover:bg-blue-800 transition-all ease-linear duration-300 lg:mt-7 mt-5 text-white rounded-md lg:text-lg text-base'>
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
                            {filteredData.map((entry, index) => (
                                <tr key={index}>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{entry.firstName}</td>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{entry.lastName}</td>
                                    <td className='border-2 border-sky-400 px-3 py-1'>{entry.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InputTask;
