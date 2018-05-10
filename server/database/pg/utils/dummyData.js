const organizationTypes = [
  { name: "Education" },
  { name: "By Location" },
  { name: "Media, Events, and Community" }
];
const organizations = [
  {
    title: "Astia",
    description:
      " A not-for-profit organization that offers paid, week-long programs to help female entrepreneurs in technology, life sciences, and clean tech to learn skills for revenue generation, sales, and fundraising. Includes a support network of over 200 investors and 300 startup executives",
    organizationTypes_id: 1,
    url: "https://www.google.ps"
  },
  {
    title: "Girl Develop It",
    description:
      " Technical workshops for female programmers held around the United States, as well as in Canada and Australia. They aim to create a supportive environment where women can join the discussion and show off their skills. Courses are also",
    organizationTypes_id: 1,
    url: "https://www.girldevelopit.com/materials"
  },
  {
    title: "C.W. Developers",
    description:
      " Classes and events in Chicago for female programmers. They are in the middle of their Summer Apps Program, a series of three courses to transform your idea into a web and mobile app. They also host weekly open hack nights on Thursday (#XXHACK), where anyone can show up and get help on coding",
    organizationTypes_id: 2,
    url: "http://dcwebwomen.org/"
  },
  {
    title: "She++",
    description:
      "A conference held at Stanford University on the opportunities, challenges, and role models for women in technology, to inspire more “femgineers”: female programmers who use their skills for positive change.",
    organizationTypes_id: 2,
    url: "http://sheplusplus.weebly.com/"
  },
  {
    title: "Anita Borg Institute for Women and Technology",
    description:
      "Organizes conferences for women and awards for influential female leaders. Their goal is to not only help women thrive in technology fields, but make sure technologies are built to help women thrive.",
    organizationTypes_id: 3,
    url: "http://anitaborg.org/"
  },
  {
    title: "Girl Geek Dinners",
    description:
      "A community that holds dinner events for women in STEM and helps them find inspiration and mentorship.",
    organizationTypes_id: 3,
    url: "http://girlgeekdinners.com/"
  }
];

module.exports = {
  organizationTypes,
  organizations
};
