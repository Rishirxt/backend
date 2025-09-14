#!/usr/bin/env python3
"""
Script to manually create the yosoc_applications.xlsx file for testing
"""

from openpyxl import Workbook
import os

def create_application_excel():
    """Create the application Excel file with headers"""
    
    # File configuration
    EXCEL_FILE_PATH = 'yosoc_applications.xlsx'
    SHEET_NAME = 'Applications'
    
    # Headers in correct order
    HEADERS = [
        "First Name", "Last Name", "Email", "Country", "Role", 
        "Experience Level", "Technical Skills", "Why Join", 
        "GitHub", "Portfolio", "Time Commitment", 
        "Agree Terms", "Updates Subscription"
    ]
    
    try:
        # Create workbook
        wb = Workbook()
        ws = wb.active
        ws.title = SHEET_NAME
        
        # Add headers
        for col, header in enumerate(HEADERS, 1):
            ws.cell(row=1, column=col, value=header)
        
        # Save the workbook
        wb.save(EXCEL_FILE_PATH)
        print(f"✅ Created application Excel file: {EXCEL_FILE_PATH}")
        print(f"📊 Headers: {', '.join(HEADERS)}")
        
        # Check if file exists
        if os.path.exists(EXCEL_FILE_PATH):
            print(f"✅ File verified: {os.path.getsize(EXCEL_FILE_PATH)} bytes")
        else:
            print("❌ File creation failed!")
            
    except Exception as e:
        print(f"❌ Error creating Excel file: {str(e)}")

if __name__ == "__main__":
    print("Creating Y-SoC Application Excel File")
    print("="*50)
    create_application_excel()
