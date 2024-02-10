'use client';

import { Reservation } from '@prisma/client';
import { SafeListing, SafeUser } from '@/app/types';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

export default function ListingClient({
  listing,
  currentUser,
}: ListingClientProps) {
  return <div>ListingClient</div>;
}
