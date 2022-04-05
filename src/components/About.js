import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
    src: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf5tq3O9YJnE8jq0Frlt1aWWAIHgMkn41o9cQpxE0AJYbJY62C6qDfGOZc7QdcIGEfODEvmrPllrZbiqrBgRH0_4c3sI.jpg?r=4ce',
    title: 'Sailor Moon Eternal: La película',
    channel: 'Netflix',
    views: '396 k views',
    createdAt: 'a week ago',
    },
    {
    src: 'https://i.ytimg.com/vi/Xnfxqg3mWuc/maxresdefault.jpg',
    title: '[EN-loG] 정원의 힐링 로그 JUNGWON DAY - ENHYPEN (엔하이픈) (ENG/JPN)',
    channel: 'ENHYPEN',
    views: '2.33 M views',
    createdAt: '1 year ago',
    },
    {
    src: 'https://i.ytimg.com/vi/8iuLXODzL04/maxresdefault.jpg',
    title: 'YOASOBI「たぶん」Official Music Video',
    channel: 'Ayase / YOASOBI',
    views: '62 M views',
    createdAt: '10 months ago',
    },
];

interface MediaProps {
    loading?: boolean;
}

function Media(props: MediaProps) {
    const { loading = false } = props;
    
    return (
    <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
            <img
            style={{ width: 210, height: 118 }}
            alt={item.title}
            src={item.src}
            />
        ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
            )}
            {item ? (
            <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
                </Typography>
            </Box>
            ) : (
            <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
            </Box>
            )}
        </Box>
        ))}
    </Grid>
    );
}

export default function YouTube() {
    return (
    <Box sx={{ overflow: 'hidden' }}>
        <Media loading />
        <Media />
    </Box>
    );
}