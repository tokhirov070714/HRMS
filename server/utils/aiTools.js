const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const tools = {
    // 1. Get employee statistics
    async get_employee_stats(params = {}) {
        const where = {};

        if (params.status) where.status = params.status;
        if (params.employeeType) where.employeeType = params.employeeType;
        if (params.schoolId) where.schoolId = params.schoolId;
        if (params.departmentId) where.departmentId = params.departmentId;
        if (params.isLocal !== undefined) where.isLocal = params.isLocal;

        const total = await prisma.user.count({ where });

        const byType = await prisma.user.groupBy({
            by: ['employeeType'],
            where,
            _count: true
        });

        const byStatus = await prisma.user.groupBy({
            by: ['status'],
            where,
            _count: true
        });

        return {
            total,
            byType: byType.map(t => ({ type: t.employeeType, count: t._count })),
            byStatus: byStatus.map(s => ({ status: s.status, count: s._count })),
            filters: params
        };
    },

    // 2. Get academic positions
    async get_academic_positions(params = {}) {
        const where = { employeeType: 'ACADEMIC' };
        if (params.schoolId) where.schoolId = params.schoolId;
        if (params.departmentId) where.departmentId = params.departmentId;

        const positions = await prisma.user.groupBy({
            by: ['academicPosition'],
            where,
            _count: true
        });

        return positions
            .filter(p => p.academicPosition)
            .map(p => ({
                position: p.academicPosition,
                count: p._count
            }));
    },

    // 3. Get administrative positions
    async get_administrative_positions(params = {}) {
        const where = { employeeType: 'ADMINISTRATIVE_STAFF' };
        if (params.schoolId) where.schoolId = params.schoolId;
        if (params.departmentId) where.departmentId = params.departmentId;

        const positions = await prisma.user.groupBy({
            by: ['administrativePosition'],
            where,
            _count: true
        });

        return positions
            .filter(p => p.administrativePosition)
            .map(p => ({
                position: p.administrativePosition,
                count: p._count
            }));
    },

    // 4. Get local vs international
    async get_local_vs_international(params = {}) {
        const where = {};
        if (params.schoolId) where.schoolId = params.schoolId;
        if (params.departmentId) where.departmentId = params.departmentId;

        const local = await prisma.user.count({ where: { ...where, isLocal: true } });
        const international = await prisma.user.count({ where: { ...where, isLocal: false } });
        const total = local + international;

        return {
            local,
            international,
            total,
            percentLocal: total > 0 ? Math.round((local / total) * 100) : 0,
            percentInternational: total > 0 ? Math.round((international / total) * 100) : 0
        };
    },

    // 5. Get all schools
    async get_schools() {
        const schools = await prisma.school.findMany({
            include: {
                _count: {
                    select: {
                        users: true,
                        departments: true
                    }
                },
                schoolHead: {
                    include: {
                        user: {
                            select: {
                                firstName: true,
                                lastName: true
                            }
                        }
                    }
                }
            }
        });

        return schools.map(s => ({
            id: s.id,
            name: s.schoolName,
            description: s.description,
            employeeCount: s._count.users,
            departmentCount: s._count.departments,
            schoolHead: s.schoolHead ? `${s.schoolHead.user.firstName} ${s.schoolHead.user.lastName}` : null
        }));
    },

    // 6. Get school by name
    async get_school_by_name(params) {
        const school = await prisma.school.findFirst({
            where: {
                schoolName: {
                    contains: params.name,
                    mode: 'insensitive'
                }
            },
            include: {
                _count: {
                    select: {
                        users: true,
                        departments: true
                    }
                }
            }
        });

        if (!school) return { error: `School matching "${params.name}" not found` };

        return {
            id: school.id,
            name: school.schoolName,
            employeeCount: school._count.users,
            departmentCount: school._count.departments
        };
    },

    // 7. Get departments
    async get_departments(params = {}) {
        const where = {};
        if (params.schoolId) where.schoolId = params.schoolId;

        const departments = await prisma.department.findMany({
            where,
            include: {
                school: { select: { schoolName: true } },
                _count: { select: { users: true } }
            }
        });

        return departments.map(d => ({
            id: d.id,
            name: d.departmentName,
            schoolName: d.school.schoolName,
            employeeCount: d._count.users
        }));
    },

    // 8. Get department by name
    async get_department_by_name(params) {
        const department = await prisma.department.findFirst({
            where: {
                departmentName: {
                    contains: params.name,
                    mode: 'insensitive'
                }
            },
            include: {
                school: { select: { schoolName: true } },
                _count: { select: { users: true } }
            }
        });

        if (!department) return { error: `Department matching "${params.name}" not found` };

        return {
            id: department.id,
            name: department.departmentName,
            schoolName: department.school.schoolName,
            employeeCount: department._count.users
        };
    },

    // 9. Search employees - IMPROVED VERSION
    async search_employees(params) {
        const query = params.query?.trim() || '';
        console.log(`🔍 Searching for employee: "${query}"`);

        if (!query) {
            return [];
        }

        // Split the query into first and last name if possible
        const nameParts = query.split(' ');
        let whereClause = {};

        if (nameParts.length === 1) {
            // Single word search - search in both first and last name
            whereClause = {
                OR: [
                    { firstName: { contains: query, mode: 'insensitive' } },
                    { lastName: { contains: query, mode: 'insensitive' } },
                    { email: { contains: query, mode: 'insensitive' } }
                ]
            };
        } else if (nameParts.length >= 2) {
            // Multi-word search - try to match first + last name combination
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ');

            whereClause = {
                OR: [
                    // Exact first + last match
                    {
                        AND: [
                            { firstName: { contains: firstName, mode: 'insensitive' } },
                            { lastName: { contains: lastName, mode: 'insensitive' } }
                        ]
                    },
                    // First name only match
                    { firstName: { contains: query, mode: 'insensitive' } },
                    // Last name only match
                    { lastName: { contains: query, mode: 'insensitive' } },
                    // Full name in either field
                    { firstName: { contains: query, mode: 'insensitive' } },
                    { lastName: { contains: query, mode: 'insensitive' } },
                    // Email match
                    { email: { contains: query, mode: 'insensitive' } }
                ]
            };
        }

        const employees = await prisma.user.findMany({
            where: whereClause,
            include: {
                department: { select: { departmentName: true } },
                school: { select: { schoolName: true } }
            },
            take: 20
        });

        console.log(`📊 Found ${employees.length} employees matching "${query}"`);

        return employees.map(e => ({
            name: `${e.firstName} ${e.lastName}`,
            email: e.email,
            type: e.employeeType,
            position: e.academicPosition || e.administrativePosition,
            status: e.status,
            department: e.department?.departmentName,
            school: e.school?.schoolName,
            phone: e.phoneLocal || e.phoneForeign,
            city: e.city || e.cityForeign,
            country: e.country || e.countryForeign,
            isLocal: e.isLocal
        }));
    },

    // 10. Get salary statistics
    async get_salary_stats(params = {}) {
        const where = {};
        if (params.schoolId) where.schoolId = params.schoolId;
        if (params.departmentId) where.departmentId = params.departmentId;
        if (params.employeeType) where.employeeType = params.employeeType;

        const employees = await prisma.user.findMany({
            where: {
                ...where,
                baseSalary: { not: null }
            },
            select: { baseSalary: true }
        });

        if (employees.length === 0) {
            return { error: "No salary data available" };
        }

        const salaries = employees.map(e => parseFloat(e.baseSalary.toString()));
        const total = salaries.reduce((a, b) => a + b, 0);
        const average = total / salaries.length;
        const max = Math.max(...salaries);
        const min = Math.min(...salaries);

        return {
            average: Math.round(average),
            max,
            min,
            count: employees.length
        };
    },

    // 11. Get employees by status
    async get_employees_by_status(params) {
        const where = { status: params.status };
        if (params.schoolId) where.schoolId = params.schoolId;

        const employees = await prisma.user.findMany({
            where,
            include: {
                school: { select: { schoolName: true } },
                department: { select: { departmentName: true } }
            }
        });

        return employees.map(e => ({
            name: `${e.firstName} ${e.lastName}`,
            position: e.academicPosition || e.administrativePosition,
            school: e.school?.schoolName,
            department: e.department?.departmentName
        }));
    },

    // 12. Get employees by department
    async get_employees_by_department(params) {
        // First find the department
        const department = await prisma.department.findFirst({
            where: {
                departmentName: {
                    contains: params.name,
                    mode: 'insensitive'
                }
            }
        });

        if (!department) {
            return {
                error: `Department "${params.name}" not found`,
                count: 0
            };
        }

        // Get employees in this department
        const employees = await prisma.user.findMany({
            where: {
                departmentId: department.id
            },
            include: {
                school: {
                    select: {
                        schoolName: true
                    }
                }
            },
            orderBy: {
                lastName: 'asc'
            }
        });

        // Format the response
        return {
            departmentName: department.departmentName,
            totalEmployees: employees.length,
            employees: employees.map(e => ({
                name: `${e.firstName} ${e.lastName}`,
                email: e.email,
                type: e.employeeType,
                position: e.academicPosition || e.administrativePosition,
                status: e.status,
                school: e.school?.schoolName
            }))
        };
    },

    // 13. Get employee by name with full details (for admin)
    async get_employee_by_name(params) {
        const { name } = params;

        const employee = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        AND: [
                            { firstName: { contains: name.split(' ')[0], mode: 'insensitive' } },
                            { lastName: { contains: name.split(' ')[1] || '', mode: 'insensitive' } }
                        ]
                    },
                    { firstName: { contains: name, mode: 'insensitive' } },
                    { lastName: { contains: name, mode: 'insensitive' } }
                ]
            },
            include: {
                department: { select: { departmentName: true } },
                school: { select: { schoolName: true } }
            }
        });

        if (!employee) return null;

        return {
            name: `${employee.firstName} ${employee.lastName}`,
            email: employee.email,
            type: employee.employeeType,
            position: employee.academicPosition || employee.administrativePosition,
            status: employee.status,
            department: employee.department?.departmentName,
            school: employee.school?.schoolName,
            baseSalary: employee.baseSalary ? parseFloat(employee.baseSalary.toString()) : null,
            isLocal: employee.isLocal,
            phone: employee.phoneLocal || employee.phoneForeign,
            city: employee.city || employee.cityForeign,
            country: employee.country || employee.countryForeign
        };
    },

    // 14. Get school by name
    async get_school_by_name(params) {
        const school = await prisma.school.findFirst({
            where: {
                schoolName: {
                    contains: params.name,
                    mode: 'insensitive'
                }
            },
            include: {
                schoolHead: {
                    include: {
                        user: {
                            select: {
                                firstName: true,
                                lastName: true,
                                email: true
                            }
                        }
                    }
                },
                _count: {
                    select: { departments: true }
                }
            }
        });

        if (!school)
            return { error: `School matching "${params.name}" not found` };

        return {
            id: school.id,
            name: school.schoolName,

            head: school.schoolHead
                ? {
                    fullName: `${school.schoolHead.user.firstName} ${school.schoolHead.user.lastName}`,
                    email: school.schoolHead.user.email
                }
                : "Not assigned",

            departmentCount: school._count.departments
        };
    }
};

// Execute tool
async function executeTool(toolName, params = {}) {
    console.log(`🔧 ${toolName}(${JSON.stringify(params)})`);

    if (!tools[toolName]) {
        throw new Error(`Unknown tool: ${toolName}`);
    }

    try {
        const result = await tools[toolName](params);
        console.log(`✅ Result: ${JSON.stringify(result).substring(0, 150)}...`);
        return result;
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        throw error;
    }
}



module.exports = { executeTool };