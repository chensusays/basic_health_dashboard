"""
Define the REST verbs relative to the patients
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import PatientRepository
from util import parse_params


class PatientResource(Resource):
    """ Verbs relative to the patients """

    @staticmethod
    @swag_from("../swagger/patient/GET.yml")
    def get(name, first_name):
        """ Return an patient key information based on his name """
        patient = PatientRepository.get(name=name, first_name=first_name)
        return jsonify({"patient": patient.json})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the patient."),
        Argument("height", location="json", required=True, help="The height of the patient."),
        Argument("weight", location="json", required=True, help="The weight of the patient."),
        Argument("gender", location="json", required=True, help="The gender of the patient."),
        Argument("medications", location="json", required=False, help="The medications of the patient."),
        Argument("body_temperatures", location="json", required=False, help="The historical body temperatures of the patient.")
    )
    @swag_from("../swagger/patient/POST.yml")
    def post(name, first_name, age,
            height, weight, gender,
            medications=None, body_temperatures=None):
        """ Create an patient based on the sent information """
        patient = PatientRepository.create(
            name=name, first_name=first_name, age=age,
            height=height, weight=weight, gender=gender,
            medications=medications, body_temperatures=body_temperatures
        )
        return jsonify({"patient": patient.json})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the patient."),
        Argument("height", location="json", required=True, help="The height of the patient."),
        Argument("weight", location="json", required=True, help="The weight of the patient."),
        Argument("gender", location="json", required=True, help="The gender of the patient."),
        Argument("medications", location="json", required=False, help="The medications of the patient."),
        Argument("body_temperatures", location="json", required=False, help="The historical body temperatures of the patient.")
    )
    @swag_from("../swagger/patient/PUT.yml")
    def put(name, first_name, age,
            height, weight, gender,
            medications=None, body_temperatures=None):
        """ Update an patient based on the sent information """
        repository = PatientRepository()
        patient = repository.update(
            name=name, first_name=first_name, age=age,
            height=height, weight=weight, gender=gender,
            medications=medications, body_temperatures=body_temperatures)
        return jsonify({"patient": patient.json})
