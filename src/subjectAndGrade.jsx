import PropTypes from 'prop-types';
import { useState } from 'react';

SubjectAndGrade.propTypes = {
    subjectNumber: PropTypes.string.isRequired,
    gradeNumber: PropTypes.string.isRequired,
    subjects: PropTypes.array.isRequired,
    onSubjectStateChange: PropTypes.func.isRequired,
    selectedSubjects: PropTypes.array.isRequired,
    subjectValues: PropTypes.array.isRequired,
    isRequired: PropTypes.bool.isRequired
};

export function SubjectAndGrade({
    subjectNumber,
    gradeNumber,
    isRequired,
    subjects,
    onSubjectStateChange,
    selectedSubjects,
    subjectValues}) {
    const [subjectState, setSubjectState] = useState("");
    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setSubjectState(selectedSubject);
        onSubjectStateChange(selectedSubject, gradeState);
    };

    const isSubjectSelected = (subject) => {
        return selectedSubjects.includes(subject);
    };

    const [gradeState, setGradeState] = useState("");
    const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        onSubjectStateChange(subjectState, selectedGrade);
        setGradeState(selectedGrade);
    };

    const generateGradeOptions = () => {
        const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E'];
        return grades.map((grade, index) => (
            <option key={index} value={grades.length - index} data-calculation="0">
                {grade}
            </option>
        ));
    };

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
                    required={isRequired}
                    data-placeholder="Select Subject"
                    onChange={handleSubjectChange}
                >
                    <option value="" data-select2-id="subject-placeholder">
                        Select Subject
                    </option>
                    {subjects.map((subject, index) => (
                        <option
                            key={index}
                            value={subjectValues[index]}
                            data-calculation="0"
                            disabled={isSubjectSelected(subjectValues[index])}
                        >
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
                    required={isRequired}
                    data-placeholder="Select Grade"
                    onChange={handleGradeChange}
                >
                    <option value="" data-select2-id="grade-placeholder">
                        Select Grade
                    </option>
                    {generateGradeOptions()}
                </select>
            </div>
        </div>
    );
}
