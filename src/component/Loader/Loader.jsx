import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const LoaderSpinner = ({
  height = "100%",
  width = "100%",
  loaderHeight = 80,
  loaderWidth = 80,
  type = "TailSpin",
}) => {
  return (
    <LoaderContainer height={height} width={width}>
      <Loader
        type={type}
        color="#3f0f40"
        height={loaderHeight}
        width={loaderWidth}
      />
    </LoaderContainer>
  );
};

export default LoaderSpinner;

const LoaderContainer = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
`;
