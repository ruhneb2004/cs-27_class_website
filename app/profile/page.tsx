"use client";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useEdgeStore } from "@/lib/edgestore";

export type InterestedDomain = {
  id: string;
  name: string;
  userId: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession();

  const [file, setFile] = React.useState<File>();
  const [description, setDescription] = useState("");
  const [interestedDomain, setIntrestedDomains] =
    useState<InterestedDomain[]>();
  const [domain, setDomain] = useState<string>();
  const { edgestore } = useEdgeStore();
  const [imgUrl, setImgUrl] = useState<string | null>("");
  const userId = session?.user?.email?.split("0")[1].split("@")[0];
  console.log(userId);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const res = await axios.post("/api/userDetails", { id: userId });
          setDescription(res.data?.description);
          setIntrestedDomains(res.data?.interestedDomains);
          setImgUrl(res.data?.imageUrl);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    const userId = session?.user?.email?.split("0")[1]?.split("@")[0];
    if (userId) {
      fetchUserData();
    }
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    return <div>Unauthorized Entry</div>;
  }

  return (
    <div className="px-24 ">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
            }}
          />
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={async () => {
                  if (file) {
                    const res = await edgestore.publicImages.upload({ file });
                    setImgUrl(res.url);
                    console.log(imgUrl);
                  }
                }}
                className="bg-green-300 font-semibold text-xl modal-action btn"
              >
                upload
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="w-full">
        <div className="flex gap-24">
          <div className="avatar">
            <div className="mask mask-squircle">
              <img
                src={imgUrl || session?.user?.image || ""}
                alt="profile image of a handsome person"
                className="min-w-[100px] max-w-[250px] max-h-[200px] min-h-[100px] cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement;
                  modal.showModal();
                }}
              />
            </div>
          </div>
          <div className="w-full  flex ">
            <div className="text-7xl text-center my-auto">
              {session?.user?.name
                ?.split(" ")
                .filter((nameComp) => {
                  if (nameComp != "Btech-CSE" && nameComp != "2K23")
                    return true;
                })
                .join(" ")}
            </div>
            {interestedDomain?.map((domain: InterestedDomain) => {
              return (
                <div
                  key={domain.id}
                  className="text-black min-h-9 min-w-24 h-fit w-fit text-center px-4 py-2 bg-green-700 shadow-gray-700 shadow-sm rounded-full text-sm hover:bg-red-400 transition-all cursor-pointer group duration-1000 active:text-sm mx-1"
                  onClick={() => {
                    axios.delete("api/intresets", {
                      data: {
                        id: domain.id,
                      },
                    });
                    setIntrestedDomains(
                      interestedDomain.filter((intrestedDomain) => {
                        if (intrestedDomain.id != domain.id) return true;
                      })
                    );
                  }}
                >
                  <span className="group-hover:hidden">{domain.name}</span>
                  <span className="hidden group-hover:block">X</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-10 ml-52">
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              console.log(description);
            }}
            className="textarea text-black w-full "
            placeholder="Who are you? What are you?"
          ></textarea>
          <div>
            <input
              type="text"
              placeholder="intrested domains?"
              className="input text-black"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                if (
                  domain &&
                  !interestedDomain?.some((obj) => obj.name == domain)
                ) {
                  setIntrestedDomains([
                    ...(interestedDomain ?? []),
                    { name: domain, id: "", userId: "" },
                  ]);
                }
                console.log(interestedDomain);
              }}
            >
              Add Intrest
            </button>
          </div>
          <button
            className="btn"
            onClick={async () => {
              const name = session?.user?.name
                ?.split(" ")
                .filter((nameComp) => {
                  if (nameComp != "Btech-CSE" && nameComp != "2K23")
                    return true;
                })
                .join(" ");
              try {
                const response = await axios.put("api/userDetails", {
                  id: session?.user?.email?.split("0")[1].split("@")[0],
                  name,
                  imageUrl: imgUrl || session?.user?.image,
                  description,
                  CurrentTinkering: "none",
                  interestedDomain,
                });
                console.log(response);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Update Profile?
          </button>
        </div>
      </div>
    </div>
  );
}
