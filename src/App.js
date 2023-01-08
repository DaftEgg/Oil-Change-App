import FileSaver from 'file-saver';
import Header from './components/Header'
import VehicleForm from './components/VehicleForm';
import Preview from './components/Preview'
import { useState } from 'react';

const App = () => {

  const [showPreview, setShowPreview] = useState(false)
  const [vehicleData, setVehicleData] = useState()

  const onDownload = (vehicle) => {
    const mileageInterval = vehicle.oilChangeInterval.substring(0, 4)

    const content = `
      # Oil Change Interval #
      ${mileageInterval} Miles
      # Oil Change Date #
      ${vehicle.oilChangeDate}
      # Vehicle Mileage #
      ${vehicle.mileage}

      Vehicle Year: ${vehicle.year}
      Vehicle Make: ${vehicle.make}
      Next Oil Change: ${parseInt(mileageInterval) + parseInt(vehicle.mileage)}
    `

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    FileSaver.saveAs(blob, `${vehicle.make}.txt`)
  }

  const onGenerate = (data) => {
    setVehicleData(data)
    setShowPreview(true)
  }

  const onPrint = () => {
    const PHE = require("print-html-element")
    PHE.printElement(document.getElementById("label-wrapper"))
  }

  const onStartOver = () => {
    setShowPreview(false)
  }

  return (
    <div className="container wrapper">
      <div className="center-div">
        {showPreview ? <Header title="Print Label" subTitle="Your label is ready to print" /> : <Header />}
        {showPreview === false ? <VehicleForm onDownload={onDownload} onGenerate={onGenerate} /> : <Preview vehicleData={vehicleData} onPrint={onPrint} onStartOver={onStartOver} />}
      </div>
    </div>
  );
}

export default App;
