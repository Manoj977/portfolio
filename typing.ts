interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

export interface Social extends SanityBody {
  _type: 'Social';
  title: string;
  url: string;
};
export interface PageInfo extends SanityBody {
  _type: 'PageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
};
export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
};
export interface Project extends SanityBody {
  title: string;
  _type: 'Project';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
};
export interface Achievements extends SanityBody {
  _type: 'achievements';
  title: string;
  image: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyCompleted: boolean;
  points: string[];
  technologies: Technology[];
};
export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
};
export interface Image extends SanityBody {
  _type: 'Image';
  assest: {
    _ref: "image";
    _type: 'reference';
  };
};
