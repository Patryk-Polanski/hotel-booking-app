import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';

import FavoritesClient from './FavoritesClient';

export default async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  const favListings = await getFavoriteListings();

  if (favListings.length === 0) {
    return (
      <EmptyState
        title='No favorites found'
        subtitle='Looks Like you have no favorite listing'
      />
    );
  }

  return (
    <FavoritesClient currentUser={currentUser} favListings={favListings} />
  );
}
