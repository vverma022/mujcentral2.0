import R1 from "../public/_static/illustrations/MTE.svg"
import R2 from "../public/_static/illustrations/ETE.svg"
import R3 from "../public/_static/illustrations/rocket-crashed.svg"
import R4 from "../public/_static/illustrations/call-waiting.svg"
import { Paper } from "@/types"
import { link } from "fs"
import { difference } from "next/dist/build/utils"

export const cycles = ['Physics','Chemistry'];
export const majors = ['CSE-C','CCE','IT','AI-ML','IoT']
export const semesters = ['Sem-1', 'Sem-2', 'Sem-3', 'Sem-4'];

export const firstYearPapers: Record<string, Paper[]> = {
  Physics: [
    {
      id: 1,
      title: 'EMM',
      name: 'Engineering Materials & Mechanics',
      link: 'https://drive.google.com/file/d/1ry8fX9j_Iaee5xlWQlcLf0cUSXGDL7yc/view?usp=share_link',
      image: R1,
      difficulty: 'M', // Valid "H" (Hard)
      examType: 'MTE', // Valid exam type
    },
    {
      id: 2,
      title: 'EP',
      name: 'Engineering Physics',
      link: 'https://drive.google.com/file/d/1DbpXjvn6J_U5RbhBJkIKXQRCXCn9vz71/view?usp=share_link',
      image: R3,
      difficulty: 'M', // Valid "M" (Medium)
      examType: 'MTE',
    },
    {
      id: 3,
      title: 'MFE',
      name: 'Matlab for Engineers',
      link: 'https://drive.google.com/file/d/1cAlSIwgkBI3REHf56MGC4mRD_abJVyiY/view?usp=share_link',
      image: R4,
      difficulty: 'E', // Valid "E" (Easy)
      examType: 'MTE',
    },
    {
      id: 4,
      title: 'BFE',
      name: 'Biology for Engineers',
      link: 'https://drive.google.com/file/d/1_D2WDDZdVpyeTFbC2AkmAdumQgfSlEtH/view?usp=share_link',
      image: R2,
      difficulty: 'E',
      examType: 'MTE',
    },
    {
      id: 5,
      title: 'CM',
      name: 'Computational Mathematics',
      link: 'https://drive.google.com/file/d/1tepB8K6GoUyoWetNum_RpiTpDBI9Dow0/view?usp=share_link',
      image: R3,
      difficulty: 'M',
      examType: 'MTE',
    },
    {
      id: 6,
      title: 'CM',
      name: 'Computational Mathematics',
      link: "https://drive.google.com/file/d/1F25jn0d881fLX5yk1I5cXz2Rio6fUAKn/view?usp=share_link",
      image: R4,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 7,
      title: 'EMM',
      name: 'Engineering Materials & Mechanics',
      link: "https://drive.google.com/file/d/1LGSartdTWUoN6BQTW8aUcDzU87Np2YM8/view?usp=share_link",
      image: R1,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 8,
      title: 'EP',
      name: 'Engineering Physics',
      link: "https://drive.google.com/file/d/1HA26shbiVKfPYOvLPLTsTpOjz3vAnNE4/view?usp=share_link",
      image: R3,
      difficulty: 'M',
      examType: 'ETE',
    },
    {
      id: 9,
      title: 'MFE',
      name: 'Matlab for Engineers',
      link: "https://drive.google.com/file/d/1KX0IYXKy6GOpgVl3bpy8d_gbuejIlqwS/view?usp=share_link",
      image: R2,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 10,
      title: 'BFE',
      name: 'Biology for Engineers',
      link: "https://drive.google.com/file/d/1S2fdpeS5HsGpxXDJUYSRvGTU0UDDhdij/view?usp=share_link",
      image: R4,
      difficulty: 'M',
      examType: 'ETE',
    }
  ],
  Chemistry: [
    {
      id: 1,
      title: 'CM',
      name: 'Calculus & Matrices',
      link: 'https://drive.google.com/file/d/1IM8MoqrkKJ9_Ovi2hJGWcCRS7qGchICm/view?usp=share_link',
      image: R3,
      difficulty: 'M',
      examType: 'ETE',
    },
    {
      id: 2,
      title: 'EC',
      name: 'Engineering Chemistry',
      link: 'https://drive.google.com/file/d/1zCQjydZoRU57EJfXH-1eDfxRxrotNM9s/view?usp=share_link',
      image: R4,
      difficulty: 'M',
      examType: 'MTE',
    },
    {
      id: 3,
      title: 'EC',
      name: 'Engineering Chemistry',
      link: 'https://drive.google.com/file/d/1amZa-e7h4FhwUktMuanmCKM-4Arbfc0z/view?usp=share_link',
      image: R1,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 4,
      title: 'EES',
      name: 'Electronics & Electrical Systems',
      link: 'https://drive.google.com/file/d/1rB0rEIh2wU3ikrsZBiE55zs-9Uj80BzZ/view?usp=share_link',
      image: R2,
      difficulty: 'M',
      examType: 'MTE',
    },
    {
      id: 5,
      title: 'EES',
      name: 'Electronics & Electrical Systems',
      link: 'https://drive.google.com/file/d/1ICmAanBNZNNndEg90kX3y7OHzVMI7UEp/view?usp=share_link',
      image: R2,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 6,
      title: 'PSUC',
      name: 'Problem Solving Using C',
      link: 'https://drive.google.com/file/d/1qGoIPfc7G4cPY-6QaYWozu-TV2p8capR/view?usp=share_link',
      image: R3,
      difficulty: 'M',
      examType: 'MTE',
    },
    {
      id: 7,
      title: 'PSUC',
      name: 'Problem Solving Using C',
      link: 'https://drive.google.com/file/d/1fCNcIUOxIOUc6rCEQSmB1yvGgZ_xxWQK/view?usp=share_link',
      image: R4,
      difficulty: 'H',
      examType: 'ETE',
    },
    {
      id: 8,
      title: 'TWC',
      name: 'Technical Writing Clinic',
      link: 'https://drive.google.com/file/d/1g1LK9luWV1RDeiDWMhgXFn4ZF1dXtsO5/view?usp=share_link',
      image: R3,
      difficulty: 'E',
      examType: 'ETE',
      }
  ],
};

export const secondYearPapers: Record<string, Paper[]> = {
  'CSE-C': [
    { id: 1, title: 'COA', name: "Computer Architecture " , link: 'https://drive.google.com/drive/folders/1_pHnKFpk0guBKPUMYgjMV7ibUVO2SaX0?usp=share_link', image: R1 , difficulty: 'H', examType: 'MTE' },
    { id: 2, title: 'DSA', name: "Data-Structures and Algorithms" ,link: 'https://drive.google.com/drive/folders/1FpxgdCGycRw7Vi3jjqCB3uFg0U9Pk9i3?usp=share_link', image: R3 , difficulty: 'M', examType: 'MTE' },
    { id: 3, title: 'OOPS', name: "Object-Oriented Programming" ,link: 'https://drive.google.com/drive/folders/1KDHT3EAdz3_e--1ClYsouzzdG6v_-gQS?usp=sharing', image: R4 , difficulty: 'M', examType: 'MTE' },
    { id: 4, title: 'RDBMS',name: "Database Management System" , link: 'https://drive.google.com/drive/folders/16YTo5L4Anal9oXl4ca_XxOYPY11o_9-y?usp=sharing', image: R2 , difficulty: 'E', examType: 'MTE' },
    { id: 5, title: 'COA', name: "Computer Architecture " , link: 'https://drive.google.com/file/d/1DacWfHnZDCVHasB77qT1rmMhYuiLR8l3/view?usp=share_link', image: R1 , difficulty: 'H', examType: 'ETE' },
    { id: 6, title: 'DSA', name: "Data-Structures and Algorithms" ,link: 'https://drive.google.com/file/d/1yiFEGKr_ftIJrqP8xys4fflaq6Vv9f04/view?usp=share_link', image: R3 , difficulty: 'H', examType: 'ETE' },
    { id: 7, title: 'OOPS', name: "Object-Oriented Programming" ,link: 'https://drive.google.com/file/d/1UDqQi0ZjIzXyazFbRo76r05ojDv1QSk8/view?usp=share_link', image: R4 , difficulty: 'M', examType: 'ETE' },
    { id: 8, title: 'RDBMS',name: "Database Management System" , link: 'https://drive.google.com/file/d/1qoDk_64XRI2l8AgpNPFToIJikURwR7VL/view?usp=share_link', image: R2 , difficulty: 'M', examType: 'ETE' },
    { id: 9, title: 'SAP', name: "Statistical Method and Probaility" , link: 'https://drive.google.com/file/d/1ZtdXA4w1_XotAfiU2ZobDLQLehOKfofk/view?usp=share_link', image: R4 , difficulty: 'M', examType: 'ETE' },
    { id: 10, title: 'SAP', name: "Statistical Method and Probaility" , link: 'https://drive.google.com/file/d/1OCTaWZr_ppYmvbuVHlIZwyBMRIORHiRw/view?usp=share_link', image: R3, difficulty: 'M', examType: 'MTE' },
  ],
  'CCE': [

  ],
  'IT': [

  ],
  'AI-ML': [

  ],
  'IoT': [
    {id: 1, title: 'DDCA', name: "Digital Design and Architecture", link: 'https://drive.google.com/file/d/1so3levw6CZo9_ka2BEUxvE_FyGkTJlvq/view?usp=share_link', image: R1, difficulty: 'H', examType: 'ETE'},
    {id: 2, title: 'DDCA', name: "Digital Design and Architecture", link: 'https://drive.google.com/file/d/1q-V3rNZP4cORLoX9Ys_EAygWbnmKmaEo/view?usp=share_link', image: R2, difficulty: 'M', examType: 'MTE'},
    {id: 3, title: 'DSA', name: "Data Strutures and Algorithm's", link: 'https://drive.google.com/file/d/1Ks_qh-WKrtJSPCQGmY9w2MHtYONqlB85/view?usp=share_link', image: R3, difficulty: 'M', examType: 'ETE'},
    {id: 4, title: 'DSA', name: "Data Strutures and Algorithm's", link: 'https://drive.google.com/file/d/1VHq4U5LNUy3juAOxClcG4SshR0Vy7KF1/view?usp=share_link', image: R4, difficulty: 'E', examType: 'MTE'},
    {id: 5, title: 'EE', name: "Engineering Economic's", link: 'https://drive.google.com/file/d/1GzWC1zegVlLcrtLya532gZXavIaMdah2/view?usp=share_link', image: R1, difficulty: 'E', examType: 'MTE'},
    {id: 6, title: 'EE', name: "Engineering Economic's", link: 'https://drive.google.com/file/d/10tsSpNNvApf8NijC-s9uOrFEEK3YtN1P/view?usp=share_link',image: R2, difficulty: 'M', examType: 'ETE'},
    {id: 7, title: 'OOPS', name: "Object Oriented Programming", link: 'https://drive.google.com/file/d/1trbLkVVSxp9I7zrB7GzTD_4M5QSP2PD1/view?usp=share_link', image: R3, difficulty: 'M', examType: 'MTE'},
    {id: 8, title: 'OOPS', name: "Object Oriented Programming", link: 'https://drive.google.com/file/d/1cSt3rWnn5Hek4X5uts35upJNEJGdX7D5/view?usp=share_link', image: R4, difficulty: 'M', examType: 'ETE'},
    {id: 9, title: 'MT', name: "Management of Technology", link: 'https://drive.google.com/file/d/1akW7YwB8UiRVUrVHxByKqecEGlpPnAd5/view?usp=share_link', image: R1, difficulty: 'M', examType: 'MTE'},
    {id: 10, title: 'MT', name: "Management of Technology", link: 'https://drive.google.com/file/d/1tKCwtG4tnW_SsoRJN1CjtQJIWQfz9jvJ/view?usp=share_link', image: R2, difficulty: 'E', examType: 'ETE'},
    {id: 11, title: 'DDCN', name: "Computer Networks", link: 'https://drive.google.com/file/d/1ZzMxM8qgYVKy24UCZZcJVGJbVpvdJ9zP/view?usp=share_link', image: R3, difficulty: 'H', examType: 'ETE'},
  ]
};

export const thirdYearPapers: Record<string, Paper[]> = {
  'CCE': [
    {id: 1, title: 'AIML', name: "Artificial Intelligence and Machine Learning", link: 'https://drive.google.com/file/d/1eFXR7UiIDaBoBZtNErlzMVHamcFa_8U_/view?usp=share_link', image: R1, difficulty: 'M', examType: 'MTE'},
    {id: 2, title: 'ATCD', name: "Automata and Compiler Design", link: 'https://drive.google.com/file/d/1LW7ZeivpBDKjoyNotcVxQmbxfEVVvq_O/view?usp=share_link', image: R2, difficulty: 'M', examType: 'MTE'},
    {id: 3, title: 'ATCD', name: "Automata and Compiler Design", link: 'https://drive.google.com/file/d/1W0fSY1aqZ8pEfr1ByKwZYDAUSc34G6oO/view?usp=share_link', image: R3, difficulty: 'M', examType: 'MTE'},
    {id: 4, title: 'AIML', name: "Artificial Intelligence and Machine Learning",link: "https://drive.google.com/file/d/1O3mWTyeHWGgDRPxa8z8vFT7QD2sYZZwj/view?usp=share_link", image: R1, difficulty: 'M', examType: 'ETE'},
    {id: 5, title: 'WC', name: "Wireless Communication", link: 'https://drive.google.com/file/d/1f6OsjWC3YbkluDXtq7ID4VxpYVeEBS4t/view?usp=share_link', image: R2, difficulty: 'H', examType: 'ETE'},
  ],
  'IT': [
    {id: 1, title: 'CIS', name: "Cryptography", link: 'https://drive.google.com/file/d/13n2wtxgUo2636Z71-_1OxEOfH82guw5L/view?usp=share_link', image: R1, difficulty: 'M', examType: 'MTE'},
    {id: 2, title: 'CIS', name: "Cryptography", link: 'https://drive.google.com/file/d/19rCZ4c854oSWomLsK9UC4R91aSdumnOE/view?usp=share_link', image: R2, difficulty: 'H', examType: 'ETE'},
    {id: 3, title: 'AIML',name: "Artificial Intelligence and Machine Learning", link: 'https://drive.google.com/file/d/1ERWq0fF7wNaP930lACAE8fybixD1w4B6/view?usp=share_link', image: R1, difficulty: 'M', examType: 'ETE'},
    {id: 4, title:'ACD',name:"Automata",link:'https://drive.google.com/file/d/1ER9715C47XCure7e72ciPByIupeXjUPv/view?usp=share_link',image: R4,difficulty: 'H', examType: 'ETE'},
    {id: 5, title:'ACD',name:"Automata",link:'https://drive.google.com/file/d/1u192CM01wfn8_uR3Wc80O2Hj-6Qy2qyK/view?usp=share_link',image: R3,difficulty: 'M', examType: 'MTE'}

  ],
  'CSE-C': [
    {id: 1, title: 'DSML', name: "Data Science Machine Learning", link: 'https://drive.google.com/file/d/1yldpe_SZnKM7GrsIyQ4bAGeVpOyQmor4/view?usp=share_link', image: R1, difficulty: 'M', examType: 'ETE'},
  ]
}