/*
I put it inside an array instead of using a db because this is only place the data will be taken from you guys and it's not really a sensitive data. So there is no real need for making a db, but if anyone is interested in making a db for this, then you can go ahead and do it. I will be happy to help you with that.
*/

export const memberData: {
  name: string;
  description: string;
  badges: string[];
  imageUrl: string;
}[] = [
  {
    name: "Benhur P Benny",
    description: "Just an ordinary easy going guy✌️",
    badges: ["Web3", "BlockChain"],
    imageUrl: "/images/dyuthiComplete.jpeg",
  },
  {
    name: "Danial Johnson",
    description: "Just an ordinary easy going guy✌️",
    badges: ["Nothing", "Love"],
    imageUrl: "",
  },
  {
    name: "Dheeraj Shaiju",
    description: "enthoro entho✌️",
    badges: ["Sleep", "Dance"],
    imageUrl: "",
  },
  {
    name: "Alan K George",
    description: "Padu vazha✌️",
    badges: ["eat", "drink"],
    imageUrl: "",
  },
  {
    name: "Benhur P Benny",
    description: "Just an ordinary easy going guy✌️",
    badges: ["Web3", "BlockChain"],
    imageUrl: "/images/dyuthiComplete.jpeg",
  },
  {
    name: "Danial Johnson",
    description: "Just an ordinary easy going guy✌️",
    badges: ["Nothing", "Love"],
    imageUrl: "",
  },
  {
    name: "Dheeraj Shaiju",
    description: "enthoro entho✌️",
    badges: ["Sleep", "Dance"],
    imageUrl: "",
  },
  {
    name: "Alan K George",
    description: "Padu vazha✌️",
    badges: ["eat", "drink"],
    imageUrl: "",
  },
];
