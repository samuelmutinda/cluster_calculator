import PropTypes from 'prop-types';
import { useState } from 'react';

SubjectAndGrade.propTypes = {
    subjectNumber: PropTypes.string.isRequired,
    gradeNumber: PropTypes.string.isRequired,
    subjects: PropTypes.array.isRequired,
    onSubjectStateChange: PropTypes.func.isRequired,
    selectedSubjects: PropTypes.array.isRequired
  };

export function SubjectAndGrade({subjectNumber, gradeNumber, subjects, onSubjectStateChange, selectedSubjects}) {
    const [subjectState, setSubjectState] = useState("");
    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setSubjectState(selectedSubject);
        onSubjectStateChange(selectedSubject);
    };
    const isSubjectSelected = (subject) => {
        return selectedSubjects.includes(subject);
    };
    const [gradeState, setGradeState] = useState("")
    return (
        <div className="subjectandgrade">
            <div className="subjectselection">
                <label 
                    htmlFor="subject-selection" 
                    id="subject-label" 
                    className="form-label"
                >
                    {subjectNumber} 
                </label>
                <br />
                <select 
                    name="" 
                    id="subject-selection"
                    data-required="1"
                    data-placeholder="Select Subject"
                    onChange={handleSubjectChange}
                >
                    <option value="" data-select2-id="subject-placeholder">
                        Select Subject
                    </option>
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject} data-calculation="0" disabled={isSubjectSelected(subject)}>
                            {subject}
                        </option>
                    ))}
                </select>
            </div>


            <div className="gradeselection">
                <label 
                    htmlFor="grade-selection" 
                    id="grade-label" 
                    className="form-label"
                >
                    {gradeNumber} 
                </label>
                <br />
                <select 
                    name="" 
                    id="grade-selection"
                    data-required="1"
                    data-placeholder="Select Grade"
                    onChange={(e)=>{
                        const selectedGrade=e.target.value;
                        setGradeState(selectedGrade);
                    }} 
                >
                    <option value="" data-select2-id="grade-placeholder">
                        Select Grade
                    </option>
                    <option value="12" data-calculation="0">
                        A
                    </option>
                    <option value="11" data-calculation="0">
                        A-
                    </option>
                    <option value="10" data-calculation="0">
                        B+
                    </option>
                    <option value="9" data-calculation="0">
                        B
                    </option>
                    <option value="8" data-calculation="0">
                        B-
                    </option>
                    <option value="7" data-calculation="0">
                        C+
                    </option>
                    <option value="6" data-calculation="0">
                        C
                    </option>
                    <option value="5" data-calculation="0">
                        C-
                    </option>
                    <option value="4" data-calculation="0">
                        D+
                    </option>
                    <option value="3" data-calculation="0">
                        D
                    </option>
                    <option value="2" data-calculation="0">
                        D-
                    </option>
                    <option value="1" data-calculation="0">
                        E
                    </option>
                </select>
            </div>
        </div>
    )
}