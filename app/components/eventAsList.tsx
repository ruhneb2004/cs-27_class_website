"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function EventAsList({
  id,
  eventName,
  eventStartDate,
  eventEndDate,
  eventLocation,
  buttonDialogue,
  targetUrl,
  fetchEventData,
}: {
  id: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  buttonDialogue: string;
  targetUrl: string;
  fetchEventData: () => void;
}) {
  const { status } = useSession();

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="h-24 w-4/5 bg-amber-200 shadow-sm shadow-black rounded-3xl flex items-center px-12 font-semibold text-black justify-between">
        <div> {eventName}</div>
        <div>{eventStartDate}</div>
        <div>{eventEndDate}</div>
        <div>{eventLocation}</div>
        <div className="flex gap-8 ">
          <Link
            className="btn bg-amber-500 shadow-sm hover:bg-amber-300 shadow-slate-700 border-none active:shadow-none"
            href={targetUrl}
          >
            {buttonDialogue}
          </Link>
          {status === "authenticated" && (
            <button
              className="btn bg-red-600 text-white hover:bg-red-500 transition-all shadow-sm shadow-black active:shadow-none border-none"
              onClick={async () => {
                try {
                  await axios.delete("/api/event", {
                    data: { id },
                  });
                  fetchEventData();
                } catch (error) {
                  console.error("Error removing event:", error);
                }
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
