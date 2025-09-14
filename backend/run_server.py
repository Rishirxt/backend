#!/usr/bin/env python3
"""
Script to run the YoSOC Application Backend Flask server
"""

import os
import sys
from app import app, create_excel_file_if_not_exists

def main():
    """Main function to start the Flask server"""
    print("🚀 Starting YoSOC Application Backend Server...")
    print("=" * 50)
    
    # Create Excel file if it doesn't exist
    create_excel_file_if_not_exists()
    
    # Print server information
    print(f"📊 Excel file location: {os.path.abspath('yosoc_applications.xlsx')}")
    print("🌐 Server will be available at: http://localhost:5000")
    print("\n📋 Available endpoints:")
    print("  POST /submit - Submit application form")
    print("  GET /health - Health check")
    print("  GET /applications - Get all applications")
    print("\n💡 To test the API, run: python test_api.py")
    print("=" * 50)
    
    try:
        # Start the Flask server
        app.run(debug=True, host='0.0.0.0', port=5000)
    except KeyboardInterrupt:
        print("\n👋 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
