import React from 'react'
import { Flex, Spin } from 'antd';

const Loader: React.FC = () => (
    <div className='bg-bgdark w-full h-screen flex items-center justify-center'>
        <Flex align="center" gap="middle">
            <Spin size="large" />
        </Flex>
    </div>
);

export default Loader;
