export type SerializeInput<T> = (
  input: T,
) => Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

import type { Jsonify } from 'type-fest/source/jsonify';

export interface CountryProps {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: Timezone[];
  translations: Record<string, string>;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

export interface StateProps {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
}

export type Pagination = {
  limit?: MaxInt<50>;
  offset?: number;
};

export type MaxInt<T extends number> = number extends T
  ? number
  : _Range<T, []>;

export type _Range<
  T extends number,
  R extends unknown[],
> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;

export type MaybeJsonified<T extends object> = T | Jsonify<T>;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type WithClassName<T> = T & { className?: string };
