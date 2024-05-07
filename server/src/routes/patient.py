"""
Defines the blueprint for the patients
"""
from flask import Blueprint
from flask_restful import Api

from resources.patient import PatientsResource, PatientResource

PATIENT_BLUEPRINT = Blueprint("patient", __name__)
Api(PATIENT_BLUEPRINT).add_resource(
    PatientResource, "/patient/<string:name>/<string:first_name>"
)

PATIENTS_BLUEPRINT = Blueprint("patients", __name__)
Api(PATIENTS_BLUEPRINT).add_resource(
    PatientsResource, "/patients"
)