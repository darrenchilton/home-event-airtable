#!/bin/bash
#
# Quick start script for Airtable Schema Extractor
#
# Usage:
#   ./extract_schema.sh
#
# Prerequisites:
#   - Set AIRTABLE_API_KEY environment variable
#   - Set AIRTABLE_BASE_ID environment variable
#
# Or provide them interactively when prompted

set -e

echo "╔════════════════════════════════════════╗"
echo "║  Airtable Schema Extractor - v1.0     ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check for Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "   Please install Python 3 and try again."
    exit 1
fi

echo "✓ Python 3 found: $(python3 --version)"
echo ""

# Get the script directory and project root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Check for dependencies
if ! python3 -c "import requests" 2>/dev/null; then
    echo "📦 Installing dependencies..."
    pip3 install -r "$SCRIPT_DIR/requirements.txt"
    echo "✓ Dependencies installed"
    echo ""
fi

# Check for API key
if [ -z "$AIRTABLE_API_KEY" ]; then
    echo "🔑 AIRTABLE_API_KEY not set in environment"
    read -p "   Enter your Airtable API key: " AIRTABLE_API_KEY
    export AIRTABLE_API_KEY
fi

# Check for Base ID
if [ -z "$AIRTABLE_BASE_ID" ]; then
    echo "🗂️  AIRTABLE_BASE_ID not set in environment"
    read -p "   Enter your Airtable base ID: " AIRTABLE_BASE_ID
    export AIRTABLE_BASE_ID
fi

echo ""
echo "📡 Fetching schema from Airtable..."
echo "   Base ID: $AIRTABLE_BASE_ID"
echo ""

# Run the extractor
python3 "$SCRIPT_DIR/airtable_schema_extractor.py" --output-dir "$PROJECT_ROOT/schema"

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  ✅ Schema extraction complete!        ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "Generated files in schema/ directory:"
echo "  📄 schema/schema.json - Raw JSON schema"
echo "  📄 schema/schema.md - Human-readable documentation"
echo "  📄 schema/fields-from-schema.md - Detailed fields reference"
echo ""
echo "Next steps:"
echo "  1. Review schema/fields-from-schema.md"
echo "  2. Update your readme.fields.md with correct information"
echo "  3. Commit the schema files to git"
echo ""
