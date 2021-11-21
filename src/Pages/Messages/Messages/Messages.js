import { faAngleRight, faChevronCircleRight, faCog, faPaperclip, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MessageHead from '../MessageHead/MessageHead';



const Messages = () => {
    return (
        <div className='h-screen bg-gray-100'>

            <div className='container mx-auto py-5'>
                <MessageHead></MessageHead>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                    <div className='bg-white p-5 rounded-md'>
                        <input className='px-3 py-2 bg-gray-200 rounded-md w-full' type="text" name="" id="" placeholder='Search People or Messages' />
                        <div className='flex  justify-between'>
                            <div className='text-center bg-gradient-to-r from-blue-400 to-purple-500 w-full text-white py-3'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className='text-center bg-gradient-to-r from-blue-400 to-purple-500 w-full text-white py-3'>
                                <FontAwesomeIcon icon={faUserFriends} />
                            </div>
                            <div className='text-center bg-gradient-to-r from-blue-400 to-purple-500 w-full text-white py-3'>
                                <FontAwesomeIcon icon={faCog} />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 mx-auto'>
                        <h1>hello</h1>
                        <form action="">

                            <textarea className='rounded-md bg-gray-200 p-2 w-full' name="" placeholder='Enter a Message' id="" cols="70" rows="5"></textarea>
                            <div className='text-right'>

                                <button className='px-2'><FontAwesomeIcon icon={faPaperclip} /></button>
                                <button type='submit'><FontAwesomeIcon icon={faChevronCircleRight} /></button>
                            </div>
                        </form>
                    </div>
                    <div>
                        profile
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;