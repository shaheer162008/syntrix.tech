export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'muhammad-shaheer',
    name: 'Muhammad Shaheer',
    role: 'Partner',
    description: 'Partner at Syntrix Solutions focused on intelligent automation and premium web solutions for global clients.',
    image: '/team/muhammad-shaheer.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-shaheer-yousuf/',
  },
  {
    id: 'muhammad-saim',
    name: 'Muhammad Saim',
    role: 'Partner',
    description: 'Partner at Syntrix Solutions and a top tier full stack developer. Former freelancer collaborating since 2023.',
    image: '/team/muhammad-saim.png',
    linkedin: 'https://www.linkedin.com/in/saim-khalid-dev/',
  },
  {
    id: 'emroze-jawed',
    name: 'Emroze Jawed',
    role: 'Partner',
    description: 'Partner at Syntrix Solutions and a top tier full stack developer. Former freelancer collaborating since 2023.',
    image: '/team/emroze-jawed.png',
    linkedin: 'https://www.linkedin.com/in/emroze-jawed-35168628a/',
  },
];
