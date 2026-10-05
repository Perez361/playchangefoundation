/**
 * The programmes, as data.
 *
 * Each one gets its own page at /initiatives/<slug> as well as a card on the
 * hub, so a search for something specific — sports scholarships in Ghana, or
 * NCD prevention through physical activity — has a page about that one thing
 * to match, rather than one page covering six topics at once.
 *
 * Keep the prose describing what a programme sets out to do and how it works.
 * Participant numbers, place names and partner organisations belong here too,
 * but only once they are confirmed: an unverifiable claim on a funder-facing
 * page costs more than the paragraph is worth.
 */
export interface InitiativeSection {
  heading: string
  body: string[]
}

export interface Initiative {
  slug: string
  /** Card and page heading. */
  title: string
  /** One sentence, used on the hub and as the basis of the meta description. */
  summary: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  imageAlt: string
  /** Opening paragraph of the detail page. */
  intro: string
  sections: InitiativeSection[]
  /** What the programme actually does, as a list. */
  points: string[]
}

export const initiatives: Initiative[] = [
  {
    slug: 'health-and-ncd-prevention',
    title: 'Health, Physical Activity and NCD Prevention',
    summary:
      'Using sport and physical activity to promote health and reduce the risk of non-communicable diseases.',
    metaTitle: 'Health & NCD Prevention Through Sport in Ghana',
    metaDescription:
      'How PlayChange Foundation uses sport and regular physical activity to prevent non-communicable diseases — hypertension, type 2 diabetes, obesity — and promote health in Ghanaian communities.',
    keywords: [
      'NCD prevention Ghana',
      'non-communicable diseases Ghana',
      'physical activity and health Ghana',
      'health promotion through sport',
      'hypertension diabetes prevention Ghana',
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Young people taking part in a PlayChange Foundation physical activity session',
    intro:
      'Non-communicable diseases — hypertension, type 2 diabetes, obesity, stroke and some cancers — account for a growing share of illness and death in Ghana. Physical inactivity is one of the risk factors behind them, and it is among the most affordable to address. A ball, an open space and a coach reach far more people than a clinic can.',
    sections: [
      {
        heading: 'Why physical activity',
        body: [
          'Regular physical activity lowers blood pressure, helps regulate blood sugar, supports a healthy weight and improves cardiovascular fitness. These are the same risk factors that drive the NCD burden, which means the intervention and the problem meet in the same place.',
          'Sport also carries people past the barrier that stops most health advice working: it is something they already want to do. Nobody needs persuading to play football. Attaching health knowledge to that is far easier than creating the motivation from nothing.',
        ],
      },
      {
        heading: 'How our sessions work',
        body: [
          'Our sessions pair physical activity with health education, so turning up to play also means hearing about healthy eating, the risks of a sedentary routine, and the warning signs worth taking to a clinic. We cover communicable disease awareness alongside it, including HIV/AIDS and the stigma that keeps people from testing.',
          'The approach is deliberately low-cost and repeatable. It needs space, equipment that can be carried, and people trained to run it — which is what lets a session happen in a community that has no sports facility.',
        ],
      },
    ],
    points: [
      'Regular physical activity to lower NCD risk factors such as high blood pressure, raised blood sugar and obesity',
      'Health education delivered alongside sport sessions rather than separately',
      'HIV/AIDS awareness and work to reduce stigma around testing',
      'Promoting active routines for children, youth and adults',
    ],
  },
  {
    slug: 'scholarships',
    title: 'Scholarships for Students in Need',
    summary:
      'Scholarships and mentoring so that money is not what decides whether a young person finishes school.',
    metaTitle: 'Sports Scholarships for Students in Ghana',
    metaDescription:
      'PlayChange Foundation provides scholarships, learning materials and mentoring to underprivileged students in Ghana, so that cost does not end a young person’s education.',
    keywords: [
      'sports scholarships Ghana',
      'scholarships for needy students Ghana',
      'education support Ghana NGO',
      'student mentoring Ghana',
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Students supported by PlayChange Foundation scholarships',
    intro:
      'Talent and effort are spread evenly; the money to stay in school is not. Our scholarship work exists so that a young person with the ability and the will to finish their education is not stopped by what it costs.',
    sections: [
      {
        heading: 'More than fees',
        body: [
          'A scholarship that covers fees and nothing else often fails quietly. Learning materials, transport and the confidence that someone is paying attention all decide whether a student actually stays. We treat the support as a package rather than a payment.',
          'Mentoring runs alongside it. A student who has someone to talk to about choices, setbacks and what comes next is far more likely to finish than one handed money and left alone.',
        ],
      },
      {
        heading: 'Why it sits with the sport',
        body: [
          'Sport is where we meet most of the young people we work with, and it is where potential becomes visible outside a classroom. Commitment, discipline and the willingness to keep turning up show on a pitch before they show on a report card.',
          'That makes our sessions a practical route to finding students who would benefit, including those a purely academic process would overlook.',
        ],
      },
    ],
    points: [
      'Support towards school fees and learning materials',
      'Mentoring through the school year, not just at the point of award',
      'Encouragement of academic achievement alongside sport',
      'Creating routes to opportunity for students who would otherwise drop out',
    ],
  },
  {
    slug: 'education-and-life-skills',
    title: 'Education and Life Skills',
    summary:
      'Using sport to teach leadership, teamwork, communication and problem solving.',
    metaTitle: 'Life Skills & Leadership Through Sport in Ghana',
    metaDescription:
      'PlayChange Foundation builds leadership, teamwork, communication and problem-solving skills in young people in Ghana, using sport and play as the teaching method.',
    keywords: [
      'life skills through sport Ghana',
      'youth leadership development Ghana',
      'teamwork and communication skills youth',
      'sport based learning Ghana',
    ],
    image: '/images/hero.jpg',
    imageAlt: 'A coaching and life skills session run by PlayChange Foundation',
    intro:
      'A team is a small society. It needs people to lead, to follow, to settle arguments, to handle losing and to decide together what happens next. That makes sport an unusually efficient way to teach the skills that decide how a young person does in work and in life.',
    sections: [
      {
        heading: 'Skills that transfer',
        body: [
          'Leadership, communication, discipline and problem solving are hard to teach from a textbook and easy to practise in a game, where the consequences are immediate and the stakes are low enough to learn from.',
          'We structure sessions so those moments are used rather than passed over: who speaks, who organises, how a disagreement is resolved, what the team does after a defeat.',
        ],
      },
      {
        heading: 'Beyond the session',
        body: [
          'The point is what happens off the pitch — in classrooms, in households and later in workplaces. Young people who have practised leading a group and speaking to one carry that into every other part of their lives.',
          'Workshops on communication and problem solving run alongside the sport, so the lesson is named rather than left implicit.',
        ],
      },
    ],
    points: [
      'Leadership development through team roles and responsibility',
      'Team-building activities with a deliberate learning goal',
      'Communication skills training',
      'Problem-solving workshops alongside sessions',
    ],
  },
  {
    slug: 'social-inclusion',
    title: 'Social Inclusion',
    summary:
      'Play that is open to everyone, as a practical way to reduce exclusion and discrimination.',
    metaTitle: 'Social Inclusion Through Sport & Play in Ghana',
    metaDescription:
      'PlayChange Foundation runs inclusive sport and play programmes in Ghana that bring different groups together and work against discrimination and social exclusion.',
    keywords: [
      'social inclusion through sport Ghana',
      'inclusive sports programmes Ghana',
      'anti-discrimination youth Ghana',
      'community integration through play',
    ],
    image: '/images/initiatives.jpg',
    imageAlt: 'A diverse group of children playing together at a PlayChange Foundation event',
    intro:
      'Exclusion is rarely announced. It shows up as who gets picked, who is left on the side, and who stops coming. Sport can reproduce that, or it can be designed against it — and the design is the whole difference.',
    sections: [
      {
        heading: 'Designing sessions so everyone plays',
        body: [
          'Inclusion does not happen because a session is open to all. It happens because the format makes it work: rules that keep everyone involved, teams that mix rather than sort, and coaches who notice who is drifting to the edge.',
          'We plan for ability, background and confidence, so that the young person who would normally be last picked has a reason to come back next week.',
        ],
      },
      {
        heading: 'Bringing groups together',
        body: [
          'Playing on the same side is one of the few things that reliably shifts how people see each other. Community events that mix groups who would not otherwise meet do more than a message about tolerance can.',
          'Those occasions are also where exclusion becomes visible to the wider community, which is the first step to anything changing.',
        ],
      },
    ],
    points: [
      'Sports programmes designed so that every participant plays',
      'Community events that bring different groups together',
      'Cultural exchange between communities',
      'Campaigns against discrimination',
    ],
  },
  {
    slug: 'gender-equity',
    title: 'Gender Equity and Empowerment',
    summary:
      'Creating space for women and girls in sport, and the leadership that follows from it.',
    metaTitle: 'Gender Equity in Sport — Women & Girls in Ghana',
    metaDescription:
      'PlayChange Foundation creates opportunities for women and girls in sport in Ghana, with programmes, mentorship and leadership development that carry beyond the pitch.',
    keywords: [
      'gender equality in sport Ghana',
      'women and girls sport Ghana',
      'girls football Ghana',
      'female leadership development Ghana',
    ],
    image: '/images/initiatives.jpg',
    imageAlt: 'Women and girls taking part in a PlayChange Foundation sports programme',
    intro:
      'Where girls play, who coaches them, and whether anyone expects them to lead are not separate questions. Sport is one of the clearest places where assumptions about what women and girls do are either reinforced or broken.',
    sections: [
      {
        heading: 'Space to play',
        body: [
          'The first barrier is usually practical rather than attitudinal: no session, no team, no time in the day that works. Creating programmes specifically for women and girls removes the excuse that there was nowhere to go.',
          'Once a session exists and is well run, participation tends to follow faster than people expect.',
        ],
      },
      {
        heading: 'From playing to leading',
        body: [
          'Playing is the entry point, not the goal. Young women who captain a side, organise a session or coach younger players build authority that transfers directly into school, work and community life.',
          'Mentorship and skills workshops run alongside, so that the step from participant to leader is supported rather than left to chance.',
        ],
      },
    ],
    points: [
      "Sports programmes created specifically for women and girls",
      'Leadership opportunities within teams and sessions',
      'Mentorship from women already in sport and coaching',
      'Skills development workshops',
    ],
  },
  {
    slug: 'peace-building',
    title: 'Conflict Prevention and Peace Building',
    summary:
      'Using sport as common ground where communities can meet, talk and resolve differences.',
    metaTitle: 'Peace Building Through Sport in Ghana',
    metaDescription:
      'PlayChange Foundation uses sport as common ground for conflict prevention and peace building in Ghanaian communities, with dialogue, resolution training and youth leadership.',
    keywords: [
      'peace building through sport Ghana',
      'conflict resolution youth Ghana',
      'sport for development and peace',
      'community dialogue Ghana',
    ],
    image: '/images/hero.jpg',
    imageAlt: 'Young people from different communities playing together',
    intro:
      'Communities in conflict rarely lack reasons to talk; they lack a setting where talking is normal. A match gives people a reason to be in the same place with a shared purpose, and that is often where the conversation becomes possible.',
    sections: [
      {
        heading: 'Common ground first',
        body: [
          'Sport does not resolve a dispute on its own, and claiming otherwise helps nobody. What it does is create contact — repeated, structured, low-stakes contact between people who otherwise avoid each other.',
          'That contact is the precondition for everything else. Dialogue that starts from a shared afternoon goes further than dialogue that starts from a grievance.',
        ],
      },
      {
        heading: 'Skills for resolving conflict',
        body: [
          'Games produce disagreement constantly — a bad tackle, a disputed call, a loss. That makes them a practical place to teach how disagreement is handled without it escalating.',
          'We pair that with community dialogue sessions and youth leadership development, so that the people best placed to keep the peace locally have both the standing and the skills to do it.',
        ],
      },
    ],
    points: [
      'Sport as a setting for contact between divided groups',
      'Conflict resolution training built into sessions',
      'Community dialogue sessions',
      'Youth leadership development for local peace building',
    ],
  },
]

export function getInitiative(slug: string): Initiative | undefined {
  return initiatives.find((i) => i.slug === slug)
}
