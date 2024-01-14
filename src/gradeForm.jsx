import { SubjectAndGrade } from "./subjectAndGrade";
import { useState } from 'react';

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
    "Business Studies"
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
    "bs"
];

export function GradeForm() {
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log("Selected Subjects and Grades:", selectedSubjectsData);
    //     // console.log("Grouped Subjects:", groupedSubjects);
    //     console.log("M-Pesa Number:", mpesaNumber);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        const groupedSubjects = {
            compulsory: [],
            G2: [],
            G3: [],
            G4: [],
            G5: [],
        };

        const categorizeSubject = (subject, grade) => {
            if (["eng", "math", "swa"].includes(subject)) {
                groupedSubjects.compulsory.push({ [subject]: grade });
            } else if (["phy", "bio", "chem"].includes(subject)) {
                groupedSubjects.G2.push({ [subject]: grade });
            } else if (["his", "geo", "re"].includes(subject)) {
                groupedSubjects.G3.push({ [subject]: grade });
            } else if (["hsci", "art", "agr", "cs", "avi", "elec", "pm", "ww"].includes(subject)) {
                groupedSubjects.G4.push({ [subject]: grade });
            } else if (["fre", "ger", "ara", "music", "bs"].includes(subject)) {
                groupedSubjects.G5.push({ [subject]: grade });
            }
        };

        selectedSubjectsData.forEach(({ subject, grade }) => {
            categorizeSubject(subject, grade);
        });

        console.log("Selected Subjects and Grades:", selectedSubjectsData);
        console.log("Grouped Subjects:", groupedSubjects);
        console.log("M-Pesa Number:", mpesaNumber);
    };

    return (
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
        </form>
    );
}