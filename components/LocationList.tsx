import { ReactElement, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase.client';
import { definitions } from '../types/supabase.types';
import LocationImage from './LocationImage';

type Location = definitions['location'] & {
  type: definitions['location_type'];
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

      let { data, error, status } = await supabase.from<Location>('location').select('*, type:location_type(id, name)'); // todo need to have all the fields if I want to do update

      if (error && status !== 406) throw error;

      if (data) {
        setLocations(data);
      }
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }

  function LocationElement({ location }: { location: Location }): ReactElement {
    async function updateLocation(loc: Location, changes: Location) {
      try {
        const update = {
          ...changes,
          id: location.id,
          type: location.type.id, // need to specify the type which is annoying why cant I just update the fiels i need
        };
        console.log('change>> ', changes);

        let { error } = await supabase.from('location').upsert(
          {
            ...changes,
            id: location.id,
            type: location.type.id,
          },
          {
            returning: 'minimal',
          }
        );

        if (error) throw error;
      } catch (error: any) {
        alert(error.message);
      }
    }

    return (
      <div className="">
        <h3>{location.name}</h3>
        <div>{location.type.name}</div>
        {location.images?.map((img) => (
          <LocationImage
            key={`${location.id}-img`}
            url={img}
            onUpload={(url) =>
              updateLocation(location, {
                ...location,
                images: location.images ? [...location.images, url] : [url],
              })
            }
          />
        ))}
      </div>
    );
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
        <LocationElement location={loc} key={loc.id} />
      ))}
    </div>
  );
}
