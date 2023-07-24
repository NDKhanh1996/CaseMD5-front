import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/book/')
            .then(response => response.json())
            .then(data => setData(data.result));
    }, []); // need dependency

    return (
        <>
            {data.map(item => (
                <Card sx={{maxWidth: 150, minWidth: 150, margin: 1}} variant="null" key={item.id}>
                    <CardMedia
                        sx={{
                            maxHeight: 200,
                            height: 999,
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px'
                        }} // check later
                        image="https://firebasestorage.googleapis.com/v0/b/md5front-3316d.appspot.com/o/images%2FCa%CC%80-phe%CC%82-%C4%91en-Sa%CC%80i-Go%CC%80n-1.jpeg?alt=media&token=c8439625-aaf0-4ba7-a8ce-52e82fdcea95"
                        title="green iguana"
                        variant="outlined"
                    />
                    <CardContent sx={{padding: 0, marginLeft: 2, flexGrow: 1}}>
                        <Typography gutterBottom variant="h7" component="div">
                            <a href="">{item.name}</a>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}