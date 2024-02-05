'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      src={src || '/images/placeholder.jpg'}
      alt='user avatar'
      className='rounded-full'
      height='30'
      width='30'
    />
  );
}
