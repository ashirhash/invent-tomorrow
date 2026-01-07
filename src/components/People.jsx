import React from "react";
import PeopleCard from "./ui/PeopleCard";

const People = ({ people = [] }) => {
  return (
    <section className="lg:py-40 sm:py-20 py-10">
      <div className="container-sm gap-8 max-sm:items-center max-sm:flex-col flex justify-between">
        {people.map(person=> <PeopleCard {...person} key={person.key}/>)}
      </div>
    </section>
  );
};

export default People;
