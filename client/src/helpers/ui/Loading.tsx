import React from "react";
import { styled } from "styled-components";
import { devices } from "../../styles/breakpoint";

const StyledLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  grid-gap: 1rem;
  place-items: center;
  place-content: center;
  padding: 2rem 0;

  @media (${devices.medium}) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 2rem;
  }

  .loading__grid {
    height: 10.8rem;
    width: 6.5rem;
    background-color: var(--placeholder-grid);
    cursor: pointer;
    border-radius: 5px;

    @media (${devices.medium}) {
      height: 17rem;
      width: 11.5rem;
    }
  }
`;

const Loading = () => {
  const renderLoadingGrids = () => {
    const gridCount = 20;
    // results array will be of length 20, the map function will iterate over each element in the array and return a div with the class of loading__grid
    const grids = Array.from({ length: gridCount }, (_, index) => (
      <React.Fragment key={index}>
        <div className="loading__grid"></div>
      </React.Fragment>
    ));
    return grids;
  };

  return <StyledLoading>{renderLoadingGrids()}</StyledLoading>;
};

export default Loading;
