import PropTypes from 'prop-types';

Results.propTypes = {
    results: PropTypes.array.isRequired
};


export function Results({ results }) {
    return (
        <>
            <div className="resultstitle">
                    <p>Below is a summary of your cluster points</p>
            </div>
            <table>
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
