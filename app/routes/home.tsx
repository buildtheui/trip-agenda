import { Navigate } from "react-router";
import { trips } from "../data/trips";

export default function Home() {
  const firstTrip = trips[0];
  return <Navigate to={`/trip/${firstTrip.id}`} replace />;
}
