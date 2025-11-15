#!/bin/bash

# Meo Barber - Pre-Deployment Verification Script
echo "🔍 Meo Barber - Pre-Deployment Verification"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check counter
PASSED=0
FAILED=0

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1 MISSING"
        ((FAILED++))
    fi
}

# Function to check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/ directory exists"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1/ directory MISSING"
        ((FAILED++))
    fi
}

echo "1. Checking Required Files"
echo "-------------------------"
check_file "index.html"
check_file "README.md"
check_file "_config.yml"
check_file ".gitignore"
check_file "DEPLOYMENT.md"
echo ""

echo "2. Checking Directory Structure"
echo "-----------------------------"
check_dir "static"
check_dir "static/css"
check_dir "static/js"
check_dir "static/js/translations"
check_dir "pages"
echo ""

echo "3. Checking Translation Files"
echo "---------------------------"
check_file "static/js/translations/pl.js"
check_file "static/js/translations/en.js"
check_file "static/js/translations/ru.js"
check_file "static/js/translations/uk.js"
echo ""

echo "4. Checking Page Files"
echo "--------------------"
check_file "pages/index.html"
check_file "pages/about.html"
check_file "pages/services.html"
check_file "pages/team.html"
check_file "pages/gallery.html"
check_file "pages/contact.html"
echo ""

echo "5. Checking Core Assets"
echo "---------------------"
check_file "static/css/styles.css"
check_file "static/js/main.js"
echo ""

echo "6. Checking Translation Keys"
echo "--------------------------"

# Check for email translations in Russian
if grep -q '"email": "Электронная почта"' static/js/translations/ru.js; then
    echo -e "${GREEN}✓${NC} Russian 'email' translation present"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} Russian 'email' translation MISSING"
    ((FAILED++))
fi

# Check for email translations in Ukrainian
if grep -q '"email": "Електронна пошта"' static/js/translations/uk.js; then
    echo -e "${GREEN}✓${NC} Ukrainian 'email' translation present"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} Ukrainian 'email' translation MISSING"
    ((FAILED++))
fi

# Check for team description keys
if grep -q 'team\..*\.desc' static/js/translations/pl.js; then
    echo -e "${GREEN}✓${NC} Team description translation keys present"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} Team description translation keys MISSING"
    ((FAILED++))
fi

echo ""

echo "7. JavaScript Syntax Check"
echo "------------------------"

# Check if node is available
if command -v node &> /dev/null; then
    for file in static/js/translations/*.js static/js/main.js; do
        if node -c "$file" 2>/dev/null; then
            echo -e "${GREEN}✓${NC} $file syntax OK"
            ((PASSED++))
        else
            echo -e "${RED}✗${NC} $file has syntax errors"
            ((FAILED++))
        fi
    done
else
    echo -e "${YELLOW}⚠${NC} Node.js not found, skipping syntax check"
fi

echo ""

echo "8. Checking for Development Files"
echo "--------------------------------"

# These files should NOT be deployed
if [ ! -f "serve.py" ] || grep -q "serve.py" .gitignore; then
    echo -e "${GREEN}✓${NC} serve.py excluded from deployment"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠${NC} serve.py might be deployed (check .gitignore)"
fi

if [ ! -d "templates" ] || grep -q "templates/" .gitignore; then
    echo -e "${GREEN}✓${NC} templates/ excluded from deployment"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠${NC} templates/ might be deployed (check .gitignore)"
fi

echo ""

echo "=========================================="
echo -e "${GREEN}✓ Passed:${NC} $PASSED"
if [ $FAILED -gt 0 ]; then
    echo -e "${RED}✗ Failed:${NC} $FAILED"
fi
echo "=========================================="

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! Ready for deployment.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'Initial deployment'"
    echo "3. git push origin main"
    echo "4. Enable GitHub Pages in repository settings"
    echo ""
    echo "See DEPLOYMENT.md for detailed instructions."
    exit 0
else
    echo -e "${RED}❌ Some checks failed. Please fix the issues above.${NC}"
    exit 1
fi
