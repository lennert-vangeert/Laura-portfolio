import { Title } from '@mantine/core';

const MainSubTitle = ({ text }: { text: string }) => {
    return (
        <Title mb="2rem" order={2}>{text}</Title>
    );
};

export default MainSubTitle;