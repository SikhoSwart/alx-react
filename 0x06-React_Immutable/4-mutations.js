import { List, Map } from 'immutable';

export const concatElements = (map, map2) => List(map).concat(List(map2));

export const mergeElements = (map, map2) => Map(map).merge(Map(map2));
