import React from 'react'
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Utilities ',
        path: '/utilities',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpend: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Import Items',
                path: '/utilities/import/item',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/utilities',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },

] 
