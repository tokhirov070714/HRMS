const { executeTool } = require('./aiTools');
const responseGenerator = require('./responseGenerator'); // Make sure this path is correct

// Execute query based on NLP analysis
async function executeQuery(queryPlan, originalQuery) {
    const { tool, entities, intent } = queryPlan;

    console.log(`\n🔧 Executing: ${tool}`);
    console.log(`🎯 Intent: ${intent}`);

    try {
        let result;

        // Handle different tools with proper parameter extraction
        switch (tool) {
            case 'get_employee_stats':
                result = await handleEmployeeStats(entities);
                break;
            case 'get_employees_by_department':
                result = await handleEmployeesByDepartment(entities);
                break;
            case 'get_academic_positions':
                result = await handleAcademicPositions(entities);
                break;
            case 'get_administrative_positions':
                result = await handleAdministrativePositions(entities);
                break;
            case 'get_local_vs_international':
                result = await handleLocalVsInternational(entities);
                break;
            case 'get_schools':
                result = await executeTool('get_schools', {});
                break;
            case 'get_school_by_name':
                result = await handleSchoolByName(entities);
                break;
            case 'get_departments':
                result = await handleDepartments(entities);
                break;
            case 'search_employees':
                result = await handleSearchEmployees(entities);
                break;
            case 'get_salary_stats':
                result = await handleSalaryStats(entities);
                break;
            case 'get_employees_by_status':
                result = await handleEmployeesByStatus(entities);
                break;
            case 'get_department_by_name':  // Add this case
                result = await handleDepartmentByName(entities);
                break;
            case 'provide_instructions':
                result = handleInstructions(entities, originalQuery);
                break;
            default:
                throw new Error(`Unknown tool: ${tool}`);
        }

        // Generate natural language response using Ollama
        const naturalResponse = await responseGenerator.generateResponse(
            result,
            { intent, tool },
            originalQuery
        );

        return {
            success: true,
            data: result,
            response: naturalResponse,
            intent,
            tool
        };

    } catch (error) {
        console.error(`❌ Execution failed:`, error.message);

        // Generate a friendly error response
        const errorResponse = await responseGenerator.generateResponse(
            { error: error.message },
            { intent: 'ERROR', tool: null },
            originalQuery
        );

        return {
            success: false,
            error: error.message,
            response: errorResponse
        };
    }
}

// Handle specific department information
async function handleDepartmentByName(entities) {
    if (!entities.departmentName) {
        throw new Error('Please specify which department you want information about.');
    }

    console.log(`🔍 Getting department by name: "${entities.departmentName}"`);

    const result = await executeTool('get_department_by_name', {
        name: entities.departmentName
    });

    if (result.error) {
        throw new Error(result.error);
    }

    // Get employees in the department for more context
    console.log(`🔍 Getting employees for department: "${entities.departmentName}"`);
    const employees = await executeTool('get_employees_by_department', {
        name: entities.departmentName
    }).catch(err => {
        console.log('⚠️ Could not fetch employees:', err.message);
        return null;
    });

    return {
        ...result,
        employees: employees?.employees || [],
        totalEmployees: employees?.totalEmployees || result.employeeCount || 0
    };
}

// Handle employee statistics query
async function handleEmployeeStats(entities) {
    const params = {};

    // Get school ID if school name provided
    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) {
            params.schoolId = school.id;
        }
    }

    // Get department ID if department name provided
    if (entities.departmentName) {
        const dept = await executeTool('get_department_by_name', { name: entities.departmentName });
        if (dept && !dept.error && dept.id) {
            params.departmentId = dept.id;
        }
    }

    if (entities.status) params.status = entities.status;
    if (entities.employeeType) params.employeeType = entities.employeeType;
    if (entities.isLocal !== null && entities.isLocal !== undefined) params.isLocal = entities.isLocal;

    return await executeTool('get_employee_stats', params);
}

// Handle employees by department query
async function handleEmployeesByDepartment(entities) {
    if (!entities.departmentName) {
        throw new Error('Please specify which department you want to know about.');
    }

    return await executeTool('get_employees_by_department', {
        name: entities.departmentName
    });
}

// Handle academic positions query
async function handleAcademicPositions(entities) {
    const params = {};

    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    if (entities.departmentName) {
        const dept = await executeTool('get_department_by_name', { name: entities.departmentName });
        if (dept && !dept.error && dept.id) params.departmentId = dept.id;
    }

    return await executeTool('get_academic_positions', params);
}

// Handle administrative positions query
async function handleAdministrativePositions(entities) {
    const params = {};

    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    return await executeTool('get_administrative_positions', params);
}

// Handle local vs international query
async function handleLocalVsInternational(entities) {
    const params = {};

    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    return await executeTool('get_local_vs_international', params);
}

// Handle specific school information
async function handleSchoolByName(entities) {
    if (!entities.schoolName) {
        throw new Error('Please specify which school you want information about.');
    }

    console.log(`🔍 Getting school by name: "${entities.schoolName}"`);

    const result = await executeTool('get_school_by_name', {
        name: entities.schoolName
    });

    if (result.error) {
        throw new Error(result.error);
    }

    // Get departments for richer response
    console.log(`🔍 Getting departments for school: "${entities.schoolName}"`);
    const departments = await executeTool('get_departments', {
        schoolId: result.id
    }).catch(err => {
        console.log('⚠️ Could not fetch departments:', err.message);
        return null;
    });

    return {
        ...result,
        departmentNames: departments?.map(d => d.name) || [],
        totalDepartments: result.departmentCount || 0
    };
}

// Handle departments query
async function handleDepartments(entities) {
    const params = {};

    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    return await executeTool('get_departments', params);
}

// Handle employee search
async function handleSearchEmployees(entities) {
    if (!entities.personName) {
        throw new Error('Please tell me the name of the person you\'re looking for.');
    }

    return await executeTool('search_employees', { query: entities.personName });
}

// Handle salary statistics - modified to handle person-specific queries
async function handleSalaryStats(entities, originalQuery) {
    const params = {};

    // If it's a salary query for a specific person
    if (entities.personName && entities.queryType === 'salary_for_person') {
        // First search for the person
        const person = await executeTool('search_employees', {
            query: entities.personName
        });

        if (person && person.length > 0) {
            const employee = person[0];

            // Get full employee details including salary
            // You might need to create a new tool for this or enhance search_employees
            const employeeDetails = await executeTool('get_employee_by_name', {
                name: entities.personName
            }).catch(() => null);

            return {
                type: 'person_salary',
                person: employee,
                salary: employeeDetails?.baseSalary || 'Not available',
                success: true,
                message: `I found ${employee.name}'s salary information.`
            };
        } else {
            return {
                type: 'person_not_found',
                message: `I couldn't find ${entities.personName} in our employee database.`
            };
        }
    }

    // Regular salary stats query
    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    if (entities.departmentName) {
        const dept = await executeTool('get_department_by_name', { name: entities.departmentName });
        if (dept && !dept.error && dept.id) params.departmentId = dept.id;
    }

    if (entities.employeeType) params.employeeType = entities.employeeType;

    return await executeTool('get_salary_stats', params);
}

// Handle employees by status
async function handleEmployeesByStatus(entities) {
    if (!entities.status) {
        throw new Error('Please specify which status you want (active, on leave, terminated, retired).');
    }

    const params = { status: entities.status };

    if (entities.schoolName) {
        const school = await executeTool('get_school_by_name', { name: entities.schoolName });
        if (school && !school.error && school.id) params.schoolId = school.id;
    }

    return await executeTool('get_employees_by_status', params);
}

// Provide instructions for creating records
function handleInstructions(entities, originalQuery) {
    const text = originalQuery?.toLowerCase() || '';

    if (text.includes('employee') || text.includes('staff') || text.includes('hire')) {
        return {
            type: 'instruction',
            category: 'employee',
            steps: [
                'Navigate to /admin/employees/create',
                'Fill in Authentication section (username, password, role)',
                'Enter Personal Information (name, email, phone, address)',
                'Select Employment Details (type, status, school, department, position, salary)',
                'Add Emergency Contact information (optional)',
                'Click "Register Employee" button'
            ]
        };
    }

    if (text.includes('school') || text.includes('college')) {
        return {
            type: 'instruction',
            category: 'school',
            steps: [
                'Go to /admin/schools/create',
                'Enter school name and description',
                'Assign a school head from available administrators',
                'Choose a brand icon for the school',
                'Click "Register Institution" button'
            ]
        };
    }

    if (text.includes('department') || text.includes('dept')) {
        return {
            type: 'instruction',
            category: 'department',
            steps: [
                'Navigate to the schools page',
                'Select the parent school',
                'Click "Add Department"',
                'Enter department name and description',
                'Choose a department icon',
                'Click "Register Department" button'
            ]
        };
    }

    return {
        type: 'instruction',
        category: 'general',
        message: 'I can help you create employees, schools, or departments. Which one would you like instructions for?'
    };
}

module.exports = { executeQuery };