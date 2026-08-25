import { Navigate } from "react-router";
import { trips } from "../data/trips";

export default function Home() {
  const lastTrip = trips[trips.length - 1];
  return <Navigate to={`/trip/${lastTrip.id}`} replace />;
}
