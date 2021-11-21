import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, } from '@fortawesome/free-solid-svg-icons'
const MessageHead = () => {
    return (
        <div className='flex  justify-between'>
            <h1 className='font-medium text-4xl'>Messages</h1>
            <div className='flex items-center'>
                <div className='px-2'>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div>
                    <img className=' rounded-md h-12' src="https://randomuser.me/api/portraits/men/38.jpg" alt="profile pic" />
                </div>
            </div>
        </div>
    );
};

export default MessageHead;