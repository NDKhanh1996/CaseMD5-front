import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(data => setData(data.result));
    }, []);

    return (
        <>
            {data.map(item => (
                <Card sx={{ maxWidth: 150, minWidth: 150, margin: 1 }}>
                    <CardMedia
                        sx={{ maxHeight: 200, height: 999 }} // check later
                        image="https://th.bing.com/th/id/OIP.OcnLjfzboIj5HXnUmbVD1QHaGO?pid=ImgDet&rs=1"
                        title="green iguana"
                    />
                    <CardContent sx={{ padding: 0, marginLeft: 2, height: 25 }}>
                        <Typography gutterBottom variant="h5" component="div" >
                            {item.name}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ height: 10 }}>
                        <Button size="small">Read Now</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}