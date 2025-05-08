export type PropertyType = {
  room: string[];
  hall: string[];
  exterior: string[];
  washroom: string[];
  pool?: string[]; // optional if not all properties have it
};
