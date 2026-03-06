const { Ollama } = require('ollama');

const ollama = new Ollama({ host: 'http://localhost:11434' });

class ResponseGenerator {
    constructor() {
        this.systemPrompt = `You are a friendly and helpful HR assistant for a university/organization. 
Your task is to take raw data from the database and turn it into natural, conversational responses.

Guidelines:
- Be concise but friendly (2-4 sentences max)
- Use natural language, not bullet points or markdown
- Highlight the most relevant information
- If it's a count, state it clearly
- If listing items, mention a few examples
- If no results found, apologize politely and tell a user to try make a different prompt
- Never mention that you're using data or tools
- Sound like a real person helping a colleague

IMPORTANT RULES:
- Use ONLY the provided data.
- Do NOT invent information.
- If departments array is present, list their names.
- If a field is missing, say it is not available.
- Never say something is missing if it exists in the data.

Examples:
User: "How many employees in the Philosophy department?"
Data: {"departmentName":"Philosophy","totalEmployees":5}
Response: "The Philosophy department has 5 employees. They're part of the School of Humanities."

User: "Tell me about John Smith"
Data: [{"name":"John Smith","email":"john.smith@uni.edu","department":"Computer Science","position":"Professor"}]
Response: "John Smith is a Professor in the Computer Science department. You can reach him at john.smith@uni.edu."

User: "List all schools"
Data: [{"name":"School of Engineering","employeeCount":45},{"name":"School of Medicine","employeeCount":38}]
Response: "We have several schools including the School of Engineering with 45 employees and the School of Medicine with 38 employees."

User: "Tell me about history department"
Data: {"name":"History","schoolName":"School of Humanities","employeeCount":2,"employees":[{"name":"Clara Martin","position":"Professor"}]}
Response: "The History department is part of the School of Humanities and has 2 faculty members, including Clara Martin who is a Professor there."`;
    }

    async generateResponse(data, queryPlan, originalQuery) {
        const { intent, tool } = queryPlan;

        // Handle different data types with specific prompts
        const prompt = this.buildPrompt(data, intent, tool, originalQuery);

        try {
            const response = await ollama.chat({
                model: 'llama3.2:3b',
                messages: [
                    { role: 'system', content: this.systemPrompt },
                    { role: 'user', content: prompt }
                ],
                options: {
                    temperature: 0.3,
                    num_predict: 300
                }
            });

            return response.message.content;
        } catch (error) {
            console.error('❌ Ollama response generation failed:', error);
            // Fallback to simple responses if Ollama fails
            return this.getFallbackResponse(data, intent, originalQuery);
        }
    }

    buildPrompt(data, intent, tool, originalQuery) {
        const dataStr = JSON.stringify(data, null, 2);

        // Customize prompt based on intent type
        let contextInfo = '';

        switch (intent) {
            case 'COUNT_EMPLOYEES':
                contextInfo = 'This is a query about total employee counts.';
                break;
            case 'COUNT_EMP_BY_DEP':
                contextInfo = 'This is a query about employees in a specific department.';
                break;
            case 'DEPARTMENT_INFO':
                contextInfo = 'This is a request for information about a specific department. Include the school it belongs to, number of employees, and mention a few employees if available.';
                break;
            case 'FIND_EMPLOYEE':
                contextInfo = 'This is a search for a specific person.';
                break;
            case 'LIST_SCHOOLS':
                contextInfo = 'This is a request to list all schools.';
                break;
            case 'LIST_DEPARTMENTS':
                contextInfo = 'This is a request to list all departments.';
                break;
            case 'SALARY_INFO':
                if (data.type === 'person_salary' && data.success) {
                    contextInfo = 'This is a query about a specific person\'s salary. The user is an admin and can see this information.';
                } else if (data.type === 'person_salary') {
                    contextInfo = 'This is a query about a specific person\'s salary. Salary information is confidential for non-admins.';
                } else {
                    contextInfo = 'This is a query about salary statistics.';
                }
                break;
            case 'EMPLOYEE_STATUS':
                contextInfo = 'This is a query about employee status (active/leave/terminated).';
                break;
            case 'HOW_TO_CREATE':
                contextInfo = 'This is a request for instructions on creating records.';
                break;
            default:
                contextInfo = 'This is a general query about HR information.';
        }

        return `User asked: "${originalQuery}"

Context: ${contextInfo}
Intent: ${intent}
Tool used: ${tool}

Here is the data retrieved from the database:
${dataStr}

Generate a natural, conversational response. Be helpful and friendly.`;
    }

    getFallbackResponse(data, intent, originalQuery) {
        // Simple fallback responses if Ollama is unavailable
        if (data.error) {
            return `I'm sorry, I couldn't find that information. ${data.error}`;
        }

        switch (intent) {
            case 'COUNT_EMPLOYEES':
                if (data.total) {
                    return `There are ${data.total} total employees in the organization.`;
                }
                break;

            case 'COUNT_EMP_BY_DEP':
                if (data.departmentName && data.totalEmployees !== undefined) {
                    return `The ${data.departmentName} department has ${data.totalEmployees} employees.`;
                }
                break;

            case 'DEPARTMENT_INFO':
                if (data.name) {
                    let response = `The ${data.name} department is part of the ${data.schoolName || 'university'}. `;
                    if (data.employeeCount || data.totalEmployees) {
                        const count = data.employeeCount || data.totalEmployees;
                        response += `It has ${count} employees. `;
                    }
                    if (data.employees && data.employees.length > 0) {
                        const names = data.employees.slice(0, 2).map(e => e.name).join(' and ');
                        response += `Current staff include ${names}`;
                        if (data.employees.length > 2) {
                            response += ` and ${data.employees.length - 2} others.`;
                        } else {
                            response += '.';
                        }
                    }
                    return response;
                }
                break;

            case 'FIND_EMPLOYEE':
                if (Array.isArray(data) && data.length > 0) {
                    const emp = data[0];
                    let response = `I found ${emp.name}. `;
                    if (emp.department) response += `They work in ${emp.department}. `;
                    if (emp.email) response += `Email: ${emp.email}. `;
                    if (emp.position) response += `They are a ${emp.position}. `;
                    return response;
                } else if (Array.isArray(data) && data.length === 0) {
                    return `I couldn't find anyone matching that name. Could you check the spelling?`;
                }
                break;

            case 'LIST_SCHOOLS':
                if (Array.isArray(data) && data.length > 0) {
                    const names = data.map(s => s.name).join(', ');
                    return `Our schools include: ${names}.`;
                }
                break;

            case 'LIST_DEPARTMENTS':
                if (Array.isArray(data) && data.length > 0) {
                    const names = data.map(d => d.name).join(', ');
                    return `The departments are: ${names}.`;
                }
                break;

            case 'SALARY_INFO':
                if (data.average) {
                    return `The average salary is ${data.average}. The range is from ${data.min} to ${data.max}.`;
                }
                break;
        }

        // Generic fallback
        return `I found the information you requested. Is there anything specific you'd like to know?`;
    }
}

module.exports = new ResponseGenerator();