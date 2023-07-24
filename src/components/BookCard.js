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
                        image="https://th.bing.com/th/id/OIP.OcnLjfzboIj5HXnUmbVD1QHaGO?pid=ImgDet&rs=1"
                        title="green iguana"
                        variant="outlined"
                    />
                    <CardContent sx={{padding: 0, marginLeft: 2, flexGrow: 1}}>
                        <Typography gutterBottom variant="h7" component="div">
                            {/*click to this to open book*/}
                            <a href="">{item.name}</a>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}