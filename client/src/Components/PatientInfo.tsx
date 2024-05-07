import { RootState } from '@Services/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Medication, Patient } from 'src/types';

const defaultPatient: Patient = {
    name: '',
    first_name: '',
    age: 0,
    height: 0,
    weight: 0,
    gender: '',
    medications: [],
    body_temperatures: [],
};

const PatientInfo: React.FC = () => {
    const patients = useSelector((state: RootState) => state.patients.data);
    const { name } = useParams();
    const [temp, setTemp] = useState<string>();
    const [patient, setPatient] = useState<Patient>(defaultPatient);

    useEffect(() => {
        const currentPatient: Patient =
            patients.find(p => p.name == name) || defaultPatient;
        setPatient(currentPatient);
    });

    const takeTemperature = () => {
        // if current patient's temp for current day is null then randomly generate temp between 35-38C
        const randomTemp: number = Math.random() * (38 - 35) + 35;
        setTemp(randomTemp.toFixed(1));
    };

    const handleRemoveMedication = () => {};
    const handleAddMedication = () => {};

    const {
        first_name,
        age,
        gender,
        height,
        weight,
        body_temperatures,
        medications,
    } = patient;
    // temp chart with scale option 1/3/6 months
    // add new temp

    // Medication
    // add/remove
    return (
        <>
            <div className="flex-row">
                <h1 className="flex">Patient Basic Info</h1>
                <span className="flex">Name: {name}</span>
                <span className="flex">First Name: {first_name}</span>
                <span className="flex">Age: {age}</span>
                <span className="flex">Gender: {gender}</span>
                <span className="flex">Height: {height}</span>
                <span className="flex">Weight: {weight}</span>
            </div>

            <div className="flex-row">
                <div className="flex">
                    <div>Highlights</div>
                    <span>
                        {temp !== undefined ? temp : "Take today's temperature"}
                    </span>
                    <button onClick={takeTemperature}>Take Temperature</button>
                </div>
                <div className="flex">Temp Graph</div>
            </div>
            <div>
                <h1>Medications</h1>
                <div>
                    {medications.map((med: Medication, index) => (
                        <div key={index}>
                            <div>{med.name}</div>
                            <div>{med.dosage}</div>
                            <div>{med.start_date.toString()}</div>
                            <div>{med.end_date.toString()}</div>
                            <button onClick={handleRemoveMedication}>-</button>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={handleAddMedication}>+</button>
                </div>
            </div>
        </>
    );
};

export default PatientInfo;
