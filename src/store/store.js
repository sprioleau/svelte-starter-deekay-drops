import { derived, writable } from 'svelte/store';

export const query = writable("");
export const dropItems = writable([]);

export const filtered = derived(
  [query, dropItems], 
  ([$query, $dropItems]) => $dropItems.filter(({ full_name, short_name, number }) => {
    const terms = [full_name, short_name, number];
    
    if (!$query || terms.every((term) => term.length === 0)) return true;
  
    return terms.some((term) => term.trim().toLowerCase().includes($query.trim().toLowerCase()))
  })
);

