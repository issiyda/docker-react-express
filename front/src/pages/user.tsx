import React from 'react';
import { Box, Input } from '@chakra-ui/react'

const UserPage = () => {
    return (
        <Box>
        <h1>User Page</h1>
        <Input placeholder='ユーザ名' />
        <Input placeholder='メールアドレス' />
        <Input placeholder='パスワード' />
        </Box>
    );
}

export default UserPage;