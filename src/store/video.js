const simpleRandomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const videos = [
  {
    id: simpleRandomId(),
    videoId: "MmnMM8WWyZ8",
    title: "ហោមរោង",
    tags: ["ភ្លេងការ", "ភ្លេងប្រពៃណី", "ភ្លេងខ្មែរ"],
    singer: "ហុឹម​ សុគន្ធ",
  },
  {
    id: simpleRandomId(),
    videoId: "UczOJf9Gj8k",
    title: "បាយខុនចងដៃ",
    tags: ["ភ្លេងការ", "ភ្លេងប្រពៃណី", "ភ្លេងខ្មែរ"],
    singer: "ម៉េង កែវពេជ្ជតា",
  },
  {
    id: simpleRandomId(),
    videoId: "i2hHDcWTrNk",
    title: "នាគព័ន្ធ ",
    tags: ["ភ្លេងការ", "ភ្លេងប្រពៃណី", "ភ្លេងខ្មែរ"],
    singer: "នាយកំពីងពួយ",
  },
  {
    id: simpleRandomId(),
    videoId: "7Fj6RKwDMTk",
    title: "នាងនាវពិសី",
    tags: ["ភ្លេងការ", "ភ្លេងប្រពៃណី", "ភ្លេងខ្មែរ"],
    singer: "នាយកំពីងពួយ",
  },
  {
    id: simpleRandomId(),
    videoId: "xqQdeo_FbUM",
    title: "សារ៉ាយអណ្តែត",
    tags: ["ភ្លេងការ", "ភ្លេងប្រពៃណី", "ភ្លេងខ្មែរ"],
    singer: "អៀង ស៊ីថុល",
  },
  {
    id: simpleRandomId(),
    videoId: "PwZM8XX2l18",
    title: "CIGARETTES AFTER WAR",
    tags: [
      "សង្រ្គាម",
      "វណ្ណដា",
      "ណូរិទ្ធិ",
      "វណ្ណាខ្មែរ",
      "បារីមួយដើម",
      "CIGARETTES AFTER WAR",
    ],
    singer: "NORITH FT VANNDA",
  },
  {
    id: simpleRandomId(),
    videoId: "qq0f0Aevlgg",
    title: "១ សីហា-August 1st",
    tags: [
      "សង្រ្គាម",
      "វណ្ណដា",
      "វណ្ណាខ្មែរ",
      "១ សីហា",
      "CIGARETTES AFTER WAR",
      "August 1st",
    ],
    singer: "VANNDA",
  },
];

export default videos;
