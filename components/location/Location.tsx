import { supabase } from '../../utils/supabase.client';
import { definitions } from '../../types/supabase.types';

import LocationImage from './LocationImage';
import TypeTag from '../type/TypeTag'

type Location = definitions['location'] & {
  type: definitions['location_type'];
  links: (definitions['location_link'] & {
    type: definitions['link_type']
  })[]
};

export default function Location({ location }: { location: Location }) {
  async function updateLocation(loc: Location, changes: Location) {
    try {
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
    <div className="flex flex-col bg-sol-white-1 mb-4 mt-4 p-4 border-2 border-sol-grey-1 hover:border-sol-blue-1 rounded-xl hover:shadow-lg">
      <div className="inline-flex gap-2 mb-2 items-center">
        <h2>{location.name}</h2>
        <TypeTag type={location.type} />
      </div>

      <div className="flex">
        <div className="shrink-0">
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
        ))}</div>

        <div className="ml-10 mr-10">
          <p>
            {location.details}
          </p>
        </div>
      </div>

      <ul className="flex gap-2">
        {location.links.map(link => (
            <li key={`${location.id}-${link.id}`}>
              <a href={link.url}>{link.type.name.toLocaleUpperCase('en-US')}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
