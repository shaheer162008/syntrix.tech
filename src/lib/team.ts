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
    role: '',
    description: 'Founder of Nexiler with a vision to build a team of partners, not just employees. Leading the mission to deliver intelligent automation and premium web solutions globally.',
    image: '/team/muhammad-shaheer.jpg',
    linkedin: 'https://www.linkedin.com/in/muhammad-shaheer-yousuf/',
  },
  {
    id: 'muhammad-saim',
    name: 'Muhammad Saim',
    role: '',
    description: 'Co-founder who joined the Nexiler mission early on. Focused on business growth, operations, and ensuring every client receives maximum ROI through strategic partnerships.',
    image: '/team/muhammad-saim.jpg',
    linkedin: 'https://www.linkedin.com/in/saim-khalid-dev/',
  },
  {
    id: 'syed-muhammad-taha',
    name: 'Syed Muhammad Taha',
    role: '',
    description: 'Co-founder and technical lead who helped establish Nexiler\'s core engineering standards. Expert in Next.js architectures and scalable backend ecosystems.',
    image: '/team/syed-muhammad-taha.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-taha-ali-6851863b0/',
  },
];
