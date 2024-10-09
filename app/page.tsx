"use client";
import { useSession } from "next-auth/react";
import { DyuthiComp } from "./components/Dyuthi";
import { ThakrithiEventComp } from "./components/ThakrithiEventComp";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <div className="pb-20 flex flex-col gap-10">
      <ThakrithiEventComp />
      <DyuthiComp />
    </div>
  );
}
