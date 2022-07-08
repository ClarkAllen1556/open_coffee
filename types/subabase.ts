/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/location": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          type?: parameters["rowFilter.location.type"];
          created_by?: parameters["rowFilter.location.created_by"];
          created_at?: parameters["rowFilter.location.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["location"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** location */
          location?: definitions["location"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          type?: parameters["rowFilter.location.type"];
          created_by?: parameters["rowFilter.location.created_by"];
          created_at?: parameters["rowFilter.location.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          type?: parameters["rowFilter.location.type"];
          created_by?: parameters["rowFilter.location.created_by"];
          created_at?: parameters["rowFilter.location.created_at"];
        };
        body: {
          /** location */
          location?: definitions["location"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/location_type": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location_type.id"];
          created_at?: parameters["rowFilter.location_type.created_at"];
          name?: parameters["rowFilter.location_type.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["location_type"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** location_type */
          location_type?: definitions["location_type"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location_type.id"];
          created_at?: parameters["rowFilter.location_type.created_at"];
          name?: parameters["rowFilter.location_type.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location_type.id"];
          created_at?: parameters["rowFilter.location_type.created_at"];
          name?: parameters["rowFilter.location_type.name"];
        };
        body: {
          /** location_type */
          location_type?: definitions["location_type"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  location: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /** Format: text */
    name?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `location_type.id`.<fk table='location_type' column='id'/>
     */
    type: number;
    /** Format: uuid */
    created_by: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
  };
  location_type: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: character varying */
    name: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description location */
  "body.location": definitions["location"];
  /** Format: uuid */
  "rowFilter.location.id": string;
  /** Format: text */
  "rowFilter.location.name": string;
  /** Format: bigint */
  "rowFilter.location.type": string;
  /** Format: uuid */
  "rowFilter.location.created_by": string;
  /** Format: timestamp with time zone */
  "rowFilter.location.created_at": string;
  /** @description location_type */
  "body.location_type": definitions["location_type"];
  /** Format: bigint */
  "rowFilter.location_type.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.location_type.created_at": string;
  /** Format: character varying */
  "rowFilter.location_type.name": string;
}

export interface operations {}

export interface external {}
