import React from 'react';
import BoxSx from "./miniComponents/comments";

const RightSection = ({children, style}) => {
    const defaultStyles = {
        width: '25%',
        margin: '0 auto',
        display: 'flex',
        marginTop: "10px",
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    };

    return <section style={{...defaultStyles, ...style}}>{children}</section>;
};

export default function RightSideSection() {
    return (
        <RightSection>
            <BoxSx/>
        </RightSection>
    );
}
