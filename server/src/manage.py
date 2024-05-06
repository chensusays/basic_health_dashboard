import os
from flask import Flask
from flask_migrate import Migrate, MigrateCommand
from flask.cli import FlaskGroup
from app import create_app, db

# Create the Flask app instance
app = create_app()

# Create a FlaskGroup instance to handle commands
cli = FlaskGroup(app)

# Add Flask-Migrate commands to the Flask CLI
cli.add_command('db', MigrateCommand)

if __name__ == '__main__':
    cli()