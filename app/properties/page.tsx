import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListing";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorised" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const listing = await getListings({
    userId: currentUser.id,
  });

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties up for rent"
          subtitle="Looks like you haven't put up your property for rent"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
