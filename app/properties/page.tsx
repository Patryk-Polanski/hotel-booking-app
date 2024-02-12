import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

import EmptyState from '../components/EmptyState';
import PropertiesClient from './PropertiesClient';

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorised access' subtitle='Please login' />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length < 1) {
    return (
      <EmptyState
        title='No properties found'
        subtitle="Looks like you don't have any properties"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
