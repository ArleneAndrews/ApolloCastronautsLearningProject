import React from 'react';
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
import { Layout } from '../components';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
  query GetTracks {
    
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
  {data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}
</QueryResult>
 
</Layout>
};

export default Tracks;
