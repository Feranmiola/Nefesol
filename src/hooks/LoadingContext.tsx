import React from 'react';

type LoadingContextType = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
  };

  
export const LoadingContext = React.createContext<LoadingContextType | undefined>(undefined);
