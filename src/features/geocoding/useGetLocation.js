import { useQuery } from '@tanstack/react-query';
import { apiGeocoding } from '../../services/apiGeocoding';

export function useGetLocation() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getLocation'],
    queryFn: (city) => apiGeocoding(city),
  });

  return { data, isLoading, error };
}
