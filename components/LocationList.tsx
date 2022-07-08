import { ReactElement, ReactNode, useEffect, useState } from "react";
import { supabase } from "../utils/supabase.client";
import { definitions } from "../types/subabase";

type Location = definitions["location"] & {
  type: definitions["location_type"];
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
        .from<Location>("location")
        .select("id, name, type:location_type(name)");

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
    return (
      <div className="">
        <h3>{location.name}</h3>
        <div>{location.type.name}</div>
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
