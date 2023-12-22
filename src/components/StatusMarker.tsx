import { Box, Divider, Link } from "@mui/material";
import { useContext } from "react";
import { Status, Subject } from "../common/types";
import { PlanContext, PlanContextProps } from "../context";

export const StatusMarker = ({
  status,
  levelSubjects,
}: {
  status: Status;
  levelSubjects: Subject[];
}) => {
  const { updateStatuses } = useContext<PlanContextProps>(PlanContext);

  const handleClickStatusMarker = () => {
    const newStatus = status;
    updateStatuses(levelSubjects, newStatus);
  };

  return (
    <Box
      sx={{
        "& hr": {
          mx: 0.5,
        },
        display: "flex",
      }}
    >
      <Link
        onClick={handleClickStatusMarker}
        component="button"
        underline="hover"
      >
        {status.name}
      </Link>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
};