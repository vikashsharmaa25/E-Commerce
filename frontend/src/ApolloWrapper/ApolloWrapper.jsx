"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function ApolloWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
