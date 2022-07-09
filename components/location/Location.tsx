import { supabase } from '../../utils/supabase.client';
import { definitions } from '../../types/supabase.types';

import LocationImage from './LocationImage';
import TypeTag from '../type/TypeTag';
import Card from '../Card';

type Location = definitions['location'] & {
  type: definitions['location_type'];
  links: (definitions['location_link'] & {
    type: definitions['link_type'];
  })[];
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
    <Card>
      {{
        cardTitle: (
          <>
          <h2>{location.name}</h2>
          <TypeTag type={location.type} />
          </>
        ),
        content: (
          <div className="flex flex-col md:flex-row items-center md:items-start">
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

            <div className="ml-5 mr-5 md:ml-10 md:mr-10">
              <p>{location.details}</p>
            </div>
          </div>
        ),
        footer:
          <ul className="flex gap-2">
            {location.links.map((link) => (
              <li key={`${location.id}-${link.id}`}>
                <a href={link.url}>{link.type.name.toLocaleUpperCase('en-US')}</a>
              </li>
            ))}
          </ul>
      }}
    </Card>
  );
}
