import { Box, Slider, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BackgroundNoiseStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: white;
`;
const BackgroundNoise = ({ text, volume, handleChange }) => {
  return (
    <BackgroundNoiseStyles>
      <h4 className="mr-3 max-w-[80px] w-full">{text}</h4>
      <div className="flex-1">
        <Box sx={{ width: 150 }} className="box">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              aria-label="Volume"
              value={volume}
              onChange={handleChange}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              className="slider"
            />
          </Stack>
        </Box>
      </div>
    </BackgroundNoiseStyles>
  );
};

export default BackgroundNoise;
