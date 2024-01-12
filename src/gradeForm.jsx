import { SubjectAndGrade } from "./subjectAndGrade"
import { useState } from 'react';

const subject1 = {
    subjectNumber: 'Subject 1',
    gradeNumber: 'Grade for subject 1'
}

const subject2 = {
    subjectNumber: 'Subject 2',
    gradeNumber: 'Grade for subject 2'
}

const subject3 = {
    subjectNumber: 'Subject 3',
    gradeNumber: 'Grade for subject 3'
}

const subject4 = {
    subjectNumber: 'Subject 4',
    gradeNumber: 'Grade for subject 4'
}

const subject5 = {
    subjectNumber: 'Subject 5',
    gradeNumber: 'Grade for subject 5'
}

const subject6 = {
    subjectNumber: 'Subject 6',
    gradeNumber: 'Grade for subject 6'
}

const subject7 = {
    subjectNumber: 'Subject 7',
    gradeNumber: 'Grade for subject 7'
}

let subjects = [
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

export function GradeForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the selectedSubjectsData, for example, send it to a server.
        console.log("Selected Subjects and Grades:", selectedSubjectsData);
    };
    const [selectedSubjectsData, setSelectedSubjectsData] = useState([]);

    const handleSubjectStateChange = (index, selectedSubject, selectedGrade) => {
        const updatedSelectedSubjectsData = [...selectedSubjectsData];
        updatedSelectedSubjectsData[index] = { subject: selectedSubject, grade: parseInt(selectedGrade) };
        setSelectedSubjectsData(updatedSelectedSubjectsData);
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
            <SubjectAndGrade 
                {...subject1}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(0, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade {...subject2} 
                {...subject2}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(1, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade 
                {...subject3}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(2, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade 
                {...subject4}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(3, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade 
                {...subject5}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(4, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade 
                {...subject6}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(5, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            <SubjectAndGrade 
                {...subject7}
                subjects={subjects}
                onSubjectStateChange={(selectedSubject, selectedGrade) => handleSubjectStateChange(6, selectedSubject, selectedGrade)}
                selectedSubjects={selectedSubjectsData.map(data => data.subject)}
            />
            {/* <SubjectAndGrade 
                {...subject7} subjects = {subjects} 
                onSubjectStateChange={(selectedSubject) => handleSubjectStateChange(7, selectedSubject)}
                selectedSubjects = {selectedSubjects}
            /> */}
            <div className="mpesaNumber">
                <label htmlFor="fname" >Enter your M-Pesa Number:</label>
                <br />
                <input type="text" id="mpesa" required ></input>
            </div>
            <div className="submitbuttonbox">
                <input type="submit" value="Calculate" id="submitbutton"></input>
            </div>
        </form>
    )
}