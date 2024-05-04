from models import Patient

class PatientRepository:

    @staticmethod
    def get(name, first_name):
        return Patient.query.filter_by(name=name, first_name=first_name).one()
    
    def update(self, name, first_name, age=None,
                 height=None, weight=None, gender=None,
                 medication=None, body_temperatures=None):
        patient = self.get(name, first_name)
        patient.age = age
        patient.height = height
        patient.weight = weight
        patient.gender = gender
        patient.medication = medication
        patient.body_temperatures = body_temperatures

    @staticmethod
    def create(name, first_name, age=None,
                 height=None, weight=None, gender=None,
                 medication=None, body_temperatures=None):
        patient = Patient(name=name, first_name=first_name, age=age,
                 height=height, weight=weight, gender=gender,
                 medication=medication, body_temperatures=body_temperatures)
        
        return patient.save()