import React from 'react';

const TeamMemberCard = ({ name, role, imageUrl }: { name: string, role: string, imageUrl: string }) => (
    <div className="text-center flex flex-col items-center">
        <img className="mx-auto h-24 w-24 rounded-full object-cover" src={imageUrl} alt={`Photo of ${name}`} />
        <h3 className="mt-4 text-lg font-semibold text-[#f5e6f0]">{name}</h3>
        <p className="text-[#f7a8b8]">{role}</p>
    </div>
);

const Team = () => {
  return (
    <section id="team" className="py-20 bg-[#3e2a44]/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Team
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            The minds behind the HerForce project concept.
          </p>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-center text-[#f7a8b8] mb-10">Development Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-5xl mx-auto">
                <TeamMemberCard name="Aditi Ashok Ingale" role="Student Developer" imageUrl="https://picsum.photos/seed/aditi/200" />
                <TeamMemberCard name="Riddhi Rajesh Kamani" role="Student Developer" imageUrl="https://picsum.photos/seed/riddhi/200" />
                <TeamMemberCard name="Siddhi Dinesh Shivtarkar" role="Student Developer" imageUrl="https://picsum.photos/seed/siddhi/200" />
                <TeamMemberCard name="Bhavana Rasamsetti" role="Student Developer" imageUrl="https://picsum.photos/seed/bhavana/200" />
                <TeamMemberCard name="Reshma Vunnava" role="Student Developer" imageUrl="https://picsum.photos/seed/reshma/200" />
            </div>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-[#f7a8b8] mb-10">Project Advisors</h3>
            <div className="flex justify-center gap-12">
                <TeamMemberCard name="Christoph Göpfert" role="Project Advisor" imageUrl="https://picsum.photos/seed/christoph/200" />
                <TeamMemberCard name="Jan Haas" role="Project Advisor" imageUrl="https://picsum.photos/seed/jan/200" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;