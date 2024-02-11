import PropTypes from 'prop-types';
import Degree_Cutoff_Points from './pdfs/Degree_Cutoff_Points.pdf';
import Degree_Clusters from './pdfs/KUCCPS_Degree_Clusters.pdf';
import jsPDF from 'jspdf';

Results.propTypes = {
    results: PropTypes.array.isRequired
};

export function Results({ results }) {
    const generatePDF = () => {
        let doc = new jsPDF();
        doc.text("Summary of Cluster Points", 10, 10);
        let y = 20;
        results.forEach((points, index) => {
            doc.text(`Cluster ${index + 1}: ${points}`, 10, y);
            y += 10;
        });
        doc.save("cluster_points.pdf");
    };

    return (
        <>
            <div className="downloadstitle">
                Important Downloads:
            </div>
            <div className='download_description'>
                <p className='download_description_p'>
                    Make sure you download the following files. The KUCCPS Cluster pdf 
                    file gives the classification of university courses according to clusters. The
                    Degree Cutoff points pdf file gives a summary of the minimum entry
                    points for degree programs in various universities.
                </p>
            </div>
            <div className='downloadbtndiv'>
                <a href={Degree_Clusters} download="Degree_Clusters.pdf">
                    <button className='downloadbtn'>Degree Clusters</button>
                </a>
                <a href={Degree_Cutoff_Points} download="Degree_Cutoff_Points.pdf">
                    <button className='downloadbtn'>Degree Cutoff Points</button>
                </a>
            </div>
            <br />
            <br />
            <div className="downloadstitle">
                Below is a summary of your cluster points
            </div>
            <div className='download_description'>
                <p className='download_description_p'>
                    You can also download the cluster points in pdf by clicking the button 
                    below:
                </p>
            </div>
            <div className='downloadbtndiv'>
                <button 
                    className='downloadbtn'
                    onClick={generatePDF} 
                    type='button'
                >
                    Download
                </button>
            </div>
            <table id='resultsTable'>
                <thead>
                    <tr>
                        <th>CLUSTER</th>
                        <th>POINTS</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((points, index) => (
                        <tr key={index}>
                            <td>{`Cluster ${index + 1}`}</td>
                            <td>{points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
