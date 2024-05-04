"""
Defines the blueprint for the patients
"""
from flask import Blueprint
from flask_restful import Api

from resources import PatientResource

PATIENT_BLUEPRINT = Blueprint("patient", __name__)
Api(PATIENT_BLUEPRINT).add_resource(
    PatientResource, "/user/<string:name>/<string:first_name>"
)
