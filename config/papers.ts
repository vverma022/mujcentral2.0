import R1 from "../public/_static/illustrations/MTE.svg"
import R2 from "../public/_static/illustrations/ETE.svg"
import R3 from "../public/_static/illustrations/rocket-crashed.svg"
import R4 from "../public/_static/illustrations/call-waiting.svg"

export const cycles = ['Physics','Chemistry'];
export const majors = ['CSE-C','CCE','IT','AI-ML','IoT']
export const semesters = ['Sem-1', 'Sem-2', 'Sem-3', 'Sem-4'];

export const firtyearpapers = {
    'Physics': [
      { id: 1, title: 'EMM', name: "Engineering Materials & Mechanics", link: '', image: R1, difficulty: 'H', examType: 'MTE' },
      { id: 2, title: 'EP', name: "Engineering Physics", link: '', image: R3, difficulty: 'M', examType: 'MTE' },
      { id: 3, title: 'MFE', name: "Matlab for Engineers", link: '', image: R4, difficulty: 'E', examType: 'MTE' },
      { id: 4, title: 'BFE', name: "Biology for Engineers", link: '', image: R2, difficulty: 'M', examType: 'MTE' },
      { id: 5, title: 'CM', name: "Computational Mathematics", link: '', image: R3, difficulty: 'H', examType: 'MTE' },
    ],
    'Chemistry': [
      { id: 1, title: 'OS', name: "Operating Systems", link: 'https://drive.google.com/folder/example', image: R4, difficulty: 'M', examType: 'MTE' },
    ],

}

export const papers = {
  'CSE-C': [
    { id: 1, title: 'COA', name: "Computer Architecture " , link: 'https://drive.google.com/drive/folders/1_pHnKFpk0guBKPUMYgjMV7ibUVO2SaX0?usp=share_link', image: R1 , difficulty: 'H', examType: 'MTE' },
    { id: 2, title: 'DSA', name: "Data-Structures and Algorithms" ,link: 'https://drive.google.com/drive/folders/1FpxgdCGycRw7Vi3jjqCB3uFg0U9Pk9i3?usp=share_link', image: R3 , difficulty: 'M', examType: 'MTE' },
    { id: 3, title: 'OOPS', name: "Object-Oriented Programming" ,link: 'https://drive.google.com/drive/folders/1KDHT3EAdz3_e--1ClYsouzzdG6v_-gQS?usp=sharing', image: R4 , difficulty: 'M', examType: 'MTE' },
    { id: 4, title: 'RDBMS',name: "Database Management System" , link: 'https://drive.google.com/drive/folders/16YTo5L4Anal9oXl4ca_XxOYPY11o_9-y?usp=sharing', image: R2 , difficulty: 'E', examType: 'MTE' },

  ],
  'CCE': [

  ],
  'IT': [

  ],
  'AI-ML': [

  ],
  'IoT': [

  ]
};