export interface Patient {
    name: string;
    first_name: string;
    age: number;
    height: number;
    weight: number;
    gender: string;
    medications: Array<Medication>;
    body_temperatures: Array<BodyTemperature>;
}

export interface Medication {
    name: string;
    dosage: string;
    start_date: string | Date;
    end_date: string | Date;
}

export interface BodyTemperature {
    date: Date;
    temperature: number;
}
