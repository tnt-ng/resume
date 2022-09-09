// export const fullVersionLink = "https://resume.narze.live"
// export const sourceLink = "https://github.com/narze/resume"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Thanathip Ngamloed",
  nickname: "View",
  phone: "0972628815",
  email: "t.ngamloed@outlook.com",
  github: "tnt-ng",
  linkedin: "Thanathip Ngamloed",
  location: "Nonthaburi, Thailand",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "JavaScript, Node.js, TypeScript, SQL, Python",
  },
  {
    section: "Frameworks:",
    details:
      "Angular, Vue, SvelteJS, TailwindCSS, Bootstrap",
  },
  {
    section: "Tools:",
    details:
      "Git, Docker, Robot Framework, Selenium, GitHub Codespaces",
  },
  // {
  //   section: "Other:",
  //   details:
  //     "AWS, GCP, Firebase, Vercel, DigitalOcean, Cloud66, Github Actions, CircleCI, CloudFlare",
  // },
]

export const educations = [
  {
    head: "Computer Engineering",
    details: "Panyapiwat Institute of Management, TH. 2019-Current (GPA 3.17)",
  },
]

export const workExperiences = [
  {
    position: "Frontend Developer",
    company: "Brainergy",
    url: "https://brainergy.digital/",
    years: ["2022", "Current"],
    details: [
      "Designed, developed, and maintained several core services for website (Face Detection, Reporting, etc.) stack Django, Angular.",
      "Design, develop and maintain coffee shop queue system using Angular, Firebase.",
      "Develop a membership system using face identification to verify identity using a Thai national ID card."
    ],
  },
  {
    position: "Full Stack Developer",
    company: "Outsource",
    years: ["2022"],
    details: [
      "Develop a system for borrowing books in the library with RFID on the Kiosk Touch Screen and installing equipment",
      "Designed, developed and maintained  website (Book rental, Payment, Face Detection, Reporting, APIs, etc.) stack Django, Svelte.",
      "Design and installation of on-site network systems using Kiosk Touch Screen.",
      "Researched & introduced modern technologies to the team, such as SvelteJS, TailwindCSS, Vite, Hardware for Kiosk, etc."
    ],
  }
]

export const projects = [
  {
    name: "Mask detection system with individual identification",
    details:
      "Develop a system to detect masks with identification by using convolutional neural networks, Transfer Learning, Face Recognition, FaceNet",
    url: "github.com/tnt-ng/Mask-Detection-with-identify"
  },
  {
    name: "Banana Weight Measurement By Using Image",
    details:"This is a model used to estimate the weight of a banana from an image using convolutional neural networks. This project uses the Tensorflow and Sklearn library in Python and SQLite.",
    url: "github.com/PSKdream/CE59423/blob/main/project/banana_cnn.ipynb",
  }
]

export const interests = [
  "Areas : Coding, Mechanical Keyboards",
  "Games : sports, FPS, MOBA, Puzzle",
  "Music : EDM, Rock, Japanese",
  "Remote working is a OK. I extensively use self time tracking app for all my works.",
  "Pets : I have 5 dogs",
]
