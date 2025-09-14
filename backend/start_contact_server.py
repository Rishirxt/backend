#!/usr/bin/env python3
"""
Start the Flask backend server for contact form submissions.
This script starts the Flask app on localhost:5000
"""

from app import app

if __name__ == '__main__':
    print("Starting Flask backend server for Y-SoC applications and contact forms...")
    print("Server will be available at: http://localhost:5000")
    print("Application endpoint: http://localhost:5000/submit")
    print("Contact form endpoint: http://localhost:5000/contact")
    print("Health check endpoint: http://localhost:5000/health")
    print("\nPress Ctrl+C to stop the server")
    
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
        threaded=True
    )
