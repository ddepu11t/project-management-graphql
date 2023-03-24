import React from "react";
import {
  AddClientsModal,
  AddProjectModal,
  Clients,
  Projects,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientsModal />
        <AddProjectModal />
      </div>

      <Projects />

      <hr />

      <Clients />
    </>
  );
};

export default Home;
