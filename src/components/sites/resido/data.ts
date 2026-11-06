export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  category: "Residential" | "Commercial" | "Renovation";
  image: string;
  description: string;
  overview: string;
  materials: string[];
  materialsText: string;
  approachText: string;
  beforeAfter: { before: string; after: string };
  scope: string;
  timeline: string;
  industry: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  category: "Architecture" | "Construction" | "Design Insights" | "Project Stories";
  excerpt: string;
  image: string;
  sections: { heading: string; content: string }[];
};

export const projects: Project[] = [
  {
    slug: "stonehaven-collective",
    title: "Stonehaven Collective",
    year: "2025",
    location: "Boulder, Colorado",
    category: "Renovation",
    image: "/sites/resido/images/project-stonehaven.png",
    description: "A thoughtful renovation transforming a historic building into a vibrant mixed-use creative hub.",
    overview: "Stonehaven Collective breathes new life into a historic Boulder property. The renovation preserves the building's character while introducing modern amenities, flexible workspaces, and community gathering areas that serve both residents and local businesses.",
    materials: ["Reclaimed Brick", "Steel", "Polished Concrete", "Timber"],
    materialsText: "Construction uses reclaimed brick, structural steel, polished concrete flooring, and sustainably sourced timber to honor the building's heritage while meeting modern performance standards.",
    approachText: "The design preserves original structural elements and facades while introducing contemporary interior systems, improved insulation, and flexible floor plans suited to mixed-use programming.",
    beforeAfter: { before: "Aging commercial building with deteriorating facades, poor insulation, and inflexible interior layouts that limited its potential.", after: "A revitalized mixed-use hub with preserved character, modern amenities, flexible workspaces, and community gathering areas." },
    scope: "Renovation",
    timeline: "5 months",
    industry: "Mixed Use",
  },
  {
    slug: "rivermark-pavilion",
    title: "Rivermark Pavilion",
    year: "2025",
    location: "Portland, Oregon",
    category: "Residential",
    image: "/sites/resido/images/project-rivermark.png",
    description: "A contemporary pavilion designed to blend indoor and outdoor living spaces with precision-engineered structural elements.",
    overview: "The pavilion was designed as a modern workplace that balances functionality with openness, creating adaptable environments connected to urban and riverfront contexts.",
    materials: ["Concrete", "Steel", "Glass", "Wood"],
    materialsText: "Construction employs exposed concrete, steel framing, and high-performance glass alongside natural wood and polished finishes for contemporary warmth.",
    approachText: "Design prioritizes flexibility, daylight access, and efficient circulation with sustainable features including passive cooling and optimized glazing systems.",
    beforeAfter: { before: "Outdated commercial structure with poor daylight and limited surrounding engagement.", after: "Light-filled workspace that supports modern work patterns and enhances accessibility." },
    scope: "Architectural Design / Construction",
    timeline: "4 months",
    industry: "Renovation",
  },
  {
    slug: "atlas-office-park",
    title: "Atlas Office Park",
    year: "2023",
    location: "Portland, Oregon",
    category: "Commercial",
    image: "/sites/resido/images/project-atlas.png",
    description: "A modern office park designed for productivity, collaboration, and environmental responsibility.",
    overview: "Atlas Office Park transforms a former industrial site into a forward-thinking commercial campus. The design prioritizes natural light, flexible floor plans, and green infrastructure.",
    materials: ["Steel Frame", "Curtain Wall Glass", "Recycled Concrete", "Green Roof Systems"],
    materialsText: "The campus uses steel framing, curtain wall glazing, recycled concrete aggregates, and extensive green roof systems for energy efficiency and stormwater management.",
    approachText: "A phased development approach allowed tenant occupation during construction, with modular floor plates designed for maximum flexibility and future adaptation.",
    beforeAfter: { before: "Vacant industrial lot with contaminated soil and no public access to the adjacent greenway.", after: "A vibrant commercial campus with remediated grounds, public pathways, and direct greenway connections." },
    scope: "Commercial Development",
    timeline: "8 months",
    industry: "Commercial",
  },
  {
    slug: "willow-creek-home",
    title: "Willow Creek Home",
    year: "2023",
    location: "Portland, Oregon",
    category: "Residential",
    image: "/sites/resido/images/project-willow.png",
    description: "A family residence that balances modern design with warmth and comfort, nestled in a natural setting.",
    overview: "Willow Creek Home is a carefully crafted residential project that responds to its natural surroundings. The design uses natural materials, passive solar principles, and an open layout.",
    materials: ["Timber", "Stone", "Glass", "Copper"],
    materialsText: "Primary materials include locally sourced timber framing, natural stone cladding, expansive glass panels, and copper roofing that will develop a natural patina over time.",
    approachText: "The home is oriented to maximize passive solar gain in winter while providing natural shading in summer, reducing energy dependency and creating comfortable interiors year-round.",
    beforeAfter: { before: "Undeveloped wooded lot with challenging topography and limited road access.", after: "A harmonious family home that works with the terrain, preserving mature trees and natural drainage patterns." },
    scope: "New Build",
    timeline: "6 months",
    industry: "Residential",
  },
  {
    slug: "oakline-residence",
    title: "Oakline Residence",
    year: "2025",
    location: "Austin, Texas",
    category: "Residential",
    image: "/sites/resido/images/project-atlas.png",
    description: "A contemporary residence that combines clean lines with natural textures for timeless appeal.",
    overview: "Oakline Residence is a premium residential project that emphasizes spatial flow, material honesty, and connection to the outdoors.",
    materials: ["Oak", "Natural Stone", "Glass", "Zinc"],
    materialsText: "Oak cladding, natural stone accents, floor-to-ceiling glass, and zinc roofing panels create a palette that balances warmth with modern precision.",
    approachText: "Every detail is chosen for both beauty and durability, with an emphasis on indoor-outdoor flow through retractable walls and covered outdoor living areas.",
    beforeAfter: { before: "A dated 1980s ranch-style home with compartmentalized rooms and poor connection to the surrounding landscape.", after: "An open, light-filled contemporary residence with seamless indoor-outdoor transitions and a cohesive material language." },
    scope: "New Build",
    timeline: "7 months",
    industry: "Residential",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "our-design-philosophy",
    title: "Our Design Philosophy",
    readTime: "10 min read",
    date: "April 20, 2026",
    author: "Steve Harington",
    authorRole: "Construction Lead",
    category: "Design Insights",
    excerpt: "Learn about our approach to taking projects from initial idea to successful completion. Evolving needs of their occupants.",
    image: "/sites/resido/images/blog-philosophy.png",
    sections: [
      { heading: "Designing with Purpose", content: "At Sayaro, every design decision starts with purpose. We believe that architecture should serve the people who inhabit it, responding to their daily routines, aspirations, and the way they interact with space. Our process begins with deep listening — understanding not just what a client wants, but why they want it. This approach leads to spaces that feel intentional, where every element has a reason for being there." },
      { heading: "Materials That Age Well", content: "We choose materials not just for how they look on day one, but for how they'll perform over decades. Natural stone, solid timber, and quality metals develop character over time. We avoid trend-driven finishes that date quickly, instead selecting materials with proven longevity. This philosophy reduces maintenance costs and ensures that our projects remain relevant and beautiful long after completion." },
      { heading: "Long Term Investment", content: "Good design is an investment that compounds over time. A well-designed space increases in value, reduces operating costs, and adapts to changing needs without requiring major renovations. We help our clients see beyond the initial build cost to understand the total value of thoughtful, quality-driven architecture." },
    ],
  },
  {
    slug: "smart-home-renovations",
    title: "Smart Home Renovations",
    readTime: "6 min read",
    date: "March 15, 2026",
    author: "Emily Rodriguez",
    authorRole: "Design Director",
    category: "Construction",
    excerpt: "Important factors to consider before you begin your next renovation. The durability and longevity of architectural designs stem from a combination of careful planning, strategic selection of materials",
    image: "/sites/resido/images/blog-renovations.jpg",
    sections: [
      { heading: "Planning Before Demolition", content: "The most successful renovations start long before any walls come down. A thorough assessment of the existing structure, clear understanding of building codes, and a realistic budget form the foundation of a smart renovation. We recommend spending at least 20% of your planning time on understanding what you already have before deciding what to change." },
      { heading: "Technology Integration", content: "Modern renovations offer the perfect opportunity to integrate smart home technology. From energy-efficient HVAC systems to automated lighting and security, the right technology choices can dramatically improve comfort and reduce long-term operating costs. The key is selecting systems that are both future-proof and easy to maintain." },
      { heading: "Maximizing Existing Space", content: "Often the best renovation strategy isn't adding square footage — it's making better use of what you have. Removing unnecessary walls, improving natural light flow, and rethinking storage can transform a space without the complexity and cost of an extension." },
    ],
  },
  {
    slug: "enduring-home-design",
    title: "Enduring Home Design",
    readTime: "8 min read",
    date: "February 28, 2026",
    author: "Daniel Wright",
    authorRole: "Senior Architect",
    category: "Architecture",
    excerpt: "How to create spaces that stand the test of time with smart design and quality materials. When function guides form, the result remains relevant far longer.",
    image: "/sites/resido/images/blog-enduring.png",
    sections: [
      { heading: "Timeless Over Trendy", content: "Trends come and go, but good proportions, quality materials, and thoughtful spatial planning endure. We advise clients to invest in timeless architectural elements — generous ceiling heights, well-placed windows, and honest materials — rather than chasing the latest design trend. The result is a home that still feels fresh and relevant decades later." },
      { heading: "Climate-Responsive Design", content: "A truly enduring home works with its environment, not against it. Passive solar design, natural ventilation, and appropriate insulation reduce energy costs and create comfortable interiors year-round. These strategies have been used for centuries and remain among the most effective ways to create resilient, long-lasting buildings." },
      { heading: "Flexible Floor Plans", content: "Life changes, and your home should be able to change with it. Open floor plans with defined zones, convertible rooms, and adaptable infrastructure allow a home to serve different needs over time — from a young couple to a growing family to empty nesters — without requiring major structural changes." },
    ],
  },
  {
    slug: "our-project-process",
    title: "Our Project Process",
    readTime: "5 min read",
    date: "January 10, 2026",
    author: "Steve Harington",
    authorRole: "Construction Lead",
    category: "Project Stories",
    excerpt: "A behind-the-scenes look at how we take projects from concept to completion, ensuring quality at every stage.",
    image: "/sites/resido/images/blog-philosophy.png",
    sections: [
      { heading: "Discovery and Planning", content: "Every project starts with a comprehensive discovery phase. We meet with clients, visit the site, research local regulations, and develop a clear brief. This upfront investment saves time and money during construction by identifying potential challenges before they become expensive problems." },
      { heading: "Design Development", content: "Our design process is iterative and collaborative. We present concepts, gather feedback, refine, and repeat until the design perfectly matches the client's vision and budget. 3D visualization and material samples help clients make confident decisions before construction begins." },
      { heading: "Construction and Handover", content: "During construction, our project managers maintain strict quality control and regular client communication. We believe in no surprises — if something changes, you hear about it immediately, along with our recommended solution. The final handover includes a comprehensive walkthrough and maintenance guide." },
    ],
  },
  {
    slug: "planning-a-renovation",
    title: "Planning a Renovation",
    readTime: "7 min read",
    date: "December 5, 2025",
    author: "Emily Rodriguez",
    authorRole: "Design Director",
    category: "Construction",
    excerpt: "Essential steps to take before starting your renovation project. Proper planning is the difference between a smooth process and a stressful one.",
    image: "/sites/resido/images/blog-renovations.jpg",
    sections: [
      { heading: "Setting Realistic Budgets", content: "The most common renovation mistake is underestimating costs. We recommend adding a 15-20% contingency to your initial budget to account for unexpected discoveries and design changes. A detailed scope of work, itemized estimates, and clear change-order procedures protect both your budget and your peace of mind." },
      { heading: "Choosing the Right Team", content: "Your renovation is only as good as the team executing it. Look for professionals with relevant experience, clear communication practices, and strong references. A good contractor will welcome your questions and provide regular progress updates without being asked." },
      { heading: "Living Through Construction", content: "If you're renovating while living in the space, clear planning around staging, dust control, and access paths makes the experience manageable. We help clients develop a room-by-room timeline that minimizes disruption to daily routines." },
    ],
  },
  {
    slug: "designing-spaces-that-last",
    title: "Designing Spaces That Last",
    readTime: "9 min read",
    date: "November 15, 2025",
    author: "Daniel Wright",
    authorRole: "Senior Architect",
    category: "Architecture",
    excerpt: "Principles of durable design that create beautiful spaces built to endure for generations.",
    image: "/sites/resido/images/blog-enduring.png",
    sections: [
      { heading: "Structural Integrity First", content: "Lasting design starts with strong bones. We prioritize structural quality — proper foundations, weather-resistant envelopes, and robust framing — because these elements are nearly impossible to improve after construction. A building with excellent structure can be refreshed and adapted for decades." },
      { heading: "Material Selection Philosophy", content: "We evaluate every material against three criteria: beauty, durability, and sustainability. Natural materials like stone, brick, and timber typically score highest across all three. When we use manufactured materials, we select products with proven track records and transparent supply chains." },
      { heading: "Design for Maintenance", content: "A truly lasting space is one that's practical to maintain. We design with accessibility in mind — easy-to-reach gutters, serviceable mechanical systems, and finishes that can be repaired rather than replaced. This reduces lifecycle costs and keeps buildings in excellent condition." },
    ],
  },
];
