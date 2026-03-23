export const zigbeePrefixes = ['e&m', 's&m', 'zaak', 'kamp', 'Alles'] as const;

export type ZigbeePrefix = (typeof zigbeePrefixes)[number];

// Backward-compatible alias.
export type ZigbeePrefixes = ZigbeePrefix;
