import { useState } from "react"
import PropTypes from 'prop-types'

const VehicleForm = ({ onDownload, onGenerate }) => {

    const [vehicleYear, setVehicleYear] = useState('')
    const [vehicleMake, setVehicleMake] = useState('')
    const [vehicleMileage, setVehicleMileage] = useState()
    const [todaysDate, setTodaysDate] = useState('')
    const oilChangeIntervals = [
        '1000 Miles',
        '2000 Miles',
        '3000 Miles',
        '4000 Miles',
        '5000 Miles',
        '6000 Miles',
        '7000 Miles',
        '8000 Miles',
        '9000 Miles',
    ]

    const [oilChangeInterval, setOilChangeInterval] = useState('1000 Miles')

    const vehicleData = {
        oilChangeInterval: oilChangeInterval,
        year: vehicleYear,
        make: vehicleMake,
        mileage: vehicleMileage,
        oilChangeDate: todaysDate,
    }

    const fieldsEmpty = () => {
        if (!vehicleYear || !vehicleMake || !vehicleMileage || !todaysDate) {
            return true
        }
        return false
    }

    const download = (e) => {
        e.preventDefault()
        fieldsEmpty() ? alert('Fields can\'t be empty: Vehicle Year, Vehicle Make, Vehicle Mileage and Todays Date') : onDownload(vehicleData)
    }

    const generateLabel = (e) => {
        e.preventDefault()
        fieldsEmpty() ? alert('Fields can\'t be empty: Vehicle Year, Vehicle Make, Vehicle Mileage and Todays Date') : onGenerate(vehicleData)
    }


    return (

        <form>
            <div className="mb-3">
                <select className="form-select form-control-lg" aria-label="Default select example" onChange={(e) => setOilChangeInterval(e.target.value)}>
                    {oilChangeIntervals.map((interval, key) => (<option key={key}>{interval}</option>))}
                </select>
            </div>
            <hr />
            <div className="mb-3">
                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                    placeholder="Vehicle Year" onChange={(e) => setVehicleYear(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                    placeholder="Vehicle Make" onChange={(e) => setVehicleMake(e.target.value)} />
            </div>
            <hr />
            <div className="mb-3">
                <input type="number" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Mileage"
                    onChange={(e) => setVehicleMileage(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="date" className="form-control form-control-lg" id="exampleFormControlInput1"
                    placeholder="Todays Date" onChange={(e) => setTodaysDate(e.target.value)} />
            </div>
            <div className="col text-center">
                <div className="btn-group">
                    <button className="btn btn-primary btn-lg circular" type="button" onClick={generateLabel}>
                        Generate Label
                    </button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split circular"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={download}>Download .txt</button></li>
                    </ul>
                </div>
            </div>
        </form>
    )
}

VehicleForm.propTypes = {
    onDownload: PropTypes.func.isRequired,
    onGenerate: PropTypes.func.isRequired
}

export default VehicleForm