import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";

export default function ExampleTextareaComment(props) {
    const [worldComment, setWorldComment] = useState(false);
    let account
    if (props){
        account = props.session.accountInfo
    }

    useEffect(() => {
        fetch('http://localhost:8080/worldComment/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('worldComment');
                }
            })
            .then(data => setWorldComment(data))
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(account)

    const [italic, setItalic] = React.useState(false);
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <FormControl>
            <h1 style={{paddingLeft: 10, color: "#2980b9"}}>Chat thế giới</h1>



            {worldComment.result && worldComment.result.length > 0 && (
                worldComment.result.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginLeft: '10px',
                            border: '1px solid black',
                            padding: '5px',
                            boxShadow: '3px 3px 5px rgba(1, 1, 1, 1)',
                            marginBottom: '10px',
                        }}
                    >
                        <Typography sx={{ color: 'blue' }}>{item.account.name}</Typography>
                        <Typography>{item.content}</Typography>
                    </Box>
                ))
            )}




            <FormLabel sx={{ marginLeft: '10px', }}>Your comment</FormLabel>
            <Textarea
                placeholder="Type something here…"
                minRows={3}
                endDecorator={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                        }}
                    >
                        <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                        >
                            <FormatBold/>
                            <KeyboardArrowDown fontSize="md"/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            size="sm"
                            placement="bottom-start"
                            sx={{'--ListItemDecorator-size': '24px'}}
                        >
                            {['200', 'normal', 'bold'].map((weight) => (
                                <MenuItem
                                    key={weight}
                                    selected={fontWeight === weight}
                                    onClick={() => {
                                        setFontWeight(weight);
                                        setAnchorEl(null);
                                    }}
                                    sx={{fontWeight: weight}}
                                >
                                    <ListItemDecorator>
                                        {fontWeight === weight && <Check fontSize="sm"/>}
                                    </ListItemDecorator>
                                    {weight === '200' ? 'lighter' : weight}
                                </MenuItem>
                            ))}
                        </Menu>
                        <IconButton
                            variant={italic ? 'soft' : 'plain'}
                            color={italic ? 'primary' : 'neutral'}
                            aria-pressed={italic}
                            onClick={() => setItalic((bool) => !bool)}
                        >
                            <FormatItalic/>
                        </IconButton>
                        <Button sx={{ml: 'auto'}}>Send</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                    fontWeight,
                    fontStyle: italic ? 'italic' : 'initial',
                }}
            />
        </FormControl>
    );
}
