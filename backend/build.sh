#!/bin/bash
set -e

echo "Installing dependencies with pre-compiled wheels..."

# Upgrade pip first
pip install --upgrade pip

# Install numpy first (required for pandas)
pip install numpy==1.24.3 --only-binary=all

# Install pandas with pre-compiled wheels only
pip install pandas==1.5.3 --only-binary=all

# Install other dependencies
pip install Flask==2.3.3
pip install openpyxl==3.1.2
pip install Werkzeug==2.3.7
pip install flask-cors==4.0.0
pip install gunicorn==21.2.0

echo "All dependencies installed successfully!"
