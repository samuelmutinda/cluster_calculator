import { SubjectAndGrade } from "./subjectAndGrade";
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Popup } from "./popup";
import axios from "axios";

GradeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

const subjectsData = [
    { subjectNumber: 'Subject 1', gradeNumber: 'Grade for subject 1', isRequired: true },
    { subjectNumber: 'Subject 2', gradeNumber: 'Grade for subject 2', isRequired: true },
    { subjectNumber: 'Subject 3', gradeNumber: 'Grade for subject 3', isRequired: true },
    { subjectNumber: 'Subject 4', gradeNumber: 'Grade for subject 4', isRequired: true },
    { subjectNumber: 'Subject 5', gradeNumber: 'Grade for subject 5', isRequired: true },
    { subjectNumber: 'Subject 6', gradeNumber: 'Grade for subject 6', isRequired: true },
    { subjectNumber: 'Subject 7', gradeNumber: 'Grade for subject 7', isRequired: true },
    { subjectNumber: 'Subject 8', gradeNumber: 'Grade for subject 8', isRequired: false }
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
        subject1: ["fre", "ger"],
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

/* tiny pesa api requirements*/

// const API_URL = "/api/v1/express/initialize";
const API_KEY = 'QBPIA8z6whK';
// const ACC_NUMBER = '200';
const AMOUNT = '50';
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

    let y = gradesByGroup.g1.reduce((sum, grade) => sum + grade, 0);
    const top2Group2Grades = gradesByGroup.g2.sort((a, b) => b - a).slice(0, 2);
    y += top2Group2Grades.reduce((sum, grade) => sum + grade, 0);
    gradesByGroup.g2 = gradesByGroup.g2.filter(grade => !top2Group2Grades.includes(grade));
    const highestGroup3Grade = Math.max(...gradesByGroup.g3);
    y += highestGroup3Grade;
    const indexToRemoveGroup3 = gradesByGroup.g3.indexOf(highestGroup3Grade);
    if (indexToRemoveGroup3 !== -1) {
        gradesByGroup.g3.splice(indexToRemoveGroup3, 1);
    }
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
    let tempSelectedSubjectsData = [...selectedSubjectsData]; 
    let x = 0;
    for (const group in cluster) {
        if (Object.prototype.hasOwnProperty.call(cluster, group)) {
            const subjectsInGroup = cluster[group];
            const highestScoreData = subjectsInGroup.reduce((maxScoreData, subject) => {
                const subjectData = tempSelectedSubjectsData.find(data => data.subject === subject);
                const subjectScore = subjectData ? subjectData.grade : 0;

                if (subjectScore > maxScoreData.grade) {
                    maxScoreData = { subject, grade: subjectScore };
                }

                return maxScoreData;
            }, { subject: null, grade: 0 });
            x += highestScoreData.grade;

            const indexToRemove = tempSelectedSubjectsData.findIndex(data => data.subject === highestScoreData.subject);
            if (indexToRemove !== -1) {
                tempSelectedSubjectsData.splice(indexToRemove, 1);
            }
        }
    }

    return x;
}


export function GradeForm({ onSubmit }) {
    const [selectedSubjectsData, setSelectedSubjectsData] = useState([]);
    const [customerEmail, setCustomerEmail] = useState("");
    const [reportSent, setReportSent] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    // const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    let results = [];
    
    const handleSubjectStateChange = (index, selectedSubject, selectedGrade) => {
        const updatedSelectedSubjectsData = [...selectedSubjectsData];
        updatedSelectedSubjectsData[index] = { subject: selectedSubject, grade: parseInt(selectedGrade) };
        setSelectedSubjectsData(updatedSelectedSubjectsData);
    };

    const handleCustomerEmailChange = (e) => {
        setCustomerEmail(e.target.value);
    };

    async function sendStkRequest() {
        try {
            const {data} = await axios.post("https://tinypesa.com/api/v1/express/initialize", {
                amount: AMOUNT,
            }, {
                headers: {
                    Apikey: API_KEY,
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            if(data){
                // when the payment has been confirmed it then calculates the results
                console.log(data);
            }else{
                // This means that the payment has not been made
                console.log("There is no data");
            }
            
        } catch (error) {
            console.log(error);
        }        
    }

    const handleConfirmPayment = async () => {
        // WHEN THE FUNCTION IS CALLED, IT FIRST CHECKS IF THE PAYMENT HAS BEEN CONFIRMED
        
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/confirm-mpesa-payment`, {
                // Msisdn: mpesaNumber
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if(data.confirmed){
                // when the payment has been confirmed it then calculates the results
                results = [];
                for (let i = 0; i < clusters.length; i++) {
                    const xResult = calculate_x(clusters[i], selectedSubjectsData);
                    const yResult = calculate_y(selectedSubjectsData);
                    let clusterResult = (48*(Math.sqrt((xResult/48)*(yResult/84)))).toFixed(3);
                    results.push(clusterResult);
                }
                submitResults()
            }else{
                // This means that the payment has not been made
                console.log(data.none);
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPopup(true);
        /* send stk push request*/
        await sendStkRequest();
    };

    const submitResults = () => {
        setShowPopup(false); 
        // THEN IT REDIRECTS TO THE RESULTS PAGE. MAKE CHANGES HERE
        // THE onSubmit FUNCTION SHOULD ONLY BE CALLED IF THE PAYMENT HAS BEEN MADE
        onSubmit(results);
    }

    const handleClosePopup = () => {
        setShowPopup(false); 
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n1b16q6', 'template_zscajku', form.current, 'Xy0M5cGGk5FH0x9wz')
            .then((result) => {
                console.log(result.text);
                setReportSent(true); 
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
             <div className='formdescription'>
                <p className='warning'>WATCH THE VIDEO GUIDE TO LEARN HOW TO USE</p>
            </div>
            
            <div className='youtube_div'>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Rlhgli_X4wQ?si=Q6yvIN0vWMbvSMik" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
            </div>
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
                    <p className="warning">
                        IF YOU SAT FOR 7 SUBJECTS, LEAVE SUBJECT 8 AND GRADE FOR SUBJECT 8 BLANK.
                    </p>
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

                <div className="customerEmail">
                    <label>Enter your Email. It will be used to send a Digital receipt.</label>
                    <br />
                    <input 
                        type="text" 
                        id="customerEmailnput" 
                        value={customerEmail}
                        onChange={handleCustomerEmailChange}
                        required 
                    />
                </div>
                <div className="submitbuttonbox">
                    <input type="submit" value="Calculate" id="submitbutton" />
                </div>
            </form>
            <Popup trigger={showPopup} onConfirmPayment={handleConfirmPayment} onClose={handleClosePopup}/>
            <form ref={form} onSubmit={sendEmail}>
                <br />
                {reportSent && <div style={{ color: 'green', textAlign: 'center'}}>REPORT SENT!</div>}
                <br />
                <div className="report_title" >REPORT AN ISSUE:</div>
                <div className="report_form">
                    <p className="report_description">
                        In case you are having issues with payment or general issues with
                        the website, please send us your complaint using the from below. Our technical team will 
                        respond to you via email promptly.
                        If you had made a payment but you ran into an issue, copy and paste the M-Pesa
                        message as well and explain the issue you ran into.
                    </p>
                    <label htmlFor="email" >Enter your Email address:</label>
                    <br />
                    <input type="email" name="from_email" id="email" />
                    <br />
                    
                    <label htmlFor="report" >Describe your issue:</label>
                    <br />
                    <textarea 
                        name='message'
                        id="report" 
                        required
                    />
                    <div className="submitbuttonbox">
                        <input type="submit" value="Send" id="submitbutton" />
                    </div>
                </div>
            </form>
        </>
    );
}