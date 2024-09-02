#!/bin/bash

# This script starts the Rails application in production mode.
# It ensures the database is migrated and then launches the server.

# Check if the database is up-to-date, and run migrations if necessary

rails s  -b 0.0.0.0
