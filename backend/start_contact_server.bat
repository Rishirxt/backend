@echo off
echo Starting Flask backend server for contact form submissions...
echo.
echo Server will be available at: http://localhost:5000
echo Contact form endpoint: http://localhost:5000/contact
echo Health check endpoint: http://localhost:5000/health
echo.
echo Press Ctrl+C to stop the server
echo.

python start_contact_server.py

pause
