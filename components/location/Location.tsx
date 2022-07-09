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
            <TypeTag type={location.type} />
            <h2 className="mb-2 text-center md:text-left">{location.name}</h2>
          </>
        ),
        content: (
          <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
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
              ))}
            </div>

            <div className="ml-2 mr-2 md:ml-5 md:mr-5">
              <p>{location.details}</p>
            </div>
          </div>
        ),
        footer: (
          <ul className="flex gap-2">
            {location.links.map((link) => (
              <li key={`${location.id}-${link.id}`}>
                <a href={link.url}>{link.type.name.toLocaleUpperCase('en-US')}</a>
              </li>
            ))}
          </ul>
        ),
      }}
    </Card>
  );
}
