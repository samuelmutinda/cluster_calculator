import { SubjectAndGrade } from "./subjectAndGrade";
import { useState } from 'react';
import PropTypes from 'prop-types';

GradeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

const subjectsData = [
    { subjectNumber: 'Subject 1', gradeNumber: 'Grade for subject 1' },
    { subjectNumber: 'Subject 2', gradeNumber: 'Grade for subject 2' },
    { subjectNumber: 'Subject 3', gradeNumber: 'Grade for subject 3' },
    { subjectNumber: 'Subject 4', gradeNumber: 'Grade for subject 4' },
    { subjectNumber: 'Subject 5', gradeNumber: 'Grade for subject 5' },
    { subjectNumber: 'Subject 6', gradeNumber: 'Grade for subject 6' },
    { subjectNumber: 'Subject 7', gradeNumber: 'Grade for subject 7' },
    { subjectNumber: 'Subject 8', gradeNumber: 'Grade for subject 8' }
];

const subjects = [
    "Mathematics", 
    "Physics", 
    "Chemistry", 
    "Biology",
    "English",
    "Kiswahili",
    "History",
    "Geography",
    "IRE",
    "CRE",
    "HRE",
    "Home Science",
    "Art",
    "Agriculture",
    "Computer Studies",
    "Aviation",
    "Electricity",
    "Power Mechanics",
    "Woodwork",
    "French",
    "German",
    "Arabic",
    "Music",
    "Business Studies",
    "General Science",
    "Metal Work",
    "Building Construction",
    "Drawing and Design",
    "Sign Language"
];

const subjectValues = [
    "math", 
    "phy", 
    "chem", 
    "bio",
    "eng",
    "swa",
    "his",
    "geo",
    "re",
    "re",
    "re",
    "hsci",
    "art",
    "agr",
    "cs",
    "avi",
    "elec",
    "pm",
    "ww",
    "fre",
    "ger",
    "ara",
    "music",
    "bs",
    "gs",
    "mw",
    "bc",
    "dd",
    "ksl"
];

const g1 = ["eng", "swa", "math"];
const g2 = ["bio", "chem", "phy", "gs"];
const g3 = ["his", "geo", "re"];
const g4 = ["elec", "cs", "agr", "hsci", "art", "ww", "mw", "bc", "pm", "dd", "avi"];
const g5 = ["bs", "fre", "ger", "ara", "ksl", "music"];

const clusters = [
    {
        subject1: ["eng", "swa"],
        subject2: ["math", ...g2],
        subject3: [...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["eng", "swa"],
        subject2: ["math"],
        subject3: [...g2, ...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["eng", "swa"],
        subject2: ["math", ...g2],
        subject3: [...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: ["phy"],
        subject3: ["bio", "chem", "geo"],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["eng", "swa"],
        subject2: ["bio", "gs"],
        subject3: [...g3],
        subject4: ["math", ...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["swa"],
        subject2: ["eng", "math", ...g2],
        subject3: [...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: ["phy"],
        subject3: ["chem"],
        subject4: ["bio", ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: ["phy"],
        subject3: [...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: ["phy"],
        subject3: [...g2, ...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: ["bio"],
        subject3: ["phy", "chem"],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: [...g2],
        subject3: [...g2],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["math"],
        subject2: [...g2],
        subject3: [...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["chem"],
        subject2: ["math", "phy"],
        subject3: ["bio", "hsci"],
        subject4: ["eng", "swa", ...g3, ...g4, ...g5]
    },
    {
        subject1: ["bio", "gs"],
        subject2: ["math"],
        subject3: [...g2, ...g3],
        subject4: ["eng", "swa", ...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["bio"],
        subject2: ["chem"],
        subject3: ["phy", "math"],
        subject4: ["eng", "swa", ...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["his"],
        subject2: ["eng", "swa"],
        subject3: ["math", ...g2],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["bio"],
        subject2: ["chem"],
        subject3: ["math", "phy", "geo"],
        subject4: ["eng", "swa", ...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["geo"],
        subject2: ["math"],
        subject3: [...g2],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["fre"],
        subject2: ["eng", "swa"],
        subject3: ["math", ...g2, ...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["ger"],
        subject2: ["eng", "swa"],
        subject3: ["math", ...g2, ...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["music"],
        subject2: ["eng", "swa"],
        subject3: ["math", ...g2, ...g3],
        subject4: [...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["eng"],
        subject2: ["math", ...g2],
        subject3: [...g2, ...g3],
        subject4: ["swa", ...g2, ...g3, ...g4, ...g5]
    },
    {
        subject1: ["re"],
        subject2: ["eng", "swa"],
        subject3: [...g3],
        subject4: [...g2, ...g4, ...g5]
    }
];

function calculate_y(data) {
    let gradesByGroup = {
        g1: [],
        g2: [],
        g3: [],
        g4: [],
        g5: [],
    };

    data.forEach(({ subject, grade }) => {
        if (g1.includes(subject)) {
            gradesByGroup.g1.push(grade);
        } else if (g2.includes(subject)) {
            gradesByGroup.g2.push(grade);
        } else if (g3.includes(subject)) {
            gradesByGroup.g3.push(grade);
        } else if (g4.includes(subject)) {
            gradesByGroup.g4.push(grade);
        } else if (g5.includes(subject)) {
            gradesByGroup.g5.push(grade);
        }
    });

    // Calculate the sum of group 1 grades
    let y = gradesByGroup.g1.reduce((sum, grade) => sum + grade, 0);

    // Find the two highest scores in Group 2 and add them to y
    const top2Group2Grades = gradesByGroup.g2.sort((a, b) => b - a).slice(0, 2);
    y += top2Group2Grades.reduce((sum, grade) => sum + grade, 0);

    // Remove the two highest grades from Group 2
    gradesByGroup.g2 = gradesByGroup.g2.filter(grade => !top2Group2Grades.includes(grade));

    // Calculate the highest score in Group 3 and add it to yAfterGroup2
    const highestGroup3Grade = Math.max(...gradesByGroup.g3);
    y += highestGroup3Grade;

    // Remove the highest grade from Group 3
    const indexToRemoveGroup3 = gradesByGroup.g3.indexOf(highestGroup3Grade);
    if (indexToRemoveGroup3 !== -1) {
        gradesByGroup.g3.splice(indexToRemoveGroup3, 1);
    }

    // Find the highest score in the remaining subjects (Group II, III, and IV) and add it to yAfterGroup3
    const remainingSubjectsGrades = [
        ...gradesByGroup.g2, 
        ...gradesByGroup.g3, 
        ...gradesByGroup.g4,
        ...gradesByGroup.g5
    ];
    const highestRemainingGrade = Math.max(...remainingSubjectsGrades);
    y += highestRemainingGrade;

    return y;
}

function calculate_x(cluster, selectedSubjectsData) {
    let tempSelectedSubjectsData = [...selectedSubjectsData]; // Create a shallow copy

    let x = 0;

    // Iterate over each subject group in the cluster
    for (const group in cluster) {
        if (Object.prototype.hasOwnProperty.call(cluster, group)) {
            const subjectsInGroup = cluster[group];

            // Find the highest score for each subject in the group
            const highestScoreData = subjectsInGroup.reduce((maxScoreData, subject) => {
                // Find the grade for the subject in selectedSubjectsData
                const subjectData = tempSelectedSubjectsData.find(data => data.subject === subject);
                const subjectScore = subjectData ? subjectData.grade : 0;

                // If the current subject has a higher score, update maxScoreData
                if (subjectScore > maxScoreData.grade) {
                    maxScoreData = { subject, grade: subjectScore };
                }

                return maxScoreData;
            }, { subject: null, grade: 0 });

            // Add the highest score to the total
            x += highestScoreData.grade;

            // Remove the subject with the highest score from tempSelectedSubjectsData
            const indexToRemove = tempSelectedSubjectsData.findIndex(data => data.subject === highestScoreData.subject);
            if (indexToRemove !== -1) {
                tempSelectedSubjectsData.splice(indexToRemove, 1);
            }
            // console.log(tempSelectedSubjectsData);
        }
    }

    return x;
}


export function GradeForm({ onSubmit }) {
    const [selectedSubjectsData, setSelectedSubjectsData] = useState([]);
    const [mpesaNumber, setMpesaNumber] = useState("");

    
    const handleSubjectStateChange = (index, selectedSubject, selectedGrade) => {
        const updatedSelectedSubjectsData = [...selectedSubjectsData];
        updatedSelectedSubjectsData[index] = { subject: selectedSubject, grade: parseInt(selectedGrade) };
        setSelectedSubjectsData(updatedSelectedSubjectsData);
    };

    const handleMpesaChange = (e) => {
        setMpesaNumber(e.target.value);
    };

    const results = [];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Loop through the clusters array and calculate calculate_x for each cluster
        for (let i = 0; i < clusters.length; i++) {
            const xResult = calculate_x(clusters[i], selectedSubjectsData);
            const yResult = calculate_y(selectedSubjectsData);
            let clusterResult = (48*(Math.sqrt((xResult/48)*(yResult/84)))).toFixed(3);
            results.push(clusterResult);
        }

        console.log("Selected Subjects and Grades:", selectedSubjectsData);
        console.log("M-Pesa Number:", mpesaNumber);
        console.log("Results:", results);

        onSubmit(results);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const groupedSubjects = {
    //         compulsory: [],
    //         G2: [],
    //         G3: [],
    //         G4: [],
    //         G5: [],
    //     };

    //     const categorizeSubject = (subject, grade) => {
    //         if (["eng", "math", "swa"].includes(subject)) {
    //             groupedSubjects.compulsory.push({ [subject]: grade });
    //         } else if (["phy", "bio", "chem"].includes(subject)) {
    //             groupedSubjects.G2.push({ [subject]: grade });
    //         } else if (["his", "geo", "re"].includes(subject)) {
    //             groupedSubjects.G3.push({ [subject]: grade });
    //         } else if (["hsci", "art", "agr", "cs", "avi", "elec", "pm", "ww"].includes(subject)) {
    //             groupedSubjects.G4.push({ [subject]: grade });
    //         } else if (["fre", "ger", "ara", "music", "bs"].includes(subject)) {
    //             groupedSubjects.G5.push({ [subject]: grade });
    //         }
    //     };

    //     selectedSubjectsData.forEach(({ subject, grade }) => {
    //         categorizeSubject(subject, grade);
    //     });

    //     console.log("Selected Subjects and Grades:", selectedSubjectsData);
    //     console.log("Grouped Subjects:", groupedSubjects);
    //     console.log("M-Pesa Number:", mpesaNumber);
    // };

    return (
        <>
            <form 
                action=""
                id="grades" 
                className="input-form" 
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="formtitle">
                    <p>Select the subjects and their corresponding grades</p>
                </div>
                <div className="formdescription">
                    <p>
                        You will be charged a service fee of KES 50. Please enter your M-Pesa number 
                        after entering your grades. Once you click `calculate`, you will be prompted to confirm 
                        the transaction on your phone.
                    </p>
                </div>

                {subjectsData.map((subject, index) => (
                    <SubjectAndGrade 
                        key={index}
                        {...subject}
                        subjects={subjects}
                        onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(index, selectedSubject, selectedGrade)}
                        selectedSubjects={selectedSubjectsData.map(data => data.subject)}
                        subjectValues={subjectValues}
                    />
                ))}

                <div className="mpesaNumber">
                    <label htmlFor="fname" >Enter your M-Pesa Number:</label>
                    <br />
                    <input 
                        type="text" 
                        id="mpesa" 
                        value={mpesaNumber}
                        onChange={handleMpesaChange}
                        required 
                    />
                </div>
                <div className="submitbuttonbox">
                    <input type="submit" value="Calculate" id="submitbutton" />
                </div>
                <div className="report_form">
                <br />
                    <label htmlFor="fname" >Report an issue:</label>
                    <br />
                    <textarea 
                        type="text" 
                        id="report" 
                        // value={report}
                    />
                </div>
            </form>
        </>
    );
}