'use client';

import { SafeListing, SafeUser } from '../types';

import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface FavoritesClientProps {
  favListings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function FavoritesClient({
  favListings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title='Favorites' subtitle='List of places you have favorited' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {favListings.map((favListing) => (
          <ListingCard
            currentUser={currentUser}
            key={favListing.id}
            data={favListing}
          />
        ))}
      </div>
    </Container>
  );
}
