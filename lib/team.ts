export interface TeamMember {
  name: string
  role: string
  /** 1-2 line bio. Keep it human and specific. */
  bio: string
  /** Photo in /public/team/, e.g. '/team/psam.jpg'. Falls back to initials. */
  image?: string
}

// All team members are shown as equals (same card). Order below is the display
// order: P.Sam first, Marvel second, then the others.
// Fill in the real bios and drop photos into /public/team/.
export const team: TeamMember[] = [
  {
    name: 'Abiola Samuel Omolayo',
    role: 'Global P.Sam · Founder, The Refinery',
    bio: 'PLACEHOLDER — add a short bio. e.g. "Founder of The Refinery, RAEL\'s parent company. Leads vision and strategy across the group."',
    // image: '/team/psam.jpg',
  },
  {
    name: 'Marvellous Adepoju',
    role: 'Marvel Develops · Manager & CEO, RAEL',
    bio: 'PLACEHOLDER — add a short bio. e.g. "Runs RAEL day to day and leads the build. Turns real estate problems into working software."',
    // image: '/team/marvel.jpg',
  },
  {
    name: 'Team Member 3',
    role: 'Role · RAEL',
    bio: 'PLACEHOLDER — add name, role, and a short bio for this team member.',
    // image: '/team/member-3.jpg',
  },
  {
    name: 'Team Member 4',
    role: 'Role · RAEL',
    bio: 'PLACEHOLDER — add name, role, and a short bio for this team member.',
    // image: '/team/member-4.jpg',
  },
  {
    name: 'Team Member 5',
    role: 'Role · RAEL',
    bio: 'PLACEHOLDER — add name, role, and a short bio for this team member.',
    // image: '/team/member-5.jpg',
  },
]
