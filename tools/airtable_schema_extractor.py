
#!/usr/bin/env python3
"""
Airtable Schema Extractor

Fetches the complete schema from an Airtable base and generates:
1. Raw JSON schema file (schema.json)
2. Human-readable markdown documentation (schema.md)
3. Fields reference for documentation (fields-from-schema.md)

Usage:
    export AIRTABLE_API_KEY="your_api_key"
    export AIRTABLE_BASE_ID="your_base_id"
    python airtable_schema_extractor.py

Or with inline credentials:
    python airtable_schema_extractor.py --api-key YOUR_KEY --base-id YOUR_BASE
"""

import os
import sys
import json
import argparse
from datetime import datetime
from typing import Dict, List, Any
import requests


class AirtableSchemaExtractor:
    """Extract schema information from Airtable base using the Metadata API"""
    
    def __init__(self, api_key: str, base_id: str):
        self.api_key = api_key
        self.base_id = base_id
        self.base_url = "https://api.airtable.com/v0/meta/bases"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        
    def fetch_schema(self) -> Dict[str, Any]:
        """Fetch the complete base schema from Airtable Metadata API"""
        url = f"{self.base_url}/{self.base_id}/tables"
        
        print(f"Fetching schema from Airtable base: {self.base_id}")
        response = requests.get(url, headers=self.headers)
        
        if response.status_code != 200:
            print(f"Error: {response.status_code}")
            print(f"Response: {response.text}")
            sys.exit(1)
            
        data = response.json()
        print(f"✓ Successfully fetched schema for {len(data.get('tables', []))} tables")
        return data
    
    def save_json_schema(self, schema: Dict[str, Any], filename: str = "schema.json"):
        """Save raw JSON schema"""
        with open(filename, 'w') as f:
            json.dump(schema, f, indent=2)
        print(f"✓ Saved raw JSON schema to {filename}")
    
    def generate_markdown_schema(self, schema: Dict[str, Any], filename: str = "schema.md"):
        """Generate human-readable markdown documentation"""
        output = []
        output.append("# Airtable Base Schema")
        output.append("")
        output.append(f"> Auto-generated schema documentation")
        output.append(f"> Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        output.append("")
        output.append("---")
        output.append("")
        
        tables = schema.get('tables', [])
        
        # Table of contents
        output.append("## Tables")
        output.append("")
        for table in tables:
            output.append(f"- [{table['name']}](#{self._anchor(table['name'])})")
        output.append("")
        output.append("---")
        output.append("")
        
        # Detailed table information
        for table in tables:
            output.append(f"## {table['name']}")
            output.append("")
            output.append(f"**Table ID**: `{table['id']}`")
            output.append("")
            
            if table.get('description'):
                output.append(f"**Description**: {table['description']}")
                output.append("")
            
            # Primary field
            primary_field_id = table.get('primaryFieldId')
            primary_field = next((f for f in table['fields'] if f['id'] == primary_field_id), None)
            if primary_field:
                output.append(f"**Primary Field**: {primary_field['name']}")
                output.append("")
            
            # Fields table
            output.append("### Fields")
            output.append("")
            output.append("| Field Name | Type | Description |")
            output.append("|------------|------|-------------|")
            
            for field in table['fields']:
                field_name = field['name']
                field_type = field['type']
                field_desc = field.get('description', '')
                
                # Add type details
                type_display = self._format_field_type(field)
                
                output.append(f"| {field_name} | {type_display} | {field_desc} |")
            
            output.append("")
            output.append("---")
            output.append("")
        
        # Save to file
        with open(filename, 'w') as f:
            f.write('\n'.join(output))
        
        print(f"✓ Saved markdown schema to {filename}")
    
    def generate_fields_reference(self, schema: Dict[str, Any], filename: str = "fields-from-schema.md"):
        """Generate detailed fields reference for documentation"""
        output = []
        output.append("# Fields Reference (Auto-Generated)")
        output.append("")
        output.append(f"> Generated from Airtable schema on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        output.append("")
        output.append("This document contains the actual schema from your Airtable base. Use this as the source of truth for updating your fields documentation.")
        output.append("")
        output.append("---")
        output.append("")
        
        tables = schema.get('tables', [])
        
        for table in tables:
            output.append(f"## {table['name']}")
            output.append("")
            output.append(f"**Total Fields**: {len(table['fields'])}")
            output.append("")
            
            # Group fields by type
            fields_by_type = {}
            for field in table['fields']:
                field_type = field['type']
                if field_type not in fields_by_type:
                    fields_by_type[field_type] = []
                fields_by_type[field_type].append(field)
            
            # Display each field in detail
            for field in sorted(table['fields'], key=lambda f: f['name']):
                output.append(f"### {field['name']}")
                output.append("")
                output.append(f"- **Field ID**: `{field['id']}`")
                output.append(f"- **Type**: {self._format_field_type(field)}")
                
                if field.get('description'):
                    output.append(f"- **Description**: {field['description']}")
                
                # Type-specific details
                self._add_field_details(field, output)
                
                output.append("")
            
            # Summary by type
            output.append("### Field Type Summary")
            output.append("")
            for field_type, fields in sorted(fields_by_type.items()):
                output.append(f"- **{field_type}**: {len(fields)} fields")
                for field in fields:
                    output.append(f"  - {field['name']}")
            output.append("")
            output.append("---")
            output.append("")
        
        # Save to file
        with open(filename, 'w') as f:
            f.write('\n'.join(output))
        
        print(f"✓ Saved fields reference to {filename}")
    
    def _format_field_type(self, field: Dict[str, Any]) -> str:
        """Format field type with options if applicable"""
        field_type = field['type']
        options = field.get('options', {})
        
        if field_type == 'singleSelect' and options.get('choices'):
            choices = [c['name'] for c in options['choices']]
            return f"Single Select ({len(choices)} options)"
        elif field_type == 'multipleSelects' and options.get('choices'):
            choices = [c['name'] for c in options['choices']]
            return f"Multiple Select ({len(choices)} options)"
        elif field_type == 'multipleRecordLinks':
            linked_table = options.get('linkedTableId', 'Unknown')
            return f"Link to {options.get('preferredDirection', 'Unknown')}"
        elif field_type == 'formula':
            return "Formula"
        elif field_type == 'rollup':
            return "Rollup"
        elif field_type == 'count':
            return "Count"
        elif field_type == 'lookup':
            return "Lookup"
        else:
            return field_type.replace('_', ' ').title()
    
    def _add_field_details(self, field: Dict[str, Any], output: List[str]):
        """Add type-specific field details"""
        field_type = field['type']
        options = field.get('options', {})
        
        if field_type == 'singleSelect' and options.get('choices'):
            output.append("- **Options**:")
            for choice in options['choices']:
                color = choice.get('color', 'none')
                output.append(f"  - {choice['name']} ({color})")
        
        elif field_type == 'multipleSelects' and options.get('choices'):
            output.append("- **Options**:")
            for choice in options['choices']:
                color = choice.get('color', 'none')
                output.append(f"  - {choice['name']} ({color})")
        
        elif field_type == 'multipleRecordLinks':
            output.append(f"- **Linked Table ID**: `{options.get('linkedTableId', 'Unknown')}`")
            if options.get('preferredDirection'):
                output.append(f"- **Direction**: {options['preferredDirection']}")
            if options.get('inverseLinkFieldId'):
                output.append(f"- **Inverse Link Field**: `{options['inverseLinkFieldId']}`")
        
        elif field_type == 'formula':
            if options.get('formula'):
                output.append(f"- **Formula**: `{options['formula']}`")
            if options.get('result'):
                output.append(f"- **Result Type**: {options['result'].get('type', 'Unknown')}")
        
        elif field_type == 'rollup':
            output.append(f"- **Rollup Field**: `{options.get('fieldIdInLinkedTable', 'Unknown')}`")
            output.append(f"- **Function**: {options.get('referencedFieldIds', 'Unknown')}")
        
        elif field_type == 'lookup':
            output.append(f"- **Lookup Field**: `{options.get('fieldIdInLinkedTable', 'Unknown')}`")
            output.append(f"- **Record Link Field**: `{options.get('recordLinkFieldId', 'Unknown')}`")
        
        elif field_type == 'number':
            if options.get('precision'):
                output.append(f"- **Precision**: {options['precision']}")
        
        elif field_type == 'currency':
            if options.get('precision'):
                output.append(f"- **Precision**: {options['precision']}")
            if options.get('symbol'):
                output.append(f"- **Symbol**: {options['symbol']}")
        
        elif field_type == 'percent':
            if options.get('precision'):
                output.append(f"- **Precision**: {options['precision']}")
        
        elif field_type == 'date' or field_type == 'dateTime':
            if options.get('dateFormat'):
                output.append(f"- **Date Format**: {options['dateFormat'].get('name', 'Unknown')}")
            if options.get('timeFormat'):
                output.append(f"- **Time Format**: {options['timeFormat'].get('name', 'Unknown')}")
            if options.get('timeZone'):
                output.append(f"- **Time Zone**: {options['timeZone']}")
    
    def _anchor(self, text: str) -> str:
        """Convert text to markdown anchor"""
        return text.lower().replace(' ', '-').replace('(', '').replace(')', '')


def main():
    parser = argparse.ArgumentParser(
        description='Extract schema from Airtable base and generate documentation'
    )
    parser.add_argument(
        '--api-key',
        help='Airtable API key (or set AIRTABLE_API_KEY env var)',
        default=os.getenv('AIRTABLE_API_KEY')
    )
    parser.add_argument(
        '--base-id',
        help='Airtable base ID (or set AIRTABLE_BASE_ID env var)',
        default=os.getenv('AIRTABLE_BASE_ID')
    )
    parser.add_argument(
        '--output-dir',
        help='Output directory for generated files',
        default='.'
    )
    
    args = parser.parse_args()
    
    if not args.api_key:
        print("Error: API key required. Set AIRTABLE_API_KEY env var or use --api-key")
        sys.exit(1)
    
    if not args.base_id:
        print("Error: Base ID required. Set AIRTABLE_BASE_ID env var or use --base-id")
        sys.exit(1)
    
    # Change to output directory
    if args.output_dir != '.':
        os.makedirs(args.output_dir, exist_ok=True)
        os.chdir(args.output_dir)
    
    # Extract schema
    extractor = AirtableSchemaExtractor(args.api_key, args.base_id)
    schema = extractor.fetch_schema()
    
    # Generate outputs
    extractor.save_json_schema(schema)
    extractor.generate_markdown_schema(schema)
    extractor.generate_fields_reference(schema)
    
    print("\n✓ Schema extraction complete!")
    print("\nGenerated files:")
    print("  - schema.json (raw JSON schema)")
    print("  - schema.md (human-readable documentation)")
    print("  - fields-from-schema.md (detailed fields reference)")


if __name__ == '__main__':
    main()
