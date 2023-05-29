import { useEffect, useState } from "react";
import { SeatItem } from "./styledComponents";

export default function Seat({ seat, handleSeat, isSelected }) {
  const [status, setStatus] = useState("available");

  useEffect(() => {
    if (isSelected) {
      setStatus("selected");
    } else if (seat.isAvailable) {
      setStatus("available");
    } else {
      setStatus("unavailable");
    }
  }, [isSelected]);

  const handleClick = () => {
    if (status === "available") {
      handleSeat(seat);
    }
  };

  return (
    <SeatItem status={status} onClick={handleClick}>
      {seat.name}
    </SeatItem>
  );
}
