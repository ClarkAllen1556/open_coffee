import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase.client';
import { definitions } from '../../types/supabase.types';

import Location from './Location';

type Location = definitions['location'] & {
  type: definitions['location_type'];
  links: (definitions['location_link'] & {
    type: definitions['link_type']
  })[]
};

export default function LocationList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    getLocations();
  }, []);

  async function getLocations() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from<Location>('location')
        .select('*, type:location_type(id, name), links:location_link(id, url, type:link_type(name))') // todo need to have all the fields if I want to do update

      if (error && status !== 406) throw error;

      if (data) {
        setLocations(data);
      }
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div>
        <strong>Loading...</strong>
      </div>
    );
  }

  return (
    <div>
      {locations.map((loc: Location) => (
        <Location location={loc} key={loc.id} />
      ))}
    </div>
  );
}
