"use client";
import { useEffect, useState } from "react";
import EventAsList from "../components/eventAsList";
import axios from "axios";
import { useSession } from "next-auth/react";

interface EventData {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  eventUrl: string;
}

export default function EventPage() {
  const [eventDataList, setEventDataList] = useState<EventData[]>([]);
  const [eventName, setEventName] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventStartDate, setEventStartDate] = useState<string>("");
  const [eventEndDate, setEventEndDate] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventUrl, setEventUrl] = useState<string>("");
  const { status } = useSession();

  const fetchEventData = async () => {
    try {
      const res = await fetch("/api/event");
      const data = await res.json();
      setEventDataList(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, []);
  return (
    <div className="flex flex-col gap-5 items-center pb-10">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-black flex pl-16 flex-col gap-5 ">
          <form method="dialog">
            <div className="text-2xl font-semibold">Add Event</div>
            <label className="form-control w-full max-w-xs">
              <div className="label">Event Name</div>
              <input
                type="text"
                className="input input-bordered w-full"
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
                value={eventName}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">Event Description</div>
              <input
                type="text"
                className="input input-bordered"
                onChange={(e) => {
                  setEventDescription(e.target.value);
                }}
                value={eventDescription}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">Start Date</div>
              <input
                type="date"
                className="input input-bordered"
                onChange={(e) => {
                  setEventStartDate(e.target.value);
                }}
                value={eventStartDate}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">End Date</div>
              <input
                type="date"
                className="input input-bordered"
                onChange={(e) => {
                  setEventEndDate(e.target.value);
                }}
                value={eventEndDate}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">Location</div>
              <input
                type="text"
                className="input input-bordered"
                onChange={(e) => {
                  setEventLocation(e.target.value);
                }}
                value={eventLocation}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">Event Url</div>
              <input
                type="text"
                className="input input-bordered"
                onChange={(e) => {
                  setEventUrl(e.target.value);
                }}
                value={eventUrl}
              />
            </label>
            <div className="mt-5">
              <button
                className="btn bg-green-300 hover:bg-green-400 active:bg-green-400"
                onClick={async () => {
                  try {
                    const res = await axios.post("api/event", {
                      name: eventName,
                      description: eventDescription,
                      startDate: eventStartDate,
                      endDate: eventEndDate,
                      location: eventLocation,
                      eventUrl: eventUrl,
                    });
                    console.log(res.data);
                    setEventName("");
                    setEventDescription("");
                    setEventStartDate("");
                    setEventEndDate("");
                    setEventLocation("");
                    setEventUrl("");
                    fetchEventData();
                  } catch (error) {
                    console.error("Error adding event data:", error);
                  }
                }}
              >
                Submit
              </button>
              <button className="btn bg-red-300 hover:bg-red-400 active:bg-red-400 ml-10">
                cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <div className=" flex">
        <div className="bg-rose-400 px-6 py-2 font-semibold rounded-md shadow-sm shadow-black">
          Events
        </div>
        {status === "authenticated" && (
          <div
            className="bg-green-400 px-6 py-1 text-sm border-none rounded-full shadow-sm shadow-black absolute right-40 btn"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_5"
              ) as HTMLDialogElement;
              modal.showModal();
            }}
          >
            Add
          </div>
        )}
      </div>
      {eventDataList.map((event) => (
        <EventAsList
          key={event.id}
          id={event.id || ""}
          eventName={event.name}
          eventStartDate={event.startDate}
          eventEndDate={event.endDate}
          eventLocation={event.location}
          buttonDialogue="Checkout"
          targetUrl={event.eventUrl}
          fetchEventData={fetchEventData}
        />
      ))}
    </div>
  );
}
