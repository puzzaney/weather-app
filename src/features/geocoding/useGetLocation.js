import { useQuery } from '@tanstack/react-query';
import { apiGeocoding } from '../../services/apiGeocoding';

export function useGetLocation(city) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getLocation', city],
    queryFn: () => apiGeocoding(city),
  });

  return { data, isLoading, error };
}
