import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AddClientsModal, Clients, Header } from "./components";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientsModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
