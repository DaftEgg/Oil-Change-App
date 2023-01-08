const Preview = ({ vehicleData, onPrint, onStartOver }) => {
    const oilChangeInterval = vehicleData.oilChangeInterval.substring(0, 4)
    const nextOilChangeMileage = parseInt(vehicleData.mileage) + parseInt(oilChangeInterval)
    return (
        <div>
            <div id="label-wrapper">
                <div className="label">
                    <div className="container">
                        <div className="row">
                            <div className="col"><span className="badge rounded-pill text-bg-dark">{`${vehicleData.year} ${vehicleData.make}`}</span></div>
                        </div>
                        <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <div className="col"><span className="badge rounded-pill text-bg-dark expanded">NEXT SERVICE</span></div>
                        </div>
                        <div className="row">
                            <div className="col"><span className="badge rounded-pill text-bg-light expanded">{`${nextOilChangeMileage} Miles`}</span></div>
                            <div className="col text-end"><span className="badge rounded-pill text-bg-light expanded">{vehicleData.oilChangeDate}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "10px" }} className="text-center"><button className="btn btn-primary circular" onClick={() => onPrint()}>Print Label</button></div>
            <div style={{ marginTop: "10px" }} className="text-center"><button className="btn btn-primary btn-sm circular" onClick={() => onStartOver()}>Start Over</button></div>
        </div>
    )
}

export default Preview