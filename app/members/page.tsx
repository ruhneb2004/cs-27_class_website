"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";
import { useSession } from "next-auth/react";

interface Member {
  id: string;
  name: string;
  description: string;
  interestedDomains: { name: string }[];
  imageUrl: string;
}

const MembersPage = () => {
  const [filter, setFilter] = useState<string>("");

  const [memberData, setMemberData] = useState<Member[]>([]);
  console.log(filter);

  const fetchMemberData = async () => {
    try {
      console.log("getting member data");
      const res = await fetch("api/allUserDetail", {
        cache: "no-store",
      });
      const data = await res.json();
      setMemberData(data);
    } catch (error) {
      console.error("Error fetching member data:", error);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, []);

  const { status } = useSession();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Looking for someone 👀"
        className="input input-bordered w-10/12 fixed z-50 bg-transparent focus:shadow-inner focus:shadow-slate-800 backdrop-blur-xl border-dashed border-2 focus:border-none border-rose-200"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex gap-7 flex-wrap px-12 justify-center mt-20">
        {/**This is the filtering logic and there is really no need to go overboard as the given dataset is very small! */}
        {memberData?.map((member: Member) => {
          if (
            member.name.toLowerCase().includes(filter.toLowerCase()) ||
            member.interestedDomains.some((domain) =>
              domain.name.toLowerCase().includes(filter.toLowerCase())
            )
          ) {
            return (
              <MemberCard
                key={member.id}
                name={member.name}
                description={member.description}
                badges={member.interestedDomains.map((domain) => domain.name)}
                imageUrl={member.imageUrl}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MembersPage;
