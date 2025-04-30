// hooks/useAddConfession.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';

interface Confession {
  id: number;
  content: string;
  anonymousName: string;
  createdAt: string;
  shareId: string;
  likes: number;
}

interface AddConfessionData {
  content: string;
}

export const useAddConfession = () => {
  const queryClient = useQueryClient();
  const { isSignedIn } = useAuth();

  // Function to add a new confession
  const addConfession = async (data: AddConfessionData): Promise<Confession> => {
    if (!isSignedIn) {
      throw new Error('You must be signed in to add a confession');
    }

    try {
      const response = await axios.post('/api/confess', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Failed to add confession');
    }
  };

  // Use TanStack Query to manage mutation state
  const mutation = useMutation({
    mutationFn: addConfession,
    onSuccess: () => {
      // Invalidate and refetch confessions list to show the new confession
      queryClient.invalidateQueries({ queryKey: ['confessions'] });
    },
  });

  return {
    addConfession: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    reset: mutation.reset,
  };
};