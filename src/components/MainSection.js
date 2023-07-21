import React from 'react';
import BookCard from "./BookCard";

const CenteredSection = ({ children, style }) => {
    const defaultStyles = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        marginTop: "10px",
        flexWrap: 'wrap',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'
    };

    return <section style={{ ...defaultStyles, ...style }}>{children}</section>;
};

export default function MainSection() {
    return (
        <CenteredSection>
            <BookCard />
        </CenteredSection>
    );
}
