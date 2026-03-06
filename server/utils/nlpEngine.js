

const natural = require('natural');
const compromise = require('compromise');

// Tokenizer and stemmer
// const tokenizer = new natural.WordTokenizer();
// const stemmer = natural.PorterStemmer;

// Intent patterns with keywords
const intentPatterns = {
    // Counting/Statistics intents
    COUNT_EMPLOYEES: {
        keywords: [
            // Question starters
            'how many', 'count', 'number of', 'total', 'how much',
            'what is the number of', 'what\'s the count of', 'tell me how many',
            'do you know how many', 'can you tell me how many',
            'i want to know how many', 'i need to know how many',

            // Variations
            'what is the total', 'what\'s the total', 'give me the count',
            'show me the number', 'display the count', 'get me the count'
        ],

        entities: [
            // People terms
            'employee', 'employees', 'staff', 'people', 'person', 'persons',
            'worker', 'workers', 'personnel', 'human resources', 'hr',
            'workforce', 'manpower', 'talent', 'team member', 'team members',

            // Variations with articles
            'the employees', 'the staff', 'the people', 'the workers',
            'all employees', 'all staff', 'all people', 'total employees',
            'total staff', 'total people',

            // Informal terms
            'folks', 'team', 'guys', 'everyone', 'everybody'
        ],

        tool: 'get_employee_stats'
    },

    COUNT_PROFESSORS: {
        keywords: [
            // Question starters
            'how many', 'count', 'number of', 'total', 'how much',
            'what is the number of', 'what\'s the count of', 'tell me how many',
            'do you know how many', 'can you tell me how many',
            'i want to know how many', 'i need to know how many',

            // Academic-specific starters
            'how many academic', 'what is the academic', 'total academic',
            'how many faculty', 'what is the faculty', 'total faculty',

            // Position-specific
            'how many professors', 'how many lecturers', 'professor count',
            'lecturer count', 'faculty count', 'academic staff count'
        ],

        entities: [
            // Professor variations
            'professor', 'professors', 'prof', 'profs',

            // Lecturer variations
            'lecturer', 'lecturers', 'instructor', 'instructors',

            // Specific positions
            'assistant professor', 'assistant professors',
            'associate professor', 'associate professors',
            'full professor', 'full professors',
            'visiting professor', 'visiting professors',
            'adjunct professor', 'adjunct professors',
            'emeritus professor', 'emeritus professors',

            // Academic terms
            'academic', 'academics', 'academic staff',
            'faculty', 'faculty member', 'faculty members',
            'teaching staff', 'teaching faculty',
            'academic personnel', 'academic workforce',

            // Rank variations
            'assistant prof', 'associate prof', 'full prof',
            'asst professor', 'asst prof', 'assoc professor', 'assoc prof',

            // Department-specific context
            'professors in', 'lecturers in', 'faculty in',
            'academic staff in', 'teaching staff in',

            // Collective terms
            'professoriate', 'academicians', 'scholars',
            'researchers', 'research staff'
        ],

        tool: 'get_academic_positions'
    },

    // =============================================
    // NEW INTENT: Specific school information
    // =============================================
    SCHOOL_INFO: {
        keywords: [
            // General info starters
            'tell me about',
            'information about',
            'details about',
            'describe',
            'about',
            'what is',
            'what\'s',
            'give me information on',
            'give me details on',
            'i want to know about',
            'tell me more about',
            'can you tell me about',
            'do you know about',

            // With school specified
            'tell me about the',
            'information on the',
            'describe the',
            'about {school}'
        ],

        entities: [
            'school',
            'college',
            'faculty',
            'institution'
        ],

        priority: 3,

        tool: 'get_school_by_name'
    },

    // Administrative staff count
    COUNT_ADMIN: {
        keywords: [
            'how many', 'count', 'number of', 'total', 'how much',
            'what is the number of', 'what\'s the count of', 'tell me how many',
            'do you know how many', 'can you tell me how many',
            'i want to know how many', 'i need to know how many',

            // Admin-specific starters
            'how many administrative', 'what is the administrative', 'total administrative',
            'how many support', 'what is the support', 'total support',
            'administrative count', 'support staff count', 'non-academic count'
        ],

        entities: [
            // Administrative positions
            'technician', 'technicians', 'tech', 'techs',
            'cleaner', 'cleaners', 'janitor', 'janitors', 'custodian', 'custodians',
            'receptionist', 'receptionists', 'front desk', 'secretary', 'secretaries',
            'recruiter', 'recruiters', 'hr', 'human resources',

            // Admin staff variations
            'administrative', 'admin', 'admins', 'administrator', 'administrators',
            'admin staff', 'administrative staff', 'administrative personnel',
            'support staff', 'support personnel', 'support team',
            'non-academic', 'non-academic staff', 'non-teaching staff',

            // Specific roles
            'office staff', 'clerical staff', 'clerical', 'clerk', 'clerks',
            'coordinator', 'coordinators', 'assistant', 'assistants',
            'manager', 'managers', 'supervisor', 'supervisors',
            'finance staff', 'accounting staff', 'it staff', 'technical staff',

            // Collective terms
            'back office', 'front office', 'operations staff',
            'administration', 'management', 'support services'
        ],

        tool: 'get_administrative_positions'
    },

    // International vs Local employees
    COUNT_INTERNATIONAL: {
        keywords: [
            'how many', 'count', 'number of', 'total', 'how much',
            'what is the number of', 'what\'s the count of', 'tell me how many',
            'do you know how many', 'can you tell me how many',
            'i want to know how many', 'i need to know how many',

            // Comparison starters
            'how many international', 'how many foreign', 'how many local',
            'what is the international', 'what is the local',
            'breakdown of', 'split between', 'compared to',
            'international vs local', 'local vs international'
        ],

        entities: [
            // International terms
            'international', 'internationally', 'expat', 'expats',
            'foreign', 'foreigner', 'foreigners', 'overseas',
            'abroad', 'from abroad', 'non-resident', 'non residents',

            // Local terms
            'local', 'locals', 'domestic', 'hometown', 'home country',
            'resident', 'residents', 'national', 'nationals',

            // Mixed terms
            'immigrant', 'immigrants', 'visa', 'work permit',
            'relocated', 'relocation', 'from overseas',

            // Comparison terms
            'versus', 'vs', 'compared to', 'against',
            'proportion', 'percentage', 'ratio', 'demographics'
        ],

        tool: 'get_local_vs_international'
    },

    COUNT_EMP_BY_DEP: {
        keywords: [
            // Basic count queries
            'how many', 'count', 'number of', 'total',
            'what is the number', 'what\'s the count',

            // People terms - combined with department context
            'people in', 'employees in', 'staff in', 'workers in',
            'people at', 'employees at', 'staff at', 'workers at',
            'people working in', 'employees working in',
            'people work in', 'employees work in',
            'people are at', 'employees are at',
            'people are in', 'employees are in',

            // Department-specific starters
            'how many people in', 'how many employees in',
            'how many staff in', 'how many workers in',
            'how many people at', 'how many employees at',
            'how many staff at', 'how many workers at',
            'how many people work in', 'how many employees work in',
            'how many people are in', 'how many employees are in',
            'how many people are at', 'how many employees are at',

            // "Does the X department have" pattern
            'how many people does the', 'how many employees does the',
            'how many staff does the', 'how many workers does the',
            'does the', 'do the',

            // "In the X department" pattern
            'in the', 'at the', 'for the',

            // Question variations
            'can you tell me how many', 'do you know how many',
            'i want to know how many', 'i need to know how many',
            'tell me how many', 'show me how many',

            // Punctuation-tolerant patterns (will be handled in regex)
            'how many people are at',
            'how many people are in'
        ],

        entities: [
            'department', 'departments', 'dept', 'depts',
            'people', 'employees', 'staff', 'workers', 'personnel',
            'faculty', 'members', 'team'
        ],

        // Higher priority when department is mentioned
        priority: 2,

        tool: 'get_employees_by_department'
    },

    // =============================================
    // NEW INTENT: Specific department information
    // =============================================
    DEPARTMENT_INFO: {
        keywords: [
            // Tell me about specific department
            'tell me about', 'information about', 'details about',
            'what is', 'what\'s', 'describe', 'about',
            'give me information on', 'give me details on',
            'i want to know about', 'tell me more about',
            'can you tell me about', 'do you know about',

            // With department specified
            'tell me about the', 'information on the',
            'what is the', 'describe the',
            'tell me about {department}',  // Will be replaced in matching
            'about {department} department'
        ],

        entities: [
            'department', 'departments', 'dept',
            // No hardcoded department names - will be extracted dynamically
        ],

        // Higher priority than LIST_DEPARTMENTS when a specific department is mentioned
        priority: 3,

        tool: 'get_department_by_name'
    },

    // List schools
    LIST_SCHOOLS: {
        keywords: [
            'list', 'show', 'display', 'what are', 'tell me', 'give me',
            'show me', 'can you show', 'can you list', 'please list',
            'i want to see', 'i need to see', 'show all', 'list all',
            'enumerate', 'what schools', 'which schools',
            'name the schools', 'names of schools', 'school names',
            'show me the schools', 'tell me the schools', 'display schools', 'tell me about'
        ],

        entities: [
            'school', 'schools', 'faculty', 'faculties',
            'institution', 'institutions', 'college', 'colleges',
            'academic unit', 'academic units', 'academic division', 'academic divisions',
            'department groups', 'educational units',

            // With articles
            'the schools', 'all schools', 'every school',
            'available schools', 'existing schools', 'different schools',
            'list of schools', 'school list'
        ],

        tool: 'get_schools'
    },

    // List departments
    LIST_DEPARTMENTS: {
        keywords: [
            'list', 'show', 'display', 'what are', 'tell me', 'give me',
            'show me', 'can you show', 'can you list', 'please list',
            'i want to see', 'i need to see', 'show all', 'list all',
            'enumerate', 'what departments', 'which departments',
            'name the departments', 'names of departments', 'department names',
            'show me the departments', 'tell me the departments', 'tell me about'
        ],

        entities: [
            'department', 'departments', 'unit', 'units',
            'division', 'divisions', 'section', 'sections',
            'academic department', 'academic departments',

            // With articles
            'the departments', 'all departments', 'every department',
            'available departments', 'existing departments',
            'list of departments', 'department list',

            // School-specific
            'departments in', 'departments under', 'departments of'
        ],

        tool: 'get_departments'
    },

    // Find employee
    FIND_EMPLOYEE: {
        keywords: [
            'find', 'search', 'look for', 'looking for',
            'who is', 'where is', 'tell me about',
            'can you find', 'can you search', 'help me find',
            'i need to find', 'i want to find', 'i\'m looking for',
            'information about', 'details about', 'information on',

            // Name-specific starters
            'employee named', 'person named', 'staff named',
            'called', 'by the name', 'with name',

            // Contact starters
            'how to contact', 'how do i contact', 'get in touch with',
            'email', 'phone', 'contact'
        ],

        entities: [
            'employee', 'employees', 'staff', 'staff member', 'staff members',
            'person', 'people', 'individual', 'individuals',
            'worker', 'workers', 'personnel',
            'faculty member', 'faculty members', 'professor', 'lecturer',

            // With articles
            'the employee', 'the staff', 'the person',
            'an employee', 'a staff member', 'someone',

            // Contact-related
            'email address', 'phone number', 'contact information',
            'details', 'profile', 'information'
        ],

        // Higher priority when a name is detected
        priority: 2,

        tool: 'search_employees'
    },

    // Salary information
    SALARY_INFO: {
        keywords: [
            'salary', 'pay', 'compensation', 'wage', 'wages',
            'earnings', 'income', 'remuneration', 'stipend',
            'how much does', 'how much do', 'what does', 'what do',

            // Average-related
            'average', 'mean', 'median', 'typical', 'standard',
            'minimum', 'minimum wage', 'max', 'maximum', 'highest', 'lowest',
            'range', 'salary range', 'pay range', 'bracket', 'brackets',

            // Statistics
            'statistics', 'stats', 'data', 'figures', 'numbers',
            'how much', 'what do', 'what does', 'what is the salary',
            'what are the salaries', 'tell me the salary',

            // Questions
            'how much do', 'how much does', 'what\'s the pay',
            'what is the average', 'average salary for',
            'salary information', 'pay information',

            // Person-specific
            'what is the salary of', "what's the salary of",
            'how much does', 'how much is', 'salary for'
        ],

        entities: [
            'salary', 'salaries', 'pay', 'wage', 'wages',
            'compensation', 'compensation package',
            'base salary', 'base pay', 'basic salary',
            'monthly salary', 'annual salary', 'yearly salary',
            'hourly wage', 'hourly rate', 'per hour',

            // Position-specific
            'professor salary', 'lecturer salary', 'admin salary',
            'academic salary', 'staff salary',

            // Department-specific
            'salary in', 'pay in', 'compensation in',

            // Statistics terms
            'average', 'mean', 'median', 'minimum', 'maximum',
            'highest paid', 'lowest paid', 'range', 'distribution'
        ],

        // Higher priority when salary keywords are present
        priority: 2,

        tool: 'get_salary_stats'
    },

    // Employee status
    EMPLOYEE_STATUS: {
        keywords: [
            'who is', 'list', 'show', 'display',
            'who are', 'tell me who', 'show me who',
            'find people who are', 'find employees who are',
            'employees with status', 'staff with status',

            // Status-specific starters
            'who is on leave', 'who are on leave',
            'who is terminated', 'who are terminated',
            'who is retired', 'who are retired',
            'who is active', 'who are active'
        ],

        entities: [
            // Leave status
            'on leave', 'leave', 'vacation', 'on vacation',
            'maternity leave', 'paternity leave', 'sick leave',
            'medical leave', 'personal leave', 'leave of absence',

            // Termination status
            'terminated', 'fired', 'let go', 'laid off',
            'no longer employed', 'not working here',

            // Retirement status
            'retired', 'retirement', 'pension', 'retiree',

            // Active status
            'active', 'working', 'employed', 'current',
            'currently working', 'currently employed',

            // Combined
            'status', 'employment status', 'work status',
            'inactive', 'not active', 'not working'
        ],

        tool: 'get_employees_by_status'
    },

    // How to create records
    HOW_TO_CREATE: {
        keywords: [
            'how to', 'how do i', 'how can i', 'how would i',
            'steps to', 'process to', 'way to', 'method to',
            'what is the process', 'what are the steps',
            'guide for', 'tutorial on', 'instructions for',

            // Action verbs
            'create', 'add', 'register', 'set up', 'make',
            'insert', 'enter', 'input', 'record',
            'new employee', 'new school', 'new department',

            // Question forms
            'can i create', 'can i add', 'is it possible to',
            'where do i', 'where can i', 'what do i need to'
        ],

        entities: [
            'employee', 'employees', 'staff', 'staff member',
            'school', 'schools', 'college', 'colleges',
            'department', 'departments', 'unit', 'units',

            // Specific actions
            'hire', 'hire new', 'onboard', 'onboarding',
            'add new employee', 'register employee',
            'create new school', 'add new department',

            // With articles
            'an employee', 'a new employee', 'a staff member',
            'a school', 'a new school', 'a department', 'a new department'
        ],

        tool: 'provide_instructions'
    }
};

// Entity extraction patterns (keep your existing entityPatterns)
const entityPatterns = {
    // School names
    schools: {
        patterns: [
            // Pattern 1: "School of [Name]" - captures anything after "school of"
            // Examples: "School of Engineering", "School of Medicine", "School of Arts and Sciences"
            /school of ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 2: "[Name] School" - captures anything before "school"
            // Examples: "Engineering School", "Medical School", "Business School"
            /([a-zA-Z\s]+?)\s+school(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 3: "the [Name] School" - captures after "the" and before "school"
            // Examples: "the Engineering School", "the Medical School"
            /(?:the\s+)?([a-zA-Z\s]+?)\s+school(?!\s+of)/gi,

            // Pattern 4: "in the [Name] school" - captures after "in the" and before "school"
            // Examples: "in the Engineering school", "in the Business school"
            /in (?:the )?([a-zA-Z\s]+?)\s+school/gi,

            // Pattern 5: "at [Name] school" - captures after "at" and before "school"
            // Examples: "at Engineering school", "at Medical school"
            /at (?:the )?([a-zA-Z\s]+?)\s+school/gi,

            // Pattern 6: "[Name] College" - captures anything before "college"
            // Examples: "Engineering College", "Medical College", "Liberal Arts College"
            /([a-zA-Z\s]+?)\s+college(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 7: "College of [Name]" - captures anything after "college of"
            // Examples: "College of Engineering", "College of Medicine"
            /college of ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 8: "Faculty of [Name]" - for institutions that use "Faculty"
            // Examples: "Faculty of Science", "Faculty of Arts"
            /faculty of ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 9: "[Name] Faculty" - captures anything before "faculty"
            // Examples: "Science Faculty", "Arts Faculty"
            /([a-zA-Z\s]+?)\s+faculty(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 10: Generic fallback - look for capitalized words/phrases that might be school names
            // This will match things like "School of Engineering and Applied Science"
            /(?:school|college|faculty)\s+of\s+([a-zA-Z\s]+)(?:\s+(?:and|&|\||with))?(?:\s+[a-zA-Z]+)*/gi,

            // Pattern 11: For queries like "tell me about the engineering school"
            /(?:about|regarding|concerning)\s+(?:the\s+)?([a-zA-Z\s]+?)\s+(?:school|college|faculty)/gi,

            // Pattern 12: For queries like "how many people in the business school"
            /(?:in|at|for)\s+(?:the\s+)?([a-zA-Z\s]+?)\s+(?:school|college|faculty)/gi
        ],

        // Post-processing function to clean up extracted names
        postProcess: function (extractedName) {
            if (!extractedName) return null;

            // Clean up the extracted name
            let clean = extractedName
                .trim()
                .replace(/\s+/g, ' ')                    // Normalize spaces
                .replace(/\b(the|a|an|of|and|&)\b/gi, '') // Remove common words
                .replace(/\s+$/g, '')                     // Remove trailing spaces
                .replace(/^[,\s]+|[,\s]+$/g, '')          // Remove leading/trailing commas
                .trim();

            // If after cleaning it's too short, return null
            if (clean.length < 3) return null;

            return clean;
        }
    },

    // Department names - fully dynamic
    departments: {
        patterns: [
            // Pattern 1: "Department of [Name]" - captures anything after "department of"
            // Examples: "Department of Computer Science", "Department of Economics", "Department of Psychology"
            /department of ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,|and))/gi,

            // Pattern 2: "[Name] Department" - captures anything before "department"
            // Examples: "Computer Science Department", "Economics Department", "Physics Department"
            /([a-zA-Z\s]+?)\s+department(?:\s+(?:has|is|with|that|in|at|$|\.|,|and))/gi,

            // Pattern 3: "the [Name] Department" - captures after "the" and before "department"
            // Examples: "the Computer Science Department", "the Economics Department"
            /(?:the\s+)?([a-zA-Z\s]+?)\s+department(?!\s+of)/gi,

            // Pattern 4: "in the [Name] department" - captures after "in the" and before "department"
            // Examples: "in the Computer Science department", "in the Physics department"
            /in (?:the )?([a-zA-Z\s]+?)\s+department/gi,

            // Pattern 5: "at [Name] department" - captures after "at" and before "department"
            // Examples: "at Computer Science department", "at Economics department"
            /at (?:the )?([a-zA-Z\s]+?)\s+department/gi,

            // Pattern 6: "employees in [Name]" - when context suggests it's a department
            // Examples: "employees in Computer Science", "staff in Economics"
            /employees (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$|\.|,))/gi,

            // Pattern 7: "how many in [Name]" - when context suggests it's a department
            // Examples: "how many in Computer Science", "how many in Economics"
            /how many (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$|\.|,))/gi,

            // Pattern 8: "how many employees does [Name] have" - captures department name
            // Examples: "how many employees does Computer Science have", "how many staff does Economics have"
            /how many (?:employees|people|staff) does (?:the )?([a-zA-Z\s]+?)\s+(?:department|have|has)/gi,

            // Pattern 9: "how many employees does the [Name] department have" - specific pattern for your query
            // Examples: "how many employees does the Philosophy department have"
            /how many (?:employees|people|staff) does (?:the )?([a-zA-Z\s]+?)\s+department/gi,

            // Pattern 10: "[Name] Dept" - abbreviated form
            // Examples: "CS Dept", "Econ Dept", "Physics Dept"
            /([a-zA-Z\s]+?)\s+dept(?:artment)?/gi,

            // Pattern 11: "Division of [Name]" - some places use division instead of department
            // Examples: "Division of Humanities", "Division of Social Sciences"
            /division of ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 12: "Program in [Name]" - for academic programs that function like departments
            // Examples: "Program in Computer Science", "Program in Neuroscience"
            /program (?:in|of) ([a-zA-Z\s]+?)(?:\s+(?:has|is|with|that|in|at|$|\.|,))/gi,

            // Pattern 13: For queries about specific fields that might be departments
            // Examples: "tell me about computer science", "what about economics"
            /(?:about|regarding|concerning)\s+(?:the\s+)?([a-zA-Z\s]+?)(?:\s+(?:department|$))/gi,

            // Pattern 14: Generic fallback - look for capitalized phrases followed by context words
            // This captures things like "Computer Science" when followed by common department contexts
            /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)(?:\s+(?:department|faculty|staff|people|employees|has|have|is))/gi
        ],

        // Pattern 15: For extracting from queries with "what about" follow-ups
        // Examples: "what about history", "and the physics department"
        followUpPatterns: [
            /what about (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/gi,
            /and (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/gi,
            /how about (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/gi,
            /tell me about (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/gi
        ],

        // Post-processing function to clean up extracted names
        postProcess: function (extractedName) {
            if (!extractedName) return null;

            // Clean up the extracted name
            let clean = extractedName
                .trim()
                .replace(/\s+/g, ' ')                    // Normalize spaces
                .replace(/\b(the|a|an|of|and|&|for|in|at)\b/gi, '') // Remove common words
                .replace(/\b(department|dept|division|program)\b/gi, '') // Remove department indicators
                .replace(/\s+$/g, '')                     // Remove trailing spaces
                .replace(/^[,\s]+|[,\s]+$/g, '')          // Remove leading/trailing commas
                .replace(/[?!.,;:]$/, '')                  // Remove trailing punctuation
                .trim();

            // Handle special cases like "Computer Science" vs "computer science"
            // Preserve proper capitalization for display
            if (clean.length > 0) {
                // Capitalize first letter of each word for consistent display
                clean = clean.split(' ').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(' ');
            }

            // If after cleaning it's too short, return null
            if (clean.length < 2) return null;

            // Check if it's a common word that shouldn't be a department name
            const commonWords = ['the', 'this', 'that', 'what', 'who', 'where', 'when', 'why', 'how'];
            if (commonWords.includes(clean.toLowerCase())) return null;

            return clean;
        },

        // Helper to determine if text contains department indicators
        hasDepartmentIndicators: function (text) {
            const indicators = [
                'department', 'dept', 'division', 'program',
                'faculty of', 'school of', 'in the', 'at the'
            ];
            const lowerText = text.toLowerCase();
            return indicators.some(indicator => lowerText.includes(indicator));
        }
    },

    // Positions
    positions: {
        academic: ['professor', 'lecturer', 'assistant professor', 'associate professor'],
        administrative: ['technician', 'cleaner', 'receptionist', 'recruiter']
    },

    // Status
    status: {
        patterns: ['active', 'on leave', 'terminated', 'retired'],
        map: {
            'active': 'ACTIVE',
            'on leave': 'ON_LEAVE',
            'leave': 'ON_LEAVE',
            'terminated': 'TERMINATED',
            'fired': 'TERMINATED',
            'retired': 'RETIRED'
        }
    },

    // Employee types
    employeeType: {
        academic: ['academic', 'professor', 'lecturer', 'faculty', 'teacher'],
        administrative: ['administrative', 'admin', 'support', 'staff']
    }
};

// Extract entities from text
function extractEntities(text) {
    const entities = {
        schoolName: null,
        departmentName: null,
        position: null,
        status: null,
        employeeType: null,
        personName: null,
        isLocal: null,
        countType: null,
        queryType: null,
    };

    const lowerText = text.toLowerCase();

    // =============================================
    // SPECIAL EXTRACTION FOR "tell me about X department"
    // =============================================
    if (lowerText.includes('tell me about') && lowerText.includes('department')) {
        const match = text.match(/tell me about\s+(?:the\s+)?([a-zA-Z\s]+?)\s+department/i);
        if (match && match[1]) {
            let deptName = match[1].trim()
                .replace(/\s+/g, ' ')
                .replace(/\b(the|a|an)\b/gi, '')
                .replace(/\s+$/g, '')
                .replace(/[?!.,;:]$/, '')
                .trim();

            if (deptName.length > 2) {
                deptName = deptName.split(' ').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(' ');

                entities.departmentName = deptName;
                entities.queryType = 'specific_department';
                console.log(`✅ Extracted specific department: "${deptName}"`);
            }
        }
    }

    // Extract school name (keep your existing code)
    for (const pattern of entityPatterns.schools.patterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            entities.schoolName = entityPatterns.schools.postProcess(match[1]);
            break;
        }
    }

    // =============================================
    // SPECIAL EXTRACTION FOR "tell me about School of X"
    // =============================================
    if (lowerText.includes('tell me about') &&
        (lowerText.includes('school') || lowerText.includes('college'))) {

        const schoolMatch = text.match(/(?:school|college|faculty)\s+of\s+([a-zA-Z\s]+)/i);

        if (schoolMatch && schoolMatch[1]) {
            let schoolName = schoolMatch[1]
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/[?!.,;:]$/, '')
                .trim();

            schoolName = schoolName.split(' ').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ');

            entities.schoolName = schoolName;
            entities.queryType = 'specific_school';

            console.log(`✅ Extracted specific school: "${schoolName}"`);
        }
    }

    // =============================================
    // COUNT_EMP_BY_DEP - Extract department name for count queries
    // =============================================

    // First, check if this is a count by department query (more flexible)
    const isCountByDepQuery = (
        // Check for count keywords
        (lowerText.includes('how many') ||
            lowerText.includes('count') ||
            lowerText.includes('number of') ||
            lowerText.includes('total')) &&
        // Check for department indicators
        (lowerText.includes('department') ||
            lowerText.includes('dept') ||
            lowerText.includes('in the') ||
            lowerText.includes('at the') ||
            lowerText.includes('are at') ||
            lowerText.includes('are in'))
    );

    if (isCountByDepQuery) {
        entities.queryType = 'count';
        entities.countType = 'by_department';

        // Expanded patterns for count queries
        const countDeptPatterns = [
            // Pattern: "how many people in [Department] department"
            { regex: /how many (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)\s+department/i, group: 1 },

            // Pattern: "how many people at [Department] department"
            { regex: /how many (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)\s+department/i, group: 1 },

            // Pattern: "how many people in [Department]" (no "department" word)
            { regex: /how many (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$|\.))/i, group: 1 },

            // Pattern: "how many people are in [Department]"
            { regex: /how many (?:people|employees|staff) (?:are)? (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$|\.))/i, group: 1 },

            // Pattern: "how many people are at [Department]"
            { regex: /how many (?:people|employees|staff) (?:are)? at (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$|\.))/i, group: 1 },

            // Pattern: "how many does the [Department] department have"
            { regex: /how many (?:people|employees|staff)? does (?:the )?([a-zA-Z\s]+?)\s+department/i, group: 1 },

            // Pattern: "people in [Department] department"
            { regex: /(?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)\s+department/i, group: 1 },

            // Pattern: "[Department] department count"
            { regex: /([a-zA-Z\s]+?)\s+department (?:count|size|employees|staff)/i, group: 1 },

            // Pattern: "count of employees in [Department]"
            { regex: /count of (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+department)?/i, group: 1 },

            // Pattern: "number of people in [Department]"
            { regex: /number of (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+department)?/i, group: 1 },

            // Pattern: "total employees in [Department]"
            { regex: /total (?:people|employees|staff) (?:in|at|for) (?:the )?([a-zA-Z\s]+?)(?:\s+department)?/i, group: 1 },

            // Pattern: "what about [Department]" (for follow-ups)
            { regex: /what about (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/i, group: 1 },

            // Pattern: "and [Department]" (for follow-ups)
            { regex: /and (?:the )?([a-zA-Z\s]+?)(?:\s+(?:department|$))/i, group: 1 },

            // Pattern: Just "physics department" at the end of a question
            { regex: /([a-zA-Z\s]+?)\s+department(?:\s+|$)/i, group: 1 }
        ];

        for (const { regex, group } of countDeptPatterns) {
            const match = text.match(regex);
            if (match && match[group]) {
                let deptName = match[group].trim()
                    .replace(/\s+/g, ' ')
                    .replace(/\b(the|a|an|has|have|does|do|of|in|at|for|are|is)\b/gi, '')
                    .replace(/\s+$/g, '')
                    .replace(/[?!.,;:]$/, '')
                    .trim();

                // Make sure we don't capture words like "department" in the name
                deptName = deptName.replace(/\b(department|dept)\b/gi, '').trim();

                if (deptName.length > 2) {
                    deptName = deptName.split(' ').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    ).join(' ');

                    entities.departmentName = deptName;
                    console.log(`✅ COUNT_EMP_BY_DEP extracted department: "${deptName}"`);
                    break;
                }
            }
        }
    }

    // Generic department extraction (if not already extracted) - more aggressive
    if (!entities.departmentName && lowerText.includes('department')) {
        // Try to grab the word right before "department"
        const simpleMatch = text.match(/(\w+)\s+department/i);
        if (simpleMatch && simpleMatch[1]) {
            let deptName = simpleMatch[1].trim();
            deptName = deptName.charAt(0).toUpperCase() + deptName.slice(1).toLowerCase();
            if (deptName.length > 2 && !['The', 'This', 'That'].includes(deptName)) {
                entities.departmentName = deptName;
                console.log(`✅ Extracted department (simple): "${deptName}"`);
            }
        }
    }

    // Follow-up patterns
    if (!entities.departmentName && entityPatterns.departments.followUpPatterns) {
        for (const pattern of entityPatterns.departments.followUpPatterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                const deptName = entityPatterns.departments.postProcess(match[1]);
                if (deptName) {
                    entities.departmentName = deptName;
                    console.log(`✅ Extracted department (follow-up): "${deptName}"`);
                    break;
                }
            }
        }
    }

    // Extract status (keep your existing code)
    for (const [key, value] of Object.entries(entityPatterns.status.map)) {
        if (lowerText.includes(key)) {
            entities.status = value;
            break;
        }
    }

    // Extract employee type (keep your existing code)
    if (entityPatterns.employeeType.academic.some(word => lowerText.includes(word))) {
        entities.employeeType = 'ACADEMIC';
    } else if (entityPatterns.employeeType.administrative.some(word => lowerText.includes(word))) {
        entities.employeeType = 'ADMINISTRATIVE_STAFF';
    }

    // Extract local/international (keep your existing code)
    if (lowerText.includes('international') || lowerText.includes('foreign')) {
        entities.isLocal = false;
    } else if (lowerText.includes('local') || lowerText.includes('domestic')) {
        entities.isLocal = true;
    }


    // Special extraction for "salary of X" pattern
    if (lowerText.includes('salary') || lowerText.includes('pay')) {
        const salaryNamePatterns = [
            /salary of\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
            /salary for\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
            /how much does\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
            /what does\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+make/i,
            /what is\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)(?:'s)?\s+salary/i
        ];

        for (const pattern of salaryNamePatterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                const name = match[1].trim();
                if (name.length > 2) {
                    entities.personName = name;
                    entities.queryType = 'salary_for_person';
                    console.log(`✅ Extracted person for salary query: "${name}"`);
                    break;
                }
            }
        }
    }

    // Extract person name (for search) - improved version
    const namePatterns = [
        // Direct name queries
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)$/, // Just a name like "Clara Martin"

        // After common prefixes
        /(?:find|search|look for|who is|tell me about|about)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,

        // With apostrophe s
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)(?:'s)?\s+(?:email|phone|salary|position)/i,

        // Where is / what is
        /(?:where is|what is|how is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,

        // Information about
        /(?:information|details)\s+(?:about|on)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i
    ];

    for (const pattern of namePatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            const name = match[1].trim();
            // Verify it's likely a person's name (has capital letters, not common words)
            if (/[A-Z]/.test(name) &&
                !['The', 'This', 'That', 'What', 'Who', 'Where', 'When', 'How', 'Tell', 'Me', 'About', 'Department', 'School'].includes(name) &&
                name.length > 2) {
                entities.personName = name;
                console.log(`✅ Extracted person: "${entities.personName}"`);
                break;
            }
        }
    }

    // If still no person name, try compromise as fallback
    if (!entities.personName) {
        const doc = compromise(text);
        const people = doc.people().out('array');
        if (people.length > 0) {
            // Filter out common non-person words
            const filtered = people.filter(p =>
                !['The', 'This', 'That', 'What', 'Who', 'Where', 'When', 'How'].includes(p) &&
                p.length > 2
            );
            if (filtered.length > 0) {
                entities.personName = filtered[0];
                console.log(`✅ Extracted person (compromise): "${entities.personName}"`);
            }
        }
    }


    return entities;
}

// Detect intent from text
function detectIntent(text) {
    const lowerText = text.toLowerCase();

    // Initialize scoring
    let bestMatch = null;
    let bestScore = 0;

    // =============================================
    // Helper functions for detection
    // =============================================

    const hasAnyKeyword = (keywords) => {
        return keywords.some(keyword => lowerText.includes(keyword));
    };

    const countKeywordMatches = (keywords) => {
        return keywords.filter(keyword => lowerText.includes(keyword)).length;
    };

    // Extract potential name (simplified)
    const extractPotentialName = () => {

        // Match TWO capitalized words (likely a real person)
        const match = text.match(/\b([A-Z][a-z]+\s+[A-Z][a-z]+)\b/);

        if (!match) return null;

        const name = match[1].trim();

        // Ignore institutional phrases
        if (
            name.startsWith('School') ||
            name.startsWith('Department') ||
            name.startsWith('College') ||
            name.startsWith('Faculty')
        ) {
            return null;
        }

        return name;
    };

    // Check query types
    const isNameQuery = /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?$/.test(text.trim());
    const hasDepartmentWord = lowerText.includes('department') || lowerText.includes('dept');
    const hasSchoolWord = lowerText.includes('school') || lowerText.includes('college');
    const hasSalaryWord = lowerText.includes('salary') || lowerText.includes('pay') || lowerText.includes('compensation');
    const hasCountWord = lowerText.includes('how many') || lowerText.includes('count') || lowerText.includes('number of');
    const hasListWord = lowerText.includes('list') || lowerText.includes('show all') || lowerText.includes('what are');
    const hasPersonName = extractPotentialName() !== null;

    // =============================================
    // Score each intent
    // =============================================

    for (const [intentName, pattern] of Object.entries(intentPatterns)) {
        let score = 0;

        // Base score from keyword matches
        score += countKeywordMatches(pattern.keywords) * 3;

        // Entity matches
        score += countKeywordMatches(pattern.entities) * 2;

        // =========================================
        // Intent-specific boosts
        // =========================================

        switch (intentName) {
            case 'FIND_EMPLOYEE':
                if (isNameQuery) score += 50;
                else if (hasPersonName) score += 30;
                if (lowerText.includes('who is')) score += 15;
                if (lowerText.includes('tell me about') && hasPersonName) {
                    score += 25; // Boost for "tell me about" + person name
                    console.log('👤 "Tell me about" with person name detected');
                }
                if (lowerText.includes('tell me about') && !hasDepartmentWord && !hasSchoolWord) {
                    score += 10; // Additional boost if no department/school mentioned
                }
                break;

            case 'SALARY_INFO':
                if (hasSalaryWord) score += 25;
                if (hasPersonName && hasSalaryWord) score += 30;
                if (lowerText.includes('how much does')) score += 15;
                break;

            case 'COUNT_EMP_BY_DEP':
                if (hasCountWord && hasDepartmentWord) score += 25;
                if (lowerText.includes('people in') && hasDepartmentWord) score += 15;
                if (lowerText.includes('employees in') && hasDepartmentWord) score += 15;
                if (lowerText.includes('workers in') && hasDepartmentWord) score += 15;
                break;

            case 'SCHOOL_INFO':
                if (hasSchoolWord && lowerText.includes('tell me about')) score += 25;
                if (hasSchoolWord && lowerText.includes('information about')) score += 20;
                if (hasSchoolWord && !hasListWord) score += 15;

                // Penalize if person name detected
                if (hasPersonName && !hasSchoolWord) {
                    score -= 30;
                    console.log('⚠️ Person detected, penalizing SCHOOL_INFO');
                }
                break;

            case 'DEPARTMENT_INFO':
                if (hasDepartmentWord && lowerText.includes('tell me about')) score += 20;
                if (hasDepartmentWord && lowerText.includes('information about')) score += 15;
                if (hasDepartmentWord && !hasListWord) score += 10;
                if (hasDepartmentWord && !hasPersonName) score += 15
                // Penalize if it has a person name and no department word
                if (hasPersonName && !hasDepartmentWord) {
                    score -= 30; // Strong penalty
                    console.log('⚠️ Person name detected without department word, penalizing DEPARTMENT_INFO');
                }
                break;

            case 'LIST_DEPARTMENTS':
                if (hasListWord && hasDepartmentWord) score += 20;
                if (lowerText.includes('all departments')) score += 15;
                if (lowerText.includes('what departments') || lowerText.includes('what are the departments') || lowerText.includes('what departments are there')) score += 10;
                break;

            case 'LIST_SCHOOLS':
                if (hasListWord && hasSchoolWord) score += 20;
                if (lowerText.includes('all schools')) score += 15;
                if (lowerText.includes('what schools')) score += 10;
                break;

            case 'COUNT_EMPLOYEES':
                if (hasCountWord && !hasDepartmentWord && !hasSchoolWord) score += 20;
                if (lowerText.includes('total employees')) score += 15;
                break;

            case 'COUNT_PROFESSORS':
                if (hasCountWord && lowerText.includes('professor')) score += 25;
                if (lowerText.includes('academic staff')) score += 15;
                break;

            case 'COUNT_ADMIN':
                if (hasCountWord && (lowerText.includes('admin') || lowerText.includes('support staff'))) score += 25;
                break;

            case 'COUNT_INTERNATIONAL':
                if (hasCountWord && (lowerText.includes('international') || lowerText.includes('local'))) score += 25;
                break;

            case 'EMPLOYEE_STATUS':
                if (lowerText.includes('status') ||
                    lowerText.includes('on leave') ||
                    lowerText.includes('active') ||
                    lowerText.includes('terminated')) score += 20;
                break;

            case 'HOW_TO_CREATE':
                if (lowerText.includes('how to') || lowerText.includes('how do i')) score += 20;
                if (lowerText.includes('create') || lowerText.includes('add new')) score += 15;
                break;
        }

        // Apply priority multiplier
        if (pattern.priority) {
            score *= pattern.priority;
        }

        // Update best match
        if (score > bestScore) {
            bestScore = score;
            bestMatch = {
                intent: intentName,
                tool: pattern.tool,
                score,
                confidence: Math.min(score / 50, 1) // Normalize to 0-1
            };
        }
    }

    // Log the winner
    if (bestMatch) {
        console.log(`🎯 Intent: ${bestMatch.intent} (score: ${bestMatch.score}, confidence: ${bestMatch.confidence.toFixed(2)})`);
    }

    return bestMatch;
}

// Calculate similarity between two strings (for fuzzy matching)
function similarity(s1, s2) {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;

    if (longer.length === 0) return 1.0;

    const editDistance = natural.LevenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

// Main NLP processing function
function processQuery(text) {
    console.log(`\n📝 Processing: "${text}"`);

    // 1. Detect intent
    const intent = detectIntent(text);
    console.log(`🎯 Intent: ${intent?.intent} (score: ${intent?.score})`);

    if (!intent || intent.score === 0) {
        return {
            intent: 'UNKNOWN',
            tool: null,
            entities: {},
            confidence: 0
        };
    }

    // 2. Extract entities
    const entities = extractEntities(text);
    console.log(`🔍 Entities:`, entities);

    // 3. Return structured query plan
    return {
        intent: intent.intent,
        tool: intent.tool,
        entities,
        confidence: Math.min(intent.score / 15, 1), // Normalize score
        originalText: text
    };
}

module.exports = { processQuery, similarity };