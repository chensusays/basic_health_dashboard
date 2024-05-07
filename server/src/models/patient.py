from dataclasses import dataclass
from sqlalchemy import JSON
from . import db
from .abc import BaseModel, MetaBaseModel

@dataclass
class Patient(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = "patient"
    name = str
    first_name = str
    age = int
    height = int
    weight = int
    gender = str
    medications = JSON
    body_temperatures = JSON

    name = db.Column(db.String(300), primary_key=True)
    first_name = db.Column(db.String(300), primary_key=True)
    age = db.Column(db.Integer, nullable=True)
    height = db.Column(db.Integer, nullable=True)
    weight = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(300), nullable=True)
    medications = db.Column(db.JSON, nullable=True)
    body_temperatures = db.Column(db.JSON, nullable=True)

    def __init__(self, name, first_name, age=None,
                 height=None, weight=None, gender=None,
                 medications=None, body_temperatures=None):
        self.name = name
        self.first_name = first_name
        self.age = age
        self.height = height
        self.weight = weight
        self.gender = gender
        self.medications = medications
        self.body_temperatures = body_temperatures
