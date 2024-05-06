"""Populate Patient table with patient_data.json

Revision ID: 56f241963013
Revises: b172c4808961
Create Date: 2024-05-06 07:37:28.842489

"""

# revision identifiers, used by Alembic.
revision = '56f241963013'
down_revision = 'b172c4808961'

import json
from alembic import op
import sqlalchemy as sa

from src.repositories.patient import PatientRepository


def upgrade():
    # parse patient_data.json file and update patient table with data
    json_data_path = "./patient_data.json"
    with open(json_data_path, 'r') as json_file:
        json_data = json.load(json_file)

    for row in json_data:
        PatientRepository.create(name=row['name'], first_name=row['first_name'], age=row['age'],
                                 height=row['height'], weight=row['weight'], gender=row['gender'],
                                 medications=row['medications'], body_temperatures=row['body_temperatures'])


def downgrade():
    # delete all rows in patient table
    op.execute("TRUNCATE patient")