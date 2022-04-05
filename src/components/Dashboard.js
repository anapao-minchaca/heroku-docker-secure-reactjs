import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
    return (
    <ImageList sx={{ width: 500, height: 450 }}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
            />
        </ImageListItem>
        ))}
    </ImageList>
    );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/564x/2a/9e/5a/2a9e5a3dab34f91b7eabf7d546d8fc19.jpg',
    title: 'sweet letters to u',
    author: '@bkristastucchio',
  },
  {
    img: 'https://i.pinimg.com/564x/01/28/83/01288378bef8f1c8b4317f5a21987f9e.jpg',
    title: 'stickers',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.pinimg.com/564x/75/fa/da/75fada64a62d13de61c750f6815a9d0c.jpg',
    title: 'cake',
    author: '@helloimnik',
  },
  {
    img: 'https://i.pinimg.com/564x/f8/24/82/f82482edf7a8119dba484d0cc46c698e.jpg',
    title: 'notebook',
    author: '@nolanissac',
  },
  {
    img: 'https://i.pinimg.com/564x/40/3b/dc/403bdcfadf5b8a1da3924098861844f8.jpg',
    title: 'milk',
    author: '@hjrc33',
  },
  {
    img: 'https://i.pinimg.com/564x/dc/de/1c/dcde1c9a27224e3c800fc6c192215209.jpg',
    title: 'cinamoroll',
    author: '@arwinneil',
  },
  {
    img: 'https://i.pinimg.com/564x/e0/6a/6f/e06a6f14fecb4683d7b58f36a24c0f7c.jpg',
    title: 'keycaps',
    author: '@tjdragotta',
  },
  {
    img: 'https://i.pinimg.com/564x/79/14/44/79144444c8771979ca1185e3b685a38c.jpg',
    title: 'books',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.pinimg.com/736x/52/0b/32/520b32901020a91e1fae8e133d44abe9.jpg',
    title: 'kirby',
    author: '@silverdalex',
  },
  {
    img: 'https://i.pinimg.com/564x/1a/a7/c6/1aa7c6a6546438de103cd3934cf9295a.jpg',
    title: 'candles',
    author: '@shelleypauls',
  },
  {
    img: 'https://i.pinimg.com/564x/e2/a0/22/e2a022d63f9af55903b8ced9654c9b8e.jpg',
    title: 'cat',
    author: '@peterlaster',
  },
  {
    img: 'https://i.pinimg.com/564x/25/3d/74/253d74ecc7cae6093ff38b3bb9363735.jpg',
    title: 'phone case',
    author: '@southside_customs',
  },
];